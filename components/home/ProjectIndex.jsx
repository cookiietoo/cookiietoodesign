"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { getAllProjects } from "@/lib/content/projects";
import { usePointerFine } from "@/lib/hooks/usePointerFine";

export default function ProjectIndex() {
  const fine = usePointerFine();
  const projects = getAllProjects();
  const [active, setActive] = useState(null);
  const previewRef = useRef(null);

  function onMove(e) {
    if (!previewRef.current) return;
    previewRef.current.style.transform =
      `translate(${e.clientX + 24}px, ${e.clientY - 80}px)`;
  }

  return (
    <section className="px-6 py-24 md:px-16" onMouseMove={fine ? onMove : undefined}>
      <h2 className="mb-12 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-40)" }}>
        Selected Work
      </h2>

      <ul>
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/work/${p.slug}`}
              data-cursor="view"
              onMouseEnter={() => setActive(p.slug)}
              onMouseLeave={() => setActive(null)}
              className="group grid grid-cols-12 items-baseline gap-4 border-t py-8 transition-colors"
              style={{ borderColor: "var(--ink-07)" }}
            >
              <span className="col-span-12 text-3xl font-semibold tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-3 md:col-span-6 md:text-5xl">
                {p.title}
              </span>
              <span className="col-span-8 text-sm md:col-span-4" style={{ color: "var(--ink-60)" }}>
                {p.summary.split(",")[0]}
              </span>
              <span className="col-span-4 text-right font-mono text-xs uppercase tracking-[0.12em] md:col-span-2"
                    style={{ color: "var(--ink-40)" }}>
                {p.client} · {p.year}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {fine && (
        <div
          ref={previewRef}
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-40 h-56 w-72 overflow-hidden rounded-md"
          style={{ opacity: active ? 1 : 0, transition: "opacity .25s", background: "var(--ink-07)" }}
        >
          {projects.map((p) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={p.slug}
              src={p.preview}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{ opacity: active === p.slug ? 1 : 0, transition: "opacity .2s" }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
