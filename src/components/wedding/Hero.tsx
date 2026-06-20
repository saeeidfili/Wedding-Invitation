'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { weddingData } from './wedding-data'
import { FloralCluster, Petal } from './FloralDecorations'

/* Deterministic pseudo-random for SSR-safe petal positions */
function seededFloat(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export function Hero() {
  // Generate floating petals once on first render
  const petals = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => {
      const left = seededFloat(i * 1.1) * 100
      const duration = 14 + seededFloat(i * 2.3) * 12
      const delay = -seededFloat(i * 3.7) * duration
      const size = 14 + seededFloat(i * 5.1) * 16
      const drift = (seededFloat(i * 7.9) - 0.5) * 120
      return { left, duration, delay, size, drift, id: i }
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden paper-texture">
      {/* Corner floral decorations */}
      <FloralCluster
        variant="full"
        className="absolute top-0 left-0 w-[280px] h-[280px] md:w-[420px] md:h-[420px] -translate-x-1/4 -translate-y-1/4 pointer-events-none"
        style={{ transform: 'translate(-22%, -22%) rotate(-8deg)' }}
      />
      <FloralCluster
        variant="full"
        className="absolute bottom-0 right-0 w-[280px] h-[280px] md:w-[420px] md:h-[420px] pointer-events-none"
        style={{ transform: 'translate(22%, 22%) rotate(170deg)' }}
      />
      <FloralCluster
        variant="soft"
        className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] pointer-events-none opacity-80"
        style={{ transform: 'translate(15%, -10%) rotate(20deg)' }}
      />
      <FloralCluster
        variant="soft"
        className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] pointer-events-none opacity-80"
        style={{ transform: 'translate(-15%, 10%) rotate(-200deg)' }}
      />

      {/* Floating petal particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {petals.map((p) => (
          <motion.div
            key={p.id}
            className="absolute"
            style={{ left: `${p.left}%`, top: -20 }}
            initial={{ y: 0, opacity: 0, rotate: 0 }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, p.drift],
              opacity: [0, 0.85, 0.85, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Petal style={{ width: p.size, height: p.size }} />
          </motion.div>
        ))}
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="font-body text-ink-soft text-sm md:text-base tracking-[0.4em] mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          {weddingData.heroTagline}
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1
            className="font-display text-6xl md:text-8xl text-ink leading-none"
            style={{ fontWeight: 400 }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {weddingData.bride}
          </motion.h1>

          <motion.span
            className="font-display text-3xl md:text-5xl text-rose"
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.7, type: 'spring' }}
          >
            &
          </motion.span>

          <motion.h1
            className="font-display text-6xl md:text-8xl text-ink leading-none"
            style={{ fontWeight: 400 }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {weddingData.groom}
          </motion.h1>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center justify-center gap-3 my-6"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-rose" />
          <span className="text-rose text-lg">✦</span>
          <span className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-rose" />
        </motion.div>

        <motion.p
          className="font-body text-xl md:text-2xl text-ink-soft text-balance max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          {weddingData.subtitle}
        </motion.p>

        <motion.p
          className="font-body text-sm md:text-base text-ink-soft mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          {weddingData.weddingDateLabel}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.8 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="flex flex-col items-center gap-2 text-ink-soft">
          <span className="text-xs tracking-widest">پایین</span>
          <span className="text-2xl">↓</span>
        </div>
      </motion.div>
    </section>
  )
}
