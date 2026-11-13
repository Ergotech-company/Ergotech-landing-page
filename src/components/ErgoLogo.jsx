import { motion } from 'framer-motion';

/**
 * Logo 1 (Hexagonal Mark) from public/brand/logo-1.png
 * Designed for crisp light surfaces with a minimal, refined corporate shadow.
 */
export function ErgoLogo({ size = 44, glow = false, animated = false, className = '' }) {
  return (
    <motion.div
      style={{ width: size, height: size }}
      animate={
        animated
          ? {
              filter: [
                'drop-shadow(0 6px 14px rgba(16,44,83,0.12))',
                'drop-shadow(0 8px 18px rgba(51,109,230,0.18))',
                'drop-shadow(0 6px 14px rgba(16,44,83,0.12))',
              ],
            }
          : undefined
      }
      transition={animated ? { duration: 4.5, repeat: Infinity, ease: 'easeInOut' } : undefined}
      className={`relative inline-flex shrink-0 items-center justify-center select-none ${className}`}
    >
      <img
        src="/brand/logo-1.png"
        alt="ERGOTECHNOLOGY Icon"
        className={`h-full w-full object-contain ${
          glow && !animated ? 'drop-shadow-[0_4px_12px_rgba(16,44,83,0.14)]' : ''
        }`}
        draggable={false}
      />
    </motion.div>
  );
}

/**
 * Wordmarks Logo 2 ("ERGO") + Logo 3 ("TECHNOLOGY")
 * Defaults to light surfaces where the original dark navy & slate wordmarks stand out clearly.
 */
export function ErgoWordmark({ variant = 'light', size = 'md', className = '' }) {
  const isLightSurface = variant === 'light';
  const ergoSrc = isLightSurface ? '/brand/logo-2-ergo.png' : '/brand/logo-2-ergo-light.png';
  const techSrc = isLightSurface ? '/brand/logo-3-tech.png' : '/brand/logo-3-tech-neon.png';

  const dimensions = {
    sm: { ergoH: 'h-4 sm:h-[18px]', techH: 'h-[7px] sm:h-[8px]', gap: 'gap-0.5' },
    md: { ergoH: 'h-5 sm:h-6', techH: 'h-[9px] sm:h-[10px]', gap: 'gap-1' },
    lg: { ergoH: 'h-7 sm:h-9', techH: 'h-3 sm:h-3.5', gap: 'gap-1.5' },
  }[size];

  return (
    <div
      className={`inline-flex flex-col items-start justify-center leading-none select-none ${dimensions.gap} ${className}`}
    >
      <img
        src={ergoSrc}
        alt="ERGO"
        className={`${dimensions.ergoH} w-auto object-contain`}
        draggable={false}
      />
      <img
        src={techSrc}
        alt="TECHNOLOGY"
        className={`${dimensions.techH} w-auto object-contain`}
        draggable={false}
      />
    </div>
  );
}

/**
 * Complete Brand Lockup uniting Logo 1 + Logo 2 (ERGO) + Logo 3 (TECHNOLOGY)
 */
export function ErgoBrandLockup({
  layout = 'row',
  variant = 'light',
  iconSize = 42,
  wordmarkSize = 'md',
  animated = false,
  className = '',
}) {
  if (variant === 'dark' && layout === 'row') {
    const heightClass = {
      sm: 'h-9 sm:h-10',
      md: 'h-11 sm:h-12',
      lg: 'h-14 sm:h-16',
    }[wordmarkSize];

    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/brand/logo-white.png"
          alt="ERGOTECHNOLOGY"
          className={`${heightClass} w-auto object-contain`}
          draggable={false}
        />
      </div>
    );
  }

  if (layout === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center gap-3 text-center ${className}`}>
        <ErgoLogo size={iconSize} animated={animated} />
        <div className="flex flex-col items-center">
          <ErgoWordmark variant={variant} size={wordmarkSize} className="items-center" />
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <ErgoLogo size={iconSize} animated={animated} />
      <ErgoWordmark variant={variant} size={wordmarkSize} />
    </div>
  );
}
