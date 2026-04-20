# Halkhata Web

Halkhata Web is a Next.js App Router application for the Halkhata marketing site, auth screens, admin dashboard, and download-link management APIs.

## Stack
- Next.js App Router
- React 19
- Tailwind CSS 4
- Supabase JS
- React Context for language, settings, downloads, and auth-derived UI state

## Environment
Create `.env` from `.env.example` and set:

```bash
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

The API routes return fallback download data when Supabase is not configured, but login, registration, and admin features require valid Supabase credentials.

## Scripts
```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Routes
- Public: `/`, `/features`, `/reffer`, `/contact`, `/extraincome`, `/growthpartner`
- Business pages: `/pharmacy`, `/grocery`, `/electronics`, `/fashion`, `/hardware`, `/dealer`
- Auth: `/login`, `/registration`
- Admin: `/admin`
- Redirects: `/support`, `/forgot-password`
- APIs: `/api/download-url`, `/api/downloads`, `/api/downloads/[button_key]`
