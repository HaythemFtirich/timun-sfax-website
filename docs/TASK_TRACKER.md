# TIMUN Sfax Website — Task Tracker

> **Legend:** `[ ]` Not started · `[x]` Completed · `[!]` Blocked / requires attention (see notes)
> **Companion:** `MASTER_ROADMAP.md` (phase objectives and acceptance criteria), `SESSION_HANDOVER.md` (continuity).
> **Last updated:** 19 November 2026 — Session 01.

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
- [ ] **P0-T6** Owner: supply/approve final English copy (About, mission, vision, values).
  - *Dependency of:* P4-T1…T3, P4-T8. *Verification:* written approval recorded in `TECHNICAL_DECISIONS.md`.
  - *Notes:* French source material exists in the documentation; final approved English wording required.
- [!] **P0-T7** Owner: approve or reject proposed tagline "Dialogue. Diplomacy. Leadership."
  - *Dependency of:* P4-T1. *Verification:* decision recorded; tagline omitted if not approved.
- [!] **P0-T8** Owner: supply verified event data + selected photographs.
  - *Dependency of:* P5-T1…T6. *Verification:* one approved dataset per publishable event.
- [!] **P0-T9** Owner: supply final study-guide PDFs + titles/descriptions/keywords.
  - *Dependency of:* P6-T1…T6. *Verification:* files open and metadata matches.
- [!] **P0-T10** Owner: supply current board names, official positions, portraits, profile links.
  - *Dependency of:* P4-T4, P7-T1…T2. *Verification:* complete per-member dataset.
- [!] **P0-T11** Owner: supply partner logos, names, descriptions.
  - *Dependency of:* P3-T4 (footer grid), P4 (homepage grid). *Verification:* assets load and names correct.
- [!] **P0-T12** Owner: supply contact details, social URLs, Google Forms URL, copyright wording.
  - *Dependency of:* P3-T4, P7-T3…T5. *Verification:* all links opened and confirmed.
- [!] **P0-T13** Owner: verify historical claims (dates, current club count, patronage, report).
  - *Dependency of:* P4-T6…T8. *Verification:* each claim checked off in an approval note.
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

- [ ] **P2-T1** Finalize color tokens from approved references.
  - *Dependencies:* P0-T5 candidates + owner approval. *Verification:* tokens approved in `DESIGN_SYSTEM.md`.
- [ ] **P2-T2** Select free font pairings and define type scale.
  - *Dependencies:* owner approval. *Verification:* font license is free; scale documented.
- [ ] **P2-T3** Define spacing, radii, borders, shadows/glow, containers.
  - *Dependencies:* P2-T1. *Verification:* token file complete.
- [ ] **P2-T4** Build UI primitives (Button, Container, SectionHeading, Card, Reveal).
  - *Dependencies:* P1, P2-T1…T3. *Verification:* primitives render at all breakpoints.
- [ ] **P2-T5** Document logo sizing/clear-space rules for light and dark backgrounds.
  - *Dependencies:* owner brand rules if any. *Verification:* documented; no distortion.
- [ ] **P2-T6** Owner approval of `DESIGN_SYSTEM.md`.
  - *Verification:* owner sign-off recorded.

---

## Phase 3 — Shared Layout & Navigation

- [ ] **P3-T1** Root layout with default metadata and font loading.
  - *Dependencies:* P2. *Verification:* metadata appears in page source.
- [ ] **P3-T2** Desktop navigation (transparent over hero → solid on scroll; active states).
  - *Dependencies:* P3-T1. *Verification:* behavior checked on a scrollable page.
- [ ] **P3-T3** Accessible mobile menu.
  - *Dependencies:* P3-T1. *Verification:* keyboard-only open/close/navigate; visible focus.
- [ ] **P3-T4** Footer (logos, description, contact, quick links, partners, social, copyright).
  - *Dependencies:* P0-T11, P0-T12, P2-T4. *Verification:* all links correct; partner grid loads.
- [ ] **P3-T5** Skip-to-content link and page transition wrapper.
  - *Dependencies:* P3-T1. *Verification:* skip link works via keyboard.
- [ ] **P3-T6** `not-found` (404) page and shared empty/loading states.
  - *Dependencies:* P3-T1. *Verification:* unknown route shows styled 404.

---

## Phase 4 — Home & About

- [ ] **P4-T1** Home hero (photo, dark-blue overlay, headline, intro, "Discover TIMUN Sfax" CTA).
  - *Dependencies:* P3, P0-T6, P0-T7. *Verification:* LCP image prioritized; overlay contrast passes.
- [ ] **P4-T2** Home About preview + national affiliation explanation.
  - *Dependencies:* P0-T6. *Verification:* copy matches approved source.
- [ ] **P4-T3** Home mission/vision/values blocks.
  - *Dependencies:* P0-T6. *Verification:* approved wording only.
- [ ] **P4-T4** Home Executive Board preview (structure only until verified data).
  - *Dependencies:* P0-T10 for final content. *Verification:* no invented members published.
- [ ] **P4-T5** About anchor/section navigation.
  - *Dependencies:* P3. *Verification:* anchors work; keyboard accessible.
- [ ] **P4-T6** About national TIMUN + TIMUN Sfax sections kept separate.
  - *Dependencies:* P0-T13. *Verification:* verified claims only.
- [ ] **P4-T7** About timeline, storytelling blocks, photography.
  - *Dependencies:* P0-T6, assets. *Verification:* authentic images with alt text.
- [ ] **P4-T8** Proofread all Home/About copy.
  - *Dependencies:* P4-T1…T7. *Verification:* owner-approved source comparison.

---

## Phase 5 — Events Overview & Detail

- [ ] **P5-T1** Define event content model.
  - *Dependencies:* P0-T8. *Verification:* type covers title, slug, overview, date, location, duration, gallery.
- [ ] **P5-T2** Build `/events` editorial photographic grid.
  - *Dependencies:* P3, P5-T1. *Verification:* cards use consistent crops/alt text.
- [ ] **P5-T3** Build `/events/[slug]` detail template with static params.
  - *Dependencies:* P5-T1. *Verification:* each approved event resolves to a route.
- [ ] **P5-T4** Build accessible photo gallery with slideshow controls.
  - *Dependencies:* P5-T3. *Verification:* keyboard controls; reduced-motion respected.
- [ ] **P5-T5** Optimize event imagery.
  - *Dependencies:* assets. *Verification:* responsive sizes; lazy loading below fold.
- [ ] **P5-T6** Verify published event data against approved source.
  - *Dependencies:* P0-T8. *Verification:* no invented facts.

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

- [ ] **P8-T1** Image mask/reveal, line-by-line text, fade/slide motion primitives.
  - *Dependencies:* P4–P7 structure. *Verification:* purposeful, short timelines.
- [ ] **P8-T2** Selective GSAP/ScrollTrigger sequences (parallax, pinned).
  - *Dependencies:* P8-T1. *Verification:* only justified uses; no scroll hijacking.
- [ ] **P8-T3** Page transitions and hover states (zoom, borders, restrained glow).
  - *Dependencies:* P8-T1. *Verification:* consistent across components.
- [ ] **P8-T4** Gallery polish and slideshow transitions.
  - *Dependencies:* P5-T4. *Verification:* keyboard/reduced-motion support retained.
- [ ] **P8-T5** Optional short logo intro (skippable, non-blocking).
  - *Dependencies:* owner approval. *Verification:* content accessible immediately.
- [ ] **P8-T6** Optional custom cursor (pointer devices only).
  - *Dependencies:* owner approval. *Verification:* disabled on touch; focus state intact.
- [ ] **P8-T7** Reduced-motion handling and mobile adaptation.
  - *Dependencies:* P8-T1…T6. *Verification:* OS reduced-motion setting honored everywhere.

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
| Event data + photos | P0-T8 | Phase 5 |
| Study-guide PDFs + metadata | P0-T9 | Phase 6 |
| Board profiles + portraits | P0-T10 | P4-T4, Phase 7 |
| Partner assets | P0-T11 | P3-T4, Phase 4 |
| Contact details + URLs + copyright | P0-T12 | P3-T4, Phase 7 |
| Phase 1 review | Owner review of the completed setup | Phase 2 |
