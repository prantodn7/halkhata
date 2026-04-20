# Halkhata Performance Audit

## 1. Biggest bottlenecks ranked by impact
1. **Unoptimized local images**: build output includes `grocery.png` at ~1.7 MB and `photo.png` at ~815 KB, plus many 100-180 KB images. These are rendered with plain `<img>`, so the browser receives the original asset instead of Next image variants.
2. **Large client-rendered page trees**: every marketing, auth, and admin page wrapper is marked `'use client'`. This preserves migration parity, but it hydrates full page trees that are mostly static content.
3. **Root provider scope is too broad**: `SettingsProvider` is mounted for every route, including login, registration, and admin. It runs a client fetch to `/api/downloads/header_download` on mount even where no download button is shown.
4. **Client-side feature JSON fetch**: `/features` renders empty feature data first, then fetches `/Feature.json` or `/Featureban.json` in `useEffect`, causing a waterfall and extra render.
5. **Dead and heavy imports**: `Home.jsx` imports `Feedback` even though it is commented out; some icon imports are unused. `react-icons` itself is acceptable, but unnecessary icon imports still add avoidable client work.

## 2. Pages/components causing most slowness
- `/`: largest HTML (~106 KB) plus the above-the-fold `photo.png` (~815 KB) and business-card images.
- `/grocery`: pulls the largest media file (`src/assets/Busniess/grocery.png`, ~1.7 MB).
- `/features`: extra client fetch for ~11 KB of JSON after hydration.
- `MarketingShell` and `Navber`: shared by all marketing pages and hydrate auth/session, scroll, mobile menu, and settings behavior.
- `AppProviders`: currently mounts settings/download contexts globally.
- `/admin`: client-only auth/session check and potentially large user table rendering when data is returned.

## 3. Bundle-size suspects
- `.next/static/chunks` includes several client chunks over 100 KB: ~222 KB, ~209 KB, ~146 KB, ~110 KB.
- `react-icons` is used widely across pages. Imports are per icon, but page-level client bundles still include many SVG components.
- Static media dominates transfer cost more than JavaScript: top emitted media assets are ~1.7 MB, ~815 KB, ~178 KB, ~177 KB, ~172 KB, and ~158 KB.
- Dead `Feedback` import in `Home.jsx` can pull unused feedback UI/icons into the home client graph.

## 4. Hydration suspects
- All App Router page wrappers under `app/(marketing)`, `app/(auth)`, and `app/admin` are client components.
- `MarketingShell` is a client component because it contains `Navber` and `Footer`.
- `Navber` subscribes to Supabase auth and scroll events on every marketing page.
- Root `AppProviders` wraps the entire application in client context providers.
- Scroll animation wrappers and `useOnScreen` create many IntersectionObserver-driven client islands across static content.

## 5. Data-fetching inefficiencies
- `SettingsContext` fetches `/api/downloads/header_download` from every route because it is mounted at root.
- The settings fetch uses `cache: 'no-store'`, so it is intentionally uncached and cannot reuse browser cache.
- `Features.jsx` fetches static JSON on the client after first render.
- Admin download tools fetch only when their components mount, which is acceptable.
- API routes each create a Supabase client at module scope and query a single table/RPC; no obvious serial backend waterfall was found.

## 6. Rendering inefficiencies
- Static marketing content is mostly client-rendered because language switching and settings are client contexts.
- Admin stores user list and filtered list in client memory; very large user counts could make the table slow because there is no pagination/virtualization.
- `Navber` has several effects and auth-state updates in a shared layout.
- Scroll-to-top effects are used in many pages; harmless individually, but they keep pages client-only.

## 7. Quick wins
- Move `SettingsProvider` out of root and into the marketing layout only.
- Remove `DownloadsProvider` from root; current downloads context already has safe fallback behavior and the provider returns static fallback values.
- Import features JSON statically instead of fetching it in `useEffect`.
- Remove unused `Feedback` and unused icon imports.
- Convert large imported local `<img>` usages to `next/image` with `sizes`, `priority` only for true above-the-fold images, and lazy loading elsewhere.

## 8. Medium-effort improvements
- Split `Navber` into a mostly static server shell plus a small auth/menu client island.
- Convert marketing pages to server components with small client islands for language switching and download buttons.
- Add pagination or virtualization to the admin users table if production user counts are high.
- Add per-route `loading.jsx` only where a route has real delayed client/admin data.

## 9. Higher-risk improvements
- Replace the custom client language context with route-level or cookie-backed i18n to unlock server rendering.
- Move Supabase auth to cookie-backed server helpers and middleware so admin authorization can happen before sending the admin bundle.
- Replace broad `react-icons` usage with a local icon subset or compiled inline icons.
- Re-encode/compress source images with explicit responsive dimensions.

## 10. Recommended implementation order
1. Scope providers to stop unnecessary settings fetches.
2. Replace feature JSON client fetch with static data.
3. Remove dead imports.
4. Convert high-impact local images to `next/image`.
5. Run lint/build and verify routes.
6. Leave server-component decomposition and admin virtualization for a later, higher-risk pass.

## Measurements captured
- `npm run build`: passed before optimization.
- Top emitted media: `grocery.png` ~1.7 MB, `photo.png` ~815 KB.
- Top chunks: ~222 KB, ~209 KB, ~146 KB, ~110 KB.
- Dev-server request samples on `localhost:3000`: `/` ~229 ms, `/features` ~667 ms, `/extraincome` ~139 ms, `/admin` ~75 ms, `/login` ~72 ms. These are not production Lighthouse metrics, but they helped identify `/features` as a client-fetch outlier.
