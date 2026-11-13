import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faBolt,
  faCircleCheck,
  faCubes,
  faDiagramProject,
  faGlobe,
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
      className="relative overflow-hidden bg-[#050914] py-24 text-[#F2F2F2] sm:py-28"
    >
      <div className="pointer-events-none absolute top-10 right-0 h-[440px] w-[440px] rounded-full bg-[#00F0FF]/16 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-[#A855F7]/20 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00FFA3]/55 bg-[#00FFA3]/12 px-3.5 py-1 font-mono text-xs font-semibold tracking-[0.18em] text-[#00FFA3] uppercase">
            <FontAwesomeIcon icon={faBolt} className="text-xs text-[#00FFA3]" />
            {copy.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#F2F2F2]/75 sm:text-lg">
            {copy.subtitle}
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2 rounded-2xl border border-[#00F0FF]/35 bg-[#0A1326]/85 p-2 shadow-[0_0_32px_rgba(41,100,217,0.2)] backdrop-blur-md">
          {copy.tabs.map((tab) => {
            const isSelected = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`relative flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors sm:px-5 ${
                  isSelected ? 'text-[#050914]' : 'text-[#F2F2F2]/70 hover:text-[#00F0FF]'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="lab-tab-bg"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00FFA3] via-[#00F0FF] to-[#2975D9] shadow-[0_0_26px_rgba(0,240,255,0.6)]"
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
          <div className="flex flex-col justify-between rounded-3xl border border-[#00F0FF]/40 bg-[#0A1326]/90 p-6 shadow-[0_0_40px_rgba(0,240,255,0.12)] backdrop-blur-xl sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-lg border border-[#A855F7]/60 bg-[#A855F7]/15 px-3 py-1 font-mono text-xs font-semibold text-[#A855F7]">
                  {activeTab.badge}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#00FFA3]">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-xs text-[#00FFA3]" />
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
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.08 }}
                        className="relative flex items-center justify-between rounded-xl border border-[#2975D9]/55 bg-[#050914]/85 px-4 py-3.5 shadow-[0_0_16px_rgba(41,100,217,0.18)]"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#00F0FF]/20 font-mono text-xs font-bold text-[#00F0FF]">
                            0{i + 1}
                          </span>
                          <span className="text-sm font-semibold text-[#F2F2F2]">
                            {node}
                          </span>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} className="text-xs text-[#00FFA3]" />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#00F0FF]/25 pt-6">
              <div className="rounded-xl border border-[#00F0FF]/25 bg-[#050914]/80 p-3">
                <div className="font-mono text-[10px] tracking-wider text-[#F2F2F2]/55 uppercase">
                  LATENCY
                </div>
                <div className="mt-1 font-display text-lg font-bold text-[#00F0FF]">
                  {activeTab.latency}
                </div>
              </div>
              <div className="rounded-xl border border-[#A855F7]/25 bg-[#050914]/80 p-3">
                <div className="font-mono text-[10px] tracking-wider text-[#F2F2F2]/55 uppercase">
                  THROUGHPUT
                </div>
                <div className="mt-1 font-display text-lg font-bold text-[#A855F7]">
                  {activeTab.throughput}
                </div>
              </div>
              <div className="rounded-xl border border-[#00FFA3]/25 bg-[#050914]/80 p-3">
                <div className="font-mono text-[10px] tracking-wider text-[#F2F2F2]/55 uppercase">
                  SLA
                </div>
                <div className="mt-1 font-display text-lg font-bold text-[#00FFA3]">
                  {activeTab.reliability}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-3xl border border-[#A855F7]/45 bg-[#040711] shadow-[0_0_46px_rgba(168,85,247,0.16)] lg:col-span-7">
            <div className="flex items-center justify-between border-b border-[#2975D9]/35 bg-[#0A1326]/90 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF2E93] shadow-[0_0_8px_#FF2E93]" />
                <span className="h-3 w-3 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
                <span className="h-3 w-3 rounded-full bg-[#00FFA3] shadow-[0_0_8px_#00FFA3]" />
                <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-[#F2F2F2]/85">
                  <FontAwesomeIcon icon={faTerminal} className="text-xs text-[#00F0FF]" />
                  {activeTab.filename}
                </span>
              </div>
              <span className="font-mono text-[11px] font-semibold text-[#00F0FF]">
                ERGOTECH NEON CORE
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
                  className="overflow-x-auto font-mono text-xs leading-7 text-[#00F0FF]/95 sm:text-sm"
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
