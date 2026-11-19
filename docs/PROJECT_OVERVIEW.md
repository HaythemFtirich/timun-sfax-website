# TIMUN Sfax Website — Project Overview

> **Status:** Initialization / planning complete — awaiting owner approval of the roadmap.
> **Source of truth:** `TIMUN_Sfax_Website_Project_Documentation.docx` (v1.0, 19 November 2026).
> **Last updated:** 19 November 2026 — Session 01.

---

## 1. What we are building

An English-only, informational website for **TIMUN Sfax** (Tunisian International Model United Nations — Sfax chapter). It is a static, cinematic, diplomatic-feeling site that presents the club's identity, its affiliation with the national TIMUN organization, history, mission, vision and values, major events, a searchable library of MUN study guides, the current Executive Board, partners, and official contact/social channels.

There is **no backend, no database, no CMS, no login, no newsletter, and no live social feed**. Content is maintained as structured files in the repository and updated by the developer, then published through GitHub → Vercel.

## 2. Project goals

1. Establish a credible, memorable digital identity for TIMUN Sfax.
2. Explain the relationship between TIMUN Sfax and national TIMUN.
3. Communicate history, mission, vision, and values.
4. Showcase major events with editorial photography and individual event pages.
5. Provide a public, searchable library of downloadable MUN study guides.
6. Introduce the current Executive Board and official partners.
7. Direct visitors to official contact channels and social media.
8. Support discovery and trust without unnecessary technical complexity.

**Target audiences:** MUN participants/delegates, high-school students, university students, general public.

## 3. Confirmed decisions (binding unless changed by the owner)

| Area | Decision |
| --- | --- |
| Framework | Next.js + React |
| Language | TypeScript (recommended in documentation; adopted) |
| Styling | Tailwind CSS + custom CSS |
| Animation | Motion (Framer Motion) + GSAP/ScrollTrigger + CSS |
| Content management | Static content in the repository, developer-only updates |
| Backend / database | None |
| Hosting | Vercel (free Hobby plan), free `vercel.app` subdomain initially |
| Version control | GitHub, automatic deployment from the main branch |
| Budget | **Strictly 0 TND** |
| Website language | English only, permanently |
| Tone / design | Professional, cinematic, modern, diplomatic, prestigious; dark navy / blue |
| Devices | Equal priority: desktop, tablet, mobile |
| Accessibility | Important — key practices required |
| SEO / performance | Standard SEO; balanced visual quality and speed |
| Testing | Comprehensive |

> Any change to these fundamentals must be discussed with the owner first, with advantages, disadvantages, costs, and consequences explained.

## 4. Sitemap

| Page | Route | Notes | Status |
| --- | --- | --- | --- |
| Home | `/` | Cinematic hero, intro, About preview, mission/vision/values, Board preview | Planned — Phase 4 |
| About | `/about` | One page, separate national TIMUN + TIMUN Sfax sections, anchor navigation | Planned — Phase 4 |
| Events | `/events` | Editorial photographic grid of major events | Planned — Phase 5 |
| Event detail | `/events/[slug]` | Overview, date, location, duration, photo gallery | Planned — Phase 5 |
| Study Guides | `/study-guides` | Searchable public PDF library | Planned — Phase 6 |
| Executive Board | `/executive-board` | **Current board only**, portraits + positions + links | Planned — Phase 7 |
| Contact | `/contact` | Email, phone, contact person, social links, Google Forms link | Planned — Phase 7 |

**Present on Home and footer only:** partners (logo grid), social section/links, contact details. No dedicated Partners, Recruitment, or Newsletter page.

## 5. Content and asset inventory — current state

### 5.1 Present in the workspace

| Category | Files | Notes |
| --- | --- | --- |
| Documentation | `TIMUN_Sfax_Website_Project_Documentation.docx` | Read in full; source of truth |
| Branding | `assets/timunsfaxlogo.png` (1969×1969), `assets/timunsfaxwhitelogo.png` (1969×1969), `assets/timunnationallogo.png` (820×820) | Both logos + a white variant are present. Square/transparent PNGs. |
| Photography | `assets/groupphoto.jpg` … `groupphoto9.jpg` (9 photos, 1080 px wide, landscape/square) | Authentic group photography. To be mapped to hero/about/events/board as approved. |

### 5.2 Still required from the owner (explicitly owner-owned per documentation)

- Final approved English copy for mission, vision, values, and About.
- Approval or rejection of the proposed tagline **"Dialogue. Diplomacy. Leadership."** (not official until approved).
- Verified event details (title, overview, date, location, duration, gallery) for each publishable event.
- Final study-guide PDFs plus titles, descriptions, and keywords/subjects.
- Current Executive Board names, official positions, portraits, professional profile links.
- Partner logos, names, and any short descriptions.
- Official email, phone, organizational contact person, all four social URLs (Facebook, Instagram, LinkedIn, TikTok), Google Forms application URL.
- Copyright owner/wording and any required legal text.
- Verification of historical claims (founding years, current national club count, ministry patronage wording, report submission).

**Editorial rule:** Never invent facts, dates, names, positions, statistics, endorsements, or content. Missing items are tracked in `TASK_TRACKER.md` as blocked owner tasks — never filled with fabricated placeholders.

## 6. Key constraints and editorial rules

- **0 TND:** free/open-source tooling and free Vercel plan only; no paid domains, templates, fonts, plugins, APIs, or add-ons.
- **English only:** no language switcher or translated pages.
- **Content integrity:** publish only approved/verified material; keep national TIMUN history distinct from TIMUN Sfax history; do not label newly written copy as "official" without approval.
- **Logos:** preserve aspect ratio, clear space, original colors; use appropriate variants on dark/light backgrounds; show national affiliation visibly.
- **Photography:** use authentic club photography, meaningful alt text, consistent crops in repeated card systems.
- **Motion:** purposeful, short, reduced-motion aware, mobile-adapted; custom cursor disabled on touch devices; intro short/skippable/non-blocking.
- **Accessibility / SEO:** semantic HTML, logical headings, keyboard support, visible focus, contrast, unique metadata, Open Graph, sitemap.xml, robots.txt, clean URLs.

## 7. Documentation map

| File | Purpose |
| --- | --- |
| `MASTER_ROADMAP.md` | Phases, objectives, tasks, dependencies, deliverables, acceptance criteria, status |
| `TASK_TRACKER.md` | Detailed checkbox task list with IDs, dependencies, verification |
| `DEVELOPMENT_LOG.md` | Chronological record of work, problems, solutions, tests |
| `TECHNICAL_DECISIONS.md` | Decision register: problem, alternatives, choice, reason, consequences |
| `DESIGN_SYSTEM.md` | Living visual-direction document (draft — pending approval) |
| `ARCHITECTURE.md` | Planned structure, rendering strategy, content model, dependency rationale |
| `TESTING_PLAN.md` | Test coverage, acceptance criteria mapping, QA checklists |
| `DEPLOYMENT_GUIDE.md` | GitHub → Vercel setup, update workflow, zero-budget guardrails |
| `SESSION_HANDOVER.md` | Continuity snapshot: where we stopped and the exact next action |
| `../README.md` | Top-level index; will be expanded with setup instructions in Phase 1 |

## 8. How to use this documentation

At the start of every session, read `MASTER_ROADMAP.md`, `TASK_TRACKER.md`, and `SESSION_HANDOVER.md` before touching code, then inspect the actual files. If documentation and implementation disagree, report the inconsistency before proceeding. Never restart or overwrite existing work simply because a new session began.
