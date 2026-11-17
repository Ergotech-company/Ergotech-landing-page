import { useEffect, useMemo, useState } from 'react';
import { Check, Loader2, Play, Search, Square } from 'lucide-react';

const ROW_ICON_PATHS = {
  'odoo-19': '/icons/odoo icon.png',
  'n8n-hooks': '/icons/N8n_logo.png',
  'portal-react': '/icons/React-icon.svg.webp',
  'app-flutter': '/icons/flutter icon.png',
};

export function EcosystemSection({ copy }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [running, setRunning] = useState(true);
  const [completedSteps, setCompletedSteps] = useState(3);

  useEffect(() => {
    if (!running) return undefined;
    if (completedSteps >= copy.runner.steps.length) {
      setRunning(false);
      return undefined;
    }
    const timer = setTimeout(() => {
      setCompletedSteps((prev) => prev + 1);
    }, 1600);
    return () => clearTimeout(timer);
  }, [running, completedSteps, copy.runner.steps.length]);

  const handleToggleRunner = () => {
    if (running) {
      setRunning(false);
    } else {
      setCompletedSteps(0);
      setRunning(true);
    }
  };

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return copy.rows.filter((row) => {
      const matchesCat =
        selectedCategory === 'all' || row.category.includes(selectedCategory);
      const matchesQuery =
        !q ||
        row.service.toLowerCase().includes(q) ||
        row.integration.toLowerCase().includes(q) ||
        row.status.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [copy.rows, selectedCategory, query]);

  return (
    <section id="ecosistema" className="bg-transparent py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-xs font-medium text-[#475569]">
            {copy.eyebrow}
          </div>
          <h2 className="mt-3 text-3xl leading-[1.12] font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            {copy.titleLine1}
            <br />
            {copy.titleLine2}
          </h2>
          <p className="font-subtitle mt-4 text-base leading-relaxed text-[#475569] sm:text-lg">
            {copy.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Panel: Light Operations Explorer */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)] lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                </div>
                <span className="font-mono text-xs text-[#475569]">
                  {copy.panelTitle}
                </span>
              </div>

              <div className="relative">
                <Search className="pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={copy.searchPlaceholder}
                  className="w-40 rounded-lg border border-slate-200 bg-[#F8FAFC] py-1 pr-3 pl-8 text-xs text-[#0F172A] placeholder-slate-400 outline-none transition-colors focus:border-[#0F2744] sm:w-44"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12">
              {/* Inner Sidebar */}
              <div className="border-b border-slate-200/80 bg-[#FAFBFD] p-3 sm:col-span-4 sm:border-r sm:border-b-0">
                {copy.sidebarGroups.map((group) => (
                  <div key={group.heading} className="mb-4 last:mb-0">
                    <div className="px-2.5 pb-1.5 text-[11px] font-medium text-slate-400">
                      {group.heading}
                    </div>
                    <div className="space-y-0.5">
                      {group.items.map((item) => {
                        const active = selectedCategory === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedCategory(item.id)}
                            className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs transition-colors ${active
                              ? 'bg-slate-200/70 font-semibold text-[#0F172A]'
                              : 'font-medium text-[#475569] hover:bg-slate-100 hover:text-[#0F172A]'
                              }`}
                          >
                            <span className="truncate">{item.label}</span>
                            {item.count !== undefined && (
                              <span className="font-mono text-[11px] text-slate-500">
                                {item.count}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Table */}
              <div className="overflow-x-auto p-3 sm:col-span-8">
                <table className="w-full min-w-[380px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-slate-100 text-[11px] font-medium text-slate-400">
                      {copy.tableHeaders.map((h) => (
                        <th key={h} className="px-2 py-2 font-medium">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {filteredRows.map((row) => (
                      <tr key={row.id} className="transition-colors hover:bg-slate-50/80">
                        <td className="px-2 py-3">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-slate-200/80 bg-white p-1">
                              {ROW_ICON_PATHS[row.id] ? (
                                <img
                                  src={ROW_ICON_PATHS[row.id]}
                                  alt={row.service}
                                  className="h-full w-full object-contain"
                                  draggable={false}
                                />
                              ) : (
                                <span className="font-mono text-[10px] font-bold text-[#0F172A]">
                                  {row.badge}
                                </span>
                              )}
                            </span>
                            <span className="font-semibold whitespace-nowrap text-[#0F172A]">
                              {row.service}
                            </span>
                          </div>
                        </td>
                        <td className="max-w-[160px] truncate px-2 py-3 text-[#475569]">
                          {row.integration}
                        </td>
                        <td className="px-2 py-3 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium ${row.statusTone === 'blue'
                              ? 'border-sky-200 bg-sky-50 text-sky-700'
                              : 'border-emerald-200 bg-emerald-50 text-emerald-700'
                              }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${row.statusTone === 'blue' ? 'bg-sky-500' : 'bg-emerald-500'
                                }`}
                            />
                            {row.status}
                          </span>
                        </td>
                        <td className="px-2 py-3 font-mono text-[11px] text-slate-500">
                          {row.cycle}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Panel: Dark CI/CD Runner */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0B121E] text-white shadow-[0_18px_40px_rgba(15,23,42,0.14)] lg:col-span-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-[#0E1626] px-4 py-3">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/10 text-[10px] font-bold text-white">
                  ET
                </span>
                <span className="text-slate-200">
                  {copy.runner.repo} / <span className="text-slate-400">{copy.runner.branch}</span>
                </span>
                <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-slate-300">
                  {copy.runner.runId}
                </span>
              </div>

              <div className="flex items-center gap-2.5 font-mono text-[11px]">
                <span className="text-slate-400">{copy.runner.duration}</span>
                <span
                  className={`inline-flex items-center gap-1.5 ${running ? 'text-amber-300' : 'text-emerald-400'
                    }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${running ? 'bg-amber-300' : 'bg-emerald-400'
                      }`}
                  />
                  {running ? copy.runner.stateRunning : copy.runner.stateDone}
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-[#10192A] px-3.5 py-2.5">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#158EA6]/20 font-mono text-[10px] font-bold text-[#38BDF8]">
                    ET
                  </span>
                  <span className="truncate text-xs font-semibold text-white">
                    {copy.runner.title}
                  </span>
                  <span className="hidden font-mono text-[11px] text-slate-400 sm:inline">
                    {copy.runner.commit}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleToggleRunner}
                  className="inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-200 transition-colors hover:bg-white/10"
                >
                  {running ? (
                    <>
                      <Square className="h-2.5 w-2.5" />
                      <span>{copy.runner.stopBtn}</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-2.5 w-2.5" />
                      <span>{copy.runner.retryBtn}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 space-y-2.5">
                {copy.runner.steps.map((step, idx) => {
                  const done = idx < completedSteps;
                  const active = running && idx === completedSteps;
                  return (
                    <div
                      key={step.name}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#10192A] px-3.5 py-2.5"
                    >
                      <div className="flex min-w-0 items-center gap-2.5">
                        {done ? (
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                            <Check className="h-3 w-3" />
                          </span>
                        ) : active ? (
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                            <Loader2 className="h-3 w-3 animate-spin" />
                          </span>
                        ) : (
                          <span className="h-5 w-5 shrink-0 rounded-full border border-white/15 bg-white/5" />
                        )}

                        <span className="text-xs font-medium text-white">{step.name}</span>
                        <span className="truncate font-mono text-[11px] text-slate-400">
                          {step.cmd}
                        </span>
                      </div>

                      <span className="shrink-0 font-mono text-[11px] text-slate-400">
                        {done ? step.result : active ? '...' : 'En cola'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

