import { site } from "@/lib/content/site";
import Reveal from "@/components/motion/Reveal";

export default function IntroStatement() {
  return (
    <section className="px-6 py-20 md:px-16 md:py-48">
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
