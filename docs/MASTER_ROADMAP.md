# TIMUN Sfax Website — Master Roadmap

> **Version:** 1.2 · **Date:** 19 November 2026 · **Owner:** TIMUN Sfax / project owner
> **Governance:** A phase is marked COMPLETED only when **all** its acceptance criteria are satisfied and verified. No phase may be skipped.
>
> **Owner instruction (19 Nov 2026):** Phase 0 (content readiness) is now **continuous** — the owner updates content/assets in place as each phase progresses, rather than front-loading everything. Git is **local-only** for now: commit locally, no remote and no push until the final deployment stage.

---

## Status legend

| Status | Meaning |
| --- | --- |
| NOT STARTED | No work performed yet. |
| IN PROGRESS | Active work underway; not all criteria met. |
| BLOCKED | Cannot complete until a dependency is resolved (reason recorded). |
| REVIEW REQUIRED | Work is done and verified; awaiting owner review/approval. |
| COMPLETED | All acceptance criteria satisfied and documented. |

---

## Progress summary

| Phase | Name | Status | Blocked by |
| --- | --- | --- | --- |
| 0 | Content Readiness & Asset Audit (continuous) | IN PROGRESS | Owner adds content/assets incrementally |
| 1 | Project Setup (Next.js + TS + Tailwind + local Git) | COMPLETED | Owner accepted Phase 1 |
| 2 | Design System | REVIEW REQUIRED | Implementation verified; awaiting owner sign-off on `DESIGN_SYSTEM.md` |
| 3 | Shared Layout & Navigation | NOT STARTED | Phase 2 |
| 4 | Home & About | BLOCKED | Phase 3; approved copy, tagline, verified history |
| 5 | Events Overview & Detail | BLOCKED | Phase 3; verified event data + photos |
| 6 | Study Guides Library | BLOCKED | Phase 3; final PDFs + metadata |
| 7 | Executive Board & Contact | BLOCKED | Phase 3; board data, contact details, URLs |
| 8 | Motion & Polish | NOT STARTED | Phases 4–7 structure |
| 9 | SEO, Accessibility, Performance & QA | NOT STARTED | Phase 8 |
| 10 | Deployment & Handover | NOT STARTED | Phase 9; owner GitHub/Vercel accounts (pushed at final stage) |

> **Important nuance:** Phase 0 now runs alongside every other phase — the owner adds content/assets to the workspace as work progresses. Phases 4–7 are blocked from *completion* by missing approved content, but structural scaffolding may be built early — never with invented data.

---

## Phase 0 — Content Readiness & Asset Audit

- **Objective:** Establish what exists, what is verified, and track the content the owner supplies incrementally as each phase progresses.
- **Dependencies:** None.
- **Current status:** IN PROGRESS — continuous throughout the project (owner instruction, 19 Nov 2026).

### Tasks
- **P0-T1** Inspect workspace/repository state.
- **P0-T2** Read and extract requirements from the source-of-truth documentation.
- **P0-T3** Inventory supplied assets (file names, formats, dimensions).
- **P0-T4** Verify available local tooling (Node, npm, Git).
- **P0-T5** Derive candidate palette values from logo pixels (non-authoritative).
- **P0-T6** Owner: supply/approve final English copy (About, mission, vision, values).
- **P0-T7** Owner: approve or reject the proposed tagline.
- **P0-T8** Owner: supply verified event data + selected photographs.
- **P0-T9** Owner: supply final study-guide PDFs + titles/descriptions/keywords.
- **P0-T10** Owner: supply current board names, roles, portraits, profile links.
- **P0-T11** Owner: supply partner logos, names, descriptions.
- **P0-T12** Owner: supply contact details, social URLs, Google Forms URL, copyright wording.
- **P0-T13** Owner: verify historical claims (dates, club count, patronage, report).
- **P0-T14** Create the Markdown documentation management structure.

### Subtasks / detail
- Subtasks for P0-T1…T5 and T14 are recorded as completed in `TASK_TRACKER.md`.
- Owner tasks P0-T6…T13 are tracked with `[!]` and must not be filled with fabricated content.

### Expected deliverables
- Completed workspace/asset audit.
- This documentation set (`docs/` + top-level `README.md`).
- A precise content-gap register (in `TASK_TRACKER.md`).

### Acceptance criteria
- **AC-P0-1** Workspace inspected; no pre-existing project overwritten.
- **AC-P0-2** Source documentation read in full.
- **AC-P0-3** All supplied assets inventoried.
- **AC-P0-4** Every missing content item identified and assigned to the owner.
- **AC-P0-5** No fabricated content published anywhere.

---

## Phase 1 — Project Setup

- **Objective:** A locally running Next.js + React + TypeScript + Tailwind project with linting, base structure, an app icon, and a local Git baseline.
- **Dependencies:** P0-T1…T5 complete. GitHub remote/push is explicitly deferred to Phase 10.
- **Current status:** COMPLETED — all criteria verified; owner accepted Phase 1.

### Tasks
- **P1-T1** Scaffold the Next.js application (App Router, TypeScript, Tailwind CSS).
- **P1-T2** Configure TypeScript, ESLint, and formatting conventions (minimal dependencies).
- **P1-T3** Create the folder structure defined in `ARCHITECTURE.md`.
- **P1-T4** Add base global styles and token placeholders.
- **P1-T5** Expand `README.md` with local setup instructions.
- **P1-T6** Initialize Git locally and make the initial commit. **No remote, no push** until Phase 10.
- **P1-T7** Verify `npm run dev`, lint, typecheck, and production build.
- **P1-T8** Derive and install the app icon from the supplied `timunsfaxlogo.png` (owner-authorised crop/recolour).

### Expected deliverables
- Running local project; local Git baseline with initial commit; app icon; verified build outputs.

### Acceptance criteria
- **AC-P1-1** `npm run dev` serves the app locally (verified HTTP 200 at `http://localhost:3000`).
- **AC-P1-2** `npm run lint`, `npm run typecheck`, and `npm run build` all pass.
- **AC-P1-3** Local Git repository has an initial commit; no secrets, artifacts, or internal `.docx` committed; no remote configured.
- **AC-P1-4** No paid dependency or service introduced.
- **AC-P1-5** App icon renders correctly from the cropped official logo.

---

## Phase 2 — Design System

- **Objective:** Approved, reusable visual foundations: palette, typography, spacing, radii, buttons, cards, containers, responsive rules, and logo usage.
- **Dependencies:** Phase 1 (complete); P0-T5 derived colors; owner approval of palette, fonts and motion thesis (received 19 Nov 2026).
- **Current status:** REVIEW REQUIRED — tokens, fonts, scale, motion specification and static primitives are implemented and verified; awaiting owner sign-off on `DESIGN_SYSTEM.md`.

### Tasks
- **P2-T1** Finalize color tokens from approved references (candidates already derived).
- **P2-T2** Select free, self-hostable/Google font pairings and define the type scale.
- **P2-T3** Define spacing, radii, borders and container widths (no glow).
- **P2-T4** Build static UI primitives (Button/ButtonLink, Container, Section, SectionHeading, Card shell). Reveal is deferred to Phase 8 with the motion gate.
- **P2-T5** Document logo sizing/clear-space rules for light and dark backgrounds.
- **P2-T6** Get owner approval of `DESIGN_SYSTEM.md`.
- **P2-T7** Capture and approve the cinematic interaction thesis (`docs/motion-thesis.html`); exact values documented, implementation deferred to Phase 8.
- **P2-T8** Owner clarification on tagline and hero headline with suggested options.

### Expected deliverables
- Approved design system document; token definitions; reusable primitives.

### Acceptance criteria
- **AC-P2-1** Tokens documented and explicitly approved.
- **AC-P2-2** Primitives render correctly at all breakpoints.
- **AC-P2-3** Text/background contrast verified.
- **AC-P2-4** Logos are never stretched, recolored, cropped, or distorted.
- **AC-P2-5** Approved motion thesis is documented with exact values; no motion library installed and no motion code written in Phase 2.
- **AC-P2-6** Tagline (`Diplomacy. Leadership. Negotiation.`) and brand-name-only hero decision are recorded in `DESIGN_SYSTEM.md`.

---

## Phase 3 — Shared Layout & Navigation

- **Objective:** A global shell — navigation, mobile menu, footer, transitions, and shared components — working across all routes.
- **Dependencies:** Phase 2.
- **Current status:** IN PROGRESS — layout shell, hero, header and 404 delivered; nav/footer gated on content and Phase 8 motion.
- **Owner request (19 Nov 2026):** the full-viewport `groupphoto2` hero (P4-T1) was pulled forward into this session so the owner could watch it live. It uses only the approved brand name and factual metadata; the tagline is deliberately excluded per TD-22.

### Tasks
- **P3-T1** Root layout with default metadata and font loading. — **DONE** (verified in page source and browser; metadata/fonts already established in P1/P2).
- **P3-T2** Desktop navigation (transparent over hero → solid navy on scroll; active states). — **BLOCKED**: nav structure/routes not yet defined; scroll-solid transition belongs to Phase 8.
- **P3-T3** Accessible mobile menu (keyboard operable, visible focus, no horizontal overflow). — **BLOCKED**: depends on nav structure.
- **P3-T4** Footer (both logos, description, contact details, quick links, partner logos, social links, copyright). — **BLOCKED** on P0-T11 / P0-T12.
- **P3-T5** Skip-to-content link and page transition wrapper. — **PARTIAL**: skip link done and verified; page transition wrapper deferred to Phase 8.
- **P3-T6** Custom `not-found` (404) page and shared empty/loading states. — **PARTIAL**: styled 404 done and verified; shared empty/loading states to arrive with their content phases.

### Expected deliverables
- Working global layout and navigation system.

### Acceptance criteria
- **AC-P3-1** All routes reachable from nav/footer.
- **AC-P3-2** Mobile menu fully keyboard operable with visible focus.
- **AC-P3-3** No horizontal overflow or text clipping at narrow/wide viewports.
- **AC-P3-4** External links sourced from a single config file.

---

## Phase 4 — Home & About

- **Objective:** A cinematic homepage and a unified About page using approved content and authentic photography.
- **Dependencies:** Phase 3; P0-T6, P0-T7, P0-T13; board preview depends on P0-T10 (structure only until data is verified).
- **Current status:** BLOCKED — approved English copy, tagline decision, and verified history not yet supplied.

### Tasks
- **P4-T1** Home: hero with large photo, dark-blue overlay, headline, intro, "Discover TIMUN Sfax" CTA. — **photo/treatment delivered early in Phase 3** at owner request (see above); intro/description copy still awaits P0-T6.
- **P4-T2** Home: About preview + national affiliation explanation.
- **P4-T3** Home: mission/vision/values blocks (approved wording only).
- **P4-T4** Home: Executive Board preview (structure only; real verified members when supplied).
- **P4-T5** About: anchor/section navigation.
- **P4-T6** About: national TIMUN section and TIMUN Sfax section kept clearly separate.
- **P4-T7** About: timeline, storytelling blocks, photography.
- **P4-T8** Content proofread against approved source.

### Expected deliverables
- `/` and `/about` pages with approved content.

### Acceptance criteria
- **AC-P4-1** Meets global AC-01, AC-02, AC-03, AC-04.
- **AC-P4-2** All copy is approved; no unsupported claims.
- **AC-P4-3** Tagline used only if explicitly approved.
- **AC-P4-4** No invented board members shown in the preview.

---

## Phase 5 — Events Overview & Detail

- **Objective:** Editorial events gallery and individual event templates using only verified events.
- **Dependencies:** Phase 3; P0-T8.
- **Current status:** BLOCKED — verified event data and selected photographs not yet supplied.

### Tasks
- **P5-T1** Define event content model (title, slug, overview, date, location, duration, gallery).
- **P5-T2** Build `/events` editorial photographic grid.
- **P5-T3** Build `/events/[slug]` detail template with static params from content.
- **P5-T4** Build accessible photo gallery with slideshow controls.
- **P5-T5** Optimize event imagery and add meaningful alt text.
- **P5-T6** Verify every published event's data against owner-approved source.

### Expected deliverables
- `/events` and the `/events/[slug]` template with approved entries.

### Acceptance criteria
- **AC-P5-1** Meets global AC-05 and AC-03.
- **AC-P5-2** Galleries and image assets load; keyboard controls work.
- **AC-P5-3** No invented dates, venues, figures, topics, or outcomes.

---

## Phase 6 — Study Guides Library

- **Objective:** A public, searchable library of downloadable MUN study guides.
- **Dependencies:** Phase 3; P0-T9.
- **Current status:** BLOCKED — final PDFs and metadata not yet supplied.

### Tasks
- **P6-T1** Define study-guide content model (title, description, keywords/subject, file path).
- **P6-T2** Place approved PDFs in `public/documents/study-guides/`.
- **P6-T3** Build search by title/keyword (accessible, no-JS-friendly where practical).
- **P6-T4** Build result cards with descriptive download links.
- **P6-T5** Add empty/no-results states and route metadata.
- **P6-T6** Test every download link.

### Expected deliverables
- `/study-guides` page with working search and downloads.

### Acceptance criteria
- **AC-P6-1** Meets global AC-06.
- **AC-P6-2** Search returns correct results by title and keyword.
- **AC-P6-3** Every PDF opens/downloads; no login or restriction.

---

## Phase 7 — Executive Board & Contact

- **Objective:** Current-board profiles and official contact/social channels.
- **Dependencies:** Phase 3; P0-T10, P0-T12.
- **Current status:** BLOCKED — board data, contact details, and URLs not yet supplied.

### Tasks
- **P7-T1** Define board member content model (name, position, portrait, professional links).
- **P7-T2** Build `/executive-board` grid with consistent portrait crops; current board only.
- **P7-T3** Build social section component (Facebook, Instagram, LinkedIn, TikTok; Instagram link only).
- **P7-T4** Build `/contact` with email, phone, contact person, social links, Google Forms link.
- **P7-T5** Verify all external URLs against owner-provided values.

### Expected deliverables
- `/executive-board` and `/contact` pages.

### Acceptance criteria
- **AC-P7-1** Meets global AC-07, AC-08, AC-09, AC-10.
- **AC-P7-2** No former board members; no invented profiles.
- **AC-P7-3** All four social links and the application URL are correct.

---

## Phase 8 — Motion & Polish

- **Objective:** Purposeful cinematic motion and responsive refinement across the built pages.
- **Dependencies:** Phases 4–7 structure stable.
- **Current status:** NOT STARTED.

### Tasks
- **P8-T1** Motion primitives: image mask/reveal, line-by-line text reveals, fade/slide.
- **P8-T2** Select only justified GSAP/ScrollTrigger sequences (parallax, pinned sections).
- **P8-T3** Page transitions and hover states (zoom, animated borders, restrained blue glow).
- **P8-T4** Gallery polish and slideshow transitions.
- **P8-T5** Optional short cinematic logo intro — skippable, non-blocking.
- **P8-T6** Optional custom cursor — pointer devices only, never replacing visible pointer/focus.
- **P8-T7** `prefers-reduced-motion` handling and mobile adaptation of expensive effects.

### Expected deliverables
- Consistent, performant motion layer.

### Acceptance criteria
- **AC-P8-1** Every animation has a purpose; no animation overload or scroll hijacking.
- **AC-P8-2** Reduced-motion preference respected everywhere.
- **AC-P8-3** No jank on mobile/low-powered devices; cursor disabled on touch.
- **AC-P8-4** Intro never delays access to core content.

---

## Phase 9 — SEO, Accessibility, Performance & QA

- **Objective:** Verify the whole site against the documentation's acceptance criteria.
- **Dependencies:** Phase 8.
- **Current status:** NOT STARTED.

### Tasks
- **P9-T1** Per-route unique titles/meta descriptions, Open Graph, canonical URLs.
- **P9-T2** `sitemap.xml`, `robots.txt`, factual structured data only.
- **P9-T3** Automated checks: lint, typecheck, production build.
- **P9-T4** Responsive matrix: desktop, tablet, mobile.
- **P9-T5** Accessibility review: headings, alt text, contrast, keyboard, focus, reduced motion.
- **P9-T6** Browser checks (current Chrome/Edge/Firefox/Safari where practical).
- **P9-T7** Link, PDF, gallery, and asset checks.
- **P9-T8** Performance/Lighthouse audit and image-size review.
- **P9-T9** Sign off global acceptance criteria AC-01…AC-14 (except live deployment until Phase 10).

### Expected deliverables
- Completed QA report and defect resolutions.

### Acceptance criteria
- **AC-P9-1** All automation passes.
- **AC-P9-2** All 14 global acceptance criteria verified or explicitly noted as pending deployment.
- **AC-P9-3** No known critical issue remains unresolved.

---

## Phase 10 — Deployment & Handover

- **Objective:** Publish on Vercel's free plan, verify the live site, and hand over maintainable documentation.
- **Dependencies:** Phase 9; owner GitHub and Vercel accounts.
- **Current status:** NOT STARTED.

### Tasks
- **P10-T1** Create/confirm GitHub repository and Vercel project (free plan).
- **P10-T2** Configure framework preset, build command, output, and production branch.
- **P10-T3** Verify automatic deployments and preview deployments.
- **P10-T4** Confirm current Vercel free-plan limits; enable no paid add-ons.
- **P10-T5** Verify the live production URL and all critical flows.
- **P10-T6** Finalize `README.md` maintenance instructions and `DEPLOYMENT_GUIDE.md`.
- **P10-T7** Final `SESSION_HANDOVER.md` update and owner sign-off.

### Expected deliverables
- Live site on free Vercel subdomain; complete handover.

### Acceptance criteria
- **AC-P10-1** Meets global AC-13 and AC-14.
- **AC-P10-2** Live URL verified after release.
- **AC-P10-3** Documentation complete and accurate.

---

## Global acceptance criteria (from source documentation)

| ID | Criterion |
| --- | --- |
| AC-01 | All approved pages exist and are reachable from navigation/footer. |
| AC-02 | Approved TIMUN Sfax and national TIMUN logos used correctly. |
| AC-03 | Authentic, approved TIMUN Sfax photography used. |
| AC-04 | English-only; no unfinished language switcher. |
| AC-05 | Events show only verified information. |
| AC-06 | Study guides searchable by title/keyword and publicly downloadable. |
| AC-07 | Board profiles use only complete, verified current-board information. |
| AC-08 | Partners appear on Home and footer as approved. |
| AC-09 | Contact details and all four social links correct. |
| AC-10 | Google Forms application link opens the approved external form. |
| AC-11 | No unnecessary backend, database, CMS, login, newsletter, or Instagram feed. |
| AC-12 | Responsive, accessible to a reasonable standard, comprehensively tested. |
| AC-13 | Deploys automatically from GitHub to Vercel on the approved free setup. |
| AC-14 | Maintainable by editing static content and committing changes. |

## Reconciliation note

The source documentation presents a 9-phase roadmap (§12) and a more granular 11-phase "suggested phases" list (§15). This roadmap adopts the granular Phase 0–10 list as the canonical structure because it separates content readiness from implementation and keeps study guides and board/contact as distinct, verifiable milestones. Phase names map directly to both versions.
