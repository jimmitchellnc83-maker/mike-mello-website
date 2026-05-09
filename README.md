# Mike Mello Website

Personal website for stand-up comedian **Mike Mello** — built with Astro + Tailwind CSS.

## Quick Start

```sh
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

## Commands

| Command              | Action                                      |
| :------------------- | :------------------------------------------ |
| `npm install`        | Install dependencies                        |
| `npm run dev`        | Start dev server at `localhost:4321`        |
| `npm run build`      | Build production site to `./dist/`          |
| `npm run preview`    | Preview production build locally            |

## Pages

- `/` — Home
- `/about` — Bio, credits, quotes
- `/tour` — Tour dates
- `/videos` — Clips and appearances
- `/press` — Press kit and coverage
- `/contact` — Booking and contact form

## Stack

- [Astro](https://astro.build) v6.3+
- [Tailwind CSS](https://tailwindcss.com) v4.3
- TypeScript (strict)

## Project Layout

```
src/
├── components/   # Header, Footer
├── layouts/      # Layout.astro (imports global.css)
├── pages/        # File-based routes
└── styles/       # global.css (Tailwind import)
```

See [CLAUDE.md](./CLAUDE.md) for project conventions and next steps.
