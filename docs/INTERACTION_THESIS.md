# Interaction thesis — numbers, timeline and dashboard (Phase 8 pull-forward)

> **Status:** BUILT under the owner's "put ur magic" delegation (19 Nov 2026), derived from the already-approved motion thesis in `DESIGN_SYSTEM.md` §7. No animation library or new dependency was installed.

## Thesis (one sentence)

TIMUN's history should resolve like a diplomatic record coming into focus: each approved figure holds still, then rises into place with a 720ms reveal and a 70ms stagger; hovering a figure or photograph gently advances it (1.02→1.08) to invite a closer read; nothing loops, nothing floats, and reduced motion receives the complete static record.

## Values (inherited from the approved motion thesis)

| Property | Value |
| --- | --- |
| Reveal | 720ms, `cubic-bezier(0.16, 1, 0.3, 1)` |
| Stagger | 70ms per item, capped at 420ms |
| Hover | 180ms |
| Photo push-in | 1.02 → 1.08 |
| Observer passes | one `IntersectionObserver`, one pass per element |
| Reduced motion | static, fully readable |

## Allowed patterns

- mono micro-labels (11px uppercase, wide tracking)
- hairline rules and a gold progress rail
- one-shot opacity + `translateY` reveals
- per-digit rise on **approved** figures only
- 180ms hover colour/border transitions on stat tiles
- 1.02→1.08 image push-in on hover

## Explicitly excluded

- glow / halo effects
- numbered eyebrows (`01 —`, `02 —`)
- middle-dot decorative runs
- autoplay loops, marquees, odometers on **unapproved** data
- any statistic not in `src/content/numbers.ts`

## Inspiration consulted

- **Dorot — The Jewish Timeline** (Awwwards nominee, `dorot-the-jewish-timeline`): an interactive visual timeline that makes long history navigable through a small number of moments. Borrowed: the idea of one large active year paired with a compact selectable rail. No layout, copy or code was copied.
- Pattern direction: dark editorial / cinematic institutional (already locked in `DESIGN_SYSTEM.md`), with a bento-style numbers dashboard rather than three equal cards.

## Content rule

Every figure on the site is one of the six already owner-approved facts: 2009, April 2010, 2012, 20 clubs, 2015, 2018. Their labels are shortened forms of the approved history text. No new statistic, percentage, ratio or count was invented.
