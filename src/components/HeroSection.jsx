import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCubes,
  faDiagramProject,
  faServer,
  faShieldHalved,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';
import { ErgoBrandLockup } from './ErgoLogo';
import { MagneticButton } from './MagneticButton';
import { NeuralCanvas } from './NeuralCanvas';

export function HeroSection({ copy }) {
  const words1 = copy.titleLine1.split(' ');
  const wordsHighlight = copy.titleHighlight.split(' ');
  const words2 = copy.titleLine2.split(' ');

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F7FAFE] to-[#EEF4FB] pt-28 pb-20 lg:pt-32"
    >
      <NeuralCanvas />
      <div className="bg-blueprint-light pointer-events-none absolute inset-0 opacity-75" />

      {/* Subtle corporate ambient washes (80%+ reduced glow vs neon) */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-[460px] w-[460px] rounded-full bg-[#336DE6]/8 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-[#27717C]/8 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Left: Lovelo Display + Spartan Copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#2C56AA]/25 bg-white px-4 py-1.5 shadow-[0_4px_14px_rgba(16,44,83,0.06)]"
          >
            <FontAwesomeIcon icon={faShieldHalved} className="text-xs text-[#27717C]" />
            <span className="font-mono text-xs font-semibold tracking-[0.16em] text-[#1F4071]">
              {copy.badge}
            </span>
          </motion.div>

          <h1 className="font-display text-4xl leading-[1.08] font-bold tracking-tight text-[#102C53] sm:text-5xl lg:text-[3.5rem]">
            <span className="flex flex-wrap gap-x-3">
              {words1.map((word, idx) => (
                <motion.span
                  key={`w1-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 + idx * 0.05 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="mt-1 flex flex-wrap gap-x-3">
              {wordsHighlight.map((word, idx) => (
                <motion.span
                  key={`wh-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.22 + idx * 0.06 }}
                  className="text-gradient-ergo"
                >
                  {word}
                </motion.span>
              ))}
              {words2.map((word, idx) => (
                <motion.span
                  key={`w2-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.36 + idx * 0.06 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-6 max-w-2xl text-base leading-relaxed font-medium text-[#1F4071]/85 sm:text-lg"
          >
            {copy.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#contacto"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#102C53] via-[#2C56AA] to-[#336DE6] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(44,86,170,0.25)] transition-all hover:shadow-[0_14px_30px_rgba(51,109,230,0.32)] sm:text-base"
            >
              <span>{copy.primaryCta}</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-sm transition-transform group-hover:translate-x-1"
              />
            </MagneticButton>

            <MagneticButton
              href="#laboratorio"
              strength={0.18}
              className="inline-flex items-center gap-2.5 rounded-xl border border-[#1F4071]/25 bg-white px-6 py-3.5 text-sm font-semibold text-[#102C53] shadow-[0_6px_16px_rgba(16,44,83,0.06)] transition-all hover:border-[#336DE6] hover:text-[#336DE6] sm:text-base"
            >
              <FontAwesomeIcon icon={faTerminal} className="text-sm text-[#27717C]" />
              <span>{copy.secondaryCta}</span>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-[#1F4071]/15 pt-6"
          >
            {copy.metrics.map((metric, idx) => {
              const accentColor =
                idx === 0
                  ? 'text-[#336DE6]'
                  : idx === 1
                    ? 'text-[#27717C]'
                    : 'text-[#102C53]';
              return (
                <div key={metric.label}>
                  <div className={`font-display text-2xl font-bold sm:text-3xl ${accentColor}`}>
                    {metric.value}
                  </div>
                  <div className="mt-1 font-mono text-[11px] font-semibold tracking-wider text-[#1F4071]/70 uppercase">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right: Crisp Light Brand Core showcasing Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="relative flex items-center justify-center lg:col-span-5"
        >
          <div className="relative flex h-[390px] w-[360px] items-center justify-center sm:h-[450px] sm:w-[450px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-2 rounded-full border border-dashed border-[#2C56AA]/25"
            >
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#336DE6]" />
              <span className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#27717C]" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-12 rounded-full border border-[#1F4071]/15"
            >
              <span className="absolute top-1/2 -right-1.5 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#102C53]" />
            </motion.div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-[32px] border border-[#2C56AA]/20 bg-white p-[2px] shadow-[0_24px_60px_rgba(16,44,83,0.12)]"
            >
              <div className="relative z-10 flex h-64 w-64 flex-col items-center justify-center rounded-[30px] bg-gradient-to-br from-white via-[#FAFBFD] to-[#F1F6FC] px-6 py-6 sm:h-72 sm:w-72">
                <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-radial from-[#336DE6]/5 via-transparent to-transparent" />
                <ErgoBrandLockup
                  layout="stacked"
                  variant="light"
                  iconSize={122}
                  wordmarkSize="md"
                  animated
                  className="relative z-10"
                />
              </div>
            </motion.div>

            {/* Formal Card 1: Odoo */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="absolute top-2 right-0 flex items-center gap-2.5 rounded-xl border border-[#2C56AA]/20 bg-white/95 px-3.5 py-2.5 shadow-[0_10px_28px_rgba(16,44,83,0.1)] backdrop-blur-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#336DE6]/10 text-[#336DE6]">
                <FontAwesomeIcon icon={faCubes} className="text-sm" />
              </div>
              <div>
                <div className="font-mono text-[10px] font-bold tracking-widest text-[#2C56AA]">
                  {copy.orbitCards.top.tag}
                </div>
                <div className="text-xs font-bold text-[#102C53]">
                  {copy.orbitCards.top.value}
                </div>
              </div>
            </motion.div>

            {/* Formal Card 2: n8n */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute bottom-8 -left-2 flex items-center gap-2.5 rounded-xl border border-[#27717C]/25 bg-white/95 px-3.5 py-2.5 shadow-[0_10px_28px_rgba(16,44,83,0.1)] backdrop-blur-md sm:-left-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#27717C]/12 text-[#27717C]">
                <FontAwesomeIcon icon={faDiagramProject} className="text-sm" />
              </div>
              <div>
                <div className="font-mono text-[10px] font-bold tracking-widest text-[#27717C]">
                  {copy.orbitCards.bottomLeft.tag}
                </div>
                <div className="text-xs font-bold text-[#102C53]">
                  {copy.orbitCards.bottomLeft.value}
                </div>
              </div>
            </motion.div>

            {/* Formal Card 3: Web & Servers */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute right-2 bottom-2 flex items-center gap-2 rounded-xl border border-[#1F4071]/20 bg-white/95 px-3.5 py-2 shadow-[0_10px_28px_rgba(16,44,83,0.1)] backdrop-blur-md"
            >
              <FontAwesomeIcon icon={faServer} className="text-sm text-[#1F4071]" />
              <span className="font-mono text-[11px] font-semibold text-[#102C53]">
                {copy.orbitCards.bottomRight.value}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
