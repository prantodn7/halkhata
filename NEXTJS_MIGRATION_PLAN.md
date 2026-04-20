# Next.js Migration Plan

## 1. Router choice
- Use Next.js App Router.
- Keep JavaScript/JSX UI files.
- Convert the small API route handlers to `.js` so the project remains JavaScript-first.

## 2. Recommended folder structure
- `app/layout.jsx`: root HTML, metadata, global CSS, and app providers.
- `app/(marketing)/layout.jsx`: shared navbar/footer shell.
- `app/(marketing)/*/page.jsx`: public marketing and business routes.
- `app/(auth)/*/page.jsx`: auth screens without marketing shell.
- `app/admin/page.jsx`: client-rendered admin dashboard.
- `app/api/**/route.js`: server route handlers for download settings.
- `src/Component/**`: existing UI components kept in place to minimize churn.
- `src/components/**`: Next provider/layout wrappers.
- `compat/react-router-dom.js`: temporary compatibility shim for old navigation imports.

## 3. Route mapping
| Old route | New Next route |
| --- | --- |
| `/` | `app/(marketing)/page.jsx` |
| `/features` | `app/(marketing)/features/page.jsx` |
| `/reffer` | `app/(marketing)/reffer/page.jsx` |
| `/contact` | `app/(marketing)/contact/page.jsx` |
| `/extraincome` | `app/(marketing)/extraincome/page.jsx` |
| `/growthpartner` | `app/(marketing)/growthpartner/page.jsx` |
| `/pharmacy` | `app/(marketing)/pharmacy/page.jsx` |
| `/grocery` | `app/(marketing)/grocery/page.jsx` |
| `/electronics` | `app/(marketing)/electronics/page.jsx` |
| `/fashion` | `app/(marketing)/fashion/page.jsx` |
| `/hardware` | `app/(marketing)/hardware/page.jsx` |
| `/dealer` | `app/(marketing)/dealer/page.jsx` |
| `/login` | `app/(auth)/login/page.jsx` |
| `/registration` | `app/(auth)/registration/page.jsx` |
| `/admin` | `app/admin/page.jsx` |
| `/support` | redirect to `/contact` |
| `/forgot-password` | redirect to `/contact` |

## 4. Implementation changes
- Add the missing `/reffer` App Router page.
- Sync `package-lock.json` with `package.json` and install Next dependencies.
- Configure ESLint for the mixed JS/TS App Router codebase.
- Fix migration-blocking lint issues without changing UI behavior:
  - duplicate key in `Admin.jsx`;
  - unused values in `DownloadsManager.jsx`;
  - synchronous reduced-motion state update in `useOnScreen.js`.
- Preserve the existing Supabase client, contexts, routes, API integrations, images, Tailwind classes, and browser interactions.
- Remove obsolete Vite files after build parity:
  - `index.html`;
  - `vite.config.js`;
  - `src/main.jsx`;
  - `src/App.jsx`;
  - `src/App.css`;
  - sample Vite/React assets that are no longer imported.
- Keep `src/Component/Route/Router.jsx` and `Main.jsx` only if needed for historical reference during the pass; otherwise remove them with the Vite cleanup once route parity is verified.

## 5. Data, auth, and environment plan
- Keep download APIs under `/api/download-url` and `/api/downloads`.
- Keep Supabase env names:
  - `NEXT_PUBLIC_SUPABASE_URL`;
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Keep client-side Supabase login, registration, navbar auth subscription, logout, and admin metadata checks for parity.
- Do not add middleware protection in this pass because the current auth flow is not cookie-backed.
- Keep public feature JSON files in `public/` and fetch them by root-relative URL.

## 6. SEO, loading, error, and assets
- Keep root metadata in `app/layout.jsx`.
- Keep global `app/loading.jsx` and `app/not-found.jsx`.
- Keep `/support` and `/forgot-password` redirects until product-specific pages are defined.
- Preserve imported images from `src/assets` and JSON files from `public`.
- Avoid `next/image` conversion in this pass to minimize visual changes.

## 7. Verification plan
- Run `npm install`.
- Run `npm run lint`.
- Run `npm run build`.
- Verify route parity for every old React Router path, including `/reffer`.
- Verify navbar/footer layout, mobile menu, active link styling, language switching, feature JSON loading, download links, redirects, login, registration, admin guard, admin RPC, and download update flows.
- Confirm API fallbacks behave when Supabase env vars are missing.

## 8. Step-by-step implementation order
1. Update `MIGRATION_AUDIT.md`.
2. Update `NEXTJS_MIGRATION_PLAN.md`.
3. Add missing route parity.
4. Sync dependencies with `npm install`.
5. Fix lint/build blockers.
6. Remove Vite-only artifacts and stale sample files.
7. Run lint/build and address migration-specific failures.
8. Create `MIGRATION_SUMMARY.md` with changed files, route mapping, client components, SSR limitations, manual follow-ups, test notes, and known risks.

## 9. Assumptions
- App Router is the production target.
- Current UI and behavior should be preserved over SSR optimization.
- Existing Bangla string encoding is not repaired in this migration unless it breaks build/runtime behavior.
- Client-side admin protection is accepted for parity and documented as a follow-up production hardening task.
