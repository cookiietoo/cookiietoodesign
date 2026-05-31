import { site, skills } from "@/lib/content/site";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "About — Nilesh Chhipa",
  description: "Product Designer — 6 years across enterprise and consumer products.",
};

const timeline = [
  { years: "2024–26", role: "Product Designer", org: "Horizontal Digital",
    note: "B2B electricity-connection portal for the Saudi Electric Company; +12% task success; Figma design system." },
  { years: "2020–24", role: "Product Designer", org: "H&M",
    note: "Mobile product-discovery redesign; +8% CTR, −3% exit; research + shared component library." },
  { years: "2020", role: "Intern Product Designer", org: "Airbnb",
    note: "B2B payments redesign; contributions to the internal design system." },
];

const tools = ["Figma", "FigJam", "Maze", "Hotjar", "Notion", "Storybook", "Adobe CS", "Blender", "Houdini", "Cinema 4D"];

export default function AboutPage() {
  return (
    <main className="px-6 pt-32 pb-24 md:px-16 md:pt-40 md:pb-32">
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
