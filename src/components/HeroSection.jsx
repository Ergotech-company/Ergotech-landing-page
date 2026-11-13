import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCubes,
  faDiagramProject,
  faServer,
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
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050914] pt-28 pb-20 lg:pt-32"
    >
      <NeuralCanvas />
      <div className="bg-blueprint-grid pointer-events-none absolute inset-0 opacity-65" />

      <div className="pointer-events-none absolute -top-24 left-1/4 h-[520px] w-[520px] rounded-full bg-[#00F0FF]/18 blur-[145px]" />
      <div className="pointer-events-none absolute top-1/3 -left-24 h-[380px] w-[380px] rounded-full bg-[#2964D9]/25 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[440px] w-[440px] rounded-full bg-[#A855F7]/20 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Left: Kinetic Typography */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#00F0FF]/55 bg-[#0A1326]/85 px-4 py-1.5 shadow-[0_0_24px_rgba(0,240,255,0.22)] backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FFA3] opacity-85" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00FFA3] shadow-[0_0_10px_#00FFA3]" />
            </span>
            <span className="font-mono text-xs font-semibold tracking-[0.18em] text-[#00F0FF]">
              {copy.badge}
            </span>
          </motion.div>

          <h1 className="font-display text-4xl leading-[1.05] font-bold tracking-tight text-[#F2F2F2] sm:text-5xl lg:text-6xl">
            <span className="flex flex-wrap gap-x-3">
              {words1.map((word, idx) => (
                <motion.span
                  key={`w1-${idx}`}
                  initial={{ opacity: 0, y: 24 }}
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
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.25 + idx * 0.06 }}
                  className="text-gradient-ergo drop-shadow-[0_0_24px_rgba(0,240,255,0.3)]"
                >
                  {word}
                </motion.span>
              ))}
              {words2.map((word, idx) => (
                <motion.span
                  key={`w2-${idx}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.4 + idx * 0.06 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.48 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#F2F2F2]/80 sm:text-lg"
          >
            {copy.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.58 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#contacto"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#00F0FF] via-[#2975D9] to-[#A855F7] px-6 py-3.5 text-sm font-bold text-[#050914] shadow-[0_0_34px_rgba(0,240,255,0.55)] transition-all hover:shadow-[0_0_52px_rgba(168,85,247,0.75)] sm:text-base"
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
              className="inline-flex items-center gap-2.5 rounded-xl border border-[#00F0FF]/50 bg-[#0A1326]/85 px-6 py-3.5 text-sm font-semibold text-[#F2F2F2] shadow-[0_0_20px_rgba(41,100,217,0.28)] backdrop-blur-md transition-all hover:border-[#00FFA3] hover:text-[#00FFA3] sm:text-base"
            >
              <FontAwesomeIcon icon={faTerminal} className="text-sm text-[#00F0FF]" />
              <span>{copy.secondaryCta}</span>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.68 }}
            className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-[#00F0FF]/25 pt-6"
          >
            {copy.metrics.map((metric, idx) => {
              const accentColor =
                idx === 0
                  ? 'text-[#00FFA3]'
                  : idx === 1
                  ? 'text-[#00F0FF]'
                  : 'text-[#A855F7]';
              return (
                <div key={metric.label}>
                  <div className={`font-display text-2xl font-bold sm:text-3xl ${accentColor}`}>
                    {metric.value}
                  </div>
                  <div className="mt-1 font-mono text-[11px] tracking-wider text-[#F2F2F2]/65 uppercase">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right: Extravagant Neon Prism Core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative flex items-center justify-center lg:col-span-5"
        >
          <div className="relative flex h-[390px] w-[360px] items-center justify-center sm:h-[450px] sm:w-[450px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-2 rounded-full border border-dashed border-[#00F0FF]/45 shadow-[0_0_32px_rgba(0,240,255,0.16)]"
            >
              <span className="absolute -top-1.5 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#00F0FF] shadow-[0_0_20px_#00F0FF]" />
              <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#FF2E93] shadow-[0_0_18px_#FF2E93]" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-12 rounded-full border border-[#A855F7]/50"
            >
              <span className="absolute top-1/2 -right-1.5 h-3 w-3 -translate-y-1/2 rounded-full bg-[#00FFA3] shadow-[0_0_18px_#00FFA3]" />
            </motion.div>

            <motion.div
              animate={{ y: [-7, 7, -7] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.04 }}
              className="relative overflow-hidden rounded-[32px] p-[2px] shadow-[0_0_70px_rgba(0,240,255,0.34)]"
            >
              <div className="animate-neon-prism absolute -inset-[100%] bg-[conic-gradient(from_0deg,#00F0FF,#2964D9,#A855F7,#FF2E93,#00FFA3,#00F0FF)]" />
              <div className="relative z-10 flex h-64 w-64 flex-col items-center justify-center rounded-[30px] bg-[#050914]/94 px-6 py-6 backdrop-blur-2xl sm:h-72 sm:w-72">
                <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-radial from-[#00F0FF]/18 via-[#2964D9]/10 to-transparent" />
                <ErgoBrandLockup
                  layout="stacked"
                  variant="dark"
                  iconSize={118}
                  wordmarkSize="md"
                  animated
                  className="relative z-10"
                />
              </div>
            </motion.div>

            {/* Telemetry Card 1: Odoo */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="absolute top-2 right-0 flex items-center gap-2.5 rounded-xl border border-[#00F0FF]/55 bg-[#050914]/90 px-3.5 py-2.5 shadow-[0_0_24px_rgba(0,240,255,0.28)] backdrop-blur-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00F0FF]/15 text-[#00F0FF]">
                <FontAwesomeIcon icon={faCubes} className="text-sm" />
              </div>
              <div>
                <div className="font-mono text-[10px] font-semibold tracking-widest text-[#00F0FF]">
                  {copy.orbitCards.top.tag}
                </div>
                <div className="text-xs font-semibold text-[#F2F2F2]">
                  {copy.orbitCards.top.value}
                </div>
              </div>
            </motion.div>

            {/* Telemetry Card 2: n8n */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute bottom-8 -left-2 flex items-center gap-2.5 rounded-xl border border-[#A855F7]/60 bg-[#050914]/90 px-3.5 py-2.5 shadow-[0_0_24px_rgba(168,85,247,0.3)] backdrop-blur-md sm:-left-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#A855F7]/20 text-[#A855F7]">
                <FontAwesomeIcon icon={faDiagramProject} className="text-sm" />
              </div>
              <div>
                <div className="font-mono text-[10px] font-semibold tracking-widest text-[#A855F7]">
                  {copy.orbitCards.bottomLeft.tag}
                </div>
                <div className="text-xs font-semibold text-[#F2F2F2]">
                  {copy.orbitCards.bottomLeft.value}
                </div>
              </div>
            </motion.div>

            {/* Telemetry Card 3: Web & Servers */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute right-2 bottom-2 flex items-center gap-2 rounded-xl border border-[#00FFA3]/55 bg-[#050914]/90 px-3.5 py-2 shadow-[0_0_22px_rgba(0,255,163,0.28)] backdrop-blur-md"
            >
              <FontAwesomeIcon icon={faServer} className="text-sm text-[#00FFA3]" />
              <span className="font-mono text-[11px] font-semibold text-[#F2F2F2]">
                {copy.orbitCards.bottomRight.value}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
