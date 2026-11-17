import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function InteractiveLab({ copy }) {
  const [activeId, setActiveId] = useState(copy.tabs[0].id);
  const activeTab = copy.tabs.find((t) => t.id === activeId) || copy.tabs[0];

  return (
    <section id="laboratorio" className="bg-[#0B121E] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Narrative + Pill Switcher */}
          <div className="lg:col-span-5">
            <div className="font-mono text-xs font-medium text-slate-400">
              {copy.eyebrow}
            </div>
            <h2 className="mt-3 text-3xl leading-[1.12] font-bold tracking-tight text-white sm:text-4xl">
              {copy.titleLine1}
              <br />
              {copy.titleLine2}
            </h2>

            <div className="mt-7 flex flex-wrap gap-2">
              {copy.tabs.map((tab) => {
                const selected = tab.id === activeTab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveId(tab.id)}
                    className={`cursor-pointer rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                      selected
                        ? 'bg-white text-[#0F172A]'
                        : 'border border-white/15 bg-white/5 text-slate-300 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="mt-9"
              >
                <div className="font-mono text-xs text-slate-400">{activeTab.eyebrow}</div>
                <h3 className="mt-2 text-xl leading-snug font-semibold text-white sm:text-2xl">
                  {activeTab.headline}
                </h3>
                <p className="font-subtitle mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {activeTab.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Live Production Terminal */}
          <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#10192A] shadow-[0_24px_60px_rgba(0,0,0,0.45)] lg:col-span-7">
            <div className="flex items-center gap-3 border-b border-white/10 bg-[#0D1524] px-4 py-3">
              <div className="flex shrink-0 items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <span className="truncate font-mono text-[11px] text-slate-300">
                {activeTab.terminalPath}
              </span>
            </div>

            <div className="p-4 sm:p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-1 gap-3.5 md:grid-cols-12">
                    {/* Main Inspection Box */}
                    <div className="rounded-xl border border-white/10 bg-[#0B121E] p-4 md:col-span-8">
                      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                        <span className="truncate text-xs font-semibold text-white">
                          {activeTab.cardTitle}
                        </span>
                        <span className="shrink-0 rounded-md border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-300">
                          {activeTab.cardBadge}
                        </span>
                      </div>

                      {activeTab.kpis && (
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          {activeTab.kpis.map((kpi) => (
                            <div
                              key={kpi.label}
                              className="rounded-lg border border-white/10 bg-[#10192A] p-2.5"
                            >
                              <div className="text-[10px] text-slate-400">{kpi.label}</div>
                              <div className="mt-1 text-base font-bold text-white">
                                {kpi.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {activeTab.pipeline && (
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          {activeTab.pipeline.map((step) => (
                            <div
                              key={step.tag}
                              className="rounded-lg border border-white/10 bg-[#10192A] p-2.5"
                            >
                              <div className="font-mono text-[9px] text-slate-400">
                                {step.tag}
                              </div>
                              <div className="mt-1 text-[11px] font-semibold text-white">
                                {step.title}
                              </div>
                              <div className="font-mono text-[10px] text-slate-400">
                                {step.sub}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {activeTab.mobileCard && activeTab.dockerCard && (
                        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          <div className="rounded-lg border border-white/10 bg-[#10192A] p-3">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-semibold text-white">
                                {activeTab.mobileCard.title}
                              </span>
                              <span className="font-mono text-[10px] text-emerald-400">
                                {activeTab.mobileCard.status}
                              </span>
                            </div>
                            <div className="mt-2 space-y-1.5 font-mono text-[10px] text-slate-300">
                              <div className="rounded bg-[#0B121E] px-2 py-1">
                                {activeTab.mobileCard.guide}
                              </div>
                              <div className="rounded bg-[#0B121E] px-2 py-1">
                                {activeTab.mobileCard.ean}
                              </div>
                            </div>
                            <div className="mt-2 font-mono text-[10px] text-slate-400">
                              {activeTab.mobileCard.footer}
                            </div>
                          </div>

                          <div className="rounded-lg border border-white/10 bg-[#10192A] p-3">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-semibold text-white">
                                {activeTab.dockerCard.title}
                              </span>
                              <span className="font-mono text-[10px] text-slate-400">
                                {activeTab.dockerCard.uptime}
                              </span>
                            </div>
                            <div className="mt-2 space-y-1.5 font-mono text-[10px]">
                              {activeTab.dockerCard.items.map((item) => (
                                <div
                                  key={item.name}
                                  className="flex items-center justify-between rounded bg-[#0B121E] px-2 py-1"
                                >
                                  <span className="text-slate-200">{item.name}</span>
                                  <span className="text-slate-400">{item.ram}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab.rows && (
                        <div className="mt-3 space-y-1.5">
                          {activeTab.rows.map((row) => (
                            <div
                              key={row.code}
                              className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/10 bg-[#10192A] px-3 py-2"
                            >
                              <span className="font-mono text-[11px] font-medium text-white">
                                {row.code}
                              </span>
                              <span className="font-mono text-[10px] text-slate-400">
                                {row.meta}
                              </span>
                              <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                                {row.state}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Side Telemetry Column */}
                    <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#0B121E] p-3.5 md:col-span-4">
                      <div>
                        <div className="font-mono text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                          {activeTab.sideTitle}
                        </div>
                        <div className="mt-3 space-y-2">
                          {activeTab.sideBlocks.map((blk) => (
                            <div
                              key={blk.label}
                              className="rounded-lg border border-white/10 bg-[#10192A] p-2.5"
                            >
                              <div className="font-mono text-[10px] text-slate-400">
                                {blk.label}
                              </div>
                              <div
                                className={`mt-0.5 font-mono text-[11px] font-semibold ${
                                  blk.highlight ? 'text-emerald-300' : 'text-white'
                                }`}
                              >
                                {blk.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-3 border-t border-white/10 pt-2.5 font-mono text-[10px] text-slate-400">
                        {activeTab.sideFooter}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Command Strip */}
                  <div className="mt-3.5 rounded-xl border border-white/10 bg-[#0B121E] px-4 py-3">
                    <div className="font-mono text-xs font-medium text-white">
                      {activeTab.cmd}
                    </div>
                    <div className="mt-1 text-xs text-slate-400">{activeTab.cmdNote}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
