import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  siDocker,
  siFlutter,
  siGmail,
  siN8n,
  siNginx,
  siPostgresql,
  siPython,
  siWhatsapp,
} from 'simple-icons';
import { BrandIcon } from './BrandIcon';

export function BentoServices({ copy }) {
  const [erpCard, n8nCard, webCard, mobileCard] = copy.cards;
  const [activeWebTab, setActiveWebTab] = useState('quote');

  const currentWebTab =
    webCard.tabs.find((t) => t.id === activeWebTab) || webCard.tabs[2];

  return (
    <section id="especialidades" className="bg-transparent py-16 sm:py-24">
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

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card 1: ERP & Odoo */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.04)] sm:p-7">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">{erpCard.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                {erpCard.description}
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200/90 bg-[#F8FAFC] p-4">
              <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-11">
                {/* PostgreSQL Node */}
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 sm:col-span-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0F172A]">
                      {erpCard.leftNode.title}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      {erpCard.leftNode.badge}
                    </span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {erpCard.leftNode.rows.map((r) => (
                      <div
                        key={r.label}
                        className="flex items-center justify-between text-[11px]"
                      >
                        <span className="text-[#475569]">{r.label}</span>
                        <span className="font-mono font-medium text-[#0F172A]">
                          {r.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bridge */}
                <div className="flex items-center justify-center sm:col-span-1">
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 font-mono text-[10px] font-semibold whitespace-nowrap text-[#0F2744] shadow-xs">
                    <span>{erpCard.bridgeLabel}</span>
                    <ArrowRight className="h-2.5 w-2.5" />
                  </span>
                </div>

                {/* Odoo Node */}
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 sm:col-span-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0F172A]">
                      {erpCard.rightNode.title}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      {erpCard.rightNode.badge}
                    </span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {erpCard.rightNode.rows.map((r) => (
                      <div
                        key={r.label}
                        className="flex items-center justify-between text-[11px]"
                      >
                        <span className="font-mono text-[#475569]">{r.label}</span>
                        <span className="font-mono font-medium text-[#124D59]">
                          {r.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: n8n Hub-and-Spoke */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.04)] sm:p-7">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">{n8nCard.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                {n8nCard.description}
              </p>
            </div>

            <div className="relative mt-6 flex h-56 items-center justify-center overflow-hidden rounded-xl border border-slate-200/90 bg-[#F8FAFC] p-4">
              {/* Hub & spoke SVG connections */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 400 220"
                fill="none"
                aria-hidden="true"
              >
                <line x1="200" y1="110" x2="105" y2="55" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="200" y1="110" x2="215" y2="40" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="200" y1="110" x2="310" y2="70" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="200" y1="110" x2="120" y2="175" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="200" y1="110" x2="285" y2="172" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>

              {/* Satellite Nodes */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#0F172A] shadow-xs sm:left-10">
                <BrandIcon icon={siPython} className="h-3.5 w-3.5 text-[#3776AB]" />
                <span>{n8nCard.nodes[0]}</span>
              </div>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#0F172A] shadow-xs">
                {n8nCard.nodes[1]}
              </div>
              <div className="absolute top-12 right-5 inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#0F172A] shadow-xs sm:right-8">
                <BrandIcon icon={siWhatsapp} className="h-3.5 w-3.5 text-[#25D366]" />
                <span>{n8nCard.nodes[2]}</span>
              </div>
              <div className="absolute bottom-5 left-8 inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#0F172A] shadow-xs sm:left-14">
                <BrandIcon icon={siPostgresql} className="h-3.5 w-3.5 text-[#4169E1]" />
                <span>{n8nCard.nodes[3]}</span>
              </div>
              <div className="absolute right-8 bottom-5 inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#0F172A] shadow-xs sm:right-14">
                <BrandIcon icon={siGmail} className="h-3.5 w-3.5 text-[#EA4335]" />
                <span>{n8nCard.nodes[4]}</span>
              </div>

              {/* Center Hub */}
              <div className="relative z-10 flex items-center gap-2 rounded-2xl border border-slate-700 bg-[#0B121E] px-4 py-2.5 text-white shadow-md">
                <BrandIcon icon={siN8n} className="h-4 w-4 text-[#EA4B71]" />
                <span className="font-mono text-xs font-bold text-white">
                  {n8nCard.centerLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Web Apps React & Python */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.04)] sm:p-7">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">{webCard.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                {webCard.description}
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200/90 bg-[#F8FAFC] p-4">
              <div className="flex flex-wrap gap-1.5">
                {webCard.tabs.map((tab) => {
                  const selected = tab.id === currentWebTab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveWebTab(tab.id)}
                      className={`cursor-pointer rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
                        selected
                          ? 'bg-[#0F2744] text-white'
                          : 'border border-slate-200 bg-white text-[#475569] hover:text-[#0F172A]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-12">
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 sm:col-span-8">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                    <span className="truncate text-[11px] font-semibold text-[#0F172A]">
                      {currentWebTab.header}
                    </span>
                    <span className="shrink-0 font-mono text-[10px] font-semibold text-emerald-600">
                      SSL
                    </span>
                  </div>
                  <div className="mt-2.5 space-y-2">
                    {currentWebTab.rows.map((row) => (
                      <div
                        key={row.k}
                        className="flex items-center justify-between gap-2 text-[11px]"
                      >
                        <span className="text-[#475569]">{row.k}</span>
                        <span className="font-mono font-medium text-[#0F172A]">
                          {row.v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0B121E] p-3 text-white sm:col-span-4">
                  <div>
                    <div className="font-mono text-[10px] text-slate-400">
                      {currentWebTab.apiTitle}
                    </div>
                    <div className="mt-1 font-mono text-[11px] font-semibold text-white">
                      {currentWebTab.apiEndpoint}
                    </div>
                    <div className="font-mono text-[10px] text-emerald-400">
                      {currentWebTab.apiStatus}
                    </div>
                  </div>
                  <div className="mt-3 border-t border-white/10 pt-2">
                    <div className="font-mono text-[10px] text-slate-400">
                      {currentWebTab.apiSubTitle}
                    </div>
                    <div className="font-mono text-[11px] text-slate-200">
                      {currentWebTab.apiSubCode}
                    </div>
                    <div className="font-mono text-[10px] text-slate-400">
                      {currentWebTab.apiSubState}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Flutter & Docker / Nginx */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.04)] sm:p-7">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">{mobileCard.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                {mobileCard.description}
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200/90 bg-[#F8FAFC] p-4">
              <div className="flex items-center justify-between pb-3">
                <span className="text-xs font-semibold text-[#0F172A]">
                  {mobileCard.stackTitle}
                </span>
                <span className="font-mono text-[11px] text-slate-500">
                  {mobileCard.activeCountLabel}
                </span>
              </div>

              <div className="space-y-2">
                {mobileCard.services.map((srv, idx) => (
                  <div
                    key={srv.name}
                    className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5"
                  >
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F4F6F8] text-[#0F2744]">
                        {idx === 0 ? (
                          <BrandIcon icon={siFlutter} className="h-3.5 w-3.5 text-[#02569B]" />
                        ) : idx === 1 ? (
                          <BrandIcon icon={siDocker} className="h-3.5 w-3.5 text-[#2496ED]" />
                        ) : idx === 2 ? (
                          <BrandIcon icon={siNginx} className="h-3.5 w-3.5 text-[#009639]" />
                        ) : (
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#0F2744]" />
                        )}
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-[#0F172A]">{srv.name}</div>
                        <div className="truncate text-[11px] text-[#64748B]">{srv.desc}</div>
                      </div>
                    </div>

                    <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[11px] font-medium text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {srv.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
