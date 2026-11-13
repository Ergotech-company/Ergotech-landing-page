import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodeMerge,
  faCubes,
  faDiagramProject,
  faLaptopCode,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import { ErgoBrandLockup } from './ErgoLogo';

const ICON_MAP = {
  'odoo-modules': faCubes,
  'odoo-migration': faCodeMerge,
  'n8n-workflows': faDiagramProject,
  'web-landing': faLaptopCode,
  'server-config': faServer,
};

function TiltSpotlightCard({ item, index }) {
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), {
    stiffness: 220,
    damping: 22,
  });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x / rect.width);
    mouseY.set(y / rect.height);
    setSpotlight({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setSpotlight((s) => ({ ...s, active: false }));
  };

  const faIcon = ICON_MAP[item.id] || faCubes;

  const themeStyles = {
    dark: 'bg-[#050914] text-[#F2F2F2] border-[#00F0FF]/55 shadow-[0_14px_45px_rgba(0,240,255,0.18)]',
    cobalt: 'bg-gradient-to-br from-[#2964D9] via-[#2975D9] to-[#23518C] text-[#F2F2F2] border-[#00F0FF]/60 shadow-[0_14px_45px_rgba(41,117,217,0.35)]',
    teal: 'bg-gradient-to-br from-[#266B73] via-[#134E57] to-[#0A1F2B] text-[#F2F2F2] border-[#00FFA3]/55 shadow-[0_14px_45px_rgba(0,255,163,0.2)]',
    'light-bordered': 'bg-white text-[#050914] border-2 border-[#2964D9]/45 shadow-[0_14px_42px_rgba(168,85,247,0.16)]',
  }[item.theme];

  const isLight = item.theme === 'light-bordered';

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className={`group relative overflow-hidden rounded-3xl border p-7 sm:p-8 ${item.span} ${themeStyles}`}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity: spotlight.active ? 1 : 0,
          background: isLight
            ? `radial-gradient(360px circle at ${spotlight.x}px ${spotlight.y}px, rgba(168, 85, 247, 0.16), transparent 65%)`
            : `radial-gradient(380px circle at ${spotlight.x}px ${spotlight.y}px, rgba(0, 240, 255, 0.22), transparent 65%)`,
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div>
          <div className="mb-6 flex items-center justify-between">
            <span
              className={`font-mono text-xs font-bold tracking-[0.18em] uppercase ${
                isLight
                  ? 'text-[#2964D9]'
                  : item.theme === 'teal'
                  ? 'text-[#00FFA3]'
                  : 'text-[#00F0FF]'
              }`}
            >
              {item.tag}
            </span>
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                isLight
                  ? 'bg-gradient-to-br from-[#2964D9]/15 to-[#A855F7]/20 text-[#2964D9]'
                  : 'border border-[#00F0FF]/40 bg-[#00F0FF]/12 text-[#00F0FF]'
              }`}
            >
              <FontAwesomeIcon icon={faIcon} className="text-xl" />
            </div>
          </div>

          <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {item.title}
          </h3>
          <p
            className={`mt-3 text-sm leading-relaxed sm:text-base ${
              isLight ? 'text-[#23518C]' : 'text-[#F2F2F2]/85'
            }`}
          >
            {item.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {item.highlights.map((chip) => (
            <span
              key={chip}
              className={`rounded-lg px-3 py-1 font-mono text-xs font-semibold ${
                isLight
                  ? 'border border-[#2964D9]/30 bg-[#F2F2F2] text-[#23518C]'
                  : 'border border-[#00F0FF]/35 bg-[#050914]/45 text-[#F2F2F2]'
              }`}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function BentoServices({ copy }) {
  return (
    <section
      id="servicios"
      className="bg-blueprint-light relative bg-[#F2F2F2] py-24 text-[#050914] sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2964D9]/35 bg-[#2964D9]/12 px-3.5 py-1 font-mono text-xs font-bold tracking-[0.18em] text-[#2964D9] uppercase">
              {copy.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#050914] sm:text-4xl lg:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#23518C] sm:text-lg">
              {copy.subtitle}
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="inline-flex shrink-0 items-center rounded-2xl border-2 border-[#2964D9]/30 bg-white/90 px-6 py-4 shadow-[0_10px_34px_rgba(41,100,217,0.16)] backdrop-blur-md"
          >
            <ErgoBrandLockup
              layout="row"
              variant="light"
              iconSize={56}
              wordmarkSize="md"
            />
          </motion.div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-6">
          {copy.items.map((item, idx) => (
            <TiltSpotlightCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
