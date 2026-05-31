import Link from "next/link";
import { uiWork } from "@/lib/content/ui";

export const metadata = {
  title: "UI Work — Nilesh Chhipa",
  description: "Interface and visual-design explorations by Nilesh Chhipa.",
};

export default function UIGalleryPage() {
  return (
    <main className="px-6 pt-40 pb-32 md:px-16">
      <Link
        href="/"
        data-cursor="view"
        className="font-mono text-xs uppercase tracking-[0.2em]"
        style={{ color: "var(--ink-40)" }}
      >
        ← Back home
      </Link>

      <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.04em] md:text-8xl">
        User Interfaces
      </h1>
      <p className="mt-6 max-w-xl text-xl leading-[1.4]" style={{ color: "var(--ink-60)" }}>
        A set of interface and visual-design explorations — yes, I can do UIs too, and
        I care about how they feel.
      </p>

      <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {uiWork.map((item) => (
          <div
            key={item.src}
            className="overflow-hidden rounded-xl border"
            style={{ borderColor: "var(--ink-07)", background: "var(--ink-07)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={item.alt} loading="lazy" className="w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
