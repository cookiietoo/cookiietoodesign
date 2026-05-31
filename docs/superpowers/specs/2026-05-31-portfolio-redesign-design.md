# Portfolio Redesign — Design Spec

**Owner:** Nilesh Chhipa (Cookiietoo®)
**Date:** 2026-05-31
**Status:** Approved for planning

---

## 1. Goal & context

A new personal portfolio whose **#1 job is landing a senior product-design role**. It should read as credible and senior to recruiters and hiring managers (depth of case studies, easy to scan) while being award-worthy (awwwards-caliber craft and interaction).

The current live site (`cookiietoodesign.vercel.app`, repo `cookiietoo/cookiietoodesign`) is a dark, list-based Next.js 13 site whose content is **out of sync with the resume** — it features Usquare/Coduzion, not the stronger story of H&M, Airbnb, and the Government of Saudi Arabia. The new site is a **fresh build** that leads with the resume's marquee work.

**Source of truth for content:** `Nilesh_Chhipa_Product_Designer.pdf` (resume).

### Success criteria
- A recruiter can understand seniority and impact within ~30 seconds of scanning the home page.
- Each marquee project has a full problem → process → outcome case study with real metrics.
- The site has one memorable, delightful signature interaction (the torch hero) without feeling gimmicky.
- Fast, accessible, responsive; deployable to Vercel.

---

## 2. Brand & visual system

- **Identity:** "Nilesh Chhipa" as the person; "Cookiietoo®" as the studio/practice mark.
- **Aesthetic:** Editorial Minimal — Swiss/print influence, generous whitespace, big confident type, restraint punctuated by one surprise. Philosophy: **surprise & restraint** (looks calm/almost empty, then does one delightful thing).
- **Palette:**
  - Paper (background): `#f1ede4`
  - Ink (primary text): `#16140f`
  - Accent (vermillion, used sparingly — links, status, key hovers, a few accent skill words): `#d6492f`
  - Plus 2–3 warm greys derived from ink (e.g. `rgba(22,20,15,.6 / .4 / .07)`) for hierarchy.
- **Typography:**
  - **Grotesk** for headlines and body (e.g. Neue Haas Grotesk / Inter / Geist — final pick during build).
  - **Monospace** for small meta only: labels, section indices, years, percentages, client/role tags. This gives a subtle "designed by someone technical" edge.
- **Tone of motion:** Refined & kinetic but tasteful. Everything has intention; nothing shouts.

---

## 3. Sitemap

- **Home** — single long-scroll hub.
- **Case study pages** — `/work/saudi-electric`, `/work/hm`, `/work/airbnb`. Template-driven so new projects = new content file.
- **About** — standalone page.
- **Resume** — `Download CV (PDF)` (existing PDF) surfaced in the contact/footer and About; no separate page required.

---

## 4. Signature interactions (the toolkit)

Confirmed set (everything except a 3D/WebGL moment, which is left as a future hook):

1. **Custom cursor** — minimal dot that morphs contextually (grows to a "View →" pill over project rows, hides/changes over text). Backbone of the feel.
2. **Torch-reveal hero** — see §5.1. The signature "surprise & restraint" moment.
3. **Project index with cursor-follow preview** — project list where hovering a row floats a live preview image near the cursor.
4. **Magnetic buttons & links** — key CTAs (Contact, View case study) gently pull toward the cursor.
5. **Scroll reveals + smooth scroll** — Lenis smooth scroll; headlines/images mask-reveal on scroll.
6. **Page transitions** — home ↔ case study slide/fade like turning a page (no hard reload).
7. **Client marquee** — slow horizontal band of client names that reacts to scroll velocity.

**Future hook (not in initial scope):** one restrained 3D/WebGL object (using Blender/Houdini skills), e.g. in the footer or About.

---

## 5. Home page — section by section

### 5.1 Hero — "Torch reveal" (prototyped & approved)
- Warm paper canvas. **Name ("Nilesh Chhipa") + role ("Senior Product Designer") always solid and centered.**
- The viewport is secretly full of skill words as a **very faint watermark** (resting opacity ≈ `0.035` — reads as almost empty).
- The cursor acts as a **torch**: a radial mask (~150px radius, soft fade) reveals the skill words into full ink legibility within its radius, then they fade back as the cursor moves on. A soft warm (accent) glow + a smooth trailing ring accompany the cursor.
- A few key skills (Design Systems, UI Design, 3D / Motion) reveal in the **vermillion accent**.
- Chrome: top-left brand ("Cookiietoo® — Nilesh Chhipa"), top-right "Open to senior roles" status (accent dot), bottom pulsing hint ("Move your cursor — find what I do").
- Skills shown (from resume): Design Systems, UX Research, UI Design, Prototyping, Interaction Design, Visual Design, Accessibility, Information Architecture, User Testing, Design Tokens, Wireframing, Usability Testing, 3D / Motion, Figma, Storybook.
- **Build notes vs prototype:** word placement must never collide with the centered name; tune radius/fade; mobile fallback (§7).

### 5.2 Intro statement
- One big editorial line, revealing on scroll: *"I think in systems, execute with craft, and design closer to production."* (from resume summary). Mono sub-label optional (e.g. "Senior Product Designer · 6 years").

### 5.3 Selected Work — the index
- Projects as a clean text-list (rows): each row = project name + short descriptor + mono meta (client, year, role).
- Hovering a row floats a **live preview image** near the cursor; cursor morphs to "View →".
- Click → page transition into the case study.
- Initial projects: **Saudi Electric (Horizontal Digital), H&M, Airbnb.** Optional additional rows (Usquare, Coduzion) if desired later.

### 5.4 Client marquee
- Slow horizontal band: *H&M · Airbnb · Gov. of Saudi Arabia · Horizontal Digital* — speed reacts to scroll velocity. Instant credibility.

### 5.5 About teaser
- Short bio + photo + "More about me →" link to the About page.

### 5.6 Contact / footer
- Large "Let's work together" headline.
- Email as a **magnetic button**, LinkedIn link, "Open to senior roles" status, **Download CV (PDF)**.
- Footer meta: location, ©, built-with note (optional).

---

## 6. Case study template (senior-credibility core)

Consistent structure per project, content-driven:

- **Header:** project title, role, year, client, one-line summary.
- **Context:** the problem / brief / constraints.
- **My role & process:** what Nilesh owned; research, IA, prototyping, testing, design systems work.
- **Key decisions:** narrative + full-bleed visuals showing the reasoning.
- **Outcomes:** quantified metrics. Known from resume:
  - Saudi Electric: B2B electricity-connection portal; **+12% task success rate**; design system / component library in Figma.
  - H&M: mobile product-discovery redesign; **+8% click-through**, **−3% exit rate**; research + component library contributions.
  - Airbnb (intern): B2B payments redesign; cleaner interaction patterns; design-system contributions.
- **Next project** link at the bottom.
- Generous full-bleed imagery, scroll reveals, mono labels for meta. NDA-sensitive material handled per project.

---

## 7. Tech stack & architecture

- **Framework:** Next.js (App Router) + **Tailwind CSS**. Familiar stack; strong SEO; deploys to Vercel.
- **Motion:**
  - **Lenis** — smooth scroll.
  - **GSAP + ScrollTrigger** — scroll reveals, index hover-preview, marquee.
  - **Framer Motion** — page transitions and component-level motion.
- **Reusable primitives:** `useCustomCursor`, `MagneticButton`, `RevealText`/`RevealImage`, `TorchHero`, `ProjectIndex`, `Marquee`, `PageTransition`. Each is a small, single-purpose, independently testable unit.
- **Content model:** projects and About content live in simple typed data/MDX files so adding a project = adding a file (no layout changes).
- **Accessibility (must demonstrate — it's on the resume):**
  - Respect `prefers-reduced-motion`: torch hero and scroll reveals degrade to static legible states.
  - Keyboard navigable; visible focus states; semantic HTML; alt text; sufficient contrast for primary text.
- **Responsive / mobile:**
  - Torch hero → tap-to-reveal or a gentle auto-shimmer that cycles reveal across the skills (no hover dependency).
  - Project index → tappable cards with thumbnails (no cursor-follow preview).
  - Custom cursor / magnetic effects disabled on touch.
- **Performance:** optimized images (`next/image`), lazy-load below-fold media, keep JS for effects modest; target fast LCP.

---

## 8. Deployment & migration

- Fresh repo, built in `/media/chinuHddP1/AI/chinyachinyo/`.
- Deploy to Vercel; cut over from the current `cookiietoodesign.vercel.app` when Nilesh approves.
- Carry over the real resume PDF as the downloadable CV.

---

## 9. Out of scope (initial build)

- 3D/WebGL hero moment (left as a future hook).
- CMS / blog.
- Multi-language.
- Porting old Usquare/Coduzion case studies (can be added later via the content model).

---

## 10. Open items to resolve during build

- Final grotesk typeface choice + licensing.
- Real case-study imagery/assets per project (some may be NDA-limited — confirm what can be shown).
- Final copy for intro statement and case study narratives.
- Photo for hero-adjacent About teaser.
