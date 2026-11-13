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

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), {
    stiffness: 220,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), {
    stiffness: 220,
    damping: 24,
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

  // Map card themes cleanly across the 5 corporate colors + light surface
  const isFifthCard = item.id === 'server-config';
  const themeStyles = isFifthCard
    ? 'bg-gradient-to-br from-[#1F4071] to-[#102C53] text-white border-[#1F4071]/40 shadow-[0_14px_34px_rgba(16,44,83,0.14)]'
    : {
      dark: 'bg-[#0B0F17] text-white border-[#1F4071]/40 shadow-[0_14px_34px_rgba(11,15,23,0.2)]',
      cobalt:
        'bg-gradient-to-br from-[#2C56AA] via-[#336DE6] to-[#1F4071] text-white border-[#336DE6]/40 shadow-[0_14px_34px_rgba(44,86,170,0.18)]',
      teal:
        'bg-gradient-to-br from-[#27717C] to-[#1A4E57] text-white border-[#27717C]/40 shadow-[0_14px_34px_rgba(39,113,124,0.18)]',
      'light-bordered':
        'bg-[#F8FAFC] text-[#102C53] border-2 border-[#0B0F17]/15 shadow-[0_12px_30px_rgba(16,44,83,0.06)]',
    }[item.theme];

  const isLight = item.theme === 'light-bordered' && !isFifthCard;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
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
            ? `radial-gradient(340px circle at ${spotlight.x}px ${spotlight.y}px, rgba(51, 109, 230, 0.08), transparent 65%)`
            : `radial-gradient(360px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255, 255, 255, 0.08), transparent 65%)`,
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div>
          <div className="mb-6 flex items-center justify-between">
            <span
              className={`font-mono text-xs font-bold tracking-[0.16em] uppercase ${isLight ? 'text-[#2C56AA]' : 'text-white/80'
                }`}
            >
              {item.tag}
            </span>
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${isLight
                  ? 'border border-[#2C56AA]/20 bg-white text-[#336DE6] shadow-xs'
                  : 'border border-white/20 bg-white/10 text-white'
                }`}
            >
              <FontAwesomeIcon icon={faIcon} className="text-xl" />
            </div>
          </div>

          <h3 className="font-spartan text-2xl font-bold tracking-tight sm:text-3xl">
            {item.title}
          </h3>
          <p
            className={`mt-3 text-sm leading-relaxed sm:text-base ${isLight ? 'text-[#1F4071]' : 'text-white/85'
              }`}
          >
            {item.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {item.highlights.map((chip) => (
            <span
              key={chip}
              className={`rounded-lg px-3 py-1 font-mono text-xs font-semibold ${isLight
                  ? 'border border-[#1F4071]/20 bg-white text-[#102C53]'
                  : 'border border-white/20 bg-white/10 text-white'
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
      className="bg-blueprint-subtle relative bg-white py-24 text-[#102C53] sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2C56AA]/25 bg-[#EEF4FB] px-3.5 py-1 font-mono text-xs font-bold tracking-[0.18em] text-[#2C56AA] uppercase">
              {copy.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#102C53] sm:text-4xl lg:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed font-medium text-[#1F4071]/85 sm:text-lg">
              {copy.subtitle}
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex shrink-0 items-center rounded-2xl border border-[#1F4071]/15 bg-[#F8FAFC] px-6 py-4 shadow-[0_10px_28px_rgba(16,44,83,0.08)]"
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
