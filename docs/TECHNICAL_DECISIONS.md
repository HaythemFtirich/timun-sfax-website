# TIMUN Sfax Website — Technical Decisions Register

> Each decision records: the problem, alternatives considered, selected solution, reason, and consequences/limitations.
> Items marked **CONFIRMED** come from the owner's documentation. Items marked **PROPOSED** are senior-developer recommendations awaiting owner approval. Record approvals here with a date.

---

## TD-01 — Framework: Next.js + React

- **Status:** CONFIRMED (source documentation §3, §7.1).
- **Problem:** Need a modern, performant, statically generated informational site with strong SEO and image handling, deployable on Vercel at zero cost.
- **Alternatives:** plain HTML/CSS/JS; Astro; Vite + React SPA; WordPress.
- **Selected:** Next.js + React.
- **Reason:** Static generation, file-based routing, image optimization, metadata/SEO support, and first-class Vercel deployment; the owner explicitly selected it.
- **Consequences:** Requires Node toolchain and a build step; some client components needed for interactivity. No change without owner discussion.

## TD-02 — Language: TypeScript

- **Status:** RECOMMENDED in documentation; adopted as default.
- **Problem:** Static content models (events, board, guides) need reliable structure as the site grows.
- **Alternatives:** JavaScript with JSDoc; plain JavaScript.
- **Selected:** TypeScript.
- **Reason:** Catches content-model errors at build time; improves maintainability; documentation recommends it.
- **Consequences:** Slightly more setup; all content modules need typed definitions. Reversible but not recommended.

## TD-03 — Styling: Tailwind CSS + custom CSS

- **Status:** CONFIRMED.
- **Problem:** Need fast, consistent, responsive styling while preserving a distinctive, non-template visual identity.
- **Alternatives:** pure CSS modules; CSS-in-JS; component library (e.g. MUI/Chakra).
- **Selected:** Tailwind CSS combined with custom CSS.
- **Reason:** Fast responsive utilities + design tokens; custom CSS allows cinematic effects (masks, glows, gradients) and avoids generic look.
- **Consequences:** Tailwind config becomes the source of design tokens; avoid utility spaghetti by extracting primitives (P2-T4). No heavy UI component library.

## TD-04 — Animation stack and responsibility split

- **Status:** CONFIRMED (owner selected all three); responsibility split is a PROPOSED implementation convention.
- **Problem:** Three animation technologies are requested; using them indiscriminately causes bloat and conflicting behavior.
- **Alternatives:** one library for everything (e.g. only GSAP, or only CSS).
- **Selected:**
  - **Motion (Framer Motion):** React component transitions, page transitions, reveals, hover/layout animation.
  - **GSAP + ScrollTrigger:** only advanced scroll-linked timelines, pinned sections, complex cinematic sequences.
  - **CSS:** simple hover states, transitions, decorative/ambient motion.
- **Reason:** Each tool used where it is strongest; avoids solving the same simple problem twice.
- **Consequences:** Two JS animation libraries increase bundle size — keep GSAP imports minimal and only on pages that need it. `prefers-reduced-motion` must be honored globally.
- **Phase 2 amendment (19 Nov 2026):** no animation dependency has been installed. After studying `https://enactustbs.com/?lang=fr`, the owner approved a library-free implementation pattern for Phase 8 — native CSS, `IntersectionObserver`, one `requestAnimationFrame` pass, SVG, canvas and View Transitions. Any future library addition requires asking the owner first. See TD-21.

## TD-05 — Content management: static modules, no CMS

- **Status:** CONFIRMED.
- **Problem:** Content must be developer-maintained with no backend, database, or admin interface.
- **Alternatives:** headless CMS; markdown files with a build-time layer; external content API.
- **Selected:** Structured TypeScript/JSON content modules under `src/content/`, PDFs in `public/documents/`.
- **Reason:** Meets the no-backend constraint; keeps all URLs/data in one place; simple Git-based update flow.
- **Consequences:** Updates require a code change and redeploy; acceptable per owner. Never edit content directly on Vercel.

## TD-06 — No backend, database, auth, or custom API

- **Status:** CONFIRMED.
- **Problem:** Scope discipline and 0 TND budget.
- **Selected:** None of the above. Google Forms used externally for applications; social platforms linked, not embedded; no contact form.
- **Reason:** Owner decision; reduces cost, maintenance, security surface.
- **Consequences:** All functionality must work without third-party API keys; external service availability does not break the site.

## TD-07 — Hosting and deployment: Vercel + GitHub, free tier

- **Status:** CONFIRMED.
- **Problem:** Need free, automatic deployment with preview capability.
- **Alternatives:** Netlify free; GitHub Pages; Cloudflare Pages.
- **Selected:** Vercel Hobby (free), GitHub-connected, production from main branch, free `vercel.app` subdomain initially.
- **Reason:** Owner decision; best Next.js integration; zero cost.
- **Consequences:** Must verify current free-plan limits at deployment time (§7.4/§14); no custom domain or paid add-ons without approval.

## TD-08 — Budget: strictly 0 TND

- **Status:** CONFIRMED — hard constraint.
- **Problem:** Prevent accidental costs.
- **Selected:** Free/open-source packages and fonts only; no paid stock assets, plugins, APIs, domains, or hosting upgrades.
- **Consequences:** Every new dependency must be checked for license/cost; owner approval required for anything with a price tag or payment-method requirement.

## TD-09 — Package manager: npm

- **Status:** PROPOSED (senior-developer decision, reversible).
- **Problem:** Need a package manager; no existing lockfile or preference in the workspace.
- **Alternatives:** pnpm, yarn, bun.
- **Selected:** npm (Node 26 / npm 11 available locally).
- **Reason:** Default with Node, simplest for mentoring and Vercel compatibility; no extra setup.
- **Consequences:** `package-lock.json` committed. Easily changed before Phase 1 if the owner prefers another manager.

## TD-10 — Routing: Next.js App Router

- **Status:** PROPOSED (senior-developer decision).
- **Problem:** Next.js supports App Router and Pages Router.
- **Alternatives:** Pages Router (older, more tutorials), App Router (current default).
- **Selected:** App Router with React Server Components by default; client components only for interactive UI.
- **Reason:** Current Next.js standard; better static rendering, metadata API, layouts, and nested routing; aligns with documentation's "server components by default".
- **Consequences:** Developers must understand `'use client'` boundaries. Dynamic routes use `app/events/[slug]/page.tsx` + `generateStaticParams`. Owner may override before Phase 1.

## TD-11 — Image strategy

- **Status:** PROPOSED (implementation convention).
- **Problem:** Supplied photos are 1080 px JPEGs (up to ~264 KB each); need responsive delivery without harming quality.
- **Alternatives:** raw `<img>` tags; manually pre-resized images only; external image CDN.
- **Selected:** Keep originals archived outside the exported public set; place optimized copies in `public/images/` with descriptive kebab-case names; use `next/image` with responsive sizes and priority on the hero/LCP image; WebP/AVIF where supported; lazy-load below the fold.
- **Reason:** Balanced visual quality and performance; no paid CDN; preserves originals.
- **Consequences:** Requires an optimization step for new photos; logos stay as PNG/SVG at original proportions.

## TD-12 — Color tokens derived from logos (superseded by TD-20)

- **Status:** SUPERSEDED 19 Nov 2026 — the candidate blue palette was rejected on contrast grounds.
- **Problem:** Need a palette grounded in the real brand.
- **Candidates (rejected):** `#607384`, `#3E6589`, `#226BB4`, `#C1DFE8`, `#FFFFFF`, sampled from logo pixels.
- **Reason for rejection:** `#226BB4` on navy measures only 3.36:1 and fails WCAG AA for body text. The owner approved the warm-gold-on-navy palette in TD-20 instead.
- **Consequences:** No blue accent anywhere in the approved interface. The candidates remain only as an audit record; see `DESIGN_SYSTEM.md`.

## TD-13 — Optional cinematic extras (intro animation, custom cursor)

- **Status:** PROPOSED / pending owner approval.
- **Problem:** Documentation lists a short dual-logo intro and a custom cursor among requested effects, but both carry accessibility/performance risk.
- **Selected:** Implement only after core pages are stable; intro must be short, skippable/non-blocking; cursor only on precise-pointer devices and never replacing visible pointer/focus. Omit if owner prefers.
- **Reason:** Protects accessibility and mobile performance while respecting the cinematic direction.
- **Consequences:** Extra work in Phase 8; both can be dropped without affecting content.

## TD-14 — Documentation as process source of truth

- **Status:** PROPOSED (adopted for this project).
- **Problem:** Multi-session continuity and owner involvement.
- **Selected:** `docs/` Markdown files govern planning, tracking, decisions, testing, deployment, and handover; update them at the end of every working session.
- **Reason:** Explicit owner requirement; prevents lost context and untracked decisions.
- **Consequences:** Some overhead each session; required for "definition of done".

---

## TD-15 — Git: local commits only until final stage

- **Status:** CONFIRMED (owner instruction, 19 Nov 2026).
- **Problem:** No GitHub repository is available yet, and the owner wants deployment/push deferred.
- **Alternatives:** create a remote now; skip version control entirely.
- **Selected:** `git init` locally + regular commits; **no remote, no push** until the final deployment stage (Phase 10).
- **Reason:** Owner instruction; keeps full history and rollback ability locally without premature setup.
- **Consequences:** No off-machine backup until the final push — owner should keep the project folder backed up. `DEPLOYMENT_GUIDE.md` remote steps are deferred, not cancelled.

## TD-16 — Phase 0 becomes continuous

- **Status:** CONFIRMED (owner instruction, 19 Nov 2026).
- **Problem:** All content was originally required before implementation; this would stall setup and design work.
- **Selected:** Run content readiness in parallel — the owner updates `assets/` and supplies approved material incrementally as each phase progresses.
- **Reason:** Owner instruction; unblocks structural phases while preserving content integrity.
- **Consequences:** Content-dependent phases (4–7) remain blocked from completion until their specific approved data exists. Never fabricate a placeholder fact.

## TD-17 — Website icon derived from the official logo

- **Status:** CONFIRMED (owner instruction, 19 Nov 2026).
- **Problem:** The supplied `timunsfaxlogo.png` is a 1969×1969 PNG with large transparent padding; it must be trimmed to be usable, and a favicon needs a small, high-contrast treatment.
- **Selected:** Remove **only fully transparent pixels** — bounds of every pixel with alpha > 0 are `(326,251)–(1582,1181)` = **1257×931** — then pad transparently to a **1257×1257 square**. Copy raw ARGB bytes (`LockBits`/`Marshal.Copy`) so no semi-transparent anti-aliased pixel is altered. Keep colour and white square copies in `public/images/branding/`; build a 512×512 navy tile with the supplied white mark centred as `src/app/icon.png` and `apple-icon.png`.
- **Reason:** Owner explicitly authorised removing invisible padding and recolouring **for the icon**; every non-transparent pixel must be preserved. Using the supplied white variant on navy gives contrast at small sizes and avoids AI redrawing the official mark.
- **Consequences:** This permission applies to padding removal only — general logo usage rules (no distortion/crop/recolour of visible content) still apply elsewhere. Originals in `assets/` are never modified. An initial alpha > 200 crop (1256×505, lost visible faint pixels) was incorrect and fully replaced after owner review.
- **TD-19 — Tab presentation (owner instruction, 19 Nov 2026):** the browser tab must read exactly `TIMUN Sfax` with the official logo beside it. Implemented with a multi-size transparent PNG icon set (512/64/32/16 px) plus a 180 px Apple touch icon; no `.ico`, no navy tile, and no national-logo variant. First pass used white-on-navy; the owner rejected the blue background, so all icons were rebuilt from the colour logo with alpha = 0 outside the mark.

## TD-18 — Next.js 16 framework defaults retained

- **Status:** ADOPTED (senior-developer decision) — 19 Nov 2026.
- **Problem:** `create-next-app@16.4.6` enables `cacheComponents`, `partialPrefetching` and Turbopack by default; these differ from older Next.js knowledge.
- **Selected:** Keep the scaffold defaults; set `turbopack.root: process.cwd()` to avoid a Windows home-directory lockfile warning; use the generated `LayoutProps` type with `next typegen` in the typecheck script.
- **Reason:** Version-matched docs recommend these; the site is fully static with no uncached data, so Cache Components adds no risk here.
- **Consequences:** Team must read `node_modules/next/dist/docs/` rather than rely on older Next.js knowledge; if a future feature triggers a blocking-prerender error, revisit `cacheComponents`.

## TD-20 — Approved visual system: palette, fonts and scale

- **Status:** APPROVED (owner, 19 Nov 2026).
- **Problem:** Replace the blue placeholder tokens and Geist scaffold fonts with a distinctive, accessible identity.
- **Alternatives:** keep the derived blue palette; use Inter alone; use a serif display accent; keep scaffold defaults.
- **Selected:** Deep navy `#071522` with surfaces `#0E2438` / `#14304A`; warm gold `#D8B26A`, light gold `#F0C987`, cream `#E0D0C0`, text `#F5F3EE`, muted `#A7B4C2`. Plus Jakarta Sans 800 display + Inter body (both free, self-hosted through `next/font/google`); system monospace for 11px micro-labels. 1280px container, full-viewport hero, 64/110px section rhythm, restrained radii, no glow.
- **Reason:** Gold on navy measures **9.21:1** versus 3.36:1 for the old blue; the display/body pairing matches the reference's typographic feel while staying open-source; scale creates the cinematic, one-focal-element-per-view rhythm.
- **Consequences:** Tokens are single-sourced in `src/app/globals.css`; all future components must consume them rather than hard-coding colours. Full reference in `docs/DESIGN_SYSTEM.md`.

## TD-21 — Library-free cinematic motion thesis

- **Status:** APPROVED (owner, 19 Nov 2026); implementation deferred to Phase 8.
- **Problem:** Deliver the complex, satisfying animation the owner saw on `https://enactustbs.com/?lang=fr` without adding dependencies or compromising content/accessibility.
- **Alternatives:** GSAP + ScrollTrigger; Motion/Framer Motion; AOS; hand-written CSS keyframes only.
- **Selected:** Native browser APIs modelled on the reference (which uses zero animation libraries): one `requestAnimationFrame` scroll pass writing transform custom properties, `IntersectionObserver` reveals, CSS masks/clips, SVG path drawing, canvas artwork, View Transitions. Locked values: 900ms/120ms hero, 720ms/70ms/420ms reveals, 1.02→1.08 push-in, ±80px drift, 180ms hover, shared `cubic-bezier(0.16, 1, 0.3, 1)`. Static fallback under `prefers-reduced-motion` and `html[data-motion="static"]` for slow connections.
- **Reason:** Satisfies the owner's cinematic ambition, keeps the 0 TND/no-dependency constraint, avoids layout animation, and keeps all content readable without JavaScript.
- **Consequences:** No library may be installed without asking first. Effects needing real photos, dates or statistics wait for approved content. Known reflexes kept: mono micro-labels, hairline rules, scroll cue after 48px; no glow, numbered eyebrows, three equal cards or middle-dot runs on public pages. Rendered proposal: `docs/motion-thesis.html`.

## TD-22 — Tagline and hero headline

- **Status:** APPROVED (owner, 19 Nov 2026).
- **Problem:** Public headlines and taglines must never be invented; the owner asked for a clarification question with suggested options.
- **Alternatives offered:** no tagline yet; "Dialogue. Diplomacy. Leadership."; "Sfax. Model United Nations."; "Ideas worth debating."; brand-only hero versus brand + tagline versus owner-supplied headline.
- **Selected:** Tagline **`Diplomacy. Leadership. Negotiation.`** (owner-supplied variant). Hero headline: **brand name only** — no other headline until approved page copy arrives; the tagline must not be placed in the hero.
- **Reason:** Explicit owner choice following the presented options; keeps the hero content-safe until Phase 4 copy is approved.
- **Consequences:** The tagline is approved content and may be used elsewhere when relevant. Other illustrative phrases in `docs/design-board.html` remain unpublished. Recorded in `DESIGN_SYSTEM.md` §12 and P0-T7/P2-T8.

## TD-23 — Full-viewport `groupphoto2` hero treatment

- **Status:** IMPLEMENTED (owner request, 19 Nov 2026); intensity subject to owner review. Hero pulled forward from P4-T1 into Phase 3.
- **Problem:** Owner wanted a first entry page like `https://enactustbs.com/?lang=en` — a full-bleed group photo with typography and a button over it, made slightly bluish, using the TIMUN Sfax logo and `groupphoto2`, with live changes to review.
- **Alternatives:** full image replacement/recolour of the source; left-aligned split layout; solid-colour overlay; leaving the photo untinted.
- **Selected:** Copy `assets/groupphoto2.jpg` to `public/images/hero/groupphoto2.jpg` (originals untouched). Render it with `next/image` (`fill`, `priority`, `object-cover`) at `min-h-[100svh]`. Overlay a navy `bg-surface-2/45 mix-blend-color` colour-cast layer, then a `.hero-scrim` radial gradient anchored bottom-left plus a gentle top/bottom linear gradient, modelled on the reference's `::after` scrim but in the approved navy/gold palette. Brand-name-only headline, factual mono eyebrow, one gold CTA, static scroll cue; no tagline in the hero (TD-22).
- **Reason:** Delivers the owner's desired cinematic first screen immediately with content-safe copy; reuses the approved palette; keeps the authentic photograph unaltered on disk; no dependency or heavy motion introduced (Phase 8 gate respected).
- **Consequences:** The cast/scrim values are a starting point and may be tuned per owner feedback. The official white logo sits in a transparent absolute header (`src/components/layout/site-header.tsx`); scroll-reactive solid nav is deferred to Phase 8. No desktop/mobile navigation or footer was added — those remain gated on nav structure and P0-T11/P0-T12.

---

## Approval log

| ID | Decision | Owner decision | Date |
| --- | --- | --- | --- |
| TD-01…TD-08 | Confirmed in source documentation | Approved in documentation | 19 Nov 2026 |
| TD-09 | npm | Adopted by scaffold; no objection | 19 Nov 2026 |
| TD-10 | App Router | Adopted by scaffold | 19 Nov 2026 |
| TD-11 | Image strategy | Adopted; icon crop added via TD-17 | 19 Nov 2026 |
| TD-12 | Candidate blue palette | Rejected on contrast; replaced by TD-20 | 19 Nov 2026 |
| TD-13 | Intro / custom cursor | Pending (Phase 8) | — |
| TD-14 | Documentation process | Approved by first mission request | 19 Nov 2026 |
| TD-15 | Local-only Git commits | Approved by owner | 19 Nov 2026 |
| TD-16 | Continuous Phase 0 | Approved by owner | 19 Nov 2026 |
| TD-17 | Cropped/recoloured icon treatment | Approved by owner | 19 Nov 2026 |
| TD-18 | Next.js 16 defaults | Adopted | 19 Nov 2026 |
| TD-19 | Tab title + multi-size logo icon | Approved by owner | 19 Nov 2026 |
| TD-20 | Palette, fonts and scale | Approved by owner | 19 Nov 2026 |
| TD-21 | Library-free motion thesis | Approved by owner; build in Phase 8 | 19 Nov 2026 |
| TD-22 | Tagline + brand-only hero | Approved by owner | 19 Nov 2026 |
| TD-23 | `groupphoto2` hero + navy cast/scrim | Implemented at owner request; intensity under review | 19 Nov 2026 |
