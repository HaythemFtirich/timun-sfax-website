# TIMUN Sfax Website — Design System

> **Status:** DRAFT — foundations proposed, pending owner approval. Nothing here overrides the source documentation.
> **Last updated:** 19 November 2026 — Session 01.

---

## 1. Visual direction

Diplomatic credibility and academic seriousness with contemporary, energetic student-community feel. Cinematic, modern, prestigious, welcoming — **not** a generic corporate template or an overly playful club page.

Core atmosphere: deep navy foundation, layered blues, lighter blue accents for interaction/highlights/glow, white and carefully chosen neutrals for legibility. Text over photography must always pass contrast checks.

## 2. Candidate palette (derived, not official)

Sampled from the supplied logo files. These are **planning candidates only** — the source documentation explicitly warns not to assume logo colors are official website tokens.

| Candidate | Approx. hex | Source | Proposed role | Status |
| --- | --- | --- | --- | --- |
| Slate blue | `#607384` | TIMUN Sfax logo (dominant) | Secondary/muted accent | Derived, unapproved |
| Navy | `#3E6589` | National TIMUN logo | Base blue / deep surfaces | Derived, unapproved |
| Vivid blue | `#226BB4` | National TIMUN logo | Interactive accent, links, glow | Derived, unapproved |
| Light cyan | `#C1DFE8` | National TIMUN logo | Soft highlight / pale surface | Derived, unapproved |
| White | `#FFFFFF` | TIMUN Sfax white logo | Text on dark, logo variant | Derived, unapproved |

**Still to define (with owner approval):** the deepest navy background token(s), neutral greys, success/error states, and exact contrast pairings. Do not hard-code the above as final tokens until approved.

## 3. Planned semantic tokens

| Token | Intent | Source value (proposal) |
| --- | --- | --- |
| `--color-bg` | Deep navy page background | To define — deeper than `#3E6589` |
| `--color-surface` | Raised panels / glass layers | Layered navy/blue, semi-transparent |
| `--color-primary` | Brand blue | `#3E6589` candidate |
| `--color-accent` | Links, hover, focus, restrained glow | `#226BB4` candidate |
| `--color-soft` | Pale highlight surfaces | `#C1DFE8` candidate |
| `--color-text` | Primary text | White / near-white |
| `--color-muted` | Secondary text | Neutral light grey (to define) |
| `--color-border` | Subtle dividers | Transparent white/blue (to define) |

Contrast target: WCAG AA for body text (4.5:1) and large text (3:1), including text over image overlays.

## 4. Typography

- **Direction:** sophisticated editorial pairing — a clean humanist/geometric sans for UI and body, with an elegant display/serif accent for headlines and cinematic moments.
- **Budget rule:** free/open-source fonts only (e.g. Google Fonts / open licenses). No paid font subscriptions.
- **Candidates for approval (not selected):** Manrope or Inter (UI/body); Playfair Display, Cormorant Garamond, or Fraunces (display accent). Owner chooses or supplies an alternative.
- **Type scale:** to be defined after font selection (fluid `clamp()` headings, responsive body sizes, comfortable line lengths ~60–75 characters).
- **Accessibility:** headings in logical order (H1 → H2 → H3), never skip levels for visual effect; readable minimum sizes on mobile.

## 5. Spacing, layout, and depth

- Fluid layouts with carefully chosen breakpoints; equal desktop/tablet/mobile priority.
- Consistent spacing scale (e.g. 4/8-based tokens) shared across sections.
- Containers: centered max-width with responsive gutters; no horizontal overflow.
- Radii: restrained, consistent corner treatment across cards/buttons.
- Depth: layered surfaces, subtle shadows and **restrained** blue glow — never neon overload.
- Touch targets: comfortable minimums for all interactive controls.

## 6. Logo usage

- Use both **TIMUN Sfax** and **national TIMUN** logos; explain affiliation visibly, not just a small footer mark.
- Preserve aspect ratio, clear space, and original colors. Use the supplied white TIMUN Sfax variant on dark backgrounds.
- Do not redraw, distort, crop, recolor, or add damaging effects.
- Available files: `timunsfaxlogo.png`, `timunsfaxwhitelogo.png`, `timunnationallogo.png`. SVG preferred if the owner supplies it; otherwise keep high-resolution transparent PNG.

## 7. Photography

- Use authentic TIMUN Sfax photography as a major design asset — no generic stock substitution.
- Consistent crops/aspect ratios within repeated card systems.
- Meaningful `alt` text for informative images; empty alt for decorative.
- Hero/LCP image gets priority loading; below-fold images lazy-loaded.
- Publication permission to be confirmed per image where needed.

## 8. Motion principles

- Purposeful motion that reinforces hierarchy and storytelling — never motion for its own sake.
- Motion: component/page transitions, reveals, hover, layout. GSAP/ScrollTrigger: only justified pinned/parallax sequences. CSS: simple states and ambient decoration.
- Short timelines; no excessive scroll hijacking.
- `prefers-reduced-motion` honored globally; mobile adapts expensive effects.
- Intro (if approved): short, skippable, non-blocking. Cursor (if approved): pointer devices only, never replacing visible focus.

## 9. Component inventory (planned)

| Component | Purpose | Phase |
| --- | --- | --- |
| Container / Section / SectionHeading | Consistent page rhythm | 2 |
| Button (primary/secondary) | CTAs incl. "Discover TIMUN Sfax" | 2 |
| Card shell | Reusable surface for previews/cards | 2 |
| Reveal | Motion wrapper with reduced-motion fallback | 2/8 |
| Header + MobileMenu | Navigation | 3 |
| Footer | Logos, contact, links, partners, social | 3 |
| Hero | Cinematic homepage intro | 4 |
| ValueBlock / TimelineBlock | About storytelling | 4 |
| EventCard / EventGallery | Events | 5 |
| StudyGuideCard + search | Guides | 6 |
| BoardMemberCard | Board | 7 |
| SocialLinks | Reusable social section | 7 |

## 10. Open questions for owner approval

1. Approve/reject the candidate palette; supply official brand colors if available.
2. Choose font pairing (or supply brand fonts).
3. Approve the proposed tagline "Dialogue. Diplomacy. Leadership." (from documentation).
4. Approve or omit the optional short intro animation and custom cursor.
5. Confirm whether SVG logo versions exist.

## 11. App icon (implemented in Phase 1, owner-authorised)

- Source: `assets/timunsfaxlogo.png` — the official TIMUN Sfax mark and the site icon.
- The 1969×1969 source has transparent padding. Only fully transparent pixels were removed: the bounds of every pixel with alpha > 0 are `(326,251)–(1582,1181)` → **1257×931**, with every non-transparent pixel preserved byte-for-byte. Each copy was then transparently padded to a **1257×1257 square** in `public/images/branding/` (`timun-sfax-logo.png`, `timun-sfax-logo-white.png`).
- The derived squares show the mark at full width, while the original 1969 px source shows it at roughly 64% scale — an apparent size difference only; the content bounds are identical. Owner confirmed this is not an issue.
- Favicon/Apple touch icon: **512×512 navy tile** (`#071522`) with the supplied **white** logo variant centred, saved as `src/app/icon.png` and `src/app/apple-icon.png`. Next.js serves both automatically.
- The owner explicitly permitted cropping and recolouring **for the icon only** (TD-17). Originals in `assets/` remain untouched; general logo rules still apply everywhere else.
- National TIMUN logo copy: `public/images/branding/timun-national-logo.png` (original, no crop).
