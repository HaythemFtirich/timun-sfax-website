# TIMUN Sfax Website

Official English-language informational website for **TIMUN Sfax** (Tunisian International Model United Nations — Sfax).

> **Current status (19 November 2026):** **Phase 1 — Project Setup (in progress).** Next.js application, Tailwind foundations, folder structure and local Git repository are in place. No public pages yet; content arrives in Phase 4.

## Planned stack

Next.js 16 (App Router, TypeScript) · Tailwind CSS v4 + custom CSS · Motion (Framer Motion) + GSAP/ScrollTrigger + CSS animations · static content in the repository · GitHub → Vercel (free plan) · **0 TND budget** · English only.

## Local setup

Requirements: Node.js 20.9+ (Node 26 verified locally) and npm.

```powershell
cd 'C:\Users\DELL\Desktop\timun sfax'
npm install
npm run dev
```

Open <http://localhost:3000>. Expect the temporary "Project foundation ready" placeholder page — this is intentional until Phase 4.

## Verification commands

Run all three before every commit:

```powershell
npm run lint        # ESLint (Next.js 16 uses the ESLint CLI directly)
npm run typecheck   # TypeScript, no output files
npm run build       # production build (Turbopack)
```

All must exit with code 0.

## Project layout

| Path | Purpose |
| --- | --- |
| `src/app/` | Routes, root layout, global CSS, app icons |
| `src/components/{layout,navigation,sections,cards,galleries,ui}` | Reusable UI |
| `src/content/` | Structured static content (added by owner per phase) |
| `src/lib/` | Metadata and small shared helpers |
| `public/images/` | Optimized branding, photography and event imagery |
| `public/documents/study-guides/` | Approved PDFs |
| `assets/` | Owner-supplied originals — archive only, never overwritten |
| `docs/` | Project management documentation |

## Branding note

`timunsfaxlogo.png` is the official mark and the source of the site icon. Only fully transparent padding was removed — the exact content bounds of every non-transparent pixel are `(326,251)–(1582,1181)` = **1257×931** — and the result was padded with transparency to a **1257×1257 square**. Every non-transparent pixel is preserved byte-for-byte. The supplied white variant on navy is used for `src/app/icon.png` / `apple-icon.png`. Originals remain untouched in `assets/`.

## Git workflow (current agreement)

Commits are **local only**. There is no remote yet; pushing to GitHub is deferred to the final deployment stage.

```powershell
git add .
git commit -m "Phase 1: project setup"
```

## Documentation

Full project management lives in `docs/`:

| File | Purpose |
| --- | --- |
| [PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md) | Scope, confirmed decisions, sitemap, content inventory |
| [MASTER_ROADMAP.md](docs/MASTER_ROADMAP.md) | Phases, dependencies, acceptance criteria, status |
| [TASK_TRACKER.md](docs/TASK_TRACKER.md) | Detailed tasks with IDs and verification |
| [DEVELOPMENT_LOG.md](docs/DEVELOPMENT_LOG.md) | Session record |
| [TECHNICAL_DECISIONS.md](docs/TECHNICAL_DECISIONS.md) | Decision register |
| [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) | Visual foundations (draft) |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Structure and technical conventions |
| [TESTING_PLAN.md](docs/TESTING_PLAN.md) | QA coverage |
| [DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md) | Future GitHub → Vercel setup |
| [SESSION_HANDOVER.md](docs/SESSION_HANDOVER.md) | Continuity snapshot |

**Source of truth:** `TIMUN_Sfax_Website_Project_Documentation.docx` (kept locally, ignored by Git).
