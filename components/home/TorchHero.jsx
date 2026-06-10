"use client";
import { useEffect, useRef } from "react";
import { site, skills, accentSkills } from "@/lib/content/site";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { usePointerFine } from "@/lib/hooks/usePointerFine";

// stable scattered positions avoiding the central identity zone (desktop torch only)
const LAYOUT = [
  { x: 16, y: 20, s: 46 }, { x: 80, y: 16, s: 34 }, { x: 22, y: 78, s: 52 },
  { x: 84, y: 74, s: 30 }, { x: 13, y: 50, s: 26 }, { x: 88, y: 44, s: 28 },
  { x: 50, y: 11, s: 24 }, { x: 50, y: 90, s: 30 }, { x: 30, y: 34, s: 22 },
  { x: 72, y: 60, s: 24 }, { x: 68, y: 30, s: 30 }, { x: 34, y: 64, s: 20 },
  { x: 90, y: 88, s: 22 }, { x: 9, y: 88, s: 20 }, { x: 62, y: 84, s: 22 },
];

function WordLayer({ revealed }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {skills.map((skill, i) => {
        const p = LAYOUT[i % LAYOUT.length];
        const accent = revealed && accentSkills.includes(skill);
        return (
          <span
            key={skill}
            className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-semibold"
            style={{
              left: `${p.x}%`, top: `${p.y}%`, fontSize: p.s,
              letterSpacing: "-0.02em",
              color: revealed ? (accent ? "var(--accent)" : "var(--ink)") : "var(--ink-035)",
            }}
          >
            {skill}
          </span>
        );
      })}
    </div>
  );
}

export default function TorchHero() {
  const reduced = useReducedMotion();
  const fine = usePointerFine();
  const revealRef = useRef(null);
  const torchOn = fine && !reduced;

  useEffect(() => {
    if (!torchOn) return;
    const el = revealRef.current;
    const move = (e) => {
      const m = `radial-gradient(circle 200px at ${e.clientX}px ${e.clientY}px, #000 0%, #000 52%, transparent 100%)`;
      el.style.webkitMaskImage = m;
      el.style.maskImage = m;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [torchOn]);

  return (
    <section className="relative h-[100svh] overflow-hidden">
      {/* desktop torch: faint watermark + cursor-revealed layer */}
      {torchOn && (
        <>
          <WordLayer revealed={false} />
          <div
            ref={revealRef}
            className="absolute inset-0"
            style={{
              WebkitMaskImage: "radial-gradient(circle 200px at -200px -200px,#000 0%,#000 52%,transparent 100%)",
              maskImage: "radial-gradient(circle 200px at -200px -200px,#000 0%,#000 52%,transparent 100%)",
            }}
          >
            <WordLayer revealed={true} />
          </div>
        </>
      )}

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0"
           style={{ background: "radial-gradient(120% 120% at 50% 40%, transparent 55%, rgba(22,20,15,.06))" }} />

      {/* identity (always) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h1
          aria-label={site.name}
          className="font-semibold leading-[0.92] tracking-[-0.04em]"
          style={{ fontSize: "clamp(44px, 13vw, 140px)" }}
        >
          Nilesh<br />Chhipa
        </h1>
        <div className="mt-4 text-[11px] uppercase tracking-[0.24em] md:text-xs md:tracking-[0.28em]"
             style={{ color: "var(--ink-60)" }}>
          {site.role} · {site.experience}
        </div>

        {/* touch / reduced-motion fallback: skills as a clean wrapped chip cloud */}
        {!torchOn && (
          <ul className="mt-9 flex max-w-md flex-wrap items-center justify-center gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.1em]"
                style={{
                  borderColor: "var(--ink-07)",
                  color: accentSkills.includes(skill) ? "var(--accent)" : "var(--ink-60)",
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* chrome */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 px-5 py-5 text-[10px] uppercase tracking-[0.12em] md:px-8 md:py-6 md:text-[11px] md:tracking-[0.14em]"
           style={{ color: "var(--ink-60)" }}>
        <span className="truncate">{site.brand} — {site.name}</span>
        <span className="flex shrink-0 items-center gap-2" style={{ color: "var(--accent)" }}>
          <span className="inline-block h-[7px] w-[7px] rounded-full" style={{ background: "var(--accent)" }} />
          {site.status}
        </span>
      </div>

      {torchOn && (
        <div className="absolute inset-x-0 bottom-7 text-center text-[11px] uppercase tracking-[0.16em] animate-pulse"
             style={{ color: "var(--ink-40)" }}>
          Move your cursor — find what I do
        </div>
      )}
    </section>
  );
}
