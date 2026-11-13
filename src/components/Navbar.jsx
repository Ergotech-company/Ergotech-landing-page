import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars, faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ErgoBrandLockup } from './ErgoLogo';
import { MagneticButton } from './MagneticButton';

export function Navbar({ lang, setLang, copy }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('servicios');
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = copy.links.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [copy.links]);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 right-0 left-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[#102C53] via-[#336DE6] to-[#27717C]"
      />

      <header className="fixed top-0 right-0 left-0 z-40 w-full">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className={`w-full border-b transition-all duration-300 ${
            scrolled
              ? 'border-[#1F4071]/18 bg-white/95 shadow-[0_8px_28px_rgba(16,44,83,0.08)] backdrop-blur-xl'
              : 'border-[#1F4071]/12 bg-white/90 shadow-[0_2px_12px_rgba(16,44,83,0.04)] backdrop-blur-md'
          }`}
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <a href="#top" className="group flex items-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
              >
                <ErgoBrandLockup
                  layout="row"
                  variant="light"
                  iconSize={40}
                  wordmarkSize="sm"
                />
              </motion.div>
            </a>

            <div className="hidden items-center gap-1 rounded-xl border border-[#1F4071]/12 bg-[#F1F5FA] p-1 md:flex">
              {copy.links.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setActiveId(link.id)}
                    className={`relative rounded-lg px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                      isActive ? 'text-white' : 'text-[#1F4071] hover:text-[#336DE6]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#102C53] to-[#2C56AA] shadow-[0_4px_12px_rgba(16,44,83,0.18)]"
                      />
                    )}
                    <span className="relative z-10 inline-block">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={`${link.id}-${lang}`}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.16 }}
                          className="inline-block"
                        >
                          {link.label}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <div
                role="group"
                aria-label="Switch language"
                className="flex items-center gap-1 rounded-xl border border-[#1F4071]/18 bg-[#F1F5FA] p-1"
              >
                <motion.span
                  animate={{ rotate: lang === 'es' ? 0 : 180 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="flex items-center justify-center pl-1.5 text-[#27717C]"
                >
                  <FontAwesomeIcon icon={faGlobe} className="text-xs" />
                </motion.span>
                {['es', 'en'].map((code) => {
                  const selected = lang === code;
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setLang(code)}
                      className={`relative cursor-pointer rounded-lg px-2.5 py-1 font-mono text-xs font-bold transition-colors ${
                        selected ? 'text-white' : 'text-[#1F4071] hover:text-[#336DE6]'
                      }`}
                    >
                      {selected && (
                        <motion.span
                          layoutId="lang-switch-pill"
                          transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                          className="absolute inset-0 rounded-lg bg-[#0B0F17]"
                        />
                      )}
                      <span className="relative z-10">{code.toUpperCase()}</span>
                    </button>
                  );
                })}
              </div>

              <MagneticButton
                href="#contacto"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B0F17] via-[#102C53] to-[#2C56AA] px-4 py-2 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(16,44,83,0.2)] transition-all hover:shadow-[0_8px_24px_rgba(51,109,230,0.28)]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={`cta-${lang}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.16 }}
                  >
                    {copy.cta}
                  </motion.span>
                </AnimatePresence>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-xs transition-transform group-hover:translate-x-0.5"
                />
              </MagneticButton>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={() => setLang((prev) => (prev === 'es' ? 'en' : 'es'))}
                className="flex items-center gap-1.5 overflow-hidden rounded-lg border border-[#1F4071]/25 bg-[#F8FAFC] px-2.5 py-1.5 font-mono text-xs font-semibold text-[#1F4071]"
              >
                <motion.span
                  animate={{ rotate: lang === 'es' ? 0 : 180 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="text-[#27717C]"
                >
                  <FontAwesomeIcon icon={faGlobe} className="text-[11px]" />
                </motion.span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={`mob-lang-${lang}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.16 }}
                  >
                    {lang.toUpperCase()}
                  </motion.span>
                </AnimatePresence>
              </button>
              <button
                type="button"
                onClick={() => setMobileOpen((o) => !o)}
                className="rounded-lg border border-[#1F4071]/20 bg-[#F1F5FA] px-2.5 py-2 text-[#102C53]"
                aria-label="Menu"
              >
                <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} className="text-base" />
              </button>
            </div>
          </div>
        </motion.nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full border-b border-[#1F4071]/15 bg-white/95 px-4 py-4 shadow-[0_14px_34px_rgba(16,44,83,0.12)] backdrop-blur-xl sm:px-6 md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2">
                {copy.links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => {
                      setActiveId(link.id);
                      setMobileOpen(false);
                    }}
                    className="rounded-xl px-3 py-2.5 text-base font-semibold text-[#102C53] hover:bg-[#EEF3FA] hover:text-[#336DE6]"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B0F17] via-[#102C53] to-[#336DE6] px-4 py-3 text-sm font-semibold text-white"
                >
                  <span>{copy.cta}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
