import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faCode,
  faCompassDrafting,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';

const STEP_ICONS = [faCompassDrafting, faCode, faShieldHalved, faCircleCheck];

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
      className="bg-blueprint-subtle relative bg-white py-24 text-[#102C53] sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#27717C]/30 bg-[#EEF6F7] px-3.5 py-1 font-mono text-xs font-bold tracking-[0.18em] text-[#27717C] uppercase">
            {copy.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#102C53] sm:text-4xl lg:text-5xl">
            {copy.title}
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-6 w-[3px] bg-[#1F4071]/12 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute top-0 bottom-0 left-6 w-[3px] origin-top bg-gradient-to-b from-[#102C53] via-[#336DE6] to-[#27717C] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-12">
            {copy.steps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:justify-start' : 'md:justify-end'
                    }`}
                >
                  <div className="absolute top-6 left-6 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#336DE6]/45 bg-[#0B0F17] font-mono text-xs font-bold text-white shadow-[0_4px_14px_rgba(11,15,23,0.22)] md:left-1/2">
                    <FontAwesomeIcon icon={STEP_ICONS[idx % STEP_ICONS.length]} className="text-xs" />
                  </div>

                  <div
                    className={`ml-14 rounded-3xl border border-[#1F4071]/15 bg-[#F8FAFC] p-7 shadow-[0_8px_24px_rgba(16,44,83,0.05)] transition-all hover:border-[#336DE6]/45 hover:bg-white hover:shadow-[0_14px_34px_rgba(44,86,170,0.1)] md:ml-0 md:w-[45%] ${isEven ? 'md:mr-auto' : 'md:ml-auto'
                      }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold tracking-wider text-[#27717C] uppercase">
                        {item.duration}
                      </span>
                      <span className="rounded-md bg-[#0B0F17] px-2.5 py-0.5 font-mono text-xs font-bold text-white">
                        PHASE {item.step}
                      </span>
                    </div>

                    <h3 className="mt-2 font-spartan text-xl font-bold text-[#102C53] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#1F4071] sm:text-base">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.deliverables.map((del) => (
                        <span
                          key={del}
                          className="rounded-lg border border-[#2C56AA]/20 bg-white px-3 py-1 font-mono text-xs font-semibold text-[#1F4071]"
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
