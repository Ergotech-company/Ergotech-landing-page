import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlobe, faRocket, faXmark } from '@fortawesome/free-solid-svg-icons';
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
        className="fixed top-0 right-0 left-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[#00FFA3] via-[#00F0FF] to-[#A855F7] shadow-[0_0_16px_rgba(0,240,255,0.8)]"
      />

      <header className="fixed top-3 right-0 left-0 z-40 px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-6 ${
            scrolled
              ? 'border-[#00F0FF]/40 bg-[#050914]/88 shadow-[0_12px_42px_rgba(0,240,255,0.14)] backdrop-blur-xl'
              : 'border-[#2975D9]/35 bg-[#050914]/65 backdrop-blur-md'
          }`}
        >
          <a href="#top" className="group flex items-center">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 320, damping: 16 }}
            >
              <ErgoBrandLockup
                layout="row"
                variant="dark"
                iconSize={40}
                wordmarkSize="sm"
              />
            </motion.div>
          </a>

          <div className="hidden items-center gap-1 rounded-xl border border-[#23518C]/55 bg-[#0A1326]/80 p-1 md:flex">
            {copy.links.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setActiveId(link.id)}
                  className={`relative rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    isActive ? 'text-[#050914] font-semibold' : 'text-[#F2F2F2]/75 hover:text-[#00F0FF]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00F0FF] via-[#2975D9] to-[#00FFA3] shadow-[0_0_20px_rgba(0,240,255,0.55)]"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => setLang((prev) => (prev === 'es' ? 'en' : 'es'))}
              className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-[#00F0FF]/45 bg-[#0A1326]/85 px-3 py-1.5 font-mono text-xs font-semibold text-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.2)] transition-all hover:border-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.45)]"
              aria-label="Switch language"
            >
              <FontAwesomeIcon icon={faGlobe} className="text-xs" />
              <span>{lang.toUpperCase()}</span>
            </button>

            <MagneticButton
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2964D9] via-[#2975D9] to-[#00F0FF] px-4 py-2 text-sm font-bold text-[#050914] shadow-[0_0_26px_rgba(0,240,255,0.48)] transition-all hover:shadow-[0_0_38px_rgba(0,240,255,0.75)]"
            >
              <span>{copy.cta}</span>
              <FontAwesomeIcon
                icon={faRocket}
                className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setLang((prev) => (prev === 'es' ? 'en' : 'es'))}
              className="rounded-lg border border-[#00F0FF]/50 px-2.5 py-1.5 font-mono text-xs text-[#00F0FF]"
            >
              {lang.toUpperCase()}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="rounded-lg border border-[#23518C]/70 bg-[#0A1326] px-2.5 py-2 text-[#F2F2F2]"
              aria-label="Menu"
            >
              <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} className="text-base" />
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-2 max-w-7xl rounded-2xl border border-[#00F0FF]/35 bg-[#050914]/95 p-4 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {copy.links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => {
                      setActiveId(link.id);
                      setMobileOpen(false);
                    }}
                    className="rounded-xl px-3 py-2.5 text-base font-medium text-[#F2F2F2]/90 hover:bg-[#2964D9]/30 hover:text-[#00F0FF]"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2964D9] to-[#00F0FF] px-4 py-3 text-sm font-bold text-[#050914]"
                >
                  <span>{copy.cta}</span>
                  <FontAwesomeIcon icon={faRocket} className="text-xs" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
