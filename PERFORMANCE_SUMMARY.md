# Halkhata Performance Summary

## 1. What was making the app slow
- Large local images were rendered with plain `<img>`, including ~1.7 MB `grocery.png` and ~815 KB `photo.png`.
- `SettingsProvider` was mounted globally, causing routes like `/login`, `/registration`, and `/admin` to run the download settings fetch even though they do not need it.
- `/features` fetched static JSON after hydration, creating a waterfall and a second render.
- The home page imported `Feedback` even though the component is not rendered.
- Some icon imports were unused, adding avoidable client-module work.
- The app still has broad client-rendered marketing pages due to language/context/animation behavior retained from the migration.

## 2. What changes were implemented
- Scoped `SettingsProvider` to `MarketingShell`, so only marketing routes load download settings.
- Simplified root `AppProviders` to only provide `LanguageProvider`.
- Replaced `/features` client JSON fetch with static imports of `Feature.json` and `Featureban.json`.
- Removed the unused `Feedback` import from `Home.jsx`.
- Removed unused icon imports from `Cover.jsx` and `Extraincome.jsx`.
- Converted high-impact local images to `next/image`:
  - home hero image;
  - business category icons;
  - business page hero images;
  - extra-income page images.
- Removed the now-unused local image helper.

## 3. Pages/components improved most
- `/features`: removed the post-hydration JSON fetch and empty-first-render behavior.
- `/login`, `/registration`, `/admin`: no longer mount `SettingsProvider`, so they avoid the download URL fetch.
- `/`: home hero and business category images now use responsive Next image output.
- `/grocery`, `/dealer`, `/electronics`, `/fashion`, `/hardware`, `/pharmacy`: hero images now use `next/image`; this matters most for `/grocery` because its source image is the largest asset.
- `/extraincome`: large page images now use `next/image` instead of original static file URLs.

## 4. What was intentionally not changed
- I did not rewrite all marketing pages into Server Components because language switching, download state, scroll animations, and browser effects are still client-context based.
- I did not replace `react-icons`; current imports are per-icon and a larger icon-system rewrite would be higher risk.
- I did not add admin table virtualization because expected user counts were not available.
- I did not change Supabase auth/data behavior.
- I did not change the `SettingsContext` `no-store` fetch policy because download URL freshness may be product-important.

## 5. Verification notes
- `npm run lint`: passed.
- `npm run build`: passed.
- Build output still includes all expected static pages and dynamic API routes.
- Built HTML now includes `/_next/image` responsive `srcSet` output for the home and business hero images.
- Local dev timing samples were noisy, but `/features` improved from ~667 ms before to ~463 ms after in the same local dev environment.

## 6. Remaining performance risks
- Broad client hydration remains the largest architectural cost.
- Root language context still forces client behavior where language-dependent content is rendered.
- `Navber` still subscribes to Supabase auth and scroll events on every marketing route.
- Admin user table can become slow with large user lists because it renders all rows.
- Source image files remain large even though delivery is now optimized by Next image handling.

## 7. Manual follow-up suggestions
- Run Lighthouse/WebPageTest against a production deployment, not the dev server.
- Check image visual sizing on mobile and desktop after `next/image` conversion.
- If user counts are large, add admin pagination or virtualization.
- Consider cookie-backed language/auth so more marketing content can become server-rendered.
- Recompress the largest source images, especially `src/assets/Busniess/grocery.png` and `src/assets/photo.png`.
