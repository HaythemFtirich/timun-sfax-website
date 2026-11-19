# Phase 4 — English copy (APPROVED 19 November 2026)

> **Status:** APPROVED and published. The owner confirmed that all TIMUN and TIMUN Sfax historical information in the source documentation is approved, and delegated the mission, vision and values wording to the developer ("do ur magic").
> **Source:** `TIMUN_Sfax_Website_Project_Documentation.docx` §2.1–2.3, supplied by the project owner.
> **Rule applied:** all historical claims are faithful English renderings of supplied source material. The vision statement and value descriptions are original copy written under the owner's delegation; they add no facts, dates, names, figures or endorsements.
> **Last updated:** 19 November 2026 — Phase 4 implementation.
> **Published in:** `src/content/site.ts`, `src/content/about.ts`.

---

## Owner decision (19 November 2026)

> "whats written in the documentation from infos about timun history annd timun sfax is all approved i want you to do ur magic when it comes to content in vision mission and values"

**Effect:** all sections below are approved, including the previously flagged historical claims (2009 founding, April 2010 first conference, 2012 expansion, 20 clubs, High Patronage since 2015, final report, 2018 Sfax dates). This closes **P0-T13**. The mission, vision and values copy was written by the developer under the owner's explicit delegation, closing **P0-T6**.

---

## 1. Home — About preview

**Status:** APPROVED (faithful to source §2.2).

> TIMUN Sfax is the Sfax chapter of the Tunisian International Model United Nations. The first Model United Nations conference in Sfax took place in 2018. Following its success, the national organization accepted the launch of a TIMUN club in Sfax, founded in 2018.

*Note:* the 2018 date appears in the owner-supplied source. If you want it on the public site, confirm it under item 5 below.

---

## 2. Home / About — Mission

**Status:** APPROVED (faithful compilation of the six supplied objectives in §2.2). Published as `mission` in `src/content/about.ts`.

> TIMUN Sfax promotes the objectives and values of the United Nations Charter. We organize high-level academic simulations that replicate United Nations conferences, bodies and agencies, including roundtables, discussions, negotiations and debates. We encourage open-mindedness, cooperation and cultural exchange among students, and encourage young people to engage with their surroundings and act for their region, their country and humanity. Our activities familiarize students with United Nations structures and complement theoretical knowledge with practical experience, developing analytical, negotiation and rhetorical skills through formal diplomatic language.

---

## 3. About — Vision

**Status:** APPROVED — written by the developer under the owner's explicit delegation. Published as `vision` in `src/content/about.ts`.

The source document asks for a vision section but supplies no vision statement, so this copy is original. It adds no facts, dates, names, figures or endorsements:

> To make Model United Nations a lasting part of Tunisia's student landscape.
>
> A place where young people learn to argue with precision, to listen across difference, and to carry the habits of diplomacy beyond the conference room.

---

## 4. About — Values

**Status:** APPROVED under the owner's delegation. Published as `values` in `src/content/about.ts`.

These are drawn directly from the supplied objectives, not invented:

- **Open-mindedness** — "encourage open-mindedness… among students"
- **Cooperation** — "encourage… cooperation and cultural exchange"
- **Cultural exchange** — same source line
- **Civic engagement** — "engage with their surroundings and act for their region, their country and humanity"
- **Practical learning** — "complement theoretical knowledge with practical experience"
- **Diplomatic communication** — "develop analytical, negotiation and rhetorical skills through formal diplomatic language"

*Note:* the labels group supplied phrases; the short descriptions are original copy written under the owner's delegation.

---

## 5. About — National TIMUN section

**Status:** APPROVED by the owner on 19 November 2026. Every claim below is from the owner-supplied source §2.1; the source's verification flag is now closed. Published as `nationalTimun` in `src/content/about.ts`.

> TIMUN — the Tunisian International Model United Nations — was created in 2009 as a club at the Faculty of Legal, Political and Social Sciences of Tunis. Its objective is to promote the purposes and principles of the United Nations and strengthen young students' skills. In 2012 the national organization expanded by establishing clubs throughout Tunisia, and currently has 20 TIMUN clubs nationwide. It organized the first United Nations simulation conference in Tunisia and the Maghreb in April 2010, has been under the High Patronage of the Ministry of Foreign Affairs since 2015, and submitted a final simulation report containing committee resolutions to the Tunisian government.

**Owner confirmation:** all six claims above explicitly approved.

---

## 6. About — TIMUN Sfax section

**Status:** APPROVED by the owner on 19 November 2026. Published as `sfaxHistory` in `src/content/about.ts`.

> The first Model United Nations conference in Sfax was organized in 2018. Following its success, the national organization accepted the launch of a TIMUN club in Sfax, founded in 2018.

---

## 7. What was built

- `src/content/site.ts` and `src/content/about.ts` — all approved copy, single-sourced.
- `src/components/sections/principles.tsx` — mission / vision / values as stacked editorial rows (not three equal cards, per the design system).
- `src/components/sections/timeline.tsx` — the five approved milestones.
- `src/components/sections/about-preview.tsx` — Home introduction and national affiliation.
- `src/app/page.tsx` — Home now renders the hero, approved About preview, principles and a closing link.
- `src/app/about/page.tsx` — the unified About page with anchor navigation, separate national/TIMUN Sfax sections, principles and timeline.
- `src/components/layout/site-header.tsx` — Home/About navigation added; deprecated `priority` replaced with `preload`.
