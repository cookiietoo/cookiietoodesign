# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio for Nilesh Chhipa ("Cookiietoo"). Editorial-minimal design, deployed at https://cookiietoodesign.vercel.app/.

## Commands

```bash
npm run dev          # local dev → http://localhost:3000
npm run build        # production build (also runs TypeScript + ESLint); mirrors Vercel
npm start            # serve the production build
npm test             # run the Vitest suite once
npm run test:watch   # watch mode
npm test -- torchHero   # run a single test file by name pattern
npm run lint         # ESLint

# Reproduce a Vercel build exactly (catches lockfile / clean-install issues):
rm -rf node_modules .next && npm ci && npm run build
```

## Deployment

- **Pushing to `main` auto-deploys** via Vercel to `cookiietoodesign.vercel.app` — no Vercel CLI needed (`gh` is authenticated as `cookiietoo`; the GitHub integration triggers the build). Vercel CLI is NOT logged in.
- `engines.node` is pinned to **22.x** and must stay there — Next 16 needs Node 20+, but this Vercel project's legacy default was Node 18 and will fail the build otherwise.
- The previous portfolio is preserved on the **`legacy-site`** branch (rollback safety net) — don't delete it.

## Architecture

**Content-driven.** Pages are thin; all copy and data live in `lib/content/`. To change the site you almost always edit content, not components.

- `lib/content/projects.js` — case studies + getters. **Adding a project = append one object**; it automatically gets a `/work/<slug>` page (`generateStaticParams`), a home index row, and a sitemap entry. Getters:
  - `getAllProjects()` — everything (routing, sitemap, `getNextProject`).
  - `getIndexProjects()` — the home "Selected Work" list, ordered by the `INDEX_ORDER` slug array and **excluding `spotlight` projects**.
  - `getProjectBySlug`, `getNextProject`.
  - Project flags: `spotlight: true` surfaces a project in the **How I Work** section and hides it from the Selected Work index (e.g. `usquare`). `nda: true` renders an "Under NDA — representative visuals" badge on the case study and an NDA tag in the index.
  - Section shape: `{ heading, body: string | string[], images?: (string | {src, caption} | {placeholder, caption})[] }`. A `placeholder` entry renders a labeled dashed box instead of an image — a stand-in / shot-list marker for assets not yet supplied.
- `lib/content/site.js` — identity, `skills`, `accentSkills`, `clients`, links, `cvPath`, `status`. **`role` is intentionally "Product Designer" (mid-level positioning), not "Senior."** Keep "Senior"/"Sr." out of headline copy.
- `lib/content/ui.js` — the UI-gallery images (UI Work section + `/ui` page).

**Rendering (`app/`, App Router).** `app/page.jsx` composes the home page from section components in `components/home/` in order (TorchHero → IntroStatement → UIWork → HowIWork → ProjectIndex → ClientMarquee → AboutTeaser → ContactFooter). Routes: `/`, `/about`, `/work/[slug]` (SSG), `/ui`, plus `sitemap.js` / `robots.js`. The root layout wraps all children in `SmoothScroll > CustomCursor + PageTransition`.

**Motion system — the key pattern.** Every animated or pointer-driven feature is gated by two hooks: `useReducedMotion()` and `usePointerFine()` (`lib/hooks/`). Desktop fine-pointer users get the full experience (torch hero, custom cursor, magnetic buttons, Lenis smooth scroll, scroll reveals, page transitions); **touch and reduced-motion users get clean static fallbacks**. When adding anything interactive, follow this — provide a fallback, don't assume hover/cursor.
- **`data-cursor` convention:** put `data-cursor="view"` on links/buttons to morph the custom cursor to a "View →" pill (`"hide"` to hide it). `CustomCursor` reads the nearest `[data-cursor]` ancestor.
- `TorchHero` is the signature piece: desktop reveals scattered skill words through a cursor-following radial mask; touch/reduced-motion renders the skills as a wrapped chip cloud instead.

**Styling — Tailwind v4, no config file.** There is no `tailwind.config.js`. Design tokens live in `app/globals.css` as `:root` CSS variables (`--paper`, `--ink`, `--accent`, `--ink-60/40/07/035`) plus an `@theme inline` block. Components consume the CSS vars directly (`style={{ color: "var(--ink-60)" }}`) — they are the source of truth, so add new tokens there. Fonts are wired via `next/font` (`--font-grotesk` = Inter, `--font-mono` = JetBrains Mono); **monospace is for small meta/labels/numbers only.**

**Case study visuals.** NDA projects (H&M, Saudi Electric) use hand-authored **SVG "representative" concept mockups** under `public/work/<slug>/`; Airbnb and Usquare use real raster assets. Do not present concept visuals as real shipped screens — the NDA badge exists for this reason.

## Testing notes

Vitest + React Testing Library + jsdom. Two non-obvious requirements:
- `test/setup.js` stubs `window.matchMedia` (jsdom lacks it). Any component using the media hooks needs this to render in tests.
- **Component tests containing JSX must use the `.jsx` extension** — Vitest's transformer does not enable JSX in `.js` files (the data/logic tests are `.js` and contain no JSX).

## Framework caveat

@AGENTS.md
