# Halkhata Web

This project is now a Next.js App Router application migrated from a Vite + React Router SPA.

## Scripts

- `npm run dev` starts the Next.js development server
- `npm run build` builds the production app
- `npm run start` serves the production build
- `npm run lint` runs ESLint

## Environment

Set these variables in `.env`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Notes

- Public marketing routes use a shared layout with navbar and footer.
- `/admin` keeps the existing client-side Supabase admin guard for minimal behavior change.
- `/support` and `/forgot-password` redirect to `/contact`.
