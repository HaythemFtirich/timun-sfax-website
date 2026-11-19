# TIMUN Sfax Website — Deployment Guide

> **Status:** DEFERRED. GitHub/Vercel are not configured. Per owner instruction (19 Nov 2026) commits are **local only** and pushing happens at the **final stage** (Phase 10). Follow this guide then, after Phase 9 QA passes.
> **Budget:** 0 TND — free Hobby plan and free `vercel.app` subdomain only.

---

## 1. Prerequisites

- Owner-controlled GitHub account and Vercel account (free Hobby).
- Completed Phase 9 QA with acceptance criteria signed off.
- No secrets, private contact data, or internal documents in the repository.
- Current Vercel free-plan limits reviewed at deployment time (documentation §7.4/§14).

## 2. First-time setup

1. **Create/confirm the GitHub repository** (P10-T1) — final stage only.
   - Name suggestion: `timun-sfax-website` (public or private — owner's choice; private still deploys to Vercel).
   - The local repository and initial commit already exist from Phase 1. At the final stage, only add the remote and push:
     ```powershell
     cd 'C:\Users\DELL\Desktop\timun sfax'
     git remote add origin https://github.com/<owner>/timun-sfax-website.git
     git branch -M main
     git push -u origin main
     ```
   - Confirm the remote shows the initial commit. **Do not commit** `.env`, credentials, original unapproved PDFs, or large archive assets.

2. **Import into Vercel** (P10-T2).
   - Vercel dashboard → *Add New → Project* → import the GitHub repository.
   - Framework preset: **Next.js**.
   - Build command: `npm run build`; Output: framework default `.next`.
   - Production branch: `main`.
   - Deploy.

3. **Verify automatic deployment** (P10-T3).
   - A push to `main` must trigger a production deploy.
   - Branches/PRs should get preview deployments (if available on the free plan).

4. **Domain** (P10-T4).
   - Use the provided free `<project>.vercel.app` subdomain initially.
   - Do **not** purchase a custom domain or enable paid add-ons without owner approval.

## 3. Verify the live site (P10-T5)

- [ ] Home and all internal pages load over HTTPS.
- [ ] Navigation and mobile menu work.
- [ ] Logos and authentic photos display correctly.
- [ ] All study-guide PDFs download.
- [ ] All social and Google Forms links open correctly.
- [ ] Sitemap and robots endpoints work.
- [ ] No `noindex`, no console errors, no mixed content.
- [ ] Record the final production URL in `SESSION_HANDOVER.md`.

## 4. Routine update workflow

Because content is static and developer-managed:

1. Edit the relevant file under `src/content/` (or replace an image/PDF in `public/`).
2. Run local checks: `npm run lint`, `npx tsc --noEmit`, `npm run build`.
3. Commit with a descriptive message, e.g. `docs: update current executive board`.
4. Push to `main` → Vercel deploys automatically.
5. Verify the live URL.

### Common maintenance tasks

| Task | Where |
| --- | --- |
| Change contact details / socials / Google Forms URL | `src/content/site.ts` or `contact.ts` |
| Add/edit an event | `src/content/events.ts` + `public/images/events/<slug>/` |
| Add a study guide | `src/content/study-guides.ts` + `public/documents/study-guides/` |
| Update board members | `src/content/executive-board.ts` + `public/images/executive-board/` |
| Replace a logo | `public/images/branding/` (keep aspect ratio; dark/light variants) |
| Change palette/type tokens | Tailwind config + `src/app/globals.css` (update `DESIGN_SYSTEM.md`) |

## 5. Asset handling rules

- Keep original high-resolution photos/PDFs outside the exported public set where practical (`assets/` archive).
- Optimize copies before placing in `public/images/`; never overwrite originals.
- Use lowercase kebab-case filenames.
- Only publish owner-approved PDFs and photography.

## 6. Rollback

- Vercel dashboard → *Deployments* → select a previous successful deployment → *Promote to Production*.
- Or revert the last commit locally and push:
  ```powershell
  git revert HEAD
  git push
  ```
- Verify the live URL after rollback.

## 7. Zero-budget guardrails

- No paid domains, templates, plugins, fonts, APIs, or hosting tiers.
- No analytics/ad pixels or nonessential cookies without explicit owner approval.
- External Google Forms and social platforms are linked, not embedded with trackers.
- Check Vercel free-plan limits before any configuration change that might incur cost.

## 8. Handover

After the live site is verified: finalize `README.md`, complete `SESSION_HANDOVER.md`, mark Phase 10 COMPLETED (all criteria satisfied), and obtain owner sign-off.
