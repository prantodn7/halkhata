# Next.js Migration Plan

## 1. Router choice
- Use Next.js App Router.
- Keep JavaScript/JSX instead of converting to TypeScript.

## 2. Recommended folder structure
- `app/` for routes and layouts
- `app/(marketing)/...` for public marketing routes
- `app/(auth)/...` for auth routes
- `src/components/` for provider/layout wrappers
- `compat/react-router-dom.js` for a thin Next-based compatibility layer
- Keep existing `src/Component/...`, `src/context/...`, and `src/config/...` to minimize churn

## 3. Route mapping
- `/` -> `app/(marketing)/page.jsx`
- `/features` -> `app/(marketing)/features/page.jsx`
- `/extraincome` -> `app/(marketing)/extraincome/page.jsx`
- `/contact` -> `app/(marketing)/contact/page.jsx`
- `/login` -> `app/(auth)/login/page.jsx`
- `/registration` -> `app/(auth)/registration/page.jsx`
- `/debug` -> `app/debug/page.jsx`
- `/pharmacy` -> `app/(marketing)/pharmacy/page.jsx`
- `/dealer` -> `app/(marketing)/dealer/page.jsx`
- `/electronics` -> `app/(marketing)/electronics/page.jsx`
- `/fashion` -> `app/(marketing)/fashion/page.jsx`
- `/hardware` -> `app/(marketing)/hardware/page.jsx`
- `/grocery` -> `app/(marketing)/grocery/page.jsx`
- `/growthpartner` -> `app/(marketing)/growthpartner/page.jsx`
- `/admin` -> `app/admin/page.jsx`
- `/support` -> redirect to `/contact`
- `/forgot-password` -> redirect to `/contact`

## 4. Layout migration
- Root layout imports global CSS and wraps children with app providers.
- Public routes share a marketing layout with navbar and footer.
- Auth routes remain standalone.
- Admin remains standalone.

## 5. Shared component migration
- Keep existing shared components intact where possible.
- Add a client-side marketing shell wrapper instead of rewriting layout logic.
- Use a router-compat module to preserve `Link`, `NavLink`, `useNavigate`, and `useLocation` call sites.

## 6. State management compatibility plan
- Keep `LanguageContext` and `SettingsContext`.
- Move provider mounting to the root Next layout via a client provider wrapper.

## 7. Data fetching migration plan
- Keep Supabase settings fetch in `SettingsContext`.
- Keep admin RPC and settings upsert in the client admin page.
- Keep features data in `public/` and fetch it from client pages.

## 8. Auth migration plan
- Preserve client-side Supabase auth flow.
- Preserve client-side admin route protection.
- Keep navbar auth subscription.

## 9. Environment variable migration plan
- Rename:
  - `VITE_SUPABASE_URL` -> `NEXT_PUBLIC_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY` -> `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 10. Static assets/public plan
- Keep existing imported images under `src/assets`.
- Keep feature JSON under `public/`.
- Remove Vite/Netlify-specific SPA fallback files.

## 11. SEO/meta plan
- Add default metadata in the root layout.
- Add not-found page.
- Keep page-level metadata minimal to avoid route wrapper churn.

## 12. Error/loading/not-found handling plan
- Add root `loading.jsx`.
- Add `not-found.jsx`.
- Preserve existing component-level loading UI for auth/admin/settings.

## 13. Testing/verification plan
- Run `npm install`
- Run `npm run build`
- Run `npm run lint`
- Verify public routes, auth routes, admin route, redirects, downloads, and Supabase flows

## 14. Step-by-step implementation order
1. Update dependencies and config for Next + Tailwind PostCSS.
2. Create root layout, route groups, loading, and not-found.
3. Add provider and marketing shell wrappers.
4. Add route entry files for every current page.
5. Add router compatibility module and swap active imports.
6. Update Supabase env usage.
7. Remove obsolete Vite/React Router dependencies.
8. Run install/build/lint and fix migration regressions.
9. Write migration summary with remaining follow-ups and risks.
