# Migration Summary

## What changed
- Migrated the app from Vite + React Router to Next.js 16 App Router.
- Added `app/` route structure with shared marketing layout, auth routes, admin route, loading UI, and not-found page.
- Preserved existing UI and business logic by routing the new Next pages into the existing component tree.
- Added client-side provider and layout wrappers instead of rewriting contexts and shared UI.
- Replaced Vite/Tailwind integration with Next + PostCSS Tailwind 4 setup.
- Switched Supabase env usage from `VITE_*` to `NEXT_PUBLIC_*`.
- Removed obsolete Vite entry files and build-tool dependencies.

## Old route -> new route mapping
| Old route | New Next route |
| --- | --- |
| `/` | `app/(marketing)/page.jsx` |
| `/features` | `app/(marketing)/features/page.jsx` |
| `/extraincome` | `app/(marketing)/extraincome/page.jsx` |
| `/contact` | `app/(marketing)/contact/page.jsx` |
| `/login` | `app/(auth)/login/page.jsx` |
| `/registration` | `app/(auth)/registration/page.jsx` |
| `/debug` | `app/debug/page.jsx` |
| `/pharmacy` | `app/(marketing)/pharmacy/page.jsx` |
| `/dealer` | `app/(marketing)/dealer/page.jsx` |
| `/electronics` | `app/(marketing)/electronics/page.jsx` |
| `/fashion` | `app/(marketing)/fashion/page.jsx` |
| `/hardware` | `app/(marketing)/hardware/page.jsx` |
| `/grocery` | `app/(marketing)/grocery/page.jsx` |
| `/growthpartner` | `app/(marketing)/growthpartner/page.jsx` |
| `/admin` | `app/admin/page.jsx` |
| `/support` | Redirects to `/contact` |
| `/forgot-password` | Redirects to `/contact` |

## Components marked as client components
- `app/(marketing)/page.jsx`
- `app/(marketing)/features/page.jsx`
- `app/(marketing)/extraincome/page.jsx`
- `app/(marketing)/contact/page.jsx`
- `app/(marketing)/pharmacy/page.jsx`
- `app/(marketing)/dealer/page.jsx`
- `app/(marketing)/electronics/page.jsx`
- `app/(marketing)/fashion/page.jsx`
- `app/(marketing)/hardware/page.jsx`
- `app/(marketing)/grocery/page.jsx`
- `app/(marketing)/growthpartner/page.jsx`
- `app/(auth)/login/page.jsx`
- `app/(auth)/registration/page.jsx`
- `app/admin/page.jsx`
- `app/debug/page.jsx`
- `src/components/AppProviders.jsx`
- `src/components/layout/MarketingShell.jsx`
- `compat/react-router-dom.js`

## Libraries removed or replaced
- Removed: `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `react-router-dom`, `i18next`, `react-i18next`, `eslint-plugin-react-refresh`
- Added: `next`, `@tailwindcss/postcss`
- Replaced React Router runtime usage with `compat/react-router-dom.js` backed by Next navigation APIs

## SSR limitations and client-boundary notes
- Public pages are rendered through client route wrappers because the existing component tree depends on contexts, browser APIs, animation hooks, and client-side Supabase state.
- `/admin` still uses the original client-side Supabase session/metadata guard for minimal behavior change.
- Navbar auth state remains client-subscribed via `supabase.auth.onAuthStateChange`.

## Remaining manual follow-ups
- Review whether the public `/debug` route should be removed or locked down before production, because it can elevate the current user to admin metadata.
- Decide whether `/support` and `/forgot-password` should become real pages instead of redirects.
- Add automated tests if this app will continue to evolve.
- Review and resolve the `npm audit` vulnerabilities if they matter for your deployment baseline.

## Testing notes
- `npm run lint` passes
- `npm run build` passes
- Verified generated Next routes include all migrated pages plus redirects for `/support` and `/forgot-password`

## Known risks or unresolved issues
- Auth protection for `/admin` is still client-side, matching the original app but weaker than middleware/server enforcement.
- The app still contains several browser-only behaviors by design; they are safe now because those routes/components are mounted under client boundaries.
- Some text content in the existing source appears to have encoding artifacts from the original repo; this migration preserved that content rather than rewriting copy.
