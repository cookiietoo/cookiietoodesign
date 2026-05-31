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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="mt-10 w-full rounded-md" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
