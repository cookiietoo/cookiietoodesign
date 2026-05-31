import { site } from "@/lib/content/site";
import MagneticButton from "@/components/motion/MagneticButton";
import Reveal from "@/components/motion/Reveal";

export default function ContactFooter() {
  return (
    <footer className="px-6 py-24 md:px-16 md:py-32">
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
