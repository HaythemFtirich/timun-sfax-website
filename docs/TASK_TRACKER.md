# TIMUN Sfax Website — Task Tracker

> **Legend:** `[ ]` Not started · `[x]` Completed · `[!]` Blocked / requires attention (see notes)
> **Companion:** `MASTER_ROADMAP.md` (phase objectives and acceptance criteria), `SESSION_HANDOVER.md` (continuity).
> **Last updated:** 19 November 2026 — Session 14 (Phase 5 events started with owner-supplied data; photos/gallery pending).

> **Rule:** A task is `[x]` only after its verification step has actually been performed and recorded. Owner-supplied content tasks remain `[!]` until the verified item is received — never simulate them with fabricated data.

---

## Phase 0 — Content Readiness & Asset Audit (continuous)

> Owner instruction 19 Nov 2026: this phase runs alongside implementation. The owner updates `assets/` and supplies approved content incrementally; blocked tasks below are re-checked as material arrives.

- [x] **P0-T1** Inspect workspace/repository state.
  - *Verification:* `C:\Users\DELL\Desktop\timun sfax` contains only `assets\` and the `.docx`; no `package.json`, no `.git`. Project not yet initialized.
- [x] **P0-T2** Read and extract the source-of-truth documentation in full.
  - *Verification:* 16 sections extracted and summarized in `PROJECT_OVERVIEW.md`.
- [x] **P0-T3** Inventory supplied assets.
  - *Verification:* 12 files — 3 logos (2 square TIMUN Sfax at 1969×1969 incl. white variant, 1 national at 820×820) + 9 JPG group photos (1080 px wide). Recorded in `PROJECT_OVERVIEW.md` §5.1.
- [x] **P0-T4** Verify local tooling.
  - *Verification:* Node v26.13.0, npm 11.20.0, npx 11.20.0, Git 2.53.0.windows.1.
- [x] **P0-T5** Derive candidate palette values from logo pixels (non-authoritative).
  - *Verification:* TIMUN Sfax logo ≈ `#607384`; national logo ≈ `#3E6589`, `#226BB4`, `#C1DFE8`; white variant `#FFFFFF`. Recorded as **candidates only** in `DESIGN_SYSTEM.md`.
- [x] **P0-T6** Owner: supply/approve final English copy (About, mission, vision, values).
  - *Dependency of:* P4-T1…T3, P4-T8. *Verification:* owner approved all documentation history and delegated mission/vision/values wording on 19 Nov 2026; recorded in `PHASE4_CONTENT_PROPOSAL.md` and TD-25.
  - *Notes:* English copy single-sourced in `src/content/site.ts` and `src/content/about.ts`; historical claims faithful to documentation §2.1–2.2.
- [x] **P0-T7** Owner: approve or reject proposed tagline.
  - *Dependency of:* P4-T1. *Verification:* owner chose **`Diplomacy. Leadership. Negotiation.`** on 19 Nov 2026 after a clarification question with suggested options; recorded in `DESIGN_SYSTEM.md` §12 and TD-22. Hero headline remains brand name only.
- [!] **P0-T8** Owner: supply verified event data + selected photographs.
  - *Dependency of:* P5-T1…T6. *Verification:* one approved dataset per publishable event.
  - *Notes (19 Nov 2026, Session 14):* owner supplied verified text details for three events — GeekMUN, The Great MUN and RedMUN (name, description, date, location) — published in `src/content/events.ts` and on `/events`. Selected photographs and click-through gallery assets are still outstanding; do not invent placeholders. Additional events may be supplied later.
- [!] **P0-T9** Owner: supply final study-guide PDFs + titles/descriptions/keywords.
  - *Dependency of:* P6-T1…T6. *Verification:* files open and metadata matches.
- [!] **P0-T10** Owner: supply current board names, official positions, portraits, profile links.
  - *Dependency of:* P4-T4, P7-T1…T2. *Verification:* complete per-member dataset.
- [!] **P0-T11** Owner: supply partner logos, names, descriptions.
  - *Dependency of:* P3-T4 (footer grid), P4 (homepage grid). *Verification:* assets load and names correct.
- [!] **P0-T12** Owner: supply contact details, social URLs, Google Forms URL, copyright wording.
  - *Dependency of:* P3-T4, P7-T3…T5. *Verification:* all links opened and confirmed.
- [x] **P0-T13** Owner: verify historical claims (dates, current club count, patronage, report).
  - *Dependency of:* P4-T6…T8. *Verification:* owner confirmed "whats written in the documentation from infos about timun history annd timun sfax is all approved" on 19 Nov 2026; recorded in `PHASE4_CONTENT_PROPOSAL.md` and TD-25.
  - *Notes:* covers 2009 founding, April 2010 first conference, 2012 expansion, 20 clubs, High Patronage since 2015, final report to government, and the 2018 Sfax dates.
- [x] **P0-T14** Create Markdown documentation management structure.
  - *Verification:* `docs/` contains 9 management files + top-level `README.md`.

---

## Phase 1 — Project Setup

- [x] **P1-T1** Scaffold Next.js application (App Router, TypeScript, Tailwind CSS).
  - *Verification:* `create-next-app@16.4.6` used; Next.js 16.4.6, React 19.3.0, Tailwind 4.3.3 in `package.json`; app boots.
- [x] **P1-T2** Configure TypeScript, ESLint, minimal formatting conventions.
  - *Verification:* `eslint.config.mjs` (flat config) from scaffold; `npm run lint` exits 0; `npm run typecheck` (`next typegen && tsc --noEmit`) exits 0. No extra packages added.
- [x] **P1-T3** Create folder structure from `ARCHITECTURE.md`.
  - *Verification:* `src/components/{layout,navigation,sections,cards,galleries,ui}`, `src/content`, `src/lib`, and all `public/images/*` + `public/documents/study-guides` directories created with `.gitkeep`.
- [x] **P1-T4** Add base global styles and token placeholders.
  - *Verification:* `src/app/globals.css` contains navy/blue placeholder tokens, visible focus, and a global reduced-motion fallback; styles compile in build.
- [x] **P1-T5** Expand `README.md` with local setup instructions.
  - *Verification:* README documents setup, verification commands, layout, and the local-only Git agreement.
- [x] **P1-T6** Initialize Git locally and make the initial commit. No remote/push.
  - *Verification:* `git init` + initial commit at project root; no remote configured; `.docx` ignored; no secrets/artifacts staged.
- [x] **P1-T7** Verify dev server, lint, typecheck, production build.
  - *Verification:* dev server HTTP 200 at `http://localhost:3000` (home, `lang="en"`, icon links, `/icon.png`, `/apple-icon.png` all 200); `npm run lint`, `npm run typecheck`, `npm run build` all exit 0; build output shows 4 static routes.
- [x] **P1-T8** Derive and install the app icon from `timunsfaxlogo.png` (owner-authorised).
  - *Verification:* only fully transparent padding removed — bounds of all pixels with alpha > 0 are `(326,251)–(1582,1181)` = 1257×931; every ARGB byte preserved; transparently padded to 1257×1257 squares in `public/images/branding/`; 512×512 navy tile with white mark at `src/app/icon.png` and `apple-icon.png`; both serve HTTP 200.

---

## Phase 2 — Design System

- [x] **P2-T1** Finalize color tokens from approved references.
  - *Verification:* navy/gold system approved by owner; single-sourced in `src/app/globals.css` and documented in `DESIGN_SYSTEM.md` §2. Old blue retired (3.36:1).
- [x] **P2-T2** Select free font pairings and define type scale.
  - *Verification:* Plus Jakarta Sans 800 + Inter, both free/OFL, self-hosted via `next/font/google`; fluid scale documented in `DESIGN_SYSTEM.md` §3.
- [x] **P2-T3** Define spacing, radii, borders and containers (no glow).
  - *Verification:* 1280px container, 64/110px section rhythm, 8/12/18px radii, hairline borders in globals.css and `DESIGN_SYSTEM.md` §4.
- [x] **P2-T4** Build static UI primitives.
  - *Verification:* `Container`, `Section`, `SectionHeading`, `Button`/`ButtonLink`, `Card` implemented in `src/components/ui/` and exported via `index.ts`; computed styles checked in browser. `Reveal` deliberately deferred to Phase 8 with the motion gate — content visible by default.
- [x] **P2-T5** Document logo sizing/clear-space rules for light and dark backgrounds.
  - *Verification:* `DESIGN_SYSTEM.md` §7; no distortion and originals untouched (TD-17/TD-19).
- [ ] **P2-T6** Owner approval of `DESIGN_SYSTEM.md`.
  - *Verification:* owner sign-off recorded. Direction, fonts, thesis, tagline and hero approach are approved; the rewritten document itself still awaits explicit sign-off.
- [x] **P2-T7** Capture and approve the cinematic interaction thesis.
  - *Verification:* rendered `docs/motion-thesis.html` approved with exact values; documented in `DESIGN_SYSTEM.md` §5. No motion library installed; no motion code written (TD-21).
- [x] **P2-T8** Owner clarification on tagline and hero headline with suggested options.
  - *Verification:* tagline `Diplomacy. Leadership. Negotiation.` approved; hero = brand name only; recorded in `DESIGN_SYSTEM.md` §12 and TD-22.

---

## Phase 3 — Shared Layout & Navigation

> Owner request 19 Nov 2026: the `groupphoto2` hero (P4-T1) was pulled forward so it could be reviewed live. It was built in this session with only content-safe copy.

- [x] **P3-T1** Root layout with default metadata and font loading.
  - *Dependencies:* P2. *Verification:* `<title>` exactly `TIMUN Sfax`, Inter body + Plus Jakarta Sans headings and icon links confirmed in page source and live browser (Session 05).
- [!] **P3-T2** Desktop navigation (transparent over hero → solid on scroll; active states).
  - *Dependencies:* P3-T1. *Verification:* behavior checked on a scrollable page.
  - *Notes:* nav structure/routes not defined yet; scroll-reactive solid state belongs to Phase 8 motion gate.
- [!] **P3-T3** Accessible mobile menu.
  - *Dependencies:* P3-T1. *Verification:* keyboard-only open/close/navigate; visible focus.
  - *Notes:* blocked on nav structure.
- [!] **P3-T4** Footer (logos, description, contact, quick links, partners, social, copyright).
  - *Dependencies:* P0-T11, P0-T12, P2-T4. *Verification:* all links correct; partner grid loads.
  - *Notes:* blocked until partner assets and contact/copyright details are supplied.
- [ ] **P3-T5** Skip-to-content link and page transition wrapper.
  - *Dependencies:* P3-T1. *Verification:* skip link works via keyboard.
  - *Notes:* skip link delivered and present in DOM (`#main`); page transition wrapper deferred to Phase 8.
- [ ] **P3-T6** `not-found` (404) page and shared empty/loading states.
  - *Dependencies:* P3-T1. *Verification:* unknown route shows styled 404.
  - *Notes:* styled 404 delivered and verified (`Page not found` + `Back to TIMUN Sfax`); shared empty/loading states arrive with their content phases.
- [x] **P3-T7** Full-viewport `groupphoto2` hero, pulled forward from P4-T1 at owner request.
  - *Dependencies:* P2-T4, P0-T7. *Verification:* 100svh hero, `groupphoto2` LCP image with `priority`, navy `mix-blend-color` cast + radial scrim active, brand-name-only headline, `Discover TIMUN Sfax` CTA, official logo in transparent header; all confirmed live and via `npm run lint/typecheck/build` (Session 05).

---

## Phase 4 — Home & About

> Owner approval 19 Nov 2026: all documentation history approved, and mission/vision/values wording delegated to the developer. See `PHASE4_CONTENT_PROPOSAL.md` and TD-25.

- [x] **P4-T1** Home hero (photo, dark-blue overlay, headline, intro, "Discover TIMUN Sfax" CTA).
  - *Dependencies:* P3, P0-T6, P0-T7. *Verification:* hero delivered Phase 3; LCP `preload`, q95, upscaled source, scrim active; approved intro copy now on the page (Session 06).
- [x] **P4-T2** Home About preview + national affiliation explanation.
  - *Dependencies:* P0-T6. *Verification:* `src/components/sections/about-preview.tsx` renders approved §2.2 copy and national logo/network explanation; checked live.
- [x] **P4-T3** Home mission/vision/values blocks.
  - *Dependencies:* P0-T6. *Verification:* `principles.tsx` renders all three as stacked editorial rows (no three-equal-card tell); copy single-sourced in `src/content/about.ts`.
- [!] **P4-T4** Home Executive Board preview (structure only until verified data).
  - *Dependencies:* P0-T10 for final content. *Verification:* no invented members published.
  - *Notes:* held deliberately — no board names/portraits supplied, so no preview section was published.
- [x] **P4-T5** About anchor/section navigation.
  - *Dependencies:* P3. *Verification:* four anchors in `src/app/about/page.tsx`; all four target IDs confirmed present in the live DOM.
- [x] **P4-T6** About national TIMUN + TIMUN Sfax sections kept separate.
  - *Dependencies:* P0-T13. *Verification:* separate `#national` and `#sfax` sections; approved claims only.
- [x] **P4-T7** About timeline, storytelling blocks, photography.
  - *Dependencies:* P0-T6, assets. *Verification:* five approved milestones in `timeline.tsx`; authentic group photos with alt text; no horizontal overflow.
- [x] **P4-T8** Proofread all Home/About copy.
  - *Dependencies:* P4-T1…T7. *Verification:* every historical claim traced to documentation §2.1–2.2; vision/value copy original under owner delegation; lint, typecheck, build all exit 0.

---

## Phase 5 — Events Overview & Detail

- [x] **P5-T1** Define event content model.
  - *Dependencies:* P0-T8. *Verification:* `src/content/events.ts` defines `EventEntry` (slug, title, description, date, location) and the three owner-supplied events. Duration/gallery fields and image data are intentionally omitted until the owner supplies them; extend the model when photos arrive.
- [x] **P5-T2** Build `/events` overview and event cards.
  - *Dependencies:* P3, P5-T1. *Verification:* `/events` renders an editorial typographic card grid for the three approved events with dates, locations and links to detail pages; no photographs or placeholders. Photographic treatment is held until owner-supplied images arrive (P5-T5).
- [x] **P5-T3** Build `/events/[slug]` detail template with static params.
  - *Dependencies:* P5-T1. *Verification:* `generateStaticParams` prerenders `geekmun`, `the-great-mun`, `redmun`; detail pages render approved data, metadata, and back links; unknown slugs return 404. Params access wrapped in `<Suspense>` for Next.js 16 Cache Components dev compatibility.
- [!] **P5-T4** Build accessible photo gallery with slideshow controls.
  - *Dependencies:* P5-T3, owner-supplied images. *Verification:* keyboard controls; reduced-motion respected.
  - *Notes:* held — owner will add pictures and a click-through gallery later; no fabricated assets or placeholders.
- [!] **P5-T5** Optimize event imagery.
  - *Dependencies:* assets. *Verification:* responsive sizes; lazy loading below fold.
  - *Notes:* blocked on owner-supplied event photographs.
- [x] **P5-T6** Verify published event data against approved source.
  - *Dependencies:* P0-T8 (text data). *Verification:* GeekMUN, The Great MUN and RedMUN match the owner-supplied details from 19 Nov 2026 exactly in meaning (date, location, description); no invented facts, durations, outcomes or photos. Re-verify when photos or additional events are added.

---

## Phase 6 — Study Guides Library

- [ ] **P6-T1** Define study-guide content model.
  - *Dependencies:* P0-T9. *Verification:* type covers title, description, keywords/subject, file path.
- [ ] **P6-T2** Place approved PDFs in `public/documents/study-guides/`.
  - *Dependencies:* P0-T9. *Verification:* descriptive filenames; files open.
- [ ] **P6-T3** Build search by title/keyword.
  - *Dependencies:* P6-T1. *Verification:* correct results; accessible labels.
- [ ] **P6-T4** Build result cards with download links.
  - *Dependencies:* P6-T2. *Verification:* all download links work.
- [ ] **P6-T5** Add empty/no-results states and route metadata.
  - *Dependencies:* P6-T3. *Verification:* states render correctly.
- [ ] **P6-T6** Test every PDF download.
  - *Dependencies:* P6-T4. *Verification:* each PDF opens; no login required.

---

## Phase 7 — Executive Board & Contact

- [ ] **P7-T1** Define board member content model.
  - *Dependencies:* P0-T10. *Verification:* type covers name, position, portrait, professional links.
- [ ] **P7-T2** Build `/executive-board` grid; current board only.
  - *Dependencies:* P0-T10. *Verification:* consistent crops; no former members.
- [ ] **P7-T3** Build social section component (Facebook, Instagram, LinkedIn, TikTok).
  - *Dependencies:* P0-T12. *Verification:* Instagram is outbound link only; icons labeled.
- [ ] **P7-T4** Build `/contact` with email, phone, contact person, socials, Google Forms link.
  - *Dependencies:* P0-T12. *Verification:* all details correct; no embedded form.
- [ ] **P7-T5** Verify all external URLs.
  - *Dependencies:* P7-T3…T4. *Verification:* every link opened and confirmed.

---

## Phase 8 — Motion & Polish

- [x] **P8-T1** Image mask/reveal, line-by-line text, fade/slide motion primitives.
  - *Dependencies:* P4 structure. *Verification:* one `IntersectionObserver` in `src/components/motion/scroll-reveal.tsx`; 720ms reveal / 70ms stagger; per-digit rise; verified live on both routes (Session 07).
- [ ] **P8-T2** Selective GSAP/ScrollTrigger sequences (parallax, pinned).
  - *Dependencies:* P8-T1. *Verification:* only justified uses; no scroll hijacking. *Notes:* no library installed; native CSS/observer used instead.
- [!] **P8-T3** Page transitions and hover states (zoom, animated borders, restrained glow).
  - *Dependencies:* P8-T1. *Verification:* consistent across components.
  - *Notes:* Session 07 delivered hover states (1.02→1.08 photo push-in, hairline draw, stat-tile colour change). Page transitions still deferred; "restrained glow" is a design-system tell and was not implemented (see TD-26).
- [ ] **P8-T4** Gallery polish and slideshow transitions.
  - *Dependencies:* P5-T4. *Verification:* keyboard/reduced-motion support retained.
- [ ] **P8-T5** Optional short logo intro (skippable, non-blocking).
  - *Dependencies:* owner approval. *Verification:* content accessible immediately.
- [ ] **P8-T6** Optional custom cursor (pointer devices only).
  - *Dependencies:* owner approval. *Verification:* disabled on touch; focus state intact.
- [x] **P8-T7** Reduced-motion handling and mobile adaptation.
  - *Dependencies:* P8-T1. *Verification:* `prefers-reduced-motion` and `html[data-motion="static"]` land every reveal in its finished state; `<noscript>` style keeps content visible without JavaScript; no horizontal overflow on either route (Session 07).
- [x] **P8-T8** Timeline scroll/drag polish, numbers closing tile and section photos (Session 09).
  - *Verification:* traveller `top` equals `progress × rail height` at all sampled scroll positions in both directions; drag and ← → / Home / End scrub the active year without page scroll; six approved figures plus closing tile on both routes; one photo each in Mission and Vision; lint/typecheck/build pass; no console warnings.
  - *Notes:* closing-tile wording awaiting owner confirmation (TD-27).

---

## Phase 9 — SEO, Accessibility, Performance & QA

- [ ] **P9-T1** Unique per-route metadata, Open Graph, canonical URLs.
  - *Verification:* page source inspected on every route.
- [ ] **P9-T2** `sitemap.xml`, `robots.txt`, factual structured data only.
  - *Verification:* both files reachable; no invented organization data.
- [ ] **P9-T3** Automated checks: lint, typecheck, production build.
  - *Verification:* all pass.
- [ ] **P9-T4** Responsive matrix (desktop, tablet, mobile).
  - *Verification:* no overflow/clipping; touch targets comfortable.
- [ ] **P9-T5** Accessibility review.
  - *Verification:* headings, alt text, contrast, keyboard, focus, reduced motion.
- [ ] **P9-T6** Browser checks (Chrome/Edge/Firefox/Safari where practical).
  - *Verification:* results recorded.
- [ ] **P9-T7** Link, PDF, gallery, asset checks.
  - *Verification:* all load; no broken internal/external links.
- [ ] **P9-T8** Performance/Lighthouse audit and image review.
  - *Verification:* scores and issues recorded; images optimized.
- [ ] **P9-T9** Sign off AC-01…AC-14.
  - *Verification:* each criterion marked verified or pending deployment.

---

## Phase 10 — Deployment & Handover

- [ ] **P10-T1** Confirm GitHub repository and Vercel project (free plan).
  - *Dependencies:* P9, owner accounts. *Verification:* both configured.
- [ ] **P10-T2** Configure framework preset, build settings, production branch.
  - *Verification:* build succeeds on Vercel.
- [ ] **P10-T3** Verify automatic + preview deployments.
  - *Verification:* a test push triggers a deployment.
- [ ] **P10-T4** Check current Vercel free-plan limits; no paid add-ons.
  - *Verification:* documented in `DEPLOYMENT_GUIDE.md`.
- [ ] **P10-T5** Verify live production URL and critical flows.
  - *Verification:* live smoke test passed.
- [ ] **P10-T6** Finalize `README.md` and `DEPLOYMENT_GUIDE.md`.
  - *Verification:* maintenance instructions complete.
- [ ] **P10-T7** Final handover and owner sign-off.
  - *Verification:* `SESSION_HANDOVER.md` finalized.

---

## Quick reference — blockers at a glance

| Blocker | Owner task | Blocks |
| --- | --- | --- |
| Approved English copy / verified history | P0-T6, P0-T13 | Phase 4 |
| Tagline decision | P0-T7 | P4-T1 |
| Event photographs / gallery assets | P0-T8 (text data for 3 events supplied 19 Nov 2026) | Phase 5 gallery/imagery completion |
| Study-guide PDFs + metadata | P0-T9 | Phase 6 |
| Board profiles + portraits | P0-T10 | P4-T4, Phase 7 |
| Partner assets | P0-T11 | P3-T4, Phase 4 |
| Contact details + URLs + copyright | P0-T12 | P3-T4, Phase 7 |
| Phase 1 review | Owner review of the completed setup | Phase 2 |
