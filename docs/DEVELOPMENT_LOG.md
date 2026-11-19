# TIMUN Sfax Website — Development Log

> Chronological record of work, problems, solutions, and verification. Append a new entry at the top for every session. Do not rewrite history; add corrections as dated notes.

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
