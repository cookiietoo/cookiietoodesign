# Cookiietoo — Nilesh Chhipa Portfolio

Editorial-minimal portfolio for **Nilesh Chhipa, Senior Product Designer**. Warm paper + ink + one vermillion accent, a torch-reveal hero, custom cursor, and template-driven case studies.

## Stack

- **Next.js 16** (App Router) · **React** · **Tailwind CSS v4**
- **Lenis** (smooth scroll) · **GSAP** (marquee) · **motion / Framer Motion** (reveals, page transitions)
- **Vitest** + React Testing Library

## Scripts

```bash
npm run dev      # local dev at http://localhost:3000
npm test         # run the unit test suite
npm run build    # production build (static export of all routes)
npm start        # serve the production build
```

## Project structure

```
app/                 routes: / (home), /about, /work/[slug] (case studies), sitemap, robots
components/
  home/              hero + home sections (TorchHero, ProjectIndex, ClientMarquee, …)
  work/              case study sub-components (header, section, outcomes)
  motion/            MagneticButton, Reveal, PageTransition
  cursor/            CustomCursor
  providers/         SmoothScroll (Lenis)
lib/
  content/           site.js (identity, skills, clients) + projects.js (case study data)
  hooks/             useReducedMotion, usePointerFine
  motion/            magnetic offset helper
public/cv/           downloadable résumé PDF
docs/superpowers/    design spec + implementation plan
```

## Editing content

All copy lives in `lib/content/` — **no layout changes needed** to update the site:

- **Identity, skills, clients, links:** `lib/content/site.js`
  - ⚠️ `site.linkedin` is a placeholder — set the real LinkedIn URL.
- **Case studies:** `lib/content/projects.js`. To **add a project**, append an entry (slug, title, client, role, year, summary, `preview`, `sections[]`, `outcomes[]`); it automatically appears in the home work index, gets a `/work/<slug>` page, and joins the sitemap.
- **Imagery:** drop files in `public/work/<slug>/` and reference them from the project's `preview` / `sections[].images`. (Preview boxes render a neutral fill until real images are added.)
- **Résumé:** replace `public/cv/Nilesh_Chhipa_Product_Designer.pdf` (keep the path or update `site.cvPath`).

## Accessibility & responsiveness

- All motion respects `prefers-reduced-motion` (the torch hero, reveals, marquee, smooth scroll, and page transitions degrade to static/native).
- Custom cursor and magnetic effects activate only on fine pointers; touch gets tap-friendly fallbacks.

## Deployment / cutover

Deploys to **Vercel**. To replace the current site, point the existing
`cookiietoodesign.vercel.app` Vercel project at this repository's
`build/portfolio-redesign` branch (or merge it to `main` first). Update the
`metadataBase` / sitemap base URL in `app/layout.jsx`, `app/sitemap.js`, and
`app/robots.js` if the domain changes.
