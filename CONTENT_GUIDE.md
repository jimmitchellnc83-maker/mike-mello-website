# Content Guide

Where to drop real content as the site fills in. All `[BRACKETED]` strings in the source are placeholders waiting for real copy.

## src/pages/index.astro

- **Hero tagline** — currently `Stand-Up Comedian`. Swap for a punchier line if there's a tour name or signature bit.
- **"Next Show" block** — venue, city, date. Auto-update or hand-update each tour leg.

## src/pages/about.astro

- **Short bio** — 2–3 sentences. Used as the at-a-glance description.
- **Long bio** — paragraph form. Career arc, influences, current projects.
- **Credits** — TV/streaming, festivals, podcasts, albums/specials. Bullet list.
- **Pull quote** — a short blurb from a review or peer with attribution.

## src/pages/tour.astro

- Each `<article>` is one show. Fill in:
  - Date
  - Venue name
  - City, State
  - Ticket URL (the "Tickets" button)
- Add or remove `<article>` blocks as the calendar changes.
- Mailing-list section is a placeholder — wire up Mailchimp / Buttondown / similar.

## src/pages/videos.astro

- **Latest** — 1–2 featured embeds (YouTube `<iframe>`, Vimeo, etc.)
- **Stand-Up Clips** — 3-up grid for short clips
- **Podcasts & Appearances** — 3-up grid for podcast / talk show appearances
- Replace each placeholder `<div>` with an `<iframe>` or video embed.

## src/pages/press.astro

- **Press Kit** — link to a downloadable zip (Dropbox / Drive / S3) with hi-res photos, bio, logos, tech rider
- **Coverage** — each `<article>` is one piece of press. Title, outlet+date, pull quote, link
- **Press Photos** — 3-up grid of hi-res photos

## src/pages/contact.astro

- Replace email placeholders:
  - `[BOOKING_EMAIL]` — general booking
  - `[CORPORATE_EMAIL]` — colleges / corporate
  - `[PRESS_EMAIL]` — press / media
- Update social links (Instagram, TikTok, YouTube, X)
- Wire the form to a handler (Formspree, Resend, Cloudflare Pages Functions, etc.)

## src/components/Footer.astro

- Update booking + press contact lines
- Update social links

## Branding TODO

- Logo (replace `/favicon.svg` and the text logo in `Header.astro`)
- Color palette — currently slate + amber as a placeholder
- Typography — currently Tailwind defaults
- Press photos for use in hero / about
