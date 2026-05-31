# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fresh, editorial-minimal, awwwards-caliber portfolio for Nilesh Chhipa (Cookiietoo®) whose primary job is landing a senior product-design role.

**Architecture:** Next.js App Router site. A typed content layer (projects + site config) drives a one-page home hub, template-driven case study pages, and an About page. A small set of reusable motion primitives (Lenis smooth scroll, custom cursor, magnetic buttons, scroll reveals, page transitions) compose into sections. The signature moment is a "torch reveal" hero. All motion respects `prefers-reduced-motion` and degrades on touch.

**Tech Stack:** Next.js (App Router) · React · Tailwind CSS · Lenis (smooth scroll) · GSAP + ScrollTrigger (scroll reveals, index hover, marquee) · `motion` (Framer Motion — page/component transitions) · Vitest + React Testing Library (logic unit tests).

**Reference spec:** `docs/superpowers/specs/2026-05-31-portfolio-redesign-design.md`

**Design tokens (single source of truth):**
- Paper `#f1ede4` · Ink `#16140f` · Accent (vermillion) `#d6492f`
- Greys derived from ink: `rgba(22,20,15,.6)`, `.4`, `.07`, `.035`
- Grotesk for headings + body; monospace for meta/labels/numbers.

---

## File Structure

```
/                              (repo root, already git-init'd)
├─ app/
│  ├─ layout.jsx               Root layout: fonts, providers, cursor, metadata
│  ├─ page.jsx                 Home (composes home sections)
│  ├─ globals.css              Tailwind + CSS variables (design tokens)
│  ├─ about/page.jsx           About page
│  └─ work/[slug]/page.jsx     Case study template (dynamic)
├─ components/
│  ├─ providers/
│  │  └─ SmoothScroll.jsx      Lenis provider
│  ├─ cursor/
│  │  └─ CustomCursor.jsx      Custom cursor (context-aware)
│  ├─ motion/
│  │  ├─ MagneticButton.jsx    Magnetic hover wrapper
│  │  ├─ Reveal.jsx            Scroll-reveal wrapper (text/image)
│  │  └─ PageTransition.jsx    Route transition wrapper
│  ├─ home/
│  │  ├─ TorchHero.jsx         Signature torch-reveal hero
│  │  ├─ IntroStatement.jsx    Big editorial line
│  │  ├─ ProjectIndex.jsx      Work list w/ cursor-follow preview
│  │  ├─ ClientMarquee.jsx     Velocity-reactive marquee
│  │  ├─ AboutTeaser.jsx       Short bio + photo
│  │  └─ ContactFooter.jsx     Contact + footer
│  └─ work/
│     ├─ CaseStudyHeader.jsx   Title/role/year/client/summary
│     ├─ CaseStudySection.jsx  Generic content block
│     └─ CaseStudyOutcomes.jsx Metrics block
├─ lib/
│  ├─ content/
│  │  ├─ projects.js           Typed project data + getters
│  │  └─ site.js               Site config (name, skills, clients, links)
│  └─ hooks/
│     ├─ useReducedMotion.js   prefers-reduced-motion hook
│     └─ usePointerFine.js     pointer:fine (non-touch) hook
├─ public/
│  ├─ cv/Nilesh_Chhipa_Product_Designer.pdf
│  └─ work/...                 case study imagery
├─ test/setup.js               Vitest setup
├─ vitest.config.js
└─ (config files from scaffold)
```

**Cursor-context convention:** interactive elements set a data attribute the cursor reads — `data-cursor="view"` (project rows), `data-cursor="hide"` (text inputs), default otherwise.

---

## Phase 0 — Scaffold & tokens

### Task 0.1: Scaffold Next.js app

**Files:**
- Create: project scaffold in repo root.

- [ ] **Step 1: Scaffold into the existing repo**

The repo root already exists with `.git`, `.gitignore`, and `docs/`. Scaffold into a temp dir and move files in (create-next-app refuses a non-empty dir).

```bash
cd /media/chinuHddP1/AI/chinyachinyo
npx create-next-app@latest .scaffold --js --app --tailwind --eslint --no-src-dir --import-alias "@/*" --use-npm
shopt -s dotglob
mv .scaffold/* .scaffold/.[!.]* . 2>/dev/null || true
rm -rf .scaffold
```

- [ ] **Step 2: Verify dev server boots**

Run: `npm run dev` then open `http://localhost:3000`
Expected: default Next.js page renders. Stop the server (Ctrl-C).

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js app (App Router + Tailwind)"
```

### Task 0.2: Install dependencies

- [ ] **Step 1: Install runtime + test deps**

```bash
cd /media/chinuHddP1/AI/chinyachinyo
npm install lenis gsap motion
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom @vitejs/plugin-react
```

- [ ] **Step 2: Verify install**

Run: `npm ls lenis gsap motion vitest`
Expected: all listed with versions, no missing-peer errors that block install.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add lenis, gsap, motion, vitest deps"
```

### Task 0.3: Configure Vitest

**Files:**
- Create: `vitest.config.js`, `test/setup.js`
- Modify: `package.json` (scripts)

- [ ] **Step 1: Create `vitest.config.js`**

```js
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./test/setup.js"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, ".") },
  },
});
```

- [ ] **Step 2: Create `test/setup.js`**

```js
import "@testing-library/jest-dom";
```

- [ ] **Step 3: Add test script to `package.json`**

Add to the `"scripts"` object:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 4: Add a smoke test to verify the runner**

Create `test/smoke.test.js`:

```js
import { describe, it, expect } from "vitest";

describe("vitest", () => {
  it("runs", () => {
    expect(1 + 1).toBe(2);
  });
});
```

- [ ] **Step 5: Run it**

Run: `npm test`
Expected: PASS, 1 test.

- [ ] **Step 6: Commit**

```bash
git add vitest.config.js test/ package.json
git commit -m "chore: configure vitest + RTL"
```

### Task 0.4: Design tokens & global CSS

**Files:**
- Modify: `app/globals.css`
- Modify: `tailwind.config.js` (or `app/globals.css` `@theme` if Tailwind v4)

- [ ] **Step 1: Replace `app/globals.css` with tokens**

Detect Tailwind version: `npm ls tailwindcss`. If v4 (no `tailwind.config.js` generated), use the `@theme` block; if v3, keep `@tailwind` directives and put tokens in `:root`. Write the v3-compatible version (works either way because the `:root` vars are what components consume):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --paper: #f1ede4;
  --ink: #16140f;
  --accent: #d6492f;
  --ink-60: rgba(22, 20, 15, 0.6);
  --ink-40: rgba(22, 20, 15, 0.4);
  --ink-07: rgba(22, 20, 15, 0.07);
  --ink-035: rgba(22, 20, 15, 0.035);
}

html { -webkit-font-smoothing: antialiased; }

body {
  background: var(--paper);
  color: var(--ink);
}

/* hide native cursor only when fine pointer + cursor enabled */
@media (pointer: fine) {
  body[data-cursor-on="true"] { cursor: none; }
}

@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
}
```

- [ ] **Step 2: If Tailwind v3, extend theme in `tailwind.config.js`**

In `theme.extend.colors` add:

```js
colors: {
  paper: "#f1ede4",
  ink: "#16140f",
  accent: "#d6492f",
},
```
Add font families (set actual fonts in Task 0.5):
```js
fontFamily: {
  sans: ["var(--font-grotesk)", "Helvetica Neue", "Arial", "sans-serif"],
  mono: ["var(--font-mono)", "ui-monospace", "monospace"],
},
```

- [ ] **Step 3: Verify build still compiles**

Run: `npm run dev`, open `http://localhost:3000`
Expected: page background is warm paper `#f1ede4`. Stop server.

- [ ] **Step 4: Commit**

```bash
git add app/globals.css tailwind.config.js
git commit -m "feat: design tokens (paper/ink/accent) + global css"
```

### Task 0.5: Fonts

**Files:**
- Modify: `app/layout.jsx`

- [ ] **Step 1: Wire `next/font`**

Use a grotesk + mono from `next/font/google` (swap to a licensed grotesk later; Geist/Inter are good free defaults). In `app/layout.jsx`:

```jsx
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Inter({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata = {
  title: "Nilesh Chhipa — Senior Product Designer",
  description:
    "Senior Product Designer with 6 years across enterprise and consumer products. Past work: H&M, Airbnb, Government of Saudi Arabia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Verify fonts load**

Run: `npm run dev`, open home, inspect `body` computed `font-family` includes Inter.
Expected: grotesk applied.

- [ ] **Step 3: Commit**

```bash
git add app/layout.jsx
git commit -m "feat: wire grotesk + mono fonts via next/font"
```

---

## Phase 1 — Content model

### Task 1.1: Site config

**Files:**
- Create: `lib/content/site.js`
- Test: `test/content/site.test.js`

- [ ] **Step 1: Write the failing test**

```js
import { describe, it, expect } from "vitest";
import { site, skills, clients } from "@/lib/content/site";

describe("site config", () => {
  it("exposes identity + links", () => {
    expect(site.name).toBe("Nilesh Chhipa");
    expect(site.email).toBe("chhipanilesh1@gmail.com");
    expect(site.cvPath).toBe("/cv/Nilesh_Chhipa_Product_Designer.pdf");
  });
  it("has the hero skills list", () => {
    expect(skills).toContain("Design Systems");
    expect(skills).toContain("3D / Motion");
    expect(skills.length).toBeGreaterThanOrEqual(12);
  });
  it("lists marquee clients", () => {
    expect(clients).toEqual(
      expect.arrayContaining(["H&M", "Airbnb", "Gov. of Saudi Arabia", "Horizontal Digital"])
    );
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- site`
Expected: FAIL (module not found).

- [ ] **Step 3: Create `lib/content/site.js`**

```js
export const site = {
  name: "Nilesh Chhipa",
  brand: "Cookiietoo®",
  role: "Senior Product Designer",
  summary:
    "I think in systems, execute with craft, and design closer to production.",
  email: "chhipanilesh1@gmail.com",
  linkedin: "https://www.linkedin.com/in/", // TODO: confirm exact handle with Nilesh
  cvPath: "/cv/Nilesh_Chhipa_Product_Designer.pdf",
  status: "Open to senior roles",
  location: "India",
};

export const skills = [
  "Design Systems",
  "UX Research",
  "UI Design",
  "Prototyping",
  "Interaction Design",
  "Visual Design",
  "Accessibility",
  "Information Architecture",
  "User Testing",
  "Design Tokens",
  "Wireframing",
  "Usability Testing",
  "3D / Motion",
  "Figma",
  "Storybook",
];

// which skills render in the accent color on the hero
export const accentSkills = ["Design Systems", "UI Design", "3D / Motion"];

export const clients = [
  "H&M",
  "Airbnb",
  "Gov. of Saudi Arabia",
  "Horizontal Digital",
];
```

> Note: `linkedin` is a known open item — flag to Nilesh to confirm the exact URL; do not block on it.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- site`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add lib/content/site.js test/content/site.test.js
git commit -m "feat: site config content (identity, skills, clients)"
```

### Task 1.2: Projects content + getters

**Files:**
- Create: `lib/content/projects.js`
- Test: `test/content/projects.test.js`

- [ ] **Step 1: Write the failing test**

```js
import { describe, it, expect } from "vitest";
import { projects, getAllProjects, getProjectBySlug, getNextProject } from "@/lib/content/projects";

describe("projects content", () => {
  it("includes the three marquee projects", () => {
    const slugs = getAllProjects().map((p) => p.slug);
    expect(slugs).toEqual(expect.arrayContaining(["saudi-electric", "hm", "airbnb"]));
  });
  it("looks up by slug", () => {
    const p = getProjectBySlug("hm");
    expect(p.client).toBe("H&M");
    expect(p.outcomes.some((o) => o.value.includes("8%"))).toBe(true);
  });
  it("returns undefined for unknown slug", () => {
    expect(getProjectBySlug("nope")).toBeUndefined();
  });
  it("wraps to the first project for next-after-last", () => {
    const last = getAllProjects().at(-1);
    const next = getNextProject(last.slug);
    expect(next.slug).toBe(getAllProjects()[0].slug);
  });
  it("every project has required fields", () => {
    for (const p of projects) {
      expect(p.slug && p.title && p.client && p.role && p.year).toBeTruthy();
      expect(Array.isArray(p.sections)).toBe(true);
      expect(Array.isArray(p.outcomes)).toBe(true);
    }
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- projects`
Expected: FAIL (module not found).

- [ ] **Step 3: Create `lib/content/projects.js`**

```js
/**
 * @typedef {Object} Outcome
 * @property {string} value  e.g. "+12%"
 * @property {string} label  e.g. "task success rate"
 *
 * @typedef {Object} CaseSection
 * @property {string} heading
 * @property {string} body
 * @property {string[]} [images]  paths under /public
 *
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} client
 * @property {string} role
 * @property {string} year
 * @property {string} summary
 * @property {string} preview   list-hover preview image
 * @property {CaseSection[]} sections
 * @property {Outcome[]} outcomes
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: "saudi-electric",
    title: "Saudi Electric B2B Portal",
    client: "Gov. of Saudi Arabia",
    role: "Sr. Product Designer @ Horizontal Digital",
    year: "2024–26",
    summary:
      "End-to-end design of a B2B electricity-connection portal, simplifying complex multi-step enterprise workflows for government and commercial clients.",
    preview: "/work/saudi-electric/preview.jpg",
    sections: [
      {
        heading: "Context",
        body:
          "The Saudi Electric Company needed a B2B portal for government and commercial clients to apply for and manage electricity connections — a process buried in multi-step regulatory and operational complexity.",
      },
      {
        heading: "Role & process",
        body:
          "I owned the end-to-end design: mapping the workflows, simplifying the application and approval flows, and running structured iterative prototyping with moderated usability testing to find and fix drop-off points before production.",
      },
      {
        heading: "Design system",
        body:
          "I established and maintained a Figma component library — reusable patterns, tokens, and documentation — that standardized UI across the portal and reduced design-to-development friction.",
      },
    ],
    outcomes: [
      { value: "+12%", label: "task success rate" },
      { value: "Scale", label: "gov + commercial clients" },
    ],
  },
  {
    slug: "hm",
    title: "H&M Mobile Shopping",
    client: "H&M",
    role: "Product Designer → Sr. Product Designer",
    year: "2020–24",
    summary:
      "Redesigned key product-discovery and browsing interactions across H&M's global mobile app, improving conversion at scale.",
    preview: "/work/hm/preview.jpg",
    sections: [
      {
        heading: "Context",
        body:
          "H&M's global mobile shopping experience had friction across product discovery and browsing that was costing conversion.",
      },
      {
        heading: "Research",
        body:
          "I ran end-to-end research — interviews, behavioural data analysis, usability reviews — to surface opportunities across the core shopping journey, shaping decisions across multiple feature cycles.",
      },
      {
        heading: "Redesign",
        body:
          "Partnering with PMs, engineers, and brand stakeholders in agile sprints, I produced wireframes, prototypes, and high-fidelity designs and saw them through to production across iOS and Android, contributing aligned components to the shared library.",
      },
    ],
    outcomes: [
      { value: "+8%", label: "click-through rate" },
      { value: "−3%", label: "exit rate" },
    ],
  },
  {
    slug: "airbnb",
    title: "Airbnb B2B Payments",
    client: "Airbnb",
    role: "Intern Product Designer",
    year: "2020",
    summary:
      "Contributed to the redesign of Airbnb's B2B payment system, simplifying business-client payment flows and the internal design system.",
    preview: "/work/airbnb/preview.jpg",
    sections: [
      {
        heading: "Context",
        body:
          "Airbnb's B2B payment flows for business clients had UX friction across the end-to-end payment experience.",
      },
      {
        heading: "Contribution",
        body:
          "I identified friction points and delivered cleaner interaction patterns, and supported the evolution of the internal design system — auditing components and contributing reusable patterns to the shared Figma library.",
      },
    ],
    outcomes: [
      { value: "Cleaner", label: "payment flows" },
      { value: "Design system", label: "reusable patterns" },
    ],
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return undefined;
  return projects[(i + 1) % projects.length];
}
```

> Body copy is drawn from the resume; refine with Nilesh and add real imagery later (open item in the spec).

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- projects`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add lib/content/projects.js test/content/projects.test.js
git commit -m "feat: projects content model + getters"
```

### Task 1.3: Place the CV PDF

- [ ] **Step 1: Copy the resume into public**

```bash
mkdir -p /media/chinuHddP1/AI/chinyachinyo/public/cv
cp /home/chinux/Downloads/Nilesh_Chhipa_Product_Designer.pdf \
   /media/chinuHddP1/AI/chinyachinyo/public/cv/Nilesh_Chhipa_Product_Designer.pdf
```

- [ ] **Step 2: Verify it serves**

Run: `npm run dev`, open `http://localhost:3000/cv/Nilesh_Chhipa_Product_Designer.pdf`
Expected: PDF loads. Stop server.

- [ ] **Step 3: Commit**

```bash
git add public/cv/
git commit -m "chore: add downloadable CV pdf"
```

---

## Phase 2 — Hooks & motion primitives

### Task 2.1: `useReducedMotion` + `usePointerFine` hooks

**Files:**
- Create: `lib/hooks/useReducedMotion.js`, `lib/hooks/usePointerFine.js`
- Test: `test/hooks/mediaHooks.test.js`

- [ ] **Step 1: Write the failing test** (mock `matchMedia`)

```js
import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { usePointerFine } from "@/lib/hooks/usePointerFine";

function mockMatchMedia(matches) {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
}

describe("media hooks", () => {
  beforeEach(() => vi.restoreAllMocks());

  it("useReducedMotion reflects matchMedia", () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(true);
  });

  it("usePointerFine reflects matchMedia", () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => usePointerFine());
    expect(result.current).toBe(true);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- mediaHooks`
Expected: FAIL (modules not found).

- [ ] **Step 3: Create `lib/hooks/useReducedMotion.js`**

```js
"use client";
import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}
```

- [ ] **Step 4: Create `lib/hooks/usePointerFine.js`**

```js
"use client";
import { useEffect, useState } from "react";

export function usePointerFine() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return fine;
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test -- mediaHooks`
Expected: PASS (initial state mocked to true; render returns true).

- [ ] **Step 6: Commit**

```bash
git add lib/hooks/ test/hooks/
git commit -m "feat: useReducedMotion + usePointerFine hooks"
```

### Task 2.2: Magnetic math (pure fn) + MagneticButton

**Files:**
- Create: `lib/motion/magnetic.js`, `components/motion/MagneticButton.jsx`
- Test: `test/motion/magnetic.test.js`

- [ ] **Step 1: Write the failing test for the pure function**

```js
import { describe, it, expect } from "vitest";
import { magneticOffset } from "@/lib/motion/magnetic";

const rect = { left: 100, top: 100, width: 100, height: 40 }; // center 150,120

describe("magneticOffset", () => {
  it("is zero at the center", () => {
    expect(magneticOffset(150, 120, rect, 0.4)).toEqual({ x: 0, y: 0 });
  });
  it("pulls toward the pointer, scaled by strength", () => {
    const { x } = magneticOffset(200, 120, rect, 0.4); // 50px right of center
    expect(x).toBeCloseTo(20); // 50 * 0.4
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- magnetic`
Expected: FAIL (module not found).

- [ ] **Step 3: Create `lib/motion/magnetic.js`**

```js
/** Offset to translate an element toward the pointer. */
export function magneticOffset(px, py, rect, strength = 0.4) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  return { x: (px - cx) * strength, y: (py - cy) * strength };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- magnetic`
Expected: PASS.

- [ ] **Step 5: Create `components/motion/MagneticButton.jsx`**

```jsx
"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { magneticOffset } from "@/lib/motion/magnetic";
import { usePointerFine } from "@/lib/hooks/usePointerFine";

export default function MagneticButton({ children, strength = 0.4, className = "", as = "button", ...props }) {
  const ref = useRef(null);
  const fine = usePointerFine();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const MotionTag = motion[as] ?? motion.button;

  function onMove(e) {
    if (!fine || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const o = magneticOffset(e.clientX, e.clientY, rect, strength);
    x.set(o.x);
    y.set(o.y);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add lib/motion/magnetic.js components/motion/MagneticButton.jsx test/motion/magnetic.test.js
git commit -m "feat: magnetic offset fn + MagneticButton"
```

### Task 2.3: SmoothScroll (Lenis) provider

**Files:**
- Create: `components/providers/SmoothScroll.jsx`

- [ ] **Step 1: Create the provider**

```jsx
"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function SmoothScroll({ children }) {
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return; // native scroll when reduced motion requested
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [reduced]);
  return children;
}
```

- [ ] **Step 2: Manual verification (after home exists, Task 4.x)**

Deferred check: once content is scrollable, scrolling feels eased; with OS "reduce motion" on, scroll is native. Note here; verify in Task 7.1.

- [ ] **Step 3: Commit**

```bash
git add components/providers/SmoothScroll.jsx
git commit -m "feat: Lenis smooth-scroll provider (reduced-motion aware)"
```

### Task 2.4: CustomCursor

**Files:**
- Create: `components/cursor/CustomCursor.jsx`

- [ ] **Step 1: Create the cursor**

Reads `data-cursor` off the hovered element to switch states. Renders nothing on touch.

```jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { usePointerFine } from "@/lib/hooks/usePointerFine";

export default function CustomCursor() {
  const fine = usePointerFine();
  const dot = useRef(null);
  const ring = useRef(null);
  const [variant, setVariant] = useState("default");
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (!fine) {
      document.body.removeAttribute("data-cursor-on");
      return;
    }
    document.body.setAttribute("data-cursor-on", "true");

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
      const el = e.target.closest?.("[data-cursor]");
      setVariant(el ? el.getAttribute("data-cursor") : "default");
    };
    window.addEventListener("mousemove", move);

    let raf;
    const loop = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.body.removeAttribute("data-cursor-on");
    };
  }, [fine]);

  if (!fine) return null;

  const hidden = variant === "hide";
  const view = variant === "view";

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        style={{
          position: "fixed", left: 0, top: 0, zIndex: 9999, pointerEvents: "none",
          width: view ? 84 : 36, height: view ? 84 : 36, borderRadius: 999,
          border: "1px solid var(--ink-40)",
          background: view ? "var(--accent)" : "transparent",
          color: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
          opacity: hidden ? 0 : 1, transition: "width .2s, height .2s, background .2s, opacity .2s",
        }}
      >
        {view ? "View →" : ""}
      </div>
      <div
        ref={dot}
        aria-hidden
        style={{
          position: "fixed", left: 0, top: 0, zIndex: 9999, pointerEvents: "none",
          width: 8, height: 8, borderRadius: 999, background: "var(--accent)",
          opacity: hidden || view ? 0 : 1, transition: "opacity .2s",
        }}
      />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/cursor/CustomCursor.jsx
git commit -m "feat: context-aware custom cursor (dot + trailing ring)"
```

### Task 2.5: Reveal (scroll reveal) wrapper

**Files:**
- Create: `components/motion/Reveal.jsx`

- [ ] **Step 1: Create the component**

Uses `motion`'s `whileInView`; collapses to instant when reduced motion.

```jsx
"use client";
import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function Reveal({ children, as = "div", delay = 0, y = 24, className = "" }) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;
  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/motion/Reveal.jsx
git commit -m "feat: Reveal scroll-reveal wrapper (reduced-motion aware)"
```

### Task 2.6: PageTransition wrapper

**Files:**
- Create: `components/motion/PageTransition.jsx`

- [ ] **Step 1: Create the component**

```jsx
"use client";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  if (reduced) return <>{children}</>;
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/motion/PageTransition.jsx
git commit -m "feat: route page-transition wrapper"
```

### Task 2.7: Wire providers into root layout

**Files:**
- Modify: `app/layout.jsx`

- [ ] **Step 1: Compose providers + cursor + transition**

Update `RootLayout`'s `<body>`:

```jsx
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/cursor/CustomCursor";
import PageTransition from "@/components/motion/PageTransition";
// ...existing font + metadata code...

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${mono.variable}`}>
      <body className="font-sans">
        <SmoothScroll>
          <CustomCursor />
          <PageTransition>{children}</PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify app still renders**

Run: `npm run dev`, open home.
Expected: default page renders, a custom cursor dot follows the mouse. Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/layout.jsx
git commit -m "feat: wire smooth-scroll, cursor, page-transition into layout"
```

---

## Phase 3 — Torch hero

### Task 3.1: TorchHero component

**Files:**
- Create: `components/home/TorchHero.jsx`
- Test: `test/home/torchHero.test.js`

The interaction was validated in the brainstorm prototype (`.superpowers/brainstorm/.../hero-torch-v2.html`). Port it to React, driving skills from `site.js`, with reduced-motion + touch fallbacks.

- [ ] **Step 1: Write a render test (content + a11y, not motion)**

```js
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TorchHero from "@/components/home/TorchHero";

describe("TorchHero", () => {
  it("renders the name, role and status", () => {
    render(<TorchHero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Nilesh Chhipa");
    expect(screen.getByText("Senior Product Designer")).toBeInTheDocument();
    expect(screen.getByText("Open to senior roles")).toBeInTheDocument();
  });
  it("renders every skill as accessible text", () => {
    render(<TorchHero />);
    // skills exist in the DOM (revealed visually by the torch, but present for a11y/SEO)
    expect(screen.getAllByText("Design Systems").length).toBeGreaterThan(0);
    expect(screen.getAllByText("3D / Motion").length).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- torchHero`
Expected: FAIL (module not found).

- [ ] **Step 3: Create `components/home/TorchHero.jsx`**

```jsx
"use client";
import { useEffect, useRef } from "react";
import { site, skills, accentSkills } from "@/lib/content/site";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { usePointerFine } from "@/lib/hooks/usePointerFine";

// stable scattered positions avoiding the central identity zone
const LAYOUT = [
  { x: 16, y: 20, s: 46 }, { x: 80, y: 16, s: 34 }, { x: 22, y: 78, s: 52 },
  { x: 84, y: 74, s: 30 }, { x: 13, y: 50, s: 26 }, { x: 88, y: 44, s: 28 },
  { x: 50, y: 11, s: 24 }, { x: 50, y: 90, s: 30 }, { x: 30, y: 34, s: 22 },
  { x: 72, y: 60, s: 24 }, { x: 68, y: 30, s: 30 }, { x: 34, y: 64, s: 20 },
  { x: 90, y: 88, s: 22 }, { x: 9, y: 88, s: 20 }, { x: 62, y: 84, s: 22 },
];

function WordLayer({ revealed }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {skills.map((skill, i) => {
        const p = LAYOUT[i % LAYOUT.length];
        const accent = revealed && accentSkills.includes(skill);
        return (
          <span
            key={skill}
            className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-semibold"
            style={{
              left: `${p.x}%`, top: `${p.y}%`, fontSize: p.s,
              letterSpacing: "-0.02em",
              color: revealed ? (accent ? "var(--accent)" : "var(--ink)") : "var(--ink-035)",
            }}
          >
            {skill}
          </span>
        );
      })}
    </div>
  );
}

export default function TorchHero() {
  const reduced = useReducedMotion();
  const fine = usePointerFine();
  const revealRef = useRef(null);
  const torchOn = fine && !reduced;

  useEffect(() => {
    if (!torchOn) return;
    const el = revealRef.current;
    const move = (e) => {
      const m = `radial-gradient(circle 150px at ${e.clientX}px ${e.clientY}px, #000 0%, #000 52%, transparent 100%)`;
      el.style.webkitMaskImage = m;
      el.style.maskImage = m;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [torchOn]);

  return (
    <section className="relative h-[100svh] overflow-hidden">
      {/* faint resting watermark */}
      <WordLayer revealed={false} />

      {/* revealed layer: torch-masked on fine pointers; on touch/reduced it auto-shows softly */}
      <div
        ref={revealRef}
        className="absolute inset-0"
        style={
          torchOn
            ? { WebkitMaskImage: "radial-gradient(circle 150px at -200px -200px,#000 0%,#000 52%,transparent 100%)",
                maskImage: "radial-gradient(circle 150px at -200px -200px,#000 0%,#000 52%,transparent 100%)" }
            : { opacity: reduced ? 1 : 0.5 } /* fallback: gently visible without a torch */
        }
      >
        <WordLayer revealed={true} />
      </div>

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0"
           style={{ background: "radial-gradient(120% 120% at 50% 40%, transparent 55%, rgba(22,20,15,.06))" }} />

      {/* identity */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="font-semibold leading-[0.92] tracking-[-0.04em]"
            style={{ fontSize: "clamp(48px, 9vw, 140px)" }}>
          Nilesh<br />Chhipa
        </h1>
        <div className="mt-4 text-xs uppercase tracking-[0.28em]" style={{ color: "var(--ink-60)" }}>
          {site.role}
        </div>
      </div>

      {/* chrome */}
      <div className="absolute inset-x-0 top-0 flex justify-between px-8 py-6 text-[11px] uppercase tracking-[0.14em]"
           style={{ color: "var(--ink-60)" }}>
        <span>{site.brand} — {site.name}</span>
        <span className="flex items-center gap-2" style={{ color: "var(--accent)" }}>
          <span className="inline-block h-[7px] w-[7px] rounded-full" style={{ background: "var(--accent)" }} />
          {site.status}
        </span>
      </div>
      {torchOn && (
        <div className="absolute inset-x-0 bottom-7 text-center text-[11px] uppercase tracking-[0.16em] animate-pulse"
             style={{ color: "var(--ink-40)" }}>
          Move your cursor — find what I do
        </div>
      )}
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- torchHero`
Expected: PASS (note: jsdom reports `usePointerFine` false, so the reveal layer renders at `opacity:.5` with all skills present — the test asserts presence, which holds).

- [ ] **Step 5: Mount on home for a visual check**

Temporarily set `app/page.jsx`:

```jsx
import TorchHero from "@/components/home/TorchHero";
export default function Home() {
  return <main><TorchHero /></main>;
}
```

Run: `npm run dev`, open home, move the cursor.
Expected: name solid & centered; skills ink in within the torch radius and fade out behind it; "Open to senior roles" top-right; pulsing hint bottom. Toggle OS reduce-motion → skills shown statically, no torch. Stop server.

- [ ] **Step 6: Commit**

```bash
git add components/home/TorchHero.jsx test/home/torchHero.test.js app/page.jsx
git commit -m "feat: TorchHero (signature reveal hero) + fallbacks"
```

---

## Phase 4 — Home sections

### Task 4.1: IntroStatement

**Files:**
- Create: `components/home/IntroStatement.jsx`

- [ ] **Step 1: Create the component**

```jsx
import { site } from "@/lib/content/site";
import Reveal from "@/components/motion/Reveal";

export default function IntroStatement() {
  return (
    <section className="px-6 py-32 md:px-16 md:py-48">
      <Reveal>
        <p className="mx-auto max-w-4xl text-3xl font-medium leading-[1.15] tracking-[-0.03em] md:text-6xl">
          {site.summary}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-40)" }}>
          {site.role} · 6 years
        </p>
      </Reveal>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/home/IntroStatement.jsx
git commit -m "feat: IntroStatement section"
```

### Task 4.2: ProjectIndex (cursor-follow preview)

**Files:**
- Create: `components/home/ProjectIndex.jsx`

- [ ] **Step 1: Create the component**

Rows link to case studies; a floating preview image follows the pointer over the hovered row; rows carry `data-cursor="view"` so the custom cursor morphs.

```jsx
"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { getAllProjects } from "@/lib/content/projects";
import { usePointerFine } from "@/lib/hooks/usePointerFine";

export default function ProjectIndex() {
  const fine = usePointerFine();
  const projects = getAllProjects();
  const [active, setActive] = useState(null);
  const previewRef = useRef(null);

  function onMove(e) {
    if (!previewRef.current) return;
    previewRef.current.style.transform =
      `translate(${e.clientX + 24}px, ${e.clientY - 80}px)`;
  }

  return (
    <section className="px-6 py-24 md:px-16" onMouseMove={fine ? onMove : undefined}>
      <h2 className="mb-12 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-40)" }}>
        Selected Work
      </h2>

      <ul>
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/work/${p.slug}`}
              data-cursor="view"
              onMouseEnter={() => setActive(p.slug)}
              onMouseLeave={() => setActive(null)}
              className="group grid grid-cols-12 items-baseline gap-4 border-t py-8 transition-colors"
              style={{ borderColor: "var(--ink-07)" }}
            >
              <span className="col-span-12 text-3xl font-semibold tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-3 md:col-span-6 md:text-5xl">
                {p.title}
              </span>
              <span className="col-span-8 text-sm md:col-span-4" style={{ color: "var(--ink-60)" }}>
                {p.summary.split(",")[0]}
              </span>
              <span className="col-span-4 text-right font-mono text-xs uppercase tracking-[0.12em] md:col-span-2"
                    style={{ color: "var(--ink-40)" }}>
                {p.client} · {p.year}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {fine && (
        <div
          ref={previewRef}
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-40 h-56 w-72 overflow-hidden rounded-md"
          style={{ opacity: active ? 1 : 0, transition: "opacity .25s" }}
        >
          {projects.map((p) => (
            <img
              key={p.slug}
              src={p.preview}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{ opacity: active === p.slug ? 1 : 0, transition: "opacity .2s" }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
```

> If preview images don't exist yet, the box shows empty — acceptable until assets land. Use a neutral placeholder fill via CSS background on the wrapper if desired.

- [ ] **Step 2: Commit**

```bash
git add components/home/ProjectIndex.jsx
git commit -m "feat: ProjectIndex with cursor-follow preview"
```

### Task 4.3: ClientMarquee

**Files:**
- Create: `components/home/ClientMarquee.jsx`

- [ ] **Step 1: Create the component**

GSAP-driven horizontal loop; speed nudges with scroll velocity; static (CSS) when reduced motion.

```jsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { clients } from "@/lib/content/site";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function ClientMarquee() {
  const reduced = useReducedMotion();
  const track = useRef(null);

  useEffect(() => {
    if (reduced || !track.current) return;
    const el = track.current;
    const half = el.scrollWidth / 2;
    const tween = gsap.to(el, { x: -half, duration: 18, ease: "none", repeat: -1 });
    let last = window.scrollY;
    const onScroll = () => {
      const v = Math.min(Math.abs(window.scrollY - last) / 6, 4);
      last = window.scrollY;
      gsap.to(tween, { timeScale: 1 + v, duration: 0.3, overwrite: true });
      gsap.to(tween, { timeScale: 1, duration: 0.8, delay: 0.3, overwrite: false });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      tween.kill();
    };
  }, [reduced]);

  const items = [...clients, ...clients]; // duplicate for seamless loop

  return (
    <section className="overflow-hidden border-y py-10" style={{ borderColor: "var(--ink-07)" }} aria-label="Clients">
      <div ref={track} className="flex w-max gap-16 whitespace-nowrap will-change-transform">
        {items.map((c, i) => (
          <span key={`${c}-${i}`} className="text-4xl font-semibold tracking-[-0.03em] md:text-6xl"
                style={{ color: "var(--ink-60)" }}>
            {c} <span style={{ color: "var(--accent)" }}>·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/home/ClientMarquee.jsx
git commit -m "feat: velocity-reactive client marquee"
```

### Task 4.4: AboutTeaser

**Files:**
- Create: `components/home/AboutTeaser.jsx`

- [ ] **Step 1: Create the component**

```jsx
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export default function AboutTeaser() {
  return (
    <section className="grid gap-10 px-6 py-32 md:grid-cols-12 md:px-16">
      <div className="md:col-span-7">
        <Reveal>
          <p className="text-2xl font-medium leading-[1.25] tracking-[-0.02em] md:text-4xl">
            Senior Product Designer with 6 years across enterprise and consumer products —
            H&amp;M, Airbnb, and the Government of Saudi Arabia. I think in systems and design
            close to production.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Link href="/about" data-cursor="view"
                className="mt-8 inline-block font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)" }}>
            More about me →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
```

> Add a photo (`/public/about/portrait.jpg`) into the right column when available.

- [ ] **Step 2: Commit**

```bash
git add components/home/AboutTeaser.jsx
git commit -m "feat: AboutTeaser section"
```

### Task 4.5: ContactFooter

**Files:**
- Create: `components/home/ContactFooter.jsx`

- [ ] **Step 1: Create the component**

```jsx
import { site } from "@/lib/content/site";
import MagneticButton from "@/components/motion/MagneticButton";
import Reveal from "@/components/motion/Reveal";

export default function ContactFooter() {
  return (
    <footer className="px-6 py-32 md:px-16">
      <Reveal>
        <h2 className="text-5xl font-semibold tracking-[-0.04em] md:text-8xl">
          Let&apos;s work together
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-wrap items-center gap-6">
        <MagneticButton as="a" href={`mailto:${site.email}`} data-cursor="view"
          className="rounded-full px-7 py-3 text-sm"
          style={{ background: "var(--ink)", color: "var(--paper)" }}>
          {site.email}
        </MagneticButton>
        <a href={site.linkedin} target="_blank" rel="noreferrer" data-cursor="view"
           className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-60)" }}>
          LinkedIn ↗
        </a>
        <a href={site.cvPath} download data-cursor="view"
           className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-60)" }}>
          Download CV ↓
        </a>
      </div>

      <div className="mt-24 flex justify-between font-mono text-[11px] uppercase tracking-[0.14em]"
           style={{ color: "var(--ink-40)" }}>
        <span className="flex items-center gap-2" style={{ color: "var(--accent)" }}>
          <span className="inline-block h-[7px] w-[7px] rounded-full" style={{ background: "var(--accent)" }} />
          {site.status}
        </span>
        <span>© {new Date().getFullYear()} {site.name} — {site.brand}</span>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/home/ContactFooter.jsx
git commit -m "feat: ContactFooter with magnetic email + CV download"
```

### Task 4.6: Compose the home page

**Files:**
- Modify: `app/page.jsx`

- [ ] **Step 1: Compose all sections**

```jsx
import TorchHero from "@/components/home/TorchHero";
import IntroStatement from "@/components/home/IntroStatement";
import ProjectIndex from "@/components/home/ProjectIndex";
import ClientMarquee from "@/components/home/ClientMarquee";
import AboutTeaser from "@/components/home/AboutTeaser";
import ContactFooter from "@/components/home/ContactFooter";

export default function Home() {
  return (
    <main>
      <TorchHero />
      <IntroStatement />
      <ProjectIndex />
      <ClientMarquee />
      <AboutTeaser />
      <ContactFooter />
    </main>
  );
}
```

- [ ] **Step 2: Verify full home renders & scrolls**

Run: `npm run dev`, open home, scroll through.
Expected: hero → intro reveals on scroll → work list with hover preview + "View →" cursor → marquee scrolls & reacts to scroll speed → about teaser → contact footer; smooth scrolling present. Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/page.jsx
git commit -m "feat: compose home page from sections"
```

---

## Phase 5 — Case study pages

### Task 5.1: Case study sub-components

**Files:**
- Create: `components/work/CaseStudyHeader.jsx`, `components/work/CaseStudySection.jsx`, `components/work/CaseStudyOutcomes.jsx`

- [ ] **Step 1: Create `CaseStudyHeader.jsx`**

```jsx
export default function CaseStudyHeader({ project }) {
  return (
    <header className="px-6 pt-40 pb-16 md:px-16">
      <div className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-40)" }}>
        {project.client} · {project.year}
      </div>
      <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] md:text-8xl">
        {project.title}
      </h1>
      <p className="mt-8 max-w-2xl text-xl leading-[1.3]" style={{ color: "var(--ink-60)" }}>
        {project.summary}
      </p>
      <div className="mt-6 font-mono text-xs uppercase tracking-[0.14em]" style={{ color: "var(--ink-40)" }}>
        {project.role}
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Create `CaseStudySection.jsx`**

```jsx
import Reveal from "@/components/motion/Reveal";

export default function CaseStudySection({ section }) {
  return (
    <section className="grid gap-8 px-6 py-16 md:grid-cols-12 md:px-16">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] md:col-span-3" style={{ color: "var(--ink-40)" }}>
        {section.heading}
      </h2>
      <div className="md:col-span-8">
        <Reveal>
          <p className="text-2xl font-medium leading-[1.3] tracking-[-0.02em] md:text-3xl">
            {section.body}
          </p>
        </Reveal>
        {section.images?.map((src) => (
          <Reveal key={src} delay={0.1}>
            <img src={src} alt="" className="mt-10 w-full rounded-md" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `CaseStudyOutcomes.jsx`**

```jsx
export default function CaseStudyOutcomes({ outcomes }) {
  return (
    <section className="grid gap-8 border-t px-6 py-20 md:grid-cols-12 md:px-16"
             style={{ borderColor: "var(--ink-07)" }}>
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] md:col-span-3" style={{ color: "var(--ink-40)" }}>
        Outcomes
      </h2>
      <div className="grid gap-10 md:col-span-8 md:grid-cols-2">
        {outcomes.map((o) => (
          <div key={o.label}>
            <div className="text-5xl font-semibold tracking-[-0.03em] md:text-7xl" style={{ color: "var(--accent)" }}>
              {o.value}
            </div>
            <div className="mt-2 text-sm" style={{ color: "var(--ink-60)" }}>{o.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/work/
git commit -m "feat: case study sub-components (header, section, outcomes)"
```

### Task 5.2: Dynamic case study route

**Files:**
- Create: `app/work/[slug]/page.jsx`

- [ ] **Step 1: Create the route with static params + notFound handling**

```jsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProjects, getProjectBySlug, getNextProject } from "@/lib/content/projects";
import CaseStudyHeader from "@/components/work/CaseStudyHeader";
import CaseStudySection from "@/components/work/CaseStudySection";
import CaseStudyOutcomes from "@/components/work/CaseStudyOutcomes";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProjectBySlug(params.slug);
  if (!p) return {};
  return { title: `${p.title} — ${p.client} · Nilesh Chhipa`, description: p.summary };
}

export default function CaseStudyPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  const next = getNextProject(project.slug);

  return (
    <main>
      <CaseStudyHeader project={project} />
      {project.sections.map((s) => (
        <CaseStudySection key={s.heading} section={s} />
      ))}
      <CaseStudyOutcomes outcomes={project.outcomes} />

      <nav className="px-6 py-24 md:px-16">
        <Link href={`/work/${next.slug}`} data-cursor="view"
              className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-40)" }}>
          Next project
        </Link>
        <Link href={`/work/${next.slug}`} data-cursor="view"
              className="mt-3 block text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
          {next.title} →
        </Link>
      </nav>
    </main>
  );
}
```

- [ ] **Step 2: Verify routes render and 404 works**

Run: `npm run dev`. Visit `/work/hm`, `/work/saudi-electric`, `/work/airbnb`, and `/work/bogus`.
Expected: each real slug renders header → sections → outcomes → next-project link; `/work/bogus` → 404. Page transition animates on navigation. Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/work/
git commit -m "feat: dynamic case study route (template-driven)"
```

---

## Phase 6 — About page

### Task 6.1: About page

**Files:**
- Create: `app/about/page.jsx`

- [ ] **Step 1: Create the page**

Renders bio, experience timeline (from resume), skills/tools, and CV download. Data inlined here (small, page-specific); promote to `lib/content` only if reused.

```jsx
import { site, skills } from "@/lib/content/site";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "About — Nilesh Chhipa",
  description: "Senior Product Designer — 6 years across enterprise and consumer products.",
};

const timeline = [
  { years: "2024–26", role: "Sr. Product Designer", org: "Horizontal Digital",
    note: "B2B electricity-connection portal for the Saudi Electric Company; +12% task success; Figma design system." },
  { years: "2020–24", role: "Product Designer → Sr. Product Designer", org: "H&M",
    note: "Mobile product-discovery redesign; +8% CTR, −3% exit; research + shared component library." },
  { years: "2020", role: "Intern Product Designer", org: "Airbnb",
    note: "B2B payments redesign; contributions to the internal design system." },
];

const tools = ["Figma", "FigJam", "Maze", "Hotjar", "Notion", "Storybook", "Adobe CS", "Blender", "Houdini", "Cinema 4D"];

export default function AboutPage() {
  return (
    <main className="px-6 pt-40 pb-32 md:px-16">
      <Reveal>
        <h1 className="max-w-4xl text-4xl font-medium leading-[1.2] tracking-[-0.03em] md:text-6xl">
          {site.summary} Past work includes H&amp;M, Airbnb, and the Government of Saudi Arabia.
        </h1>
      </Reveal>

      <section className="mt-32">
        <h2 className="mb-10 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-40)" }}>Experience</h2>
        <ul>
          {timeline.map((t) => (
            <li key={t.org} className="grid grid-cols-12 gap-4 border-t py-8" style={{ borderColor: "var(--ink-07)" }}>
              <span className="col-span-3 font-mono text-xs uppercase tracking-[0.12em]" style={{ color: "var(--ink-40)" }}>{t.years}</span>
              <div className="col-span-9">
                <div className="text-2xl font-semibold tracking-[-0.02em]">{t.role} · {t.org}</div>
                <p className="mt-2 text-sm" style={{ color: "var(--ink-60)" }}>{t.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-24 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-40)" }}>Skills</h2>
          <p className="text-lg leading-relaxed">{skills.join(" · ")}</p>
        </div>
        <div>
          <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-40)" }}>Tools</h2>
          <p className="text-lg leading-relaxed">{tools.join(" · ")}</p>
        </div>
      </section>

      <a href={site.cvPath} download data-cursor="view"
         className="mt-24 inline-block font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--accent)" }}>
        Download CV ↓
      </a>
    </main>
  );
}
```

- [ ] **Step 2: Verify About renders**

Run: `npm run dev`, open `/about`.
Expected: bio, experience timeline, skills, tools, CV link. Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/about/
git commit -m "feat: About page (bio, timeline, skills, tools, CV)"
```

---

## Phase 7 — Accessibility, responsive, polish

### Task 7.1: Reduced-motion + smooth-scroll audit

- [ ] **Step 1: Manual audit with reduce-motion ON**

Enable OS "reduce motion". Run `npm run dev`, walk home + a case study.
Expected: no torch dependency (skills statically legible), reveals appear instantly, marquee static, native scroll, page transitions off. Fix any component that still animates by confirming it consumes `useReducedMotion`.

- [ ] **Step 2: Commit any fixes**

```bash
git add -A
git commit -m "fix: reduced-motion audit corrections"
```

### Task 7.2: Touch / responsive audit

- [ ] **Step 1: Manual audit in a narrow + touch viewport**

In devtools device mode (e.g. iPhone), check home + case study + about.
Expected: custom cursor absent (touch), hero skills shown via the non-torch fallback, project rows tappable, type/spacing readable, no horizontal overflow (except the intentional marquee). Adjust paddings/font-clamps as needed.

- [ ] **Step 2: Commit any fixes**

```bash
git add -A
git commit -m "fix: responsive + touch audit corrections"
```

### Task 7.3: Metadata, favicon, sitemap, OG

**Files:**
- Create: `app/sitemap.js`, `app/robots.js`
- Modify: `app/layout.jsx` (metadataBase, OG defaults)

- [ ] **Step 1: Add `metadataBase` + OG defaults to root metadata**

In `app/layout.jsx` `metadata`:

```js
export const metadata = {
  metadataBase: new URL("https://cookiietoodesign.vercel.app"),
  title: "Nilesh Chhipa — Senior Product Designer",
  description:
    "Senior Product Designer with 6 years across enterprise and consumer products. Past work: H&M, Airbnb, Government of Saudi Arabia.",
  openGraph: { title: "Nilesh Chhipa — Senior Product Designer", type: "website" },
};
```

- [ ] **Step 2: Create `app/sitemap.js`**

```js
import { getAllProjects } from "@/lib/content/projects";

export default function sitemap() {
  const base = "https://cookiietoodesign.vercel.app";
  const routes = ["", "/about"].map((r) => ({ url: `${base}${r}`, priority: 1 }));
  const work = getAllProjects().map((p) => ({ url: `${base}/work/${p.slug}` }));
  return [...routes, ...work];
}
```

- [ ] **Step 3: Create `app/robots.js`**

```js
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://cookiietoodesign.vercel.app/sitemap.xml",
  };
}
```

- [ ] **Step 4: Verify**

Run: `npm run dev`, open `/sitemap.xml` and `/robots.txt`.
Expected: both render with the routes. Stop server.

- [ ] **Step 5: Commit**

```bash
git add app/sitemap.js app/robots.js app/layout.jsx
git commit -m "feat: metadata, sitemap, robots"
```

### Task 7.4: Production build gate

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: all PASS.

- [ ] **Step 2: Run a production build**

Run: `npm run build`
Expected: build succeeds; `/`, `/about`, `/work/[slug]` (3 static params) compile with no errors.

- [ ] **Step 3: Commit any fixes**

```bash
git add -A
git commit -m "chore: green production build + tests"
```

---

## Phase 8 — Deploy prep (handoff, no auto-deploy)

### Task 8.1: README + deploy notes

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Write README**

Document: stack, `npm run dev/test/build`, where content lives (`lib/content/`), how to add a project (append to `projects.js` + drop images in `public/work/<slug>/`), and the cut-over note (point the existing Vercel project at this repo when Nilesh approves).

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: README + deploy/cutover notes"
```

> Actual Vercel deployment + DNS cut-over from the current site is done **with Nilesh's explicit go-ahead**, outside this plan.

---

## Self-Review

**Spec coverage:**
- Brand/visual system → Tasks 0.4, 0.5. ✓
- Sitemap (home, case studies, about, CV) → Phases 4, 5, 6; CV in 1.3/4.5/6.1. ✓
- Interactions: custom cursor 2.4; torch hero 3.1; project index hover 4.2; magnetic 2.2/4.5; scroll reveals 2.5; page transitions 2.6/2.7; marquee 4.3. ✓ (3D moment intentionally out of scope per spec §9.)
- Home sections (hero, intro, index, marquee, about teaser, contact) → Phase 4. ✓
- Case study template (context→process→decisions→outcomes→next) → Phase 5. ✓
- About page → Phase 6. ✓
- Tech stack (Next/Tailwind/Lenis/GSAP/motion) → Phases 0, 2. ✓
- Accessibility (reduced-motion, keyboard, semantic) + responsive/touch fallbacks → Phase 7. ✓
- Deployment/migration → Phase 8 (handoff). ✓

**Placeholder scan:** No "TODO/implement later" in steps. Two flagged *content* open items (LinkedIn URL in `site.js`; real case-study imagery) are spec-acknowledged open items, not plan gaps — each has an explicit note and a safe default.

**Type consistency:** Getter names consistent across tasks (`getAllProjects`, `getProjectBySlug`, `getNextProject`). `site`/`skills`/`accentSkills`/`clients` exports match consumers. `data-cursor` values (`"view"`, `"hide"`, default) consistent between `CustomCursor` (2.4) and consumers (4.2/4.5/5.2/6.1). Hooks `useReducedMotion`/`usePointerFine` signatures consistent across all consumers.
