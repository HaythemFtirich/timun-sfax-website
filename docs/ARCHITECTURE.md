# TIMUN Sfax Website — Architecture

> **Status:** PLANNED — reflects the source documentation (§7) plus senior-developer conventions marked PROPOSED. Implementation begins in Phase 1 after owner approval.

---

## 1. Architecture principles

- Static-first informational site; static generation where suitable.
- Server Components by default; add `'use client'` only for interactions that require it.
- Structured local content files; no backend, database, CMS, auth, or custom API.
- Reusable components for repeated cards, navigation, galleries, and sections.
- `next/image` (or a suitable static strategy) for optimized responsive images.
- Minimal dependencies; every major package justified (see §7).
- All essential pages and downloads work without third-party API keys.
- Semantic HTML, accessibility, and performance considered from the start.

## 2. Proposed project structure

```
timun sfax/                       (current workspace root)
├── docs/                         # management documentation (this file's siblings)
├── assets/                       # owner-supplied originals (audit/reference)
├── public/
│   ├── images/
│   │   ├── branding/             # optimized logo files
│   │   ├── hero/
│   │   ├── about/
│   │   ├── events/<event-slug>/
│   │   ├── executive-board/
│   │   └── partners/
│   ├── documents/
│   │   └── study-guides/         # approved PDFs, descriptive filenames
│   └── videos/                   # only if approved/needed, with poster
├── src/
│   ├── app/
│   │   ├── layout.tsx            # root layout, fonts, default metadata
│   │   ├── page.tsx              # Home (/)
│   │   ├── globals.css           # Tailwind layers + custom CSS + tokens
│   │   ├── not-found.tsx
│   │   ├── about/page.tsx
│   │   ├── events/page.tsx
│   │   ├── events/[slug]/page.tsx
│   │   ├── study-guides/page.tsx
│   │   ├── executive-board/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── sitemap.ts            # PROPOSED: generated sitemap
│   │   └── robots.ts             # PROPOSED: generated robots
│   ├── components/
│   │   ├── layout/               # Header, Footer, PageShell, transitions
│   │   ├── navigation/           # DesktopNav, MobileMenu
│   │   ├── sections/             # Hero, AboutPreview, Values, SocialSection
│   │   ├── cards/                # EventCard, StudyGuideCard, BoardMemberCard
│   │   ├── galleries/            # EventGallery (client)
│   │   └── ui/                   # Button, Container, SectionHeading, Reveal
│   ├── content/                  # structured static content (single source)
│   │   ├── site.ts               # site-wide config: URLs, contact, socials
│   │   ├── about.ts
│   │   ├── events.ts
│   │   ├── study-guides.ts
│   │   ├── executive-board.ts
│   │   ├── partners.ts
│   │   └── contact.ts
│   └── lib/
│       ├── metadata.ts           # per-route metadata helper
│       └── utils.ts              # small shared helpers
├── package.json
├── next.config.ts
├── tsconfig.json
├── README.md
└── .gitignore
```

> The workspace already contains `assets/` and the `.docx`; these are preserved. The Next.js app is created at the workspace root so the final repository is self-contained.

## 3. Rendering strategy

- Use the **App Router** (PROPOSED — TD-10) with Server Components for content pages.
- Content modules are imported at build time; pages are statically generated.
- Dynamic event routes use `generateStaticParams()` from `src/content/events.ts`.
- Client components limited to: mobile menu, scrolling header state, galleries/sliders, search input, motion wrappers, optional intro/cursor.
- No route handlers, no server actions writing data, no environment secrets needed.

## 4. Content model (shape only — no fabricated data)

```ts
// Illustrative types; actual values come only from owner-approved material.
type Event = {
  slug: string;
  title: string;
  overview: string;
  date?: string;          // only if verified
  location?: string;      // only if verified
  duration?: string;      // only if verified
  images: string[];       // paths under /images/events/<slug>/
};

type StudyGuide = {
  title: string;
  description?: string;
  keywords: string[];
  file: string;           // path under /documents/study-guides/
};

type BoardMember = {
  name: string;
  position: string;       // official position, verified
  portrait: string;
  profileUrl?: string;    // LinkedIn/other, if supplied
};

type Partner = {
  name: string;
  logo: string;
  description?: string;
  url?: string;
};

type SocialLinks = {
  facebook?: string;
  instagram?: string;     // outbound link only
  linkedin?: string;
  tiktok?: string;
};
```

All external URLs (socials, Google Forms, contact) live in `src/content/site.ts` or `contact.ts` so they can be verified and updated in one place (TD-05).

## 5. Image pipeline

1. Keep originals in `assets/` (archive) — never overwrite.
2. Produce optimized copies in `public/images/` with lowercase kebab-case names, e.g. `timun-sfax-event-name-group-photo-01.webp`.
3. Logos: preserve proportions; SVG if supplied, otherwise transparent PNG; white variant for dark surfaces.
4. Use `next/image` with explicit dimensions, responsive `sizes`, `priority` for hero/LCP, lazy loading elsewhere.
5. Provide meaningful alt text from content data.

## 6. Animation architecture

- A small set of reusable Motion primitives (`Reveal`, `Stagger`, page transition wrapper) centralized in `components/ui` and `components/layout`.
- GSAP/ScrollTrigger imported only in specific client components that need pinned/parallax sequences; never globally.
- A global reduced-motion check plus per-component fallbacks; CSS handles simple/ambient motion.
- Optional intro/cursor isolated so they can be removed without touching content (TD-13).

## 7. Dependencies (all free/open-source; rationale)

| Package | Purpose | Rationale |
| --- | --- | --- |
| `next`, `react`, `react-dom` | Framework/UI | Owner-selected stack |
| `typescript`, `@types/*` | Type safety | Documentation recommends TS |
| `tailwindcss`, PostCSS tooling | Styling | Owner-selected styling approach |
| `eslint`, `eslint-config-next` | Linting | Quality baseline |
| `motion` (Framer Motion) | Component/page motion | Owner-selected animation library |
| `gsap` | ScrollTrigger sequences | Owner-selected; used selectively |

No paid services, no CMS SDK, no analytics/ad pixels, no UI kit. Additional packages require senior-dev justification and owner awareness.

## 8. SEO implementation plan

- `src/lib/metadata.ts` helper producing unique title/description/Open Graph per route.
- Root metadata defaults in `app/layout.tsx`; canonical URLs using the Vercel base URL configured once.
- `app/sitemap.ts` and `app/robots.ts` for generated `sitemap.xml` / `robots.txt`.
- Descriptive image filenames and alt text; clean lowercase routes.
- Structured data only if factual and approved — do **not** invent address, founding data, or contact details.

## 9. Deployment flow

Local edits → commit → push to GitHub `main` → Vercel automatic production deploy → verify live URL. Branches/PRs get preview deployments where available. Full procedure in `DEPLOYMENT_GUIDE.md`.

## 10. Non-goals

Backend, database, authentication, admin dashboard, CMS, newsletter, contact form, live Instagram feed, analytics, paid assets/domains, language switcher, client-side routing complexity beyond Next.js defaults.

## 11. As-built baseline (Phase 1 — 19 Nov 2026)

- **Installed:** Next.js 16.4.6, React 19.3.0, Tailwind CSS 4.3.3, TypeScript 5, ESLint 9 flat config. No Motion/GSAP yet (scheduled for Phase 8).
- **Config:** App Router + `src/` dir + `@/*` alias. `next.config.ts` keeps scaffold defaults `cacheComponents: true`, `partialPrefetching: true`, Turbopack CSS rule, plus `turbopack.root: process.cwd()` for this nested Windows path.
- **Scripts:** `dev`, `build`, `start`, `lint` (ESLint CLI), `typecheck` (`next typegen && tsc --noEmit`).
- **Routing convention:** Next.js 16 requires async request APIs; dynamic event pages will use `PageProps<'/events/[slug]'>` with `await props.params` and `generateStaticParams()` when built in Phase 5.
- **Icons:** `src/app/icon.png` + `apple-icon.png` (file-convention routes, confirmed in build output).
- **Git:** local repository only, initial commit created; no remote configured. Push deferred to Phase 10.
- **Dev server:** currently running at `http://localhost:3000` for owner review (PID 16056 at time of verification).
- **Verification:** lint, typecheck and production build all pass; four static routes generated; home page and icon routes return HTTP 200.
