import { AnimatePresence, motion } from 'framer-motion';
import { ErgoBrandLockup } from './ErgoLogo';

export function BootPreloader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="ergo-preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F8FAFC]"
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative flex items-center justify-center rounded-3xl border border-[#1F4071]/10 bg-white px-10 py-8 shadow-[0_18px_45px_rgba(16,44,83,0.08)]"
            >
              <ErgoBrandLockup
                layout="stacked"
                variant="light"
                iconSize={96}
                wordmarkSize="lg"
                animated
                className="relative z-10"
              />
            </motion.div>

            <div className="h-[3px] w-52 overflow-hidden rounded-full bg-[#1F4071]/15">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full bg-gradient-to-r from-[#102C53] via-[#336DE6] to-[#27717C]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
