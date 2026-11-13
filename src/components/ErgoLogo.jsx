import { motion } from 'framer-motion';

/**
 * Logo 1 (Hexagonal Mark) from public/brand/logo-1.png
 * Supports dark and light backgrounds cleanly with neon ambient glow.
 */
export function ErgoLogo({ size = 44, glow = true, animated = false, className = '' }) {
  return (
    <motion.div
      style={{ width: size, height: size }}
      animate={
        animated
          ? {
              filter: [
                'drop-shadow(0 0 12px rgba(0,240,255,0.45)) drop-shadow(0 0 26px rgba(41,100,217,0.35))',
                'drop-shadow(0 0 20px rgba(168,85,247,0.55)) drop-shadow(0 0 38px rgba(0,240,255,0.5))',
                'drop-shadow(0 0 12px rgba(0,240,255,0.45)) drop-shadow(0 0 26px rgba(41,100,217,0.35))',
              ],
            }
          : undefined
      }
      transition={animated ? { duration: 4, repeat: Infinity, ease: 'easeInOut' } : undefined}
      className={`relative inline-flex shrink-0 items-center justify-center select-none ${className}`}
    >
      <img
        src="/brand/logo-1.png"
        alt="ERGOTECHNOLOGY Icon"
        className={`h-full w-full object-contain ${
          glow && !animated
            ? 'drop-shadow-[0_0_12px_rgba(0,240,255,0.45)]'
            : ''
        }`}
        draggable={false}
      />
    </motion.div>
  );
}

/**
 * Wordmarks Logo 2 ("ERGO") + Logo 3 ("TECHNOLOGY")
 * Automatically uses light/neon variants on dark backgrounds and original dark variants on light surfaces.
 */
export function ErgoWordmark({ variant = 'dark', size = 'md', className = '' }) {
  const isLightSurface = variant === 'light';
  const ergoSrc = isLightSurface ? '/brand/logo-2-ergo.png' : '/brand/logo-2-ergo-light.png';
  const techSrc = isLightSurface ? '/brand/logo-3-tech.png' : '/brand/logo-3-tech-neon.png';

  const dimensions = {
    sm: { ergoH: 'h-4 sm:h-[18px]', techH: 'h-[7px] sm:h-[8px]', gap: 'gap-0.5' },
    md: { ergoH: 'h-5 sm:h-6', techH: 'h-[9px] sm:h-[10px]', gap: 'gap-1' },
    lg: { ergoH: 'h-7 sm:h-9', techH: 'h-3 sm:h-3.5', gap: 'gap-1.5' },
  }[size];

  return (
    <div className={`inline-flex flex-col items-start justify-center leading-none select-none ${dimensions.gap} ${className}`}>
      <img
        src={ergoSrc}
        alt="ERGO"
        className={`${dimensions.ergoH} w-auto object-contain ${
          isLightSurface ? '' : 'drop-shadow-[0_0_10px_rgba(242,242,242,0.35)]'
        }`}
        draggable={false}
      />
      <img
        src={techSrc}
        alt="TECHNOLOGY"
        className={`${dimensions.techH} w-auto object-contain ${
          isLightSurface ? '' : 'drop-shadow-[0_0_10px_rgba(0,240,255,0.75)]'
        }`}
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
  variant = 'dark',
  iconSize = 42,
  wordmarkSize = 'md',
  animated = false,
  className = '',
}) {
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
