# Halkhata Next.js Migration Audit

## 1. Current stack summary at audit time
- Framework state: partially migrated Next.js App Router application with legacy Vite files still present.
- React: 19.x.
- Next.js target: `next` 16.x in `package.json`, but the current installed `node_modules` did not contain `next` before dependency sync.
- Language: JavaScript/JSX UI, with TypeScript used only for `app/api/**/route.ts` at audit time.
- Routing: Next App Router under `app/`; legacy `src/Component/Route/Router.jsx` still documents old React Router routes and uses a local compatibility shim.
- State management: React Context (`LanguageContext`, `SettingsContext`, `DownloadsContext`).
- Styling: Tailwind CSS 4 via PostCSS plus global CSS and component-local `<style>` blocks.
- API/auth: Supabase JS client, Supabase auth in client components, Next route handlers for download settings.
- i18n: custom in-memory Bangla/English context.
- Testing: no test framework found.
- Linting: ESLint flat config; initial config was not TypeScript-aware for API route files.

## 2. Project structure
- `app/`: Next App Router routes, layouts, loading, not-found, and API route handlers.
- `app/(marketing)/`: public marketing pages with shared navbar/footer layout.
- `app/(auth)/`: login and registration pages.
- `app/api/download-url`, `app/api/downloads`: Supabase-backed API endpoints with fallbacks.
- `compat/react-router-dom.js`: temporary Next-backed shim for old `Link`, `NavLink`, `useNavigate`, and related imports.
- `src/Component/`: legacy feature, business, nav, home, admin, and route components.
- `src/components/`: Next-specific provider and layout wrappers.
- `src/context/`: language, settings, and downloads contexts.
- `src/config/supabaseClient.js`: browser Supabase client.
- `src/lib/downloads.js`: fallback download URLs and button keys.
- `src/assets/`: imported images.
- `public/`: static JSON feature data and legacy Vite asset.
- `supabase/`: SQL setup and migrations for download button tables/settings.

## 3. Route inventory
| Legacy route | Current/target Next route | Type | Notes |
| --- | --- | --- | --- |
| `/` | `app/(marketing)/page.jsx` | Static marketing, client-rendered | Home sections use context and animation hooks. |
| `/features` | `app/(marketing)/features/page.jsx` | Static marketing, client-rendered | Fetches `/Feature.json` or `/Featureban.json`. |
| `/reffer` | `app/(marketing)/reffer/page.jsx` | Static marketing, client-rendered | Missing from partial migration; must be added for parity. |
| `/contact` | `app/(marketing)/contact/page.jsx` | Static marketing, client-rendered | Uses `window.scrollTo` in effect. |
| `/extraincome` | `app/(marketing)/extraincome/page.jsx` | Static marketing, client-rendered | Uses imported assets and links. |
| `/growthpartner` | `app/(marketing)/growthpartner/page.jsx` | Static marketing, client-rendered | Linked in footer; FAQ state. |
| `/pharmacy` | `app/(marketing)/pharmacy/page.jsx` | Static marketing, client-rendered | Business page with scroll effect. |
| `/grocery` | `app/(marketing)/grocery/page.jsx` | Static marketing, client-rendered | Business page with scroll effect. |
| `/electronics` | `app/(marketing)/electronics/page.jsx` | Static marketing, client-rendered | Business page with scroll effect. |
| `/fashion` | `app/(marketing)/fashion/page.jsx` | Static marketing, client-rendered | Business page with scroll effect. |
| `/hardware` | `app/(marketing)/hardware/page.jsx` | Static marketing, client-rendered | Business page with scroll effect. |
| `/dealer` | `app/(marketing)/dealer/page.jsx` | Static marketing, client-rendered | Business page with support link. |
| `/login` | `app/(auth)/login/page.jsx` | Auth-only, client-rendered | Supabase password sign-in. |
| `/registration` | `app/(auth)/registration/page.jsx` | Auth-only, client-rendered | Supabase sign-up. |
| `/admin` | `app/admin/page.jsx` | Protected admin, client-rendered | Client session and metadata guard. |
| `/support` | `app/support/page.jsx` | Redirect | Redirects to `/contact`. |
| `/forgot-password` | `app/forgot-password/page.jsx` | Redirect | Redirects to `/contact`. |

No dynamic UI pages were found. Dynamic API route: `/api/downloads/[button_key]`.

## 4. Page-by-page rendering strategy
- Root layout, marketing layout, redirects, loading, and not-found can remain Server Components unless importing client-only wrappers.
- Public marketing pages should remain Client Components for this migration because they consume client contexts, animation hooks, browser-only effects, and mutable language state.
- Auth pages must remain Client Components because they call Supabase auth directly and manage forms locally.
- Admin page must remain a Client Component because authorization, session lookup, dashboard state, and admin interactions currently run through the browser Supabase client.
- API routes remain server route handlers and should not import browser-only modules.

## 5. Component architecture notes
- `MarketingShell` replaces old `Main`/`Outlet` layout behavior with shared `Navber` and `Footer`.
- `Navber` owns auth subscription, admin visibility, mobile menu state, scroll state, logout, and download URL display.
- Home composes `Cover`, `Grow`, `Compare`, `Busniess`, and `Downloadbanner`.
- Business pages are mostly presentational but use `useEffect` for scrolling.
- `AnimatedWrapper` and `useOnScreen` require browser APIs through effects.
- `Router.jsx`, `Main.jsx`, `src/main.jsx`, and `App.jsx` are obsolete after App Router parity is complete.

## 6. State management notes
- `LanguageContext` is in-memory only and defaults to Bangla.
- `SettingsContext` fetches the header download button through `/api/downloads/header_download`.
- `DownloadsContext` currently returns fallback download data and exposes compatibility helpers.
- No Redux, Zustand, MobX, Recoil, React Query, or RTK Query was found.
- Admin and navbar auth state are local component state derived from Supabase sessions.

## 7. Styling migration notes
- Tailwind utility classes are pervasive and should be preserved.
- `app/globals.css` mirrors `src/index.css`; the Vite CSS file becomes obsolete after removing `src/main.jsx`.
- Component-local `<style>` blocks are used for page animations and should be preserved for behavior parity.
- Use `next/image` only as a later optimization; current imported image `src` usage is lower-risk for parity.

## 8. API/data fetching notes
- Browser fetches:
  - `/api/downloads/header_download` from `SettingsContext`.
  - `/Feature.json` and `/Featureban.json` from the features page.
  - `/api/download-url` and `/api/downloads` from admin download tools.
- Supabase direct browser calls:
  - login/sign-up/auth session/logout.
  - admin RPC `get_all_users`.
- Server route handlers use `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`; this preserves existing anon-key behavior but is not a privileged server admin integration.
- API route handlers include fallback data when Supabase is not configured.

## 9. Auth migration notes
- Current admin protection is client-side only: unauthenticated users are redirected to `/login`, non-admin users see access denied.
- Admin status is checked from `user_metadata` or `app_metadata` role/isAdmin flags.
- No cookie-backed middleware session is present, so Next middleware protection would require a broader Supabase auth refactor.
- For this migration, keep client-side protection for behavior parity and document it as a production risk.

## 10. Migration risks
- Stale `package-lock.json` and installed modules did not include `next`.
- ESLint initially failed to parse `.ts` API route handlers.
- Browser-only APIs include `window`, `document`, `navigator.clipboard`, `window.open`, `window.matchMedia`, and `IntersectionObserver`.
- `react-router-dom` call sites are still present through `compat/react-router-dom.js`; the shim is temporary technical debt.
- `/reffer` was missing from the Next route tree.
- Client-side admin protection does not prevent server delivery of the admin bundle.
- Supabase env vars must be `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Feature JSON fetch paths must stay rooted at `/`.
- Imported asset paths are case-sensitive on Linux deployments.
- Existing Bangla strings in some files appear mojibake-encoded and should not be altered as part of routing migration without a separate content review.

## 11. Recommended migration strategy
- Finish the current App Router migration instead of restarting.
- Keep JavaScript/JSX UI and current Supabase/auth/state patterns.
- Add route parity, dependency sync, lint/build fixes, and remove Vite leftovers.
- Keep the router compatibility shim for this pass, then optionally replace it with native Next navigation in a later refactor.
- Keep marketing pages client-rendered initially; server-component optimization can happen later route by route.

## 12. Estimated impact areas
- Dependency graph and lockfile.
- App Router route inventory and missing `/reffer` page.
- ESLint configuration for mixed JS/TS code.
- Legacy Vite entry/config files.
- Admin/download lint blockers.
- Migration documentation and final summary.

## 13. Post-migration verification checklist
- `npm install`, `npm run lint`, and `npm run build`.
- Public routes: `/`, `/features`, `/reffer`, `/contact`, `/extraincome`, `/growthpartner`.
- Business routes: `/pharmacy`, `/grocery`, `/electronics`, `/fashion`, `/hardware`, `/dealer`.
- Redirects: `/support`, `/forgot-password`.
- Auth routes: `/login`, `/registration`.
- Admin route: session redirect, access denied state, dashboard, users RPC, download settings.
- Navbar: active links, mobile menu, login/logout, admin link visibility, download URL.
- Footer: language switching and links.
- API fallbacks when Supabase env vars are absent.
- Feature JSON loading in both languages.
- Image and asset rendering on case-sensitive deployment.
