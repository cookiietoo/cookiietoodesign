export default function CaseStudyHeader({ project }) {
  return (
    <header className="px-6 pt-40 pb-16 md:px-16">
      <div className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-40)" }}>
        {project.client} · {project.year}
      </div>
      <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] md:text-8xl">
        {project.title}
      </h1>
      <p className="mt-8 max-w-2xl text-xl leading-[1.3]" style={{ color: "var(--ink-60)" }}>
        {project.summary}
      </p>
      <div className="mt-6 font-mono text-xs uppercase tracking-[0.14em]" style={{ color: "var(--ink-40)" }}>
        {project.role}
      </div>
      {project.nda && (
        <div
          className="mt-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em]"
          style={{ borderColor: "var(--ink-40)", color: "var(--ink-60)" }}
        >
          <span className="inline-block h-[6px] w-[6px] rounded-full" style={{ background: "var(--accent)" }} />
          Under NDA — representative visuals
        </div>
      )}
    </header>
  );
}
