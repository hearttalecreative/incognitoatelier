# Incognito Atelier

React rebuild of [incognito-atelier.com](https://incognito-atelier.com), migrated off WordPress
(Elementor Pro + Royal Elementor Addons) so the site can be edited in Lovable.

## Stack

Vite · React 18 · TypeScript · Tailwind CSS · React Router · shadcn/ui conventions — the same
stack Lovable generates, so the repo syncs both ways without conversion.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on <http://localhost:8080>.

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build |
| `npm run typecheck` | TypeScript check, no emit |

## Project layout

```
public/assets/        Images and logos exported from the WordPress media library
src/components/layout Header, Footer, page shell
src/components/ui     Reusable primitives (Reveal, VimeoBackground, WordRotator)
src/components/sections  Composed sections shared between pages
src/data              Navigation and page content, kept out of the JSX
src/hooks             usePageMeta — the per-page SEO tags Yoast used to render
src/pages             One component per route
```

## Design tokens

The palette and type scale are lifted from the Elementor global kit and declared as CSS
variables in `src/index.css`, then exposed through `tailwind.config.ts`:

| Token | Hex | Use |
| --- | --- | --- |
| `cream` | `#EFEAE4` | Section backgrounds |
| `forest` | `#2B3F3B` | Deep accent |
| `taupe` | `#8A7F76` | Labels, newsletter band |
| `copper` | `#C4967C` | Highlights, hover states |
| `ink` | `#0D0D10` | Dark sections, footer |

Fonts: Playfair Display (display), Libre Caslon Text (serif), Open Sans (body),
Montserrat (navigation, buttons, labels).

## Forms

Contact and newsletter submissions go through `src/lib/forms.ts`, which posts to the endpoint in
`VITE_FORMS_ENDPOINT`. That endpoint is a server-side function that talks to Brevo — the Brevo API
key stays there and never reaches the browser. Copy `.env.example` to `.env.local` to configure it.

## Migration notes

- Background videos are the original Vimeo IDs, embedded with the same background player flags.
- Elementor entrance animations are replaced by `Reveal`, an IntersectionObserver fade-and-rise.
- The raw scrape of the WordPress site lives in `_extract/` and is git-ignored; it exists only as
  a reference while pages are ported.
