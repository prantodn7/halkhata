# Declutter Summary

Date: 2026-04-21

## Original Size

- Original scanned size: 3,054,128,436 bytes
- Original human-readable size: 2.84 GiB
- Original file count: 16,268

## New Size

- New scanned size: 511,474,784 bytes
- New human-readable size: 487.78 MiB
- New file count: 14,667

## Space Recovered

- Recovered: 2,542,653,652 bytes
- Recovered human-readable size: about 2.37 GiB

## What Was Deleted

| Item | Approx Size | Reason |
| --- | ---: | --- |
| `.next.zip` | 1.25 GiB | Generated/backup archive of Next.js output. |
| `.next` | 1.08 GiB original, plus 35.57 MiB regenerated during verification | Generated Next.js build/dev output. Removed again after build verification. |
| `dist` | 5.38 MiB | Old Vite/React build output with duplicated source assets. |
| `node_modules\.vite` | 39.15 MiB | Leftover Vite cache inside installed dependencies. |
| `src\Component\Route\Router.jsx` | 2.26 KiB | Verified unused old React Router migration file; it also caused `npm run lint` to fail because of a stray `cod` token. |
| `nul` | 0 B | Accidental Windows reserved-name artifact. |
| Empty `app\debug` directory | 0 B | Empty leftover folder. |

## What Was Kept Intentionally

- `node_modules` was kept so the project can still run `npm run lint`, `npm run build`, `npm run dev`, and `npm start` without reinstalling dependencies.
- `compat\react-router-dom.js` was kept because active components still import it as a Next.js compatibility shim.
- `src\assets` was kept because active components import those images.
- `public` was kept for manifest, icons, public JSON files, and static assets.
- `supabase` SQL files were kept.
- Migration/performance markdown docs were kept because they are small and may still be useful historical documentation.
- Existing user changes were preserved: `src\Component\Navber\Contact.jsx`, `src\Component\Route\Admin.jsx`, `next-env.d.ts`, and `app\api\contact\`.

## Verification

- `npm run build`: passed.
- `npm run lint`: initially failed because of unused legacy `src\Component\Route\Router.jsx`; passed after that verified-unused file was removed.

## Still Needs Manual Review

- `node_modules`: optional to delete if you want a source-only folder. This would save about 477.41 MiB now, but requires `npm install` before local commands can run.
- `react-icons`: installed package is large and used broadly. Reducing it requires UI icon refactoring, not blind removal.
- `src\assets\Busniess\grocery.png`: about 1.69 MiB. Consider WebP/AVIF conversion or resizing.
- `src\assets\photo.png`: about 814 KiB. Consider optimization.
- Migration/performance markdown files: small; delete only if the team no longer needs them.
- `compat\react-router-dom.js`: can be removed only after active imports are refactored to direct Next.js APIs.

## Risk Areas

- The project still has migration-era compatibility code. It is functioning, but long-term cleanup should replace `@/compat/react-router-dom` imports with direct `next/link` and `next/navigation` usage.
- The largest remaining folder is `node_modules`, which is expected for local development but should never be committed.
- Git reported a global ignore permission warning for `C:\Users\CTech\.config\git\ignore`; this did not block cleanup, but it is an environment-level Git configuration issue.

## Recommended Next Cleanup Step

Run an asset optimization pass for `src\assets`, then consider a source refactor that removes the React Router compatibility shim. If disk size is more important than immediate local command availability, delete `node_modules` and reinstall later with `npm install`.
