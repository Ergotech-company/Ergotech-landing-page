import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faCompassDrafting,
  faRocket,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';

const STEP_ICONS = [faCompassDrafting, faCode, faShieldHalved, faRocket];

export function ProcessTimeline({ copy }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 65%'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 160, damping: 26 });

  return (
    <section
      id="proceso"
      className="bg-blueprint-light relative bg-[#F2F2F2] py-24 text-[#050914] sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#266B73]/35 bg-[#266B73]/12 px-3.5 py-1 font-mono text-xs font-bold tracking-[0.18em] text-[#266B73] uppercase">
            {copy.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {copy.title}
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-6 w-[3px] bg-[#23518C]/15 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute top-0 bottom-0 left-6 w-[3px] origin-top bg-gradient-to-b from-[#00FFA3] via-[#00F0FF] to-[#A855F7] shadow-[0_0_16px_rgba(0,240,255,0.65)] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-12">
            {copy.steps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <div className="absolute top-6 left-6 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#00F0FF] bg-[#050914] font-mono text-xs font-bold text-[#00F0FF] shadow-[0_0_18px_rgba(0,240,255,0.6)] md:left-1/2">
                    <FontAwesomeIcon icon={STEP_ICONS[idx % STEP_ICONS.length]} className="text-xs" />
                  </div>

                  <div
                    className={`ml-14 rounded-3xl border-2 border-[#2964D9]/25 bg-white p-7 shadow-sm transition-all hover:border-[#2975D9] hover:shadow-[0_14px_38px_rgba(41,100,217,0.16)] md:ml-0 md:w-[45%] ${
                      isEven ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold tracking-wider text-[#266B73] uppercase">
                        {item.duration}
                      </span>
                      <span className="rounded-md bg-[#050914] px-2.5 py-0.5 font-mono text-xs font-bold text-[#00F0FF]">
                        PHASE {item.step}
                      </span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-bold text-[#050914] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#23518C] sm:text-base">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.deliverables.map((del) => (
                        <span
                          key={del}
                          className="rounded-lg border border-[#2964D9]/25 bg-[#F2F2F2] px-3 py-1 font-mono text-xs font-semibold text-[#23518C]"
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
