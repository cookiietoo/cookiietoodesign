"use client";
import { useRef } from "react";
import Link from "next/link";
import { uiWork } from "@/lib/content/ui";

export default function UIWork() {
  const trackRef = useRef(null);

  function scrollBy(dir) {
    trackRef.current?.scrollBy({ left: dir * 600, behavior: "smooth" });
  }

  return (
    <section className="py-24">
      <div className="mb-10 flex items-end justify-between px-6 md:px-16">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-40)" }}>
            UI Work
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            Yes — I make interfaces, too.
          </p>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            data-cursor="view"
            className="flex h-11 w-11 items-center justify-center rounded-full border transition-colors hover:bg-[color:var(--ink-07)]"
            style={{ borderColor: "var(--ink-40)" }}
          >
            ←
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            data-cursor="view"
            className="flex h-11 w-11 items-center justify-center rounded-full border transition-colors hover:bg-[color:var(--ink-07)]"
            style={{ borderColor: "var(--ink-40)" }}
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-6 px-6 pb-2 md:scroll-px-16 md:px-16"
      >
        {uiWork.map((item) => (
          <Link
            key={item.src}
            href="/ui"
            data-cursor="view"
            className="group relative h-80 w-64 shrink-0 snap-start overflow-hidden rounded-xl border"
            style={{ borderColor: "var(--ink-07)", background: "var(--ink-07)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </Link>
        ))}
      </div>

      <div className="mt-10 px-6 md:px-16">
        <Link
          href="/ui"
          data-cursor="view"
          className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-transform duration-300 hover:translate-x-1"
          style={{ background: "var(--ink)", color: "var(--paper)" }}
        >
          Show all UI work →
        </Link>
      </div>
    </section>
  );
}
