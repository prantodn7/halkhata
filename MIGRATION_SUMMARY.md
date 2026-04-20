# Next.js Migration Summary

## What changed
- Completed the existing partial migration as a Next.js App Router app.
- Refreshed `MIGRATION_AUDIT.md` and `NEXTJS_MIGRATION_PLAN.md` with the repo-aware migration details.
- Added missing App Router parity for `/reffer`.
- Synced dependencies and lockfile so `next` is installed and `npm run build` works.
- Converted the download API route handlers from `.ts` to `.js` to match the JavaScript-first project and remove lint parser friction.
- Removed obsolete Vite entry/config/sample files and old React Router entry files.
- Updated `README.md` with Next.js commands, env vars, and route inventory.
- Fixed migration-blocking lint issues in admin/download/animation code without changing the intended UI behavior.

## Old route to new route mapping
| Old route | New App Router route |
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
| `/support` | redirects to `/contact` |
| `/forgot-password` | redirects to `/contact` |

Removed legacy-only/debug artifacts:
- `src/main.jsx`, `src/App.jsx`, `src/App.css`, `src/index.css`
- `vite.config.js`, `index.html`, `public/vite.svg`, `src/assets/react.svg`
- `src/Component/Route/Router.jsx`, `Main.jsx`, `Debug.jsx`

## Client components and SSR limitations
- Client components: all marketing/auth/admin page wrappers, `src/components/AppProviders.jsx`, `src/components/layout/MarketingShell.jsx`, and `compat/react-router-dom.js`.
- The public pages are currently prerendered by Next but hydrate into client components because they use React context, language switching, browser effects, and animation hooks.
- Auth and admin flows remain client-side Supabase flows.
- Admin protection remains client-side metadata/session checking for parity; no middleware protection was added.
- API routes remain server route handlers:
  - `GET /api/downloads`
  - `GET/PUT /api/downloads/[button_key]`
  - `GET/PUT /api/download-url`

## Libraries replaced or removed
- Removed Vite runtime/build path from the project.
- Removed direct React Router runtime dependency usage from app entry; remaining old navigation call sites use `compat/react-router-dom.js`, backed by `next/link` and `next/navigation`.
- `typescript` was added by Next build tooling because `tsconfig.json` exists; UI files remain JavaScript/JSX.

## Verification notes
- `npm install`: passed.
- `npm run lint`: passed.
- `npm run build`: passed with Next.js `16.2.4`.
- Build output includes all expected pages, `/reffer`, redirects, and dynamic API routes.
- No test script or test framework is configured, so automated unit/integration tests were not run.

## Remaining manual follow-ups
- Configure valid production env vars:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Manually test Supabase login, registration, admin metadata guard, `get_all_users` RPC, and download update flows against the real backend.
- Consider replacing the temporary router compatibility shim with direct Next navigation imports over time.
- Consider moving admin protection to cookie-backed Supabase middleware in a future hardening pass.
- Review existing Bangla mojibake text in some legacy components as a separate content cleanup.
- Review `npm audit` findings; npm reported 4 vulnerabilities after install: `ajv`, `brace-expansion`, `flatted`, and `minimatch`.

## Known risks
- Client-side admin protection preserves behavior but is not strong server-side authorization.
- Supabase anon key is used by both client and API route handlers; route handlers are not using a service-role backend key.
- Browser-only APIs are contained in client components/effects, but manual browser QA is still needed.
- Case-sensitive asset paths should be tested on the production host.
