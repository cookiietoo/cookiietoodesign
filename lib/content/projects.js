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
