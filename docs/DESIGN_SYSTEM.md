# TIMUN Sfax Website — Design System

> **Status:** APPROVED — Phase 2 foundations locked by the owner on 19 November 2026.
> **Scope:** visual foundations, motion specification and component inventory. Public copy is **not** part of this document; it remains content-gated (see §12).
> **Last updated:** 19 November 2026 — Session 02.

---

## 1. Visual direction (approved)

**Dark editorial / cinematic institutional.** The site should read as a considered institutional record with contemporary student energy — precise, restrained, generous and quietly ambitious. Deep navy field, one warm-gold accent, near-white type, large scale and generous negative space.

Reference study: `https://tsyp.ieee.tn` established the scale language (black canvas, 50–70px weight-800 headings, tight tracking, ~88–130px section padding, full-viewport hero). The palette was **not** copied: it was derived from the official marks and then corrected for contrast. Motion language was studied separately from `https://enactustbs.com/?lang=fr` (see §7).

Explicitly **not**: a corporate template, a playful club page, neon glow, or a blue-accented interface.

## 2. Palette (approved)

Single-sourced in `src/app/globals.css` and exposed to Tailwind through `@theme inline`.

| Token | Hex | Role |
| --- | --- | --- |
| `--background` / `--navy` | `#071522` | Page canvas, deepest field |
| `--surface` | `#0E2438` | Raised panels, cards |
| `--surface-2` | `#14304A` | Secondary surface, card hover |
| `--gold` | `#D8B26A` | Primary accent: eyebrow, rules, CTA background |
| `--gold-bright` | `#F0C987` | Hover, focus ring, highlighted accent |
| `--cream` | `#E0D0C0` | Secondary display text on imagery |
| `--foreground` | `#F5F3EE` | Primary text |
| `--muted` | `#A7B4C2` | Secondary text, descriptions |
| `--line` | `rgba(245,243,238,.14)` | Hairline dividers and borders |
| `--line-gold` | `rgba(216,178,106,.42)` | Accent hairline on hover |

**Contrast decision:** warm gold on navy measures **9.21:1** (WCAG AAA for normal text). The previously derived blue `#226BB4` reached only **3.36:1** on navy and fails AA for body text; it is retired. All text over photography must still be checked on the finished image with a scrim.

## 3. Typography (approved)

Free/open-source fonts only; both self-hosted by `next/font/google` in `src/app/layout.tsx` — no runtime requests to a font CDN.

| Role | Family | Weight | Notes |
| --- | --- | --- | --- |
| Display | **Plus Jakarta Sans** | 800 (headings), 700 (subheads) | Tight negative tracking |
| Body | **Inter** | 400 / 500 / 600 | Long-form, UI labels |
| Micro-label | System monospace stack | 400 | 11px uppercase, `0.2em` tracking — no extra font dependency |

**Type scale** (CSS variables, fluid `clamp()`):

| Variable | Value | Utility |
| --- | --- | --- |
| `--fs-hero` | `clamp(3.5rem, 9vw, 7rem)` | `text-hero` |
| `--fs-display` | `clamp(2.5rem, 5vw, 4.5rem)` | `text-display` |
| `--fs-card` | `clamp(1.375rem, 2vw, 1.75rem)` | `text-card` |
| `--fs-body-lg` | `1.125rem` | `text-body-lg` |
| `--fs-body` | `1rem` | body default |
| `--fs-micro` | `0.6875rem` | `text-micro` |

Display leading `1.02` for hero / `1.02` for section headings; body leading `1.7`; display tracking `-0.04em` (hero `-0.055em`). Readable line lengths ~60–75 characters. Heading order must remain logical (H1 → H2 → H3) regardless of visual size.

## 4. Spacing, layout and depth (approved)

- **Container:** `--container-page: 1280px`, centred, with `--gutter: clamp(1.25rem, 5vw, 4rem)`.
- **Section rhythm:** `--section-y: clamp(4rem, 8vw, 6.875rem)` → **64px mobile / 110px desktop**.
- **Hero:** full-viewport, one focal element per view.
- **Radii:** `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 18px`, `--radius-pill: 999px`. Restrained and consistent.
- **Depth:** layered surface colour and hairline borders. **No glow, no neon, no heavy shadows.** Gold is an accent, not a light source.
- **Touch targets:** minimum 44px for all interactive controls (buttons already use `min-h-11`).
- No horizontal overflow at any breakpoint.

## 5. Interaction thesis (approved — locked values)

> TIMUN Sfax will feel like one considered descent through an institutional record: a **900ms** line-by-line hero reveal with a **120ms** step sets the pace, scroll drives **1.02→1.08** image push-in and **±80px** layered drift inside sticky chapters, **720ms** intersection reveals arrive on a **70ms** stagger capped at **420ms**, and a **180ms** hover language keeps controls quiet — all transform/opacity-only in a **single rAF pass**, with a static, fully readable state under reduced motion or a slow connection.

**Shared easing:** `cubic-bezier(0.16, 1, 0.3, 1)`. One curve for everything; no spring, no bounce, no layout animation.

| Value | Token | Amount |
| --- | --- | --- |
| Hover / focus | `--duration-fast` | 180ms |
| Intersection reveal | `--duration-reveal` | 720ms |
| Hero line entrance | `--duration-hero` | 900ms |
| Hero line step | `--step-hero` | 120ms |
| Reveal stagger step | `--step-reveal` | 70ms |
| Stagger cap | `--stagger-cap` | 420ms |
| Chapter push-in | — | scale 1.02 → 1.08 |
| Layered drift | — | ±80px |
| Scroll cue fade | — | after 48px |

**Implementation gate:** these are *values only* in Phase 2. No motion library has been installed and no motion code has been written. The reference site `enactustbs.com` achieves its effects with zero libraries — native CSS, `IntersectionObserver`, one `requestAnimationFrame` scroll pass writing transform custom properties, SVG path drawing, canvas artwork and View Transitions. Phase 8 will follow that pattern with native browser APIs; **no animation dependency may be added without asking the owner first.**

**Static fallbacks:** `@media (prefers-reduced-motion: reduce)` and the `html[data-motion="static"]` switch (for the Phase 8 slow-connection check) land everything in its finished, readable state. Content must never depend on motion to appear.

The rendered proposal lives at `docs/motion-thesis.html` — a throwaway preview, not implementation code.

## 6. Allowed patterns and tells (approved)

The thesis names exactly these reflexes, so they are allowed:

- mono micro-labels (11px uppercase, wide tracking)
- hairline rules (gold progress rail, thin dividers)
- scroll cue fading after 48px

The following are **tells** — model defaults the thesis did not name — and must be stripped from public pages:

- glow / halo effects
- numbered eyebrows (`01 —`, `02 —`) as section labels
- three equal cards in a row
- middle-dot runs (`A · B · C`) as decorative separators
- invented clocks, weather, build statuses, fake statistics or odometer figures for unapproved data

Counters may only display figures the owner has explicitly approved (P0-T13).

## 7. Logo usage

- `assets/timunsfaxlogo.png` is the official source and the site icon. Preserve originals; never stretch, recolor, crop or distort in general page use.
- Use the supplied **white** TIMUN Sfax variant on dark backgrounds and the colour variant where the background permits; show the national TIMUN affiliation visibly, not only as a footer mark.
- Clear space: at least the height of the logotype's cap-height on all sides. Minimum rendered width to be confirmed once SVG sources are supplied.
- Available files: `timunsfaxlogo.png`, `timunsfaxwhitelogo.png`, `timunnationallogo.png`. Derived transparent copies live in `public/images/branding/`.

## 8. Photography

- Authentic TIMUN Sfax photography only — no generic stock substitution.
- Consistent crop/aspect ratios within repeated card systems.
- Meaningful `alt` text for informative images; empty `alt` for decorative.
- Hero/LCP image gets priority loading; below-fold images lazy-loaded.
- Publication permission confirmed per image where needed.

## 9. Component inventory

| Component | Purpose | Phase | Status |
| --- | --- | --- | --- |
| Container / Section / SectionHeading | Consistent page rhythm | 2 | Implemented |
| Button / ButtonLink (primary, secondary, ghost) | CTAs and links | 2 | Implemented |
| Card shell (static + interactive hover) | Reusable surface | 2 | Implemented |
| Reveal | Motion wrapper with static fallback | 8 | Deferred with the motion gate — content is visible by default |
| Header + MobileMenu | Navigation | 3 | Not started |
| Footer | Logos, contact, links, partners, social | 3 | Not started |
| Hero | Cinematic homepage intro | 4 | Blocked on approved copy/assets |
| ValueBlock / TimelineBlock | About storytelling | 4 | Blocked |
| EventCard / EventGallery | Events | 5 | Blocked |
| StudyGuideCard + search | Guides | 6 | Blocked |
| BoardMemberCard | Board | 7 | Blocked |
| SocialLinks | Reusable social section | 7 | Blocked |

All Phase 2 primitives are in `src/components/ui/` and exported through `src/components/ui/index.ts`.

## 10. Responsive verification

Verified in the browser at a 786px viewport on 19 Nov 2026: navy `#071522` canvas, `#F5F3EE` body text, Inter body, Plus Jakarta Sans headings (70.8px hero / 40px section heading), 11px gold mono eyebrow, `#0E2438` cards with 12px radius, gold pill button with navy text, 180ms shared easing, 64px section padding. Desktop values are produced by the same `clamp()` tokens; final breakpoint sweep belongs to Phase 9.

## 11. App icon (implemented in Phase 1, owner-authorised)

- Source: `assets/timunsfaxlogo.png` — the official TIMUN Sfax mark and the site icon.
- The 1969×1969 source has transparent padding. Only fully transparent pixels were removed: the bounds of every pixel with alpha > 0 are `(326,251)–(1582,1181)` → **1257×931**, with every non-transparent pixel preserved byte-for-byte. Each copy was then transparently padded to a **1257×1257 square** in `public/images/branding/` (`timun-sfax-logo.png`, `timun-sfax-logo-white.png`).
- The derived squares show the mark at full width, while the original 1969 px source shows it at roughly 64% scale — an apparent size difference only; the content bounds are identical. Owner confirmed this is not an issue.
- Browser-tab icons: **transparent PNGs of the official colour logo** — no navy or other background tile (owner instruction). Rendered at **512, 64, 32 and 16 px** (`src/app/icon.png`, `icon1.png`, `icon2.png`, `icon3.png`) so Chrome picks a crisp size at 1x/2x density. The mark fills ~95% of the canvas width.
- Apple touch icon: **180×180** `src/app/apple-icon.png` with the same transparent treatment.
- Resampling uses a custom **premultiplied-alpha box filter** so semi-transparent anti-aliased pixels stay correct (GDI+ `DrawImage` corrupts alpha on transparent canvases). Verified: corner alpha = 0 on every size, content bounds inside the canvas, and average opaque RGB exactly matches the official source `(132,115,96)`.
- **Browser tab title is exactly `TIMUN Sfax`** (owner instruction) — no suffix. Sub-pages still use the `%s | TIMUN Sfax` template.
- The owner explicitly permitted cropping and recolouring **for the icon only** (TD-17). Originals in `assets/` remain untouched; general logo rules still apply everywhere else.
- National TIMUN logo copy: `public/images/branding/timun-national-logo.png` (original, no crop).

## 12. Content guardrail

The owner made two explicit content choices on 19 November 2026 after a clarification question with suggested options:

- **Approved tagline:** `Diplomacy. Leadership. Negotiation.` (owner-supplied variant of the documentation phrase). It is approved content and may be used on public pages where appropriate.
- **Hero headline:** brand name only — the full-viewport hero shows `TIMUN Sfax` and no other headline until approved page copy arrives. The tagline must **not** be placed in the hero.

The other illustrative phrases in `docs/design-board.html` ("Dialogue. Diplomacy. Leadership.", "Ideas worth debating.") are **direction samples only** and remain unpublished. All other public copy stays content-gated until P0-T6…T13 are satisfied. No statistics, dates, names or claims may be invented at any stage.
