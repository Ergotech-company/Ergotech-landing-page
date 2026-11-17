export function ProcessTimeline({ copy }) {
  return (
    <section id="proceso" className="bg-transparent py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-xs font-medium text-[#475569]">
            {copy.eyebrow}
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            {copy.title}
          </h2>
          <p className="font-subtitle mt-4 text-base leading-relaxed text-[#475569] sm:text-lg">
            {copy.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {copy.phases.map((phase) => (
            <div
              key={phase.step}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.03)]"
            >
              <div className="font-mono text-xs font-medium text-slate-500">
                {phase.step}
              </div>
              <h3 className="mt-3 text-lg font-bold text-[#0F172A]">{phase.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#475569]">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-slate-200 pt-10 lg:grid-cols-4">
          {copy.metrics.map((metric) => (
            <div key={metric.value + metric.label}>
              <div className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                {metric.value}
              </div>
              <div className="mt-2 text-xs leading-relaxed text-[#475569] sm:text-sm">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
