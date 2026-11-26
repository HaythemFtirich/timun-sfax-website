# TIMUN Sfax — official website

A fast, bilingual informational website for **TIMUN Sfax** (Tunisian International Model United Nations — Sfax). Built as a static Next.js application with an editorial visual system, accessible interactions and no paid dependencies.

## What is included

- **Responsive public site** — home, events and event details, executive board, study guides, socials and partner pages.
- **English/French switcher** — English is the server-rendered default. French is persisted in `localStorage` under `timun-language` and applied before paint without adding routes or changing the current URL. Navigation, headings, body copy, buttons, form messages, placeholders, `alt` text, `aria-label`s, titles and slider values are translated.
- **Accessible motion** — `prefers-reduced-motion` and `html[data-motion="static"]` land every element in its finished, readable state. The shared interaction token is `180ms`.
- **Stable form plumbing** — the existing Google Forms endpoints and all `entry.*` identifiers and choice values are preserved; the site only translates the visible labels and status messages.
- **Self-hosted assets** — local fonts and optimized images/PDFs; no external font or CSS requests.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 App Router, React 19, TypeScript |
| Styling | Tailwind CSS 4 + a custom design-token stylesheet |
| Animation | CSS transitions, IntersectionObserver reveal, GSAP/Motion where already used |
| Content | Typed static records in `src/content/` |
| i18n | Dependency-free render-time text pairs + persisted client language state |
| Hosting target | Vercel free tier via GitHub; no paid services (enable Git LFS in the Vercel project settings so the study-guide PDFs are fetched during builds) |

## Local setup

Requirements: Node.js 20.9+ and npm.

```powershell
npm install
git lfs pull
npm run dev
```

`git lfs pull` replaces the checked-in PDF pointers with the real study-guide files. Open <http://localhost:3000>. The browser tab title on the home page is exactly **TIMUN Sfax**.

## Verification

Run all three before every commit:

```powershell
npm run lint
npm run typecheck
npm run build
```

All commands must exit with code `0`. `npm run typecheck` generates Next.js route types and runs `tsc --noEmit`.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/app/` | Routes, root layout, metadata, global CSS and icons |
| `src/components/layout/` | Header, menu, footer and theme control |
| `src/components/sections/` | Home-page and partner-page sections |
| `src/components/i18n/` | Language store, toggle, text renderer and attribute runtime |
| `src/components/ui/` | Shared headings, figures, cards and social links |
| `src/content/` | Bilingual copy and structured event/member/guide data |
| `src/lib/` | Shared i18n and metadata helpers |
| `public/images/` | Optimized branding, photography and event imagery |
| `public/documents/study-guides/` | Approved study-guide PDFs |
| `docs/` | Project management and decision records |
| `assets/` | Owner-supplied originals — archive only |

## Content and preservation rules

The approved source of factual copy is `docs/PHASE4_CONTENT_PROPOSAL.md`; French is a faithful rendering of that copy. Names, dates, figures, official URLs, social handles, contact details, PDF filenames and Google Forms identifiers are intentionally left untouched. No analytics, ads, trackers or paid APIs are included.

## Branding note

The official colour mark is the source of the browser icon set. Only fully transparent padding was removed from the original; all non-transparent pixels were preserved and re-padded to a square. Originals remain untouched in `assets/`.

## Repository

Source: <https://github.com/HaythemFtirich/timun-sfax-website.git>

Deployment is handled outside the repository through GitHub → Vercel. Environment-specific values such as `NEXT_PUBLIC_SITE_URL` are optional and supplied at build time.
