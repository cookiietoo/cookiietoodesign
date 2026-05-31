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
    role: "Product Designer @ Horizontal Digital",
    year: "2024–26",
    nda: true,
    summary:
      "End-to-end design of a B2B electricity-connection portal for the Saudi Electric Company — simplifying complex, multi-step enterprise workflows for government and commercial clients, and standardising the UI with a Figma design system.",
    preview: "/work/saudi-electric/preview.svg",
    sections: [
      {
        heading: "Overview",
        body: [
          "As Product Designer at Horizontal Digital, I owned the end-to-end design of a B2B electricity-connection portal for the Saudi Electric Company — the system government and commercial clients use to apply for, track, and manage new electricity connections.",
        ],
        images: [{ src: "/work/saudi-electric/hero.svg" }],
      },
      {
        heading: "The Challenge",
        body: [
          "Requesting an electricity connection at this scale is a genuinely complex enterprise process — multi-step, governed by regulatory and operational requirements, and touching more than fifteen stakeholders across legal, finance, engineering, and government.",
          "That complexity leaked into the experience: a fragmented journey of spreadsheets, email chains, and unclear ownership where a single request could take weeks. My job was to map that process and design a portal that reduced friction and delivered a measurably better experience at scale.",
        ],
      },
      {
        heading: "Mapping the Workflow",
        body: [
          "I started by mapping the real, tangled process end to end, then redesigned it into a guided, trackable path — collapsing a web of hand-offs into a clear sequence with visible status, owners, and next steps.",
        ],
        images: [
          {
            src: "/work/saudi-electric/workflow-map.svg",
            caption: "From an opaque web of stakeholders and hand-offs to a guided, linear flow.",
          },
        ],
      },
      {
        heading: "The Application Flow",
        body: [
          "The core of the portal is the application itself. I designed it as a guided wizard that breaks an intimidating enterprise request into clear steps — applicant details, site and requested load, documents, review, and submit — with progress saved at every stage and inline help that applies regulatory limits automatically.",
        ],
        images: [
          {
            src: "/work/saudi-electric/application-flow.svg",
            caption: "A guided, save-as-you-go wizard with contextual help at each step.",
          },
        ],
      },
      {
        heading: "Approval & Stakeholders",
        body: [
          "Embedded within cross-functional agile teams alongside developers, product managers, and government stakeholders, I translated complex regulatory and operational requirements into design solutions that shipped accurately and on schedule.",
          "The approval experience gives every party a single source of truth — parallel reviews with clear owners, SLA tracking, and an explicit path for requesting changes — replacing the email chains entirely.",
        ],
        images: [
          {
            src: "/work/saudi-electric/approval-flow.svg",
            caption: "Clear owners, parallel technical and regulatory reviews, and tracked SLAs.",
          },
        ],
      },
      {
        heading: "Design System",
        body: [
          "I established and maintained a component library and design system in Figma — defining reusable patterns, tokens, and documentation that standardised the UI across the entire B2B portal.",
          "Beyond consistency, the system reduced design-to-development friction: engineers built from a shared, documented source of truth, and new features shipped faster on a dependable foundation.",
        ],
        images: [{ src: "/work/saudi-electric/design-system.svg" }],
      },
      {
        heading: "Prototyping & Testing",
        body: [
          "I drove improvement through structured iterative prototyping and moderated usability testing — identifying the critical drop-off points across the portal's application and approval flows and resolving them before production.",
        ],
        images: [{ src: "/work/saudi-electric/testing.svg" }],
      },
    ],
    outcomes: [
      { value: "+12%", label: "task success rate" },
      { value: "15+", label: "stakeholders unified" },
      { value: "Gov + commercial", label: "at enterprise scale" },
    ],
  },
  {
    slug: "hm",
    title: "H&M Mobile Shopping",
    client: "H&M",
    role: "Product Designer",
    year: "2020–24",
    nda: true,
    summary:
      "Redesigned key product-discovery, browsing, and checkout interactions across H&M's global mobile app — and helped align the shared component library — improving conversion at scale.",
    preview: "/work/hm/preview.svg",
    sections: [
      {
        heading: "Overview",
        body: [
          "Over four years at H&M as a Product Designer, I worked across the global mobile shopping experience on iOS and Android — from product discovery and browsing through size selection and checkout.",
        ],
        images: [{ src: "/work/hm/hero.svg" }],
      },
      {
        heading: "The Challenge",
        body: [
          "H&M's global mobile shopping experience had friction across product discovery and browsing that was quietly costing conversion. I was brought in to identify those friction points and redesign the key interactions that move people from browsing to buying — at the scale of a global retailer.",
        ],
      },
      {
        heading: "Research",
        body: [
          "I ran end-to-end research — user interviews, behavioural data analysis, and usability reviews — to surface design opportunities within the clothing app's core shopping journey.",
          "These findings didn't sit in a deck. They directly shaped design decisions across multiple feature cycles, giving the team a shared, evidence-based view of where users were dropping off and why.",
        ],
        images: [
          { src: "/work/hm/research.svg" },
        ],
      },
      {
        heading: "Redesigning the Core Flows",
        body: [
          "Partnering with product managers, engineers, and brand stakeholders in agile sprints, I produced wireframes, interactive prototypes, and high-fidelity mockups — and saw them through to production across iOS and Android.",
          "The work concentrated on three high-impact flows where small improvements compound at scale: product browsing, size selection, and checkout.",
        ],
        images: [
          { src: "/work/hm/browsing.svg", caption: "Reducing friction in product discovery and browsing." },
          { src: "/work/hm/size-selection.svg", caption: "Clarifying size selection to cut hesitation and returns." },
          { src: "/work/hm/checkout.svg", caption: "Streamlining checkout across iOS and Android." },
        ],
      },
      {
        heading: "Design System",
        body: [
          "I contributed to H&M's shared component library — auditing existing patterns and aligning the mobile app's components with the broader design system.",
          "Bringing the mobile components into alignment kept the experience consistent across iOS and Android, reduced design-to-development friction, and let new features ship faster on a dependable foundation of reusable patterns.",
        ],
        images: [
          { src: "/work/hm/design-system.svg" },
          { src: "/work/hm/component-audit.svg" },
        ],
      },
      {
        heading: "Testing & Iteration",
        body: [
          "I facilitated design reviews and moderated usability-testing sessions with real users, then synthesised the feedback into actionable iterations — measurably reducing friction across product browsing, size selection, and checkout.",
        ],
        images: [
          { src: "/work/hm/testing.svg" },
        ],
      },
    ],
    outcomes: [
      { value: "+8%", label: "click-through rate" },
      { value: "−3%", label: "exit rate" },
      { value: "iOS + Android", label: "shipped & design-system aligned" },
    ],
  },
  {
    slug: "airbnb",
    title: "Airbnb Payments",
    client: "Airbnb",
    role: "Intern Product Designer",
    year: "2020",
    summary:
      "A 12-week design project on the Airbnb Payments team — global reach across 190+ countries and 70+ currencies — rethinking how business users create and track incentive programs.",
    preview: "/work/airbnb/overview.svg",
    sections: [
      {
        heading: "Overview",
        body: [
          "I worked on a 12-week design project on the Airbnb Payments team. With a global reach over 190 countries, and processing payments in over 70 different currencies, it was a unique opportunity to make an impact at scale.",
        ],
        images: [{ src: "/work/airbnb/overview.svg" }],
      },
      {
        heading: "The Challenge",
        body: [
          "At the start of this project, we spoke to Airbnb business unit users (BU users) who told us about their struggle creating incentives. The takeaway: creating and tracking incentives is a mess. They have to navigate a lengthy and fragmented ecosystem. From consulting over 15 different stakeholders, to tracking steps through spreadsheets and long email chains, launching your own program takes several weeks.",
          "With such a lengthy process, mistakes are bound to happen. In 2017, the company risked losing almost $3 million over a coupon program, as a minimum spend was accidentally not applied.",
          "To help prevent human errors like this, I worked with the payments team to identify a better solution.",
        ],
      },
      {
        heading: "How might we…",
        body: [
          "How might we empower BU users to launch high-quality incentive programs with ease and confidence?",
        ],
      },
      {
        heading: "Design Principles",
        body: [
          "Speedy Integrations — offer a fast integration into capabilities that are highly valuable for driving programs.",
          "Easy Onboarding — provide intuitive tooling catered to various business needs, giving BU users the confidence to launch with ease.",
          "Zero User Defects — design guardrails into every step to reduce the chance of costly mistakes.",
        ],
      },
      {
        heading: "The Approach",
        body: [
          "In order to design a better journey for BU users, I had to talk with Payments Legal, Business Intelligence, and the Risk/Finance teams to understand what information is necessary to collect for review and approval. Additionally, my engineering team supported me in figuring out what designs would be feasible for implementation.",
        ],
        images: [
          { src: "/work/airbnb/aprch1.png" },
          { src: "/work/airbnb/aprch2.png" },
        ],
      },
      {
        heading: "Final Design",
        body: [
          "After several iterations and getting feedback through user testing, I was able to deliver a streamlined approach to creating incentives.",
        ],
        images: [
          {
            src: "/work/airbnb/ui0.gif",
            caption:
              "Before BU users begin the incentives onboarding flow, I set expectations and demystified the steps of the journey through a series of introductory modals.",
          },
          {
            src: "/work/airbnb/ui1.png",
            caption:
              "On the first page, we give a visual treatment to the three offerings (cash, credit, or coupon), with tips — benefits, limitations, and live examples — to help you choose the one that works best.",
          },
          {
            src: "/work/airbnb/u2.gif",
            caption:
              "Setting and monitoring a budget is crucial, but not everyone knows the payments terminology. To make it less scary, clicking each field reveals additional clarification.",
          },
          {
            src: "/work/airbnb/ui3.png",
            caption:
              "For extra precaution, multiple watchers can receive notifications when budget spending reaches a specific percentage or amount.",
          },
          {
            src: "/work/airbnb/ui4.png",
            caption:
              "I explored a dashboard to further track the statuses of incentive programs, since BU users may be monitoring several at once.",
          },
        ],
      },
      {
        heading: "My Contribution",
        body: [
          "Strategy alignment — built an understanding of the incentives ecosystem at Airbnb, sharing processes and aligning with other internal teams.",
          "Prototyping & testing — evaluated designs through user testing, stakeholder interviews, and weekly design critique.",
          "Implementation — collaborated with Engineering and PM on technical feasibility and implementation through design QA.",
        ],
      },
      {
        heading: "Key Takeaways",
        body: [
          "While this was my first time working for a larger e-commerce company, navigating various industry standards allowed me to grow significantly. By regularly meeting with content strategists, user researchers, engineers, and other critical stakeholders, I balanced my design to account for multiple cross-functional needs — from testing prototypes with users across the world to teaming up with a great engineering team to see my designs come to life.",
        ],
      },
    ],
    outcomes: [
      { value: "190+", label: "countries reached" },
      { value: "70+", label: "currencies supported" },
      { value: "~$3M", label: "risk the redesign guards against" },
    ],
  },
  {
    slug: "usquare",
    title: "Stipple — UI Colour-Palette Generator",
    client: "Coduzion · Usquare",
    role: "Lead UX Designer · Researcher · Team Lead",
    year: "2023",
    spotlight: true, // featured in the "How I Work" section, not the Selected Work index
    summary:
      "Led a small team through a Lean UX process — two three-week sprints of assumptions, research, and usability testing — to design Stipple, a generator for accessible, UI-focused colour palettes.",
    preview: "/work/usquare/hero.png",
    sections: [
      {
        heading: "Overview",
        body: [
          "Stipple is a tool that helps designers generate accessible, UI-focused colour palettes. I led a small team as Lead UX Designer, Researcher, and Team Lead — guiding the work through a Lean UX process across two three-week sprint cycles.",
        ],
        images: [{ src: "/work/usquare/hero.png" }],
      },
      {
        heading: "The Problem",
        body: [
          "The designer's struggle with colour — designers often struggle to curate a palette for UI work. Those newer to design lack familiarity with colour-accessibility guidelines and find it hard to ensure their colours are accessible to end-users. Stipple was designed to solve this.",
        ],
        images: [{ src: "/work/usquare/problem.png" }],
      },
      {
        heading: "Our Approach",
        body: [
          "Designing with assumptions & a Lean UX mindset — we adapted elements of Lean UX to fit a tight timeline, starting from a set of assumptions about the design field that we could quickly validate and test across two three-week sprints.",
        ],
        images: [{ src: "/work/usquare/approach.png" }],
      },
      {
        heading: "Kicking Off",
        body: [
          "Sprint one — our initial assumptions. I held a kickoff where the team openly discussed our questions and assumptions about the problem space.",
          "We assumed our users were designers in tech who needed a collaboration tool and lacked a resource for learning colour theory — assumptions we set out to validate with an MVP.",
        ],
        images: [
          { src: "/work/usquare/kickoff-1.png" },
          { src: "/work/usquare/kickoff-2.svg" },
        ],
      },
      {
        heading: "Building our First Test",
        body: [
          "As a collaborative effort we built a two-screen lo-fi wireframe to test whether users would actually use a feature to share palettes with their team. It was a big assumption, so we tested it early to spend our time wisely.",
        ],
        images: [{ src: "/work/usquare/test.svg" }],
      },
      {
        heading: "Validation through Interviews",
        body: [
          "During sprint one, we interviewed six participants matching our persona — the junior designer with 2–3 years of experience.",
          "01. People didn't need a tool to share palettes — they typically work individually or in a shared environment like Figma or Adobe XD.",
          "02. Designers didn't need colour-theory basics; they wanted references for the best accessibility practices when using colour in UI.",
          "03. Designers wanted a way to quickly 'preview' a palette on any design of their choosing.",
        ],
        images: [{ src: "/work/usquare/insights.svg" }],
      },
      {
        heading: "Revisiting the Lean UX Canvas",
        body: [
          "Sprint two — revalidating our assumptions. As the team's leader, I ran a session around three questions: What did we learn from users? What assumptions can we toss? What do we need to add and test?",
          "I realised we were building something too general. Rather than targeting every kind of designer, we focused on UX and UI designers who'd benefit from a UI-based palette generator.",
          "From there we chose to test UI-colour accessibility resources alongside a generator focused only on UI-based palettes — plus what previewing a palette on a design would feel like.",
        ],
        images: [
          { src: "/work/usquare/canvas-1.svg" },
          { src: "/work/usquare/canvas-2.svg" },
        ],
      },
      {
        heading: "Shifting Gears",
        body: [
          "High-value, high-effort MVP — nearing the deadline, we built a more fully-functional MVP of the higher-value features. Screens moved to mid-fidelity so users could see, in depth, how the product worked.",
        ],
        images: [{ src: "/work/usquare/mvp.svg" }],
      },
      {
        heading: "Further Validation",
        body: [
          "Bringing Stipple to life & usability testing — we raised the fidelity and ran a week of usability testing, giving participants tasks around the two core features: generating a palette and previewing it on a UI.",
          "01. Some labels and phrasing in the generator confused participants during tasks.",
          "02. We followed up to understand their mental model, then updated the design to match how they actually thought about it.",
        ],
        images: [
          { src: "/work/usquare/usability.svg" },
          { src: "/work/usquare/labels-1.svg" },
          { src: "/work/usquare/labels-2.svg" },
        ],
      },
      {
        heading: "The Product",
        body: [
          "01. Generate UI-focused colour palettes that meet web-accessibility guidelines.",
          "02. Preview any saved palette on a UI template of your choosing.",
          "03. Gather community inspiration from palettes other designers are using.",
          "04. Learn about colour and accessibility with built-in, referenceable guidelines.",
        ],
        images: [
          { src: "/work/usquare/feature-generate.png", caption: "Generate accessible, UI-focused palettes." },
          { src: "/work/usquare/feature-preview.png", caption: "Preview a palette on a real UI." },
          { src: "/work/usquare/feature-community.png", caption: "Community inspiration." },
          { src: "/work/usquare/feature-learn.png", caption: "Accessibility guidelines, built in." },
        ],
      },
      {
        heading: "What I Learned as a Design Leader",
        body: [
          "Figma — I learned an enormous amount, including building my own design system for the product to create consistency and a more efficient workflow.",
          "Auto-layout, components, and variants became indispensable — I can't imagine designing without them now.",
          "I learned to balance each teammate's strengths and weaknesses — keeping everyone comfortable while challenging them to grow.",
          "I learned the discipline of organising around a team: scheduling, weekly check-ins, and keeping everyone current on progress over eight weeks.",
          "Most of all — I love leading. Reflection mattered, the experience was rewarding, and I hope to keep finding chances to lead designers.",
        ],
      },
    ],
    outcomes: [
      { value: "Lean UX", label: "2 × 3-week sprints" },
      { value: "6", label: "research participants" },
      { value: "Team lead", label: "led a team of peers" },
    ],
  },
];

export function getAllProjects() {
  return projects;
}

// Order shown in the home "Selected Work" index (Airbnb leads; NDA work follows).
// Spotlight projects (e.g. Usquare) are surfaced elsewhere and excluded here.
const INDEX_ORDER = ["airbnb", "saudi-electric", "hm"];
export function getIndexProjects() {
  return INDEX_ORDER.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean);
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return undefined;
  return projects[(i + 1) % projects.length];
}
