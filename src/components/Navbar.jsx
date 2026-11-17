import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Globe, Menu, X } from 'lucide-react';

export function Navbar({ lang, setLang, copy }) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-40 border-b transition-colors duration-200 ${
          scrolled
            ? 'border-slate-200/90 bg-[#F4F6F8]/95 backdrop-blur-md'
            : 'border-slate-200/60 bg-[#F4F6F8]/85 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2.5 select-none">
            <img
              src="/brand/logo-1.png"
              alt="ERGOTECHNOLOGY"
              className="h-7 w-7 object-contain"
              draggable={false}
            />
            <span className="text-sm font-bold tracking-[0.06em] text-[#0F172A] uppercase">
              ERGOTECHNOLOGY
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen((v) => !v)}
                className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-[#334155] transition-colors hover:text-[#0F172A]"
              >
                <span>{copy.specialtiesLabel}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-0 mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.1)]"
                  >
                    {copy.specialtiesMenu.map((item) => (
                      <a
                        key={item.label}
                        href={`#${item.id}`}
                        onClick={() => setDropdownOpen(false)}
                        className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-[#F4F6F8]"
                      >
                        <div className="text-sm font-semibold text-[#0F172A]">{item.label}</div>
                        <div className="mt-0.5 text-xs text-[#64748B]">{item.desc}</div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {copy.links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm font-medium text-[#334155] transition-colors hover:text-[#0F172A]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div
              role="group"
              aria-label="Language switcher"
              className="flex items-center gap-0.5 rounded-full border border-slate-200 bg-white p-0.5"
            >
              <Globe className="ml-2 mr-1 h-3.5 w-3.5 text-[#64748B]" />
              {['es', 'en'].map((code) => {
                const active = lang === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    className={`cursor-pointer rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold transition-colors ${
                      active
                        ? 'bg-[#0F2744] text-white'
                        : 'text-[#475569] hover:text-[#0F172A]'
                    }`}
                  >
                    {code.toUpperCase()}
                  </button>
                );
              })}
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#0F2744] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#16375E]"
            >
              <span>{copy.cta}</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="rounded-full border border-slate-200 bg-white px-2.5 py-1 font-mono text-[11px] font-semibold text-[#0F172A]"
            >
              {lang.toUpperCase()}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0F172A]"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
            >
              <div className="flex flex-col gap-1 px-4 py-4">
                <a
                  href="#especialidades"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-[#0F172A] hover:bg-[#F4F6F8]"
                >
                  {copy.specialtiesLabel}
                </a>
                {copy.links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-[#0F172A] hover:bg-[#F4F6F8]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="fixed right-0 bottom-0 left-0 z-40 flex items-center gap-2.5 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-md md:hidden">
        <a
          href="#contacto"
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#0F2744] px-4 py-2.5 text-xs font-semibold text-white"
        >
          <span>{copy.cta}</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </a>
        <a
          href="#laboratorio"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-[#0F172A]"
        >
          {copy.mobileSecondaryCta}
        </a>
      </div>
    </>
  );
}
