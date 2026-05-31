import Link from "next/link";
import { getProjectBySlug } from "@/lib/content/projects";
import Reveal from "@/components/motion/Reveal";

export default function HowIWork() {
  const p = getProjectBySlug("usquare");
  if (!p) return null;

  return (
    <section className="px-6 py-24 md:px-16">
      <div className="mb-12 flex items-baseline justify-between">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-40)" }}>
          How I Work
        </h2>
        <span className="font-mono text-xs uppercase tracking-[0.12em]" style={{ color: "var(--ink-40)" }}>
          Research · Lean UX · Team leadership
        </span>
      </div>

      <Reveal>
        <p className="mb-14 max-w-3xl text-3xl font-medium leading-[1.15] tracking-[-0.03em] md:text-5xl">
          I lead with research, move in fast Lean-UX loops, and bring a team along with me.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <Link
          href={`/work/${p.slug}`}
          data-cursor="view"
          className="group grid gap-8 overflow-hidden rounded-2xl border md:grid-cols-2"
          style={{ borderColor: "var(--ink-07)" }}
        >
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.preview}
              alt={p.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: "var(--ink-40)" }}>
              {p.role} · {p.year}
            </span>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{p.title}</h3>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--ink-60)" }}>
              {p.summary}
            </p>
            <span
              className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: "var(--accent)" }}
            >
              View case study →
            </span>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}
