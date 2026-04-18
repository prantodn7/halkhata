# Halkhata Next.js Migration Audit

## 1. Current stack summary
- Framework: React 19.2
- Build tool: Vite (`rolldown-vite`)
- Language: JavaScript / JSX
- Router: React Router DOM 7 with `createBrowserRouter`
- State management: React Context (`LanguageContext`, `SettingsContext`)
- Styling: Tailwind CSS 4 via Vite plugin, global CSS, inline page-level `<style>` blocks
- API/auth: Supabase JS client in the browser
- i18n: custom context toggle, not `i18next` in practice
- Testing: none
- Linting: ESLint only

## 2. Route inventory
| Current route | Type | Notes |
| --- | --- | --- |
| `/` | Static marketing page | Shared navbar/footer layout |
| `/features` | Static marketing page | Loads feature JSON based on language |
| `/extraincome` | Static marketing page | Client-only content |
| `/contact` | Static marketing page | Client form UI only |
| `/login` | Auth page | Supabase password sign-in |
| `/registration` | Auth page | Supabase sign-up |
| `/debug` | Utility/debug page | Allows metadata update for admin testing |
| `/pharmacy` | Static business page | Browser scroll effect |
| `/dealer` | Static business page | Browser scroll effect |
| `/electronics` | Static business page | Browser scroll effect |
| `/fashion` | Static business page | Browser scroll effect |
| `/hardware` | Static business page | Browser scroll effect |
| `/grocery` | Static business page | Browser scroll effect |
| `/growthpartner` | Static marketing page | FAQ state + scroll effect |
| `/admin` | Protected client page | Supabase session + metadata guard |

Additional linked but missing routes:
- `/support`
- `/forgot-password`

## 3. Page-by-page migration mapping
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

## 4. Component architecture notes
- Shared public shell is currently `Main` with `Navber`, `Outlet`, `Footer`.
- `Home` composes `Cover`, `Grow`, `Compare`, `Busniess`, `Downloadbanner`.
- `Navber` owns auth-state subscription, admin link visibility, mobile menu state, and browser-only effects.
- `Footer` owns language switching.
- Business pages and marketing pages are mostly presentational but many call `window.scrollTo()` in `useEffect`.
- `AnimatedWrapper` and `useOnScreen` depend on Intersection Observer and reduced-motion media queries.

## 5. State management notes
- `LanguageContext` stores `bangla` vs `english` in memory only.
- `SettingsContext` fetches `download_url` from Supabase `settings` and exposes `refetch`.
- No Redux/Zustand/etc.
- Auth state is local component state sourced from `supabase.auth`.

## 6. Styling migration notes
- Tailwind utility classes are used across almost every component.
- Global animation CSS currently lives in `src/index.css`.
- Several pages embed custom keyframes inside component-local `<style>` tags.
- Existing UI should be preserved; no redesign is required.

## 7. API/data fetching notes
- Supabase env keys currently use `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
- `SettingsContext` reads `settings.download_url`.
- Admin reads `get_all_users` RPC and upserts `settings.download_url`.
- Features page reads `public/Feature.json` and `public/Featureban.json`.
- Contact form is UI-only and does not submit anywhere.

## 8. Auth migration notes
- Login uses `supabase.auth.signInWithPassword`.
- Registration uses `supabase.auth.signUp`.
- Admin authorization is determined entirely on the client from user/app metadata.
- Navbar visibility for login/logout/admin is driven by `supabase.auth.onAuthStateChange`.
- Debug page can update the current user metadata to `role: admin`.

## 9. Risk list
- Browser-only APIs: `window`, `document`, `window.matchMedia`, `window.scrollTo`, `window.location.href`
- Router assumptions: `NavLink`, `useNavigate`, `useLocation`, `Outlet`
- Client-only auth/session expectations in `/admin` and navbar
- Relative public fetch on features page
- Environment variable rename from `VITE_*` to `NEXT_PUBLIC_*`
- Static asset path and case-sensitivity risk (`Hardware.jpeg` import)
- Debug route exposes admin elevation behavior and should be treated as production-sensitive
- Current repo already has ESLint issues unrelated to Next

## 10. Recommended migration strategy
- Use Next.js App Router.
- Keep JavaScript/JSX.
- Preserve existing components and business logic.
- Introduce a small router-compat layer instead of rewriting the entire component tree at once.
- Keep Supabase auth and settings fetching client-side for parity.
- Redirect missing linked routes to `/contact`.

## 11. Estimated impact areas
- `package.json` and dependency tree
- App entry and global CSS
- Route shell and layouts
- React Router usage across shared components and pages
- Supabase env configuration
- Build/lint setup

## 12. Checklist of files/features to verify after migration
- Navbar active links, login/logout state, admin visibility
- Footer language switcher
- Home sections and business pages
- Features JSON loading in both languages
- Download buttons using Supabase-driven URL
- Login and registration flows
- Admin access guard, user list RPC, settings upsert
- `/support` and `/forgot-password` redirects
- Browser-only effects and hydration safety
