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
      "End-to-end design of a B2B electricity-connection portal for the Saudi Electric Company — simplifying complex, multi-step enterprise workflows for government and commercial clients, and standardising the UI with a Figma design system.",
    preview: "/work/saudi-electric/preview.svg",
    sections: [
      {
        heading: "Overview",
        body: [
          "As Senior Product Designer at Horizontal Digital, I owned the end-to-end design of a B2B electricity-connection portal for the Saudi Electric Company — the system government and commercial clients use to apply for, track, and manage new electricity connections.",
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
    role: "Product Designer → Sr. Product Designer",
    year: "2020–24",
    summary:
      "Redesigned key product-discovery, browsing, and checkout interactions across H&M's global mobile app — and helped align the shared component library — improving conversion at scale.",
    preview: "/work/hm/preview.svg",
    sections: [
      {
        heading: "Overview",
        body: [
          "Over four years at H&M — joining as a Product Designer and growing into a Senior Product Designer — I worked across the global mobile shopping experience on iOS and Android, from product discovery and browsing through size selection and checkout.",
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
    preview: "/work/airbnb/Coduzion.PNG",
    sections: [
      {
        heading: "Overview",
        body: [
          "I worked on a 12-week design project on the Airbnb Payments team. With a global reach over 190 countries, and processing payments in over 70 different currencies, it was a unique opportunity to make an impact at scale.",
        ],
        images: [{ src: "/work/airbnb/Coduzion.PNG" }],
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
