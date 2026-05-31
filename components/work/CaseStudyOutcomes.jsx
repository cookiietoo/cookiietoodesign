export default function CaseStudyOutcomes({ outcomes }) {
  return (
    <section className="grid gap-8 border-t px-6 py-20 md:grid-cols-12 md:px-16"
             style={{ borderColor: "var(--ink-07)" }}>
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] md:col-span-3" style={{ color: "var(--ink-40)" }}>
        Outcomes
      </h2>
      <div className="grid gap-10 md:col-span-8 md:grid-cols-2">
        {outcomes.map((o) => (
          <div key={o.label}>
            <div className="text-5xl font-semibold tracking-[-0.03em] md:text-7xl" style={{ color: "var(--accent)" }}>
              {o.value}
            </div>
            <div className="mt-2 text-sm" style={{ color: "var(--ink-60)" }}>{o.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
