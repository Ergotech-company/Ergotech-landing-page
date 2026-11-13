import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCircleCheck,
  faCubes,
  faDiagramProject,
  faGlobe,
  faMicrochip,
  faServer,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';

const TAB_ICONS = {
  odoo: faCubes,
  n8n: faDiagramProject,
  web: faGlobe,
  servers: faServer,
};

export function InteractiveLab({ copy }) {
  const [activeTabId, setActiveTabId] = useState(copy.tabs[0].id);
  const activeTab = copy.tabs.find((t) => t.id === activeTabId) || copy.tabs[0];

  return (
    <section
      id="laboratorio"
      className="relative overflow-hidden border-y border-[#1F4071]/10 bg-[#F4F7FC] py-24 text-[#102C53] sm:py-28"
    >
      <div className="pointer-events-none absolute top-10 right-0 h-[360px] w-[360px] rounded-full bg-[#336DE6]/6 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-[#27717C]/6 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#27717C]/25 bg-white px-3.5 py-1 font-mono text-xs font-bold tracking-[0.18em] text-[#27717C] uppercase shadow-xs">
            <FontAwesomeIcon icon={faMicrochip} className="text-xs text-[#27717C]" />
            {copy.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#102C53] sm:text-4xl lg:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed font-medium text-[#1F4071]/85 sm:text-lg">
            {copy.subtitle}
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2 rounded-2xl border border-[#1F4071]/15 bg-white p-2 shadow-[0_6px_22px_rgba(16,44,83,0.06)]">
          {copy.tabs.map((tab) => {
            const isSelected = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`relative flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors sm:px-5 ${isSelected ? 'text-white' : 'text-[#1F4071] hover:text-[#336DE6]'
                  }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="lab-tab-bg"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#102C53] via-[#2C56AA] to-[#336DE6] shadow-[0_6px_18px_rgba(44,86,170,0.22)]"
                  />
                )}
                <FontAwesomeIcon
                  icon={TAB_ICONS[tab.id] || faCubes}
                  className="relative z-10 text-xs"
                />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="flex flex-col justify-between rounded-3xl border border-[#1F4071]/15 bg-white p-6 shadow-[0_14px_36px_rgba(16,44,83,0.07)] sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-lg border border-[#2C56AA]/25 bg-[#EEF4FB] px-3 py-1 font-mono text-xs font-bold text-[#2C56AA]">
                  {activeTab.badge}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#27717C]">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-xs text-[#27717C]" />
                  ONLINE
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                  >
                    {activeTab.nodes.map((node, i) => (
                      <motion.div
                        key={node}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.07 }}
                        className="relative flex items-center justify-between rounded-xl border border-[#1F4071]/15 bg-[#F8FAFC] px-4 py-3.5"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#336DE6]/12 font-mono text-xs font-bold text-[#336DE6]">
                            0{i + 1}
                          </span>
                          <span className="text-sm font-semibold text-[#102C53]">
                            {node}
                          </span>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} className="text-xs text-[#27717C]" />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#1F4071]/12 pt-6">
              <div className="rounded-xl border border-[#1F4071]/12 bg-[#F8FAFC] p-3">
                <div className="font-mono text-[10px] font-semibold tracking-wider text-[#1F4071]/70 uppercase">
                  LATENCY
                </div>
                <div className="mt-1 font-spartan text-lg font-bold text-[#336DE6]">
                  {activeTab.latency}
                </div>
              </div>
              <div className="rounded-xl border border-[#1F4071]/12 bg-[#F8FAFC] p-3">
                <div className="font-mono text-[10px] font-semibold tracking-wider text-[#1F4071]/70 uppercase">
                  THROUGHPUT
                </div>
                <div className="mt-1 font-spartan text-lg font-bold text-[#2C56AA]">
                  {activeTab.throughput}
                </div>
              </div>
              <div className="rounded-xl border border-[#1F4071]/12 bg-[#F8FAFC] p-3">
                <div className="font-mono text-[10px] font-semibold tracking-wider text-[#1F4071]/70 uppercase">
                  SLA
                </div>
                <div className="mt-1 font-spartan text-lg font-bold text-[#27717C]">
                  {activeTab.reliability}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-3xl border border-black/15 bg-[#0B0F17] shadow-[0_18px_42px_rgba(11,15,23,0.2)] lg:col-span-7">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#121824] px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/55" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#336DE6]" />
                <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-white/90">
                  <FontAwesomeIcon icon={faTerminal} className="text-xs text-[#93C5FD]" />
                  {activeTab.filename}
                </span>
              </div>
              <span className="font-mono text-[11px] font-semibold tracking-wider text-white/75">
                ERGOTECH CORE
              </span>
            </div>

            <div className="relative flex-1 p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTab.id}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -14 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-x-auto font-mono text-xs leading-7 text-[#E2ECFA] sm:text-sm"
                >
                  <code>{activeTab.code}</code>
                </motion.pre>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
