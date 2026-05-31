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
    title: "Coduzion Payment System",
    client: "Airbnb",
    role: "Lead UX Designer · Team Lead",
    year: "2022–23",
    summary:
      "A 12-week design project on the Coduzion / Airbnb Payments team — global reach across 190+ countries and 70+ currencies — rethinking how business users create and track incentive programs.",
    preview: "/work/airbnb/Coduzion.PNG",
    sections: [
      {
        heading: "Overview",
        body: [
          "Building digital products for Coduzion, I worked on a 12-week design project on the Coduzion Payments team. With a global reach over 190 countries, and processing payments in over 70 different currencies, working on the Airbnb Payments team was a unique opportunity to make an impact at scale.",
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
