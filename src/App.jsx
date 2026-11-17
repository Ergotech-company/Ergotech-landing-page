import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { CONTENT } from './data/content';
import { Navbar } from './components/Navbar';
import { ParticleBackground } from './components/ParticleBackground';
import { HeroSection } from './components/HeroSection';
import { EcosystemSection } from './components/EcosystemSection';
import { BentoServices } from './components/BentoServices';
import { InteractiveLab } from './components/InteractiveLab';
import { ProcessTimeline } from './components/ProcessTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const copy = CONTENT[lang];

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#F4F6F8] text-[#0F172A]">
        <ParticleBackground />
        <Navbar lang={lang} setLang={setLang} copy={copy.nav} />
        <main className="relative z-10">
          <HeroSection copy={copy.hero} />
          <EcosystemSection copy={copy.ecosystem} />
          <BentoServices copy={copy.specialties} />
          <InteractiveLab copy={copy.lab} />
          <ProcessTimeline copy={copy.process} />
          <ContactSection copy={copy.contact} />
        </main>
        <div className="relative z-10">
          <Footer copy={copy.footer} />
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
