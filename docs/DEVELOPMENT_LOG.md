# TIMUN Sfax Website — Development Log

> Chronological record of work, problems, solutions, and verification. Append a new entry at the top for every session. Do not rewrite history; add corrections as dated notes.

---

## Session 05 — 19 November 2026 — Phase 3: shared shell + `groupphoto2` hero

**Owner request:** begin Phase 3 with a first screen like `https://enactustbs.com/?lang=en` — a full-bleed group photo with typography and a button over it, using the TIMUN Sfax logo and `groupphoto2`, made slightly bluish with an effect/overlay on top. Owner said "you do ur magic freely" and wants to watch live changes at `http://localhost:3000`.

### Work done
- Copied `assets/groupphoto2.jpg` (1080×620, original preserved) to `public/images/hero/groupphoto2.jpg` for web delivery.
- Built `src/components/sections/hero.tsx`: full-viewport (`min-h-[100svh]`) hero with `next/image` (`fill`, `priority`, `sizes="100vw"`, `object-cover`), brand-name-only headline, factual mono eyebrow (`Tunisian International Model United Nations`), `Sfax, Tunisia` metadata, one gold `Discover TIMUN Sfax` CTA to `#about`, and a static scroll cue. No tagline in the hero (TD-22); no invented copy.
- Studied the reference in-browser: its `figure` uses an `::after` radial gradient anchored bottom-left (`radial-gradient(52% 70% at 0% 100%, …)`) over a dark base. Adapted that technique to navy/gold in `.hero-scrim` in `src/app/globals.css` plus a navy `bg-surface-2/45 mix-blend-color` colour-cast layer and a soft bottom hand-off into the next section.
- Added the global shell: `src/components/layout/site-header.tsx` (absolute, transparent, official white logo via `next/image` + `next/link`), a skip link and `#main` anchor in `src/app/layout.tsx`, and a styled `src/app/not-found.tsx`.
- Reworked `src/app/page.tsx` so the homepage renders the hero, a factual `#about` section, and the existing development preview — no organizational claims published.

### Verification
- `npm run lint`, `npm run typecheck`, `npm run build` → all exit 0; seven static routes including `/_not-found`.
- ESLint initially flagged the header's `<a href="/">`; fixed by switching to `next/link`.
- Live browser at `http://localhost:3000`: title exactly `TIMUN Sfax`; hero = full viewport (670px in test viewport); `groupphoto2` served via `next/image`; `mix-blend-color` navy cast and radial `.hero-scrim` both computing; headline `TIMUN / Sfax`; gold CTA `Discover TIMUN Sfax`; skip link present; official logo in header; `/does-not-exist` renders `Page not found` with `Back to TIMUN Sfax`.
- Encountered stale CSS once after `next build` against the live dev server; touching `globals.css` forced a clean recompile (same environment quirk as Session 04). Dev server left running.

### Open items
- Owner to eyeball the hero and request blue-cast/scrim intensity changes if desired.
- P3-T2/T3 nav (structure + Phase 8 scroll-solid), P3-T4 footer (P0-T11/P0-T12) remain blocked.
- P3-T5 page transitions and shared empty/loading states deferred to Phase 8 / content phases.

### Follow-up — hero image quality (same session)
- Owner reported the hero photo looked low quality. Investigated: source is 1080×620 (all supplied JPGs are ≤1080 px), and Next.js 16's `images.qualities` default of `[75]` was recompressing the 173 KB original to ~89 KB.
- Added `images.qualities: [75, 90, 95, 100]` to `next.config.ts` (v16 breaking change; unlisted `q` values return 400) and set `quality={95}` on the hero. Replaced deprecated `priority` with `preload` per the v16 image docs.
- Owner chose AI super-resolution. The `experimental_image_generate` job failed with `Invalid credential`, so AI upscaling was not possible in this environment.
- Installed Pillow locally (one-off tool, not a project dependency) and produced a faithful 2× upscale: 1080×620 → 2160×1240 via Lanczos + subtle unsharp mask, saved as WebP q95 (518 KB) at `public/images/hero/groupphoto2-upscaled.webp`. Swapped the hero to it; originals untouched.
- `npm run lint`, `typecheck`, `build` all exit 0; live hero loads the q95 upscaled source with 1920w/2048w `srcset` candidates available. Touched `globals.css` after the build to avoid the known stale-CSS quirk.

---

## Session 04 — 19 November 2026 — Phase 2: Design System

**Goal:** Lock the approved visual and motion direction in code and documentation, then obtain the headline/tagline decision.

### Owner decisions received this session
- Overall direction: **dark editorial / cinematic institutional** — owner loved the board but wanted richer animation after seeing `https://enactustbs.com/?lang=fr`.
- Fonts: **keep Plus Jakarta Sans (display) + Inter (body)**.
- Motion scope: **full cinematic journey**; preview mode: **rendered page**.
- Interaction thesis: **approved with exact values** (900/120ms hero, 720/70/420ms reveals, 1.02→1.08 push-in, ±80px drift, 180ms hover, one rAF pass, static reduced-motion path).
- Tagline: **`Diplomacy. Leadership. Negotiation.`** (owner-supplied variant).
- Hero headline: **brand name only** — no other headline until approved copy exists.

### Work done
- Studied `https://tsyp.ieee.tn` for scale and `https://enactustbs.com/?lang=fr` for motion. The latter is library-free: one `requestAnimationFrame` scroll pass, `IntersectionObserver`, transform custom properties, canvas, SVG drawing, View Transitions and reduced-motion support. No GSAP/Motion/Lenis detected.
- Created and previewed `docs/design-board.html` and `docs/motion-thesis.html` (throwaway proposals, not implementation code).
- Replaced the stale blue-candidate `docs/DESIGN_SYSTEM.md` with the approved system: palette, type scale, layout, radii, logo rules, motion thesis, tells and content guardrails.
- Replaced placeholder blue tokens in `src/app/globals.css` with the approved single-sourced palette/type/layout tokens; added the `html[data-motion="static"]` slow-connection hook alongside `prefers-reduced-motion`.
- Swapped Geist fonts for self-hosted Inter + Plus Jakarta Sans via `next/font/google`; browser tab title remains exactly `TIMUN Sfax`.
- Added static primitives in `src/components/ui/`: `Container`, `Section`, `SectionHeading`, `Button`/`ButtonLink`, `Card`, plus `src/lib/cn.ts` and a barrel export. `Reveal` deliberately deferred to Phase 8 with the motion gate — content is visible by default.
- Updated the development placeholder homepage to exercise the new tokens and primitives without publishing any organizational claims.
- Updated `MASTER_ROADMAP.md`, `TASK_TRACKER.md`, `SESSION_HANDOVER.md` and `TECHNICAL_DECISIONS.md`.

### Verification
- `npm run lint`, `npm run typecheck`, `npm run build` → all exit 0; seven static routes.
- Browser at `http://localhost:3000`: `<title>` exactly `TIMUN Sfax`; navy `#071522` canvas; `#F5F3EE` text; Inter body; Plus Jakarta Sans headings (70.8px hero / 40px section heading at 786px viewport); 11px gold mono eyebrow; `#0E2438` cards, 12px radius; gold pill button with navy text; 180ms shared easing; 64px section padding.
- Initial browser check showed stale blue CSS after running a production build against the live dev server; touching `globals.css` forced a clean recompile and all approved values were then confirmed. Avoid running `next build` while the dev server is active for future checks.

### Open items
- Owner sign-off on the rewritten `DESIGN_SYSTEM.md` (P2-T6).
- Phase 3 shared layout/navigation; all content-bearing phases still blocked on P0-T6…T13.
- Motion implementation remains Phase 8; no dependency installed.

---

## Session 03 — 19 November 2026 — Browser tab icon and title

**Owner request:** show the TIMUN Sfax logo in the browser tab next to the name, keep the tab name as only `TIMUN Sfax` (no other text), improve icon quality and make it slightly bigger.

### Work done
- Changed the root metadata title from `TIMUN Sfax — Tunisian International Model United Nations` to exactly `TIMUN Sfax` (the longer description remains in the meta description and Open Graph description). Inner pages still use the `%s | TIMUN Sfax` template.
- Rebuilt the tab icons from the corrected white square logo using its exact content region `(0,163,1257,931)`.
- Generated four `rel="icon"` PNG sizes — 512, 64, 32 and 16 px (`icon.png`, `icon1.png`, `icon2.png`, `icon3.png`) — plus a 180 px `apple-icon.png`. Next.js emits a `sizes` attribute for each so Chrome picks a crisp asset at its current pixel density.
- Quality improvements: mark enlarged from ~87% to ~95% of tile width; 4x supersampling then high-quality bicubic downsampling; white-on-navy (`#071522`) for contrast. All five files verified fully opaque.
- No `.ico` and no national-logo variant — only the official TIMUN Sfax mark.

### Verification
- `npm run lint`, `npm run typecheck`, `npm run build` → all exit 0; build lists seven static routes including all four icon sizes.
- Live HTML `<title>` is exactly `TIMUN Sfax`; head contains icon links with `sizes="512x512"`, `64x64`, `32x32`, `16x16` and `apple-touch-icon` `180x180`.
- All five icon routes return HTTP 200.

### Follow-up correction (same session)
- Owner reported the blue/navy tile behind the icon and asked for a **transparent PNG from the logo**.
- Rebuilt all five icons from `public/images/branding/timun-sfax-logo.png` (official colour logo, byte-exact content) with alpha = 0 outside the mark — no tile, no white variant.
- GDI+ could not do this cleanly (semi-transparent artefacts on a transparent canvas), so a custom premultiplied-alpha box resampler was used; output corners are fully transparent on every size, and average opaque RGB `(132,115,96)` matches the source exactly.
- Re-verified lint, typecheck, build, live `<title>`, all five icon links and HTTP 200 routes.

---

## Session 02 — 19 November 2026 — Phase 1: Project Setup

**Goal:** Complete Phase 1 end-to-end and leave a running local dev server for the owner.

### Owner instructions received this session
- Phase 0 is integrated into every phase; the owner updates content/assets incrementally. Work with what exists now.
- Finish Phase 1, then report back.
- No GitHub remote: commit locally only; push at the final stage.
- `timunsfaxlogo.png` is the official mark and the website icon; crop it to its true size and recolour the icon if useful.

### Tasks completed
- Scaffolded Next.js 16.4.6 (App Router, TypeScript, Tailwind 4.3.3, ESLint flat config) into a temporary folder, then moved files into the project root without touching `assets/`, `docs/` or the `.docx`.
- Read the version-matched docs in `node_modules/next/dist/docs/` per the generated `AGENTS.md` (Next.js 16 breaking changes: Turbopack default, ESLint CLI, async request APIs).
- Created the full planned directory structure with `.gitkeep` files.
- Set base navy tokens, visible focus styles and a global reduced-motion fallback in `globals.css`.
- Replaced starter metadata with TIMUN Sfax defaults (`lang="en"`, Open Graph, robots, title template) and added `data-scroll-behavior="smooth"` per Next.js 16 guidance.
- Replaced the Next.js starter page with an honest development placeholder (no invented organizational content).
- Added `npm run typecheck` (`next typegen && tsc --noEmit`) so a fresh checkout type-checks before a build.
- Set `turbopack.root: process.cwd()` to remove a Windows home-directory lockfile warning.
- Removed only fully transparent padding from the official logo (1969×1969): exact content bounds of every non-transparent pixel are `(326,251)–(1582,1181)` = **1257×931**, preserved byte-for-byte and transparently padded to **1257×1257** squares in `public/images/branding/`. Rebuilt the 512×512 navy app icon with the white mark (`src/app/icon.png`, `apple-icon.png`) from the corrected square — originals untouched in `assets/`.
- Ignored `*.docx` so the internal source document is never committed to a future public repo.
- Expanded `README.md` with setup, verification, layout and local-only Git instructions.
- Initialized local Git and created the initial commit (see git log for hash).

### Files created / modified
**Created:** `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `next-env.d.ts`, `package.json`, `package-lock.json`, `.gitignore`, `AGENTS.md`, `src/app/{layout.tsx,page.tsx,globals.css,icon.png,apple-icon.png}`, all planned `src/components/*`, `src/content`, `src/lib`, `public/images/*`, `public/documents/study-guides`, `public/videos` directories with `.gitkeep`.
**Modified:** `README.md`, `docs/*` (all management files updated).
**Preserved:** `assets/`, `TIMUN_Sfax_Website_Project_Documentation.docx`.

### Problems encountered and solutions
1. `create-next-app` rejected the folder name `_scaffold` (npm naming rule). → Renamed to `scaffold-temp`.
2. `LayoutProps` type missing after moving files (it lives in generated `.next/types`). → Added `next typegen` to the `typecheck` script.
3. Turbopack warning about a lockfile in `C:\Users\DELL`. → Set `turbopack.root: process.cwd()`; rebuild is clean.
4. Attempt to stop the dev server failed, then a second `npm run dev` correctly detected the running instance. → Kept the original server on port 3000 as the owner requested; no duplicate server running.
5. **Logo crop mistake (caught by owner):** the first crop used an alpha threshold of 200, which discarded faint but visible anti-aliased pixels and produced a short 1256×505 result. → Re-measured with alpha > 0 (1257×931), copied raw ARGB bytes with `LockBits`/`Marshal.Copy` (GDI+ `DrawImage` and `SourceCopy` both corrupted the white PNG's transparency), padded transparently to 1257×1257, and rebuilt the app icons. Verified byte-for-byte equality with the source crop and zero-alpha padding.

### Verification / tests performed
- `npm run lint` → exit 0, no output.
- `npm run typecheck` → exit 0.
- `npm run build` → exit 0; 4 static routes (`/`, `/_not-found`, `/icon.png`, `/apple-icon.png`); no warnings.
- Dev server → HTTP 200 at `http://localhost:3000`; HTML includes `lang="en"`, placeholder text and `/icon.png`; both icon routes HTTP 200, `image/png`, 41,572 bytes.
- Icon crop verified by pixel-bounds analysis before/after.

### Known open items
- Phase 1 awaits owner review (status REVIEW REQUIRED).
- Palette/fonts remain draft pending Phase 2 approval.
- No public pages yet — Phase 4 will use approved content only.

### Next steps
1. Owner reviews Phase 1 at `http://localhost:3000` and the updated docs.
2. On approval, begin **Phase 2 — Design System** (finalize tokens, fonts, UI primitives).
3. Owner continues adding approved content/assets to `assets/` as Phase 0 runs in parallel.

---

## Session 01 — 19 November 2026 — Initialization & planning

**Goal:** Fulfil the first mission — audit the workspace and documentation, then create the Markdown management structure and full roadmap. No website code was written.

### Tasks completed
- Read `TIMUN_Sfax_Website_Project_Documentation.docx` in full (16 sections, incl. confirmed decisions, sitemap, content inventory, acceptance criteria, and the master AI prompt).
- Inspected the workspace: `assets\` + the `.docx`; no existing project, no Git repository, no `package.json`. Confirmed the project is **not yet initialized**.
- Inventoried all 12 supplied assets (3 logos, 9 group photos) including dimensions and file formats.
- Verified local tooling versions (Node, npm, npx, Git).
- Derived **candidate** palette colors from logo pixels for planning purposes (explicitly non-authoritative).
- Created the documentation management structure and the complete roadmap/task tracker.

### Files created
- `docs/PROJECT_OVERVIEW.md`
- `docs/MASTER_ROADMAP.md`
- `docs/TASK_TRACKER.md`
- `docs/DEVELOPMENT_LOG.md`
- `docs/TECHNICAL_DECISIONS.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/ARCHITECTURE.md`
- `docs/TESTING_PLAN.md`
- `docs/DEPLOYMENT_GUIDE.md`
- `docs/SESSION_HANDOVER.md`
- `README.md` (top-level index)

### Problems encountered and solutions
1. **Documentation path mismatch.** The brief referenced `C:\Users\DELL\Downloads\TIMUN_Sfax_Website_Project_Documentation.docx`, but the file is actually at `C:\Users\DELL\Desktop\timun sfax\TIMUN_Sfax_Website_Project_Documentation.docx`.
   - *Solution:* Located and read the file from its actual path. No content lost.
2. **Images cannot be visually rendered by this model.**
   - *Solution:* Read image dimensions/formats via `System.Drawing` and sampled dominant pixel colors programmatically. Visual suitability, logo variants, and photo selection still require the owner's eyes — recorded as open items in `SESSION_HANDOVER.md`.
3. **No pre-existing project or repository.**
   - *Expected:* The documentation anticipates starting from Phase 0/1. Nothing was overwritten.

### Verification / tests performed
- `.docx` text extraction completed successfully; all sections reviewed.
- Asset inventory: 12 files — `timunsfaxlogo.png` 1969×1969, `timunsfaxwhitelogo.png` 1969×1969, `timunnationallogo.png` 820×820, `groupphoto.jpg` 1080×789, `groupphoto2.jpg` 1080×620, `groupphoto3.jpg` 1080×547, `groupphoto4.jpg` 1080×552, `groupphoto5.jpg` 1080×720, `groupphoto6.jpg` 1080×720, `groupphoto7.jpg` 1080×717, `groupphoto8.jpg` 1080×717, `groupphoto9.jpg` 1080×1080.
- Tooling: Node v26.13.0, npm 11.20.0, Git 2.53.0.windows.1.
- Derived colors (approximate): TIMUN Sfax logo `#607384`; national TIMUN `#3E6589`, `#226BB4`, `#C1DFE8`; white logo `#FFFFFF`.

### Known open items
- Roadmap not yet approved by the owner — no implementation started.
- Owner content package incomplete (see `TASK_TRACKER.md` P0-T6…T13).
- No website build, lint, or typecheck has been run yet (no code exists).

### Next steps
1. Owner reviews and approves (or adjusts) `MASTER_ROADMAP.md`, `TASK_TRACKER.md`, and the proposed architecture.
2. On approval, begin **Phase 1, Task P1-T1** — scaffold the Next.js application.
3. Owner may begin supplying P0-T6…T13 content in parallel.

---

## Entry template for future sessions

```
## Session NN — DD Month YYYY — Short title

**Goal:**
### Tasks completed
### Files created / modified
### Problems encountered and solutions
### Verification / tests performed
### Known open items
### Next steps
```
