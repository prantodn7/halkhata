# Halkhata Performance Plan

## 1. High impact / low risk

### Scope settings provider to marketing routes
- What is wrong now: `SettingsProvider` is mounted in root `AppProviders`.
- Why it is slow: login, registration, and admin pages make an unnecessary `/api/downloads/header_download` request on mount.
- Exact change: make `AppProviders` only provide language state; wrap `MarketingShell` children with `SettingsProvider`. Remove the root `DownloadsProvider`.
- Expected impact: one fewer client fetch and less root provider work on non-marketing routes.
- Compatibility risk: low; all current `useSettings` consumers are in marketing routes.

### Replace feature JSON useEffect fetch
- What is wrong now: `Features.jsx` fetches static JSON from `public/` after hydration.
- Why it is slow: the page renders once without cards, performs a network request, then renders again.
- Exact change: import `Feature.json` and `Featureban.json` statically and derive the list from language.
- Expected impact: removes route waterfall and improves `/features` first render.
- Compatibility risk: low; data files are static and small.

### Remove dead imports
- What is wrong now: `Home.jsx` imports `Feedback` while rendering it is commented out; `Cover` and `Extraincome` import unused icons.
- Why it is slow: unused component/icon imports can enter the client graph and add parse/hydration cost.
- Exact change: delete unused imports and unused `_stats` block.
- Expected impact: small but safe client bundle reduction.
- Compatibility risk: very low.

## 2. High impact / medium risk

### Use `next/image` for local images
- What is wrong now: imported local images are rendered with plain `<img>`.
- Why it is slow: browsers download original assets, including a 1.7 MB grocery image and 815 KB hero image.
- Exact change: convert local imported images in home/business/extra-income pages to `next/image`, keeping current classes and dimensions. Use `priority` only for the home hero image and lazy loading for secondary images.
- Expected impact: lower image transfer, responsive image variants, better layout stability.
- Compatibility risk: medium-low; visual sizing must be checked because `next/image` inserts intrinsic sizing behavior.

## 3. Nice-to-have improvements

### Split static marketing content from client islands
- What is wrong now: most marketing pages are client components.
- Why it is slow: static text and layout hydrate unnecessarily.
- Exact change: move language-independent shells to Server Components and keep language/download/menu behavior in small client components.
- Expected impact: significantly lower hydration cost on marketing pages.
- Compatibility risk: medium-high because the current language switch is client-context based.

### Harden and optimize admin data rendering
- What is wrong now: admin renders all fetched users in one table.
- Why it is slow: large user counts can block the main thread.
- Exact change: add server-side pagination or client virtualization after confirming expected user counts.
- Expected impact: improves admin responsiveness at scale.
- Compatibility risk: medium; changes admin UX/data flow.

### Recompress source assets
- What is wrong now: source PNG/JPEG assets are large.
- Why it is slow: even with `next/image`, large source images increase build/cache storage and fallback transfer.
- Exact change: export optimized WebP/AVIF or smaller source dimensions.
- Expected impact: lower static media size.
- Compatibility risk: low if visual QA confirms quality.
