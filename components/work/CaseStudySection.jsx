import Reveal from "@/components/motion/Reveal";

export default function CaseStudySection({ section }) {
  const paragraphs = Array.isArray(section.body)
    ? section.body
    : section.body
    ? [section.body]
    : [];
  const images = section.images ?? [];

  return (
    <section className="grid gap-8 px-6 py-16 md:grid-cols-12 md:px-16">
      {section.heading ? (
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] md:col-span-3" style={{ color: "var(--ink-40)" }}>
          {section.heading}
        </h2>
      ) : (
        <div className="md:col-span-3" aria-hidden />
      )}
      <div className="md:col-span-8">
        {paragraphs.map((p, i) => (
          <Reveal key={i} delay={i === 0 ? 0 : 0.05}>
            <p className="mb-6 text-lg leading-relaxed md:text-xl">{p}</p>
          </Reveal>
        ))}
        {images.map((img, idx) => {
          const src = typeof img === "string" ? img : img.src;
          const caption = typeof img === "string" ? null : img.caption;
          const placeholder = typeof img === "object" ? img.placeholder : null;
          return (
            <Reveal key={src || placeholder || idx} delay={0.05}>
              <figure className="mt-10">
                {src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={src} alt={caption || ""} className="w-full rounded-md" />
                ) : (
                  <div
                    className="flex aspect-[16/10] w-full items-center justify-center rounded-md border border-dashed"
                    style={{ borderColor: "var(--ink-40)", background: "var(--ink-07)" }}
                  >
                    <span className="px-6 text-center font-mono text-xs uppercase tracking-[0.16em]" style={{ color: "var(--ink-40)" }}>
                      ▢ {placeholder || "Image"}
                    </span>
                  </div>
                )}
                {caption && (
                  <figcaption className="mt-3 text-sm" style={{ color: "var(--ink-60)" }}>
                    {caption}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
