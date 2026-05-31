import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export default function AboutTeaser() {
  return (
    <section className="grid gap-10 px-6 py-24 md:grid-cols-12 md:px-16 md:py-32">
      <div className="md:col-span-7">
        <Reveal>
          <p className="text-2xl font-medium leading-[1.25] tracking-[-0.02em] md:text-4xl">
            Product Designer with 6 years across enterprise and consumer products —
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
