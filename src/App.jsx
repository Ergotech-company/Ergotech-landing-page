import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
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

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 950);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const copy = CONTENT[lang];

  return (
    <MotionConfig reducedMotion="user">
      <BootPreloader visible={booting} />
      <div className="min-h-screen bg-[#050914] text-[#F2F2F2]">
        <Navbar lang={lang} setLang={setLang} copy={copy.nav} />
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
    </MotionConfig>
  );
}

export default App;

