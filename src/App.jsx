import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion, useAnimate } from 'framer-motion';
import { CONTENT } from './data/content';
import { BootPreloader } from './components/BootPreloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TechMarquee } from './components/TechMarquee';
import { BentoServices } from './components/BentoServices';
import { InteractiveLab } from './components/InteractiveLab';
import { ProcessTimeline } from './components/ProcessTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [lang, setLang] = useState('en');
  const [booting, setBooting] = useState(true);
  const [langSwitching, setLangSwitching] = useState(false);
  const isFirstRender = useRef(true);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setLangSwitching(true);
    if (scope.current) {
      animate(
        scope.current,
        { opacity: [0.22, 1], y: [10, 0] },
        { duration: 0.36, ease: [0.22, 1, 0.36, 1] }
      );
    }

    const sweepTimer = setTimeout(() => setLangSwitching(false), 450);
    return () => clearTimeout(sweepTimer);
  }, [lang, animate, scope]);

  const copy = CONTENT[lang];

  return (
    <MotionConfig reducedMotion="user">
      <BootPreloader visible={booting} />
      <AnimatePresence>
        {langSwitching && (
          <motion.div
            key="lang-sweep"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed top-0 right-0 left-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[#0B0F17] via-[#336DE6] to-[#27717C]"
          />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#F8FAFC] text-[#102C53]">
        <Navbar lang={lang} setLang={setLang} copy={copy.nav} />
        <div ref={scope}>
          <main>
            <HeroSection copy={copy.hero} />
            <TechMarquee copy={copy.marquee} />
            <BentoServices copy={copy.bento} />
            <InteractiveLab copy={copy.lab} />
            <ProcessTimeline copy={copy.process} />
            <ContactSection copy={copy.contact} />
          </main>
          <Footer copy={copy.footer} navLinks={copy.nav.links} />
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
