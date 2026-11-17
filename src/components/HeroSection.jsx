import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function HeroSection({ copy }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const tabs = copy.tabs;
  const activeTab = tabs[activeIndex] || tabs[0];

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, tabs.length]);

  const handleSelectTab = (idx) => {
    setActiveIndex(idx);
    setIsPaused(true);
  };

  return (
    <section id="top" className="bg-transparent pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="font-mono text-xs font-medium tracking-wide text-[#475569]">
            {copy.eyebrow}
          </div>

          <h1 className="mt-4 text-4xl leading-[1.08] font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-[3.75rem]">
            {copy.titleLine1}
            <br />
            {copy.titleLine2}
          </h1>

          <p className="font-subtitle mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#475569] sm:text-lg">
            {copy.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#16375E]"
            >
              <span>{copy.primaryCta}</span>
              <ChevronRight className="h-4 w-4" />
            </a>

            <a
              href="#laboratorio"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition-colors hover:border-slate-400 hover:bg-slate-50"
            >
              {copy.secondaryCta}
            </a>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-slate-800 bg-[#0B121E] text-white shadow-[0_24px_64px_rgba(15,23,42,0.18)]"
        >
          {/* Window Top Chrome */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#0E1626] px-4 py-3 sm:px-5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0B121E] px-3 py-1 font-mono text-[11px] text-slate-300">
              {activeTab.url}
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{activeTab.status}</span>
            </div>
          </div>

          {/* Tab Strip */}
          <div className="flex flex-wrap items-center gap-1.5 border-b border-white/10 px-4 py-3 sm:px-5">
            {tabs.map((tab, idx) => {
              const selected = idx === activeIndex;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleSelectTab(idx)}
                  className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    selected
                      ? 'bg-white text-[#0F172A]'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 gap-4 lg:grid-cols-12"
              >
                {/* Left Operational Frame */}
                <div className="rounded-xl border border-white/10 bg-[#10192A] p-4 sm:p-5 lg:col-span-8">
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <h3 className="text-sm font-semibold text-white">{activeTab.headerTitle}</h3>
                    <span className="rounded-md border border-white/15 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-slate-300">
                      {activeTab.headerBadge}
                    </span>
                  </div>

                  {/* N8N Pipeline Layout */}
                  {activeTab.id === 'n8n' && (
                    <div className="mt-4 space-y-4">
                      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                        {activeTab.pipeline.map((step) => (
                          <div
                            key={step.tag}
                            className="rounded-lg border border-white/10 bg-[#0B121E] p-3"
                          >
                            <div className="font-mono text-[10px] font-semibold text-slate-400">
                              {step.tag}
                            </div>
                            <div className="mt-1.5 text-xs font-semibold text-white">
                              {step.title}
                            </div>
                            <div className="mt-0.5 font-mono text-[10px] text-slate-400">
                              {step.sub}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2">
                        {activeTab.events.map((ev) => (
                          <div
                            key={ev.id}
                            className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/10 bg-[#0B121E] px-3.5 py-2.5"
                          >
                            <span className="font-mono text-xs font-medium text-white">
                              {ev.id}
                            </span>
                            <span className="font-mono text-xs text-slate-400">{ev.flow}</span>
                            <span
                              className={`rounded-md px-2 py-0.5 font-mono text-[11px] ${
                                ev.tone === 'success'
                                  ? 'bg-emerald-500/15 text-emerald-300'
                                  : 'bg-amber-500/15 text-amber-300'
                              }`}
                            >
                              {ev.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Web App B2B React Layout */}
                  {activeTab.id === 'web' && (
                    <div className="mt-4 space-y-4">
                      <div className="grid grid-cols-3 gap-2.5">
                        {activeTab.kpis.map((kpi) => (
                          <div
                            key={kpi.label}
                            className="rounded-lg border border-white/10 bg-[#0B121E] p-3"
                          >
                            <div className="text-[11px] text-slate-400">{kpi.label}</div>
                            <div className="mt-1 text-lg font-bold text-white">{kpi.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2">
                        {activeTab.catalog.map((item) => (
                          <div
                            key={item.name}
                            className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/10 bg-[#0B121E] px-3.5 py-2.5"
                          >
                            <div>
                              <div className="text-xs font-semibold text-white">{item.name}</div>
                              <div className="font-mono text-[10px] text-slate-400">{item.sku}</div>
                            </div>
                            <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-200">
                              {item.qty}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Odoo 19 ERP Layout */}
                  {activeTab.id === 'odoo' && (
                    <div className="mt-4 space-y-4">
                      <div className="grid grid-cols-3 gap-2.5">
                        {activeTab.kpis.map((kpi) => (
                          <div
                            key={kpi.label}
                            className="rounded-lg border border-white/10 bg-[#0B121E] p-3"
                          >
                            <div className="text-[11px] text-slate-400">{kpi.label}</div>
                            <div className="mt-1 text-lg font-bold text-white">{kpi.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2">
                        {activeTab.rows.map((row) => (
                          <div
                            key={row.code}
                            className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/10 bg-[#0B121E] px-3.5 py-2.5"
                          >
                            <span className="font-mono text-xs font-semibold text-white">
                              {row.code}
                            </span>
                            <span className="text-xs text-slate-400">{row.name}</span>
                            <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 font-mono text-[11px] text-emerald-300">
                              {row.state}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Flutter & Docker Layout */}
                  {activeTab.id === 'flutter' && (
                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="rounded-lg border border-white/10 bg-[#0B121E] p-3.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white">
                            {activeTab.mobileBox.title}
                          </span>
                          <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                            {activeTab.mobileBox.status}
                          </span>
                        </div>
                        <div className="mt-3 space-y-2">
                          <div className="rounded-md border border-white/10 bg-[#10192A] px-2.5 py-2 font-mono text-[11px] text-slate-200">
                            {activeTab.mobileBox.guide}
                          </div>
                          <div className="rounded-md border border-white/10 bg-[#10192A] px-2.5 py-2 font-mono text-[11px] text-slate-300">
                            {activeTab.mobileBox.ean}
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-[#158EA6]"
                              style={{ width: `${activeTab.mobileBox.pct}%` }}
                            />
                          </div>
                          <div className="mt-1.5 font-mono text-[10px] text-slate-400">
                            {activeTab.mobileBox.progress}
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border border-white/10 bg-[#0B121E] p-3.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white">
                            {activeTab.dockerBox.title}
                          </span>
                          <span className="font-mono text-[11px] text-slate-400">
                            {activeTab.dockerBox.uptime}
                          </span>
                        </div>
                        <div className="mt-3 space-y-2">
                          {activeTab.dockerBox.containers.map((c) => (
                            <div
                              key={c.name}
                              className="flex items-center justify-between rounded-md border border-white/10 bg-[#10192A] px-2.5 py-2 font-mono text-[11px]"
                            >
                              <span className="text-slate-200">{c.name}</span>
                              <span className="text-slate-400">{c.ram}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Telemetry Sidebar */}
                <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#10192A] p-4 lg:col-span-4">
                  <div>
                    <div className="font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                      {activeTab.sidebarTitle}
                    </div>
                    <div className="mt-3 space-y-2.5">
                      {activeTab.sidebarBlocks.map((block) => (
                        <div
                          key={block.label}
                          className="rounded-lg border border-white/10 bg-[#0B121E] p-3"
                        >
                          <div className="font-mono text-[10px] text-slate-400">{block.label}</div>
                          <div
                            className={`mt-1 font-mono text-xs font-semibold ${
                              block.highlight ? 'text-emerald-300' : 'text-white'
                            }`}
                          >
                            {block.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 border-t border-white/10 pt-3 font-mono text-[11px] text-slate-400">
                    {activeTab.sidebarFooter}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Window Footer */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-[#0E1626] px-4 py-2.5 font-mono text-[11px] text-slate-400 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{copy.windowFooter}</span>
            </div>
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              className="cursor-pointer text-slate-400 transition-colors hover:text-white"
            >
              {isPaused ? copy.rotationPaused : copy.rotationActive}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
