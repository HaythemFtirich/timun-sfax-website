# TIMUN Sfax Website — Testing Plan

> **Status:** PLANNED. No tests have been executed yet — no application code exists. Do not claim checks passed until they are actually run and recorded here or in `DEVELOPMENT_LOG.md`.
> **Last updated:** 19 November 2026 — Session 01.

---

## 1. Test levels and timing

| Level | When | Tools |
| --- | --- | --- |
| Automated static checks | After every implementation task, and before any commit | `npm run lint`, `npx tsc --noEmit`, `npm run build` |
| Component/route smoke | As each page is built | local dev server + browser |
| Visual/responsive | Phase 9 (and spot-checks earlier) | browser at 3+ viewport sizes |
| Accessibility | Phase 9 | keyboard + manual review; browser tooling |
| SEO | Phase 9 | page source, sitemap/robots, social preview checks |
| Performance | Phase 9 | Lighthouse / browser performance panel |
| Production smoke | Phase 10 | live Vercel URL |
| Cross-browser | Phase 9 | current Chrome, Edge, Firefox, Safari where practical |

> Available helpers: the in-app **browser** skill / browser tools, and the **playwright-cli** skill for scripted browser checks. Load a skill's instructions before using it.

## 2. Automated checks (commands)

Run from the project root (`C:\Users\DELL\Desktop\timun sfax`):

```powershell
npm run lint          # ESLint — code/style issues
npx tsc --noEmit      # TypeScript — type errors, no output files
npm run build         # production build — catches SSR/static generation issues
npm run dev           # local server — manual checks at http://localhost:3000
```

Expected: all three automated commands exit with code 0. Any failure is fixed before continuing.

## 3. Route smoke checklist

| Route | Check |
| --- | --- |
| `/` | Hero, intro, About preview, values, board preview, footer load |
| `/about` | Both sections, anchors, timeline, photography load |
| `/events` | Grid renders; all cards link to detail routes |
| `/events/[slug]` | Each approved event: details + gallery load |
| `/study-guides` | Search works; all PDF links open |
| `/executive-board` | All current members render; links correct |
| `/contact` | Contact details, social links, Google Forms URL correct |
| 404 | Unknown route shows styled not-found page |

## 4. Responsive matrix

| Viewport | Representative width | Checks |
| --- | --- | --- |
| Mobile | 360–390 px | Menu, typography, hero crop, card grids, footer, touch targets, no overflow |
| Tablet | 768–1024 px | Grid reflow, nav behavior, image sizing |
| Desktop | 1280–1920 px | Full layout, hover states, parallax/pinned sections |

Also verify: no horizontal scrolling, no clipped text, readable line lengths, consistent card aspect ratios.

## 5. Accessibility checklist

- [ ] Semantic landmarks (`header`, `nav`, `main`, `footer`) and logical heading order.
- [ ] Descriptive `alt` text on informative images; empty alt on decorative ones.
- [ ] Full keyboard operation of nav, mobile menu, galleries, search, and links.
- [ ] Visible focus indicators on all interactive elements.
- [ ] Color contrast meets WCAG AA, including text over hero/photos.
- [ ] Information not conveyed by color alone.
- [ ] Icon-only buttons have accessible labels.
- [ ] `prefers-reduced-motion` honored; no essential content trapped in animation.
- [ ] Skip-to-content link functional.

## 6. SEO checklist

- [ ] Unique `<title>` and meta description per route.
- [ ] Open Graph metadata for social sharing.
- [ ] Canonical URLs configured.
- [ ] `sitemap.xml` and `robots.txt` reachable and correct.
- [ ] Clean lowercase URLs; no accidental `noindex` in production.
- [ ] Descriptive image filenames and alt text.
- [ ] Structured data only if factual and owner-approved.

## 7. Performance checklist

- [ ] Hero/LCP image prioritized; below-fold images lazy-loaded.
- [ ] Responsive image sizes; modern formats (WebP/AVIF) where supported.
- [ ] No oversized assets; videos compressed with poster if ever used.
- [ ] Minimal client-side JS; GSAP only where needed.
- [ ] Animations use transform/opacity where possible.
- [ ] Lighthouse audit recorded; issues triaged and fixed or accepted.

## 8. Content & link integrity

- [ ] All copy proofread against owner-approved source; no invented facts.
- [ ] All four social URLs open the correct official accounts.
- [ ] Google Forms URL opens the approved form.
- [ ] Every study-guide PDF opens/downloads without login.
- [ ] Event details match verified data exactly.
- [ ] Email/phone/contact person correct.
- [ ] English-only — no language switcher.

## 9. Acceptance criteria mapping (global AC-01…AC-14)

| AC | Verification method | Phase |
| --- | --- | --- |
| AC-01 pages reachable | route smoke + nav/footer check | 9 |
| AC-02 logos correct | visual review vs approved assets | 9 |
| AC-03 authentic photography | visual review + provenance | 9 |
| AC-04 English-only | site-wide scan | 9 |
| AC-05 events verified | content comparison | 5/9 |
| AC-06 guides searchable/downloadable | functional test | 6/9 |
| AC-07 board current/verified | content comparison | 7/9 |
| AC-08 partners on home + footer | visual check | 7/9 |
| AC-09 contact + 4 socials | link check | 7/9 |
| AC-10 Google Forms link | link check | 7/9 |
| AC-11 no backend/CMS/etc. | architecture/code review | 9 |
| AC-12 responsive/accessible/tested | checklists above | 9 |
| AC-13 auto GitHub→Vercel deploy | live deployment test | 10 |
| AC-14 static-content maintenance | update workflow test | 10 |

## 10. Defect log (append during QA)

| ID | Severity | Description | Status | Fixed in |
| --- | --- | --- | --- | --- |
| — | — | No defects recorded yet | — | — |

## 11. Results recorded so far

### Phase 1 (19 Nov 2026) — executed, all passed
| Check | Command / method | Result |
| --- | --- | --- |
| Lint | `npm run lint` | exit 0, no findings |
| Types | `npm run typecheck` (`next typegen && tsc --noEmit`) | exit 0 |
| Production build | `npm run build` | exit 0; 4 static routes; no warnings after `turbopack.root` fix |
| Dev server | `npm run dev` + HTTP requests | home `/` HTTP 200 (14,624 bytes); contains `lang="en"`, placeholder text and `/icon.png` |
| Icon routes | `GET /icon.png`, `GET /apple-icon.png` | HTTP 200, `image/png`, 41,572 bytes each |
| Icon crop | pixel-bounds + byte-level analysis | only fully transparent padding removed from 1969×1969 source: content `(326,251)–(1582,1181)` = 1257×931; all 4,681,068 ARGB bytes identical to source crop; padded to 1257×1257 square with zero-alpha borders |

Not yet executed (no code exists): responsive matrix, accessibility, SEO, performance/Lighthouse, cross-browser, link/PDF/gallery checks, production deployment. These belong to Phases 9–10.
