# Repository Hygiene Notes

Date: 2026-04-21

## Recommended `.gitignore` Coverage

The repo now ignores these generated or local-only paths:

- dependency installs: `node_modules`
- Next.js output: `.next`, `.next.zip`, `out`
- old/general build output: `dist`, `dist-ssr`, `build`
- caches: `.turbo`, `.cache`
- test output: `coverage`
- temporary files: `tmp`, `temp`, `*.tmp`, `*.temp`
- local env files: `*.local`, `.env*.local`
- platform metadata: `.vercel`, `.netlify`
- TypeScript incremental output: `*.tsbuildinfo`

## Package Manager Recommendation

- Use npm for this repo.
- Keep `package-lock.json`.
- Do not add `yarn.lock` or `pnpm-lock.yaml` unless the project intentionally switches package managers.
- If a package-manager switch happens later, remove the old lockfile in the same change.

## Folders That Should Never Be Committed

- `.next`
- `.next.zip`
- `node_modules`
- `node_modules\.vite`
- `dist`
- `build`
- `out`
- `coverage`
- `.turbo`
- `.cache`
- `tmp`
- `temp`
- local logs and debug dumps

## Large Asset Recommendations

- `src\assets\Busniess\grocery.png` is the largest source asset at about 1.69 MiB. Consider converting it to WebP/AVIF or resizing it to the maximum displayed dimensions.
- `src\assets\photo.png` is about 814 KiB. Consider WebP/AVIF conversion if visual quality remains acceptable.
- Keep source assets only once when possible. The removed `dist` folder had hashed copies of active `src\assets` images.
- Public favicon/logo duplicates are tiny and not worth risky cleanup unless the app is refactored to a single canonical logo path.

## Dependency Cleanup Recommendations

- `react-icons` is used broadly and occupies about 82.20 MiB inside `node_modules`. It is not safe to remove now.
- If bundle size becomes a runtime concern, audit icon imports and consider replacing high-cardinality icon packages with a smaller icon set or inline project-local icons.
- `@netlify/plugin-nextjs` should stay if Netlify deployment is active. If deployment is not Netlify, verify and remove it later.
- `@supabase/supabase-js` is actively used by client and API code and should stay.

## Migration Cleanup Practices

- Do not archive generated build folders into the repo root.
- After running `next dev` or `next build`, keep `.next` out of version control and delete it before handing off a clean source package.
- Remove old Vite/CRA build output (`dist`, `build`) after verifying Next routes replace the old app entry.
- Keep migration shims such as `compat\react-router-dom.js` only while active components import them.
- Source cleanup should happen separately from artifact cleanup. For example, `src\Component\Route\Router.jsx` appears to be an old React Router route table, but deleting source files should wait for a dedicated import/build verification pass.

