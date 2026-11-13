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
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050914]"
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.82, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="relative flex items-center justify-center rounded-3xl p-6"
            >
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#00F0FF]/30 via-[#2964D9]/30 to-[#A855F7]/30 blur-2xl" />
              <ErgoBrandLockup
                layout="stacked"
                variant="dark"
                iconSize={96}
                wordmarkSize="lg"
                animated
                className="relative z-10"
              />
            </motion.div>

            <div className="h-[3px] w-52 overflow-hidden rounded-full bg-[#23518C]/40 shadow-[0_0_16px_rgba(0,240,255,0.4)]">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full bg-gradient-to-r from-[#00FFA3] via-[#00F0FF] to-[#A855F7]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
