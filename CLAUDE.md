# Mike Mello Website

Personal website for stand-up comedian **Mike Mello**.

## Stack

- **Astro** v6.3+ (static site generator)
- **Tailwind CSS** v4.3 (utility-first CSS)
- **TypeScript** (strict mode enabled)
- **Deployment**: TBD — likely Cloudflare Pages

## Project Structure

```
/
├── public/          # Static assets (favicon, images, etc.)
├── src/
│   ├── assets/      # Processed assets (images, SVGs)
│   ├── components/  # Reusable Astro components (Header, Footer)
│   ├── layouts/     # Page layouts (Layout.astro imports global.css)
│   ├── pages/       # File-based routing
│   └── styles/      # Global CSS (Tailwind v4 via global.css)
└── astro.config.mjs # Astro config with Tailwind Vite plugin
```

## Pages

- **Home** (`/`) — Hero, featured offerings, next show snapshot
- **About** (`/about`) — Bio, credits, press blurb
- **Tour** (`/tour`) — Upcoming tour dates with ticket links
- **Videos** (`/videos`) — Stand-up clips, specials, podcasts/appearances
- **Press** (`/press`) — Press kit, coverage, hi-res photos
- **Contact** (`/contact`) — Booking, press, and general contact form

## Conventions

- **Tailwind v4**: Global styles imported via `src/styles/global.css` (already wired into `Layout.astro`)
- **TypeScript**: Strict mode enabled in `tsconfig.json`
- **Dev server**: `npm run dev` → http://localhost:4321
- **Build**: `npm run build` → static output to `./dist/`
- **Color palette**: slate (neutrals) + amber (accent) — placeholder, expected to evolve toward a comedy-stage palette once branding is finalized

## Commands

| Command              | Action                                      |
| :------------------- | :------------------------------------------ |
| `npm run dev`        | Start dev server at `localhost:4321`        |
| `npm run build`      | Build production site to `./dist/`          |
| `npm run preview`    | Preview production build locally            |
| `npm run astro ...`  | Run Astro CLI commands                      |

## Next Steps

- Drop in real bio, credits, and press quotes (see `src/pages/about.astro`)
- Replace `[Venue Name]` / `[Date]` placeholders on `/tour` with real shows + ticket URLs
- Embed actual YouTube / Vimeo videos on `/videos`
- Upload press kit and coverage links on `/press`
- Wire `/contact` form to a real handler (Formspree, Resend, etc.)
- Finalize color palette + typography
- Deploy to Cloudflare Pages (or alternative)
