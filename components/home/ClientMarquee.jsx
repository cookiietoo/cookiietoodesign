"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { clients } from "@/lib/content/site";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function ClientMarquee() {
  const reduced = useReducedMotion();
  const track = useRef(null);

  useEffect(() => {
    if (reduced || !track.current) return;
    const el = track.current;
    const half = el.scrollWidth / 2;
    const tween = gsap.to(el, { x: -half, duration: 18, ease: "none", repeat: -1 });
    let last = window.scrollY;
    const onScroll = () => {
      const v = Math.min(Math.abs(window.scrollY - last) / 6, 4);
      last = window.scrollY;
      gsap.to(tween, { timeScale: 1 + v, duration: 0.3, overwrite: true });
      gsap.to(tween, { timeScale: 1, duration: 0.8, delay: 0.3, overwrite: false });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      tween.kill();
    };
  }, [reduced]);

  const items = [...clients, ...clients]; // duplicate for seamless loop

  return (
    <section className="overflow-hidden border-y py-10" style={{ borderColor: "var(--ink-07)" }} aria-label="Clients">
      <div ref={track} className="flex w-max gap-16 whitespace-nowrap will-change-transform">
        {items.map((c, i) => (
          <span key={`${c}-${i}`} className="text-4xl font-semibold tracking-[-0.03em] md:text-6xl"
                style={{ color: "var(--ink-60)" }}>
            {c} <span style={{ color: "var(--accent)" }}>·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
