'use client'

import { Grey_Qo } from 'next/font/google'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { weddingData } from './wedding-data'
import { Petal } from './FloralDecorations'
import { JalaliDate } from './JalaliDate'
import { T } from './T'

const greyQo = Grey_Qo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-grey-qo',
  display: 'swap',
})

const { heroImage } = weddingData

/* Deterministic pseudo-random for SSR-safe petal positions */
function seededFloat(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

/**
 * HeroV2 — hero.html rebuild + V1's names, raining petals and animations.
 *
 *  - Photo bleeds to the LEFT screen edge; insets on top/right/bottom.
 *  - M & S monogram keeps its exact placement relative to the photo
 *    (left:10% / top:70%), scaled with the photo via container-query units.
 *  - Couple names sit centred across the FULL width of the photo, in the
 *    upper region so they never overlap the lower-left monogram.
 *  - Raining petals (ported from V1) fall across the photo.
 */
export function HeroV2() {
  const petals = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => {
        const left = seededFloat(i * 1.1) * 100
        const duration = 14 + seededFloat(i * 2.3) * 12
        const delay = -seededFloat(i * 3.7) * duration
        const size = 14 + seededFloat(i * 5.1) * 16
        const drift = (seededFloat(i * 7.9) - 0.5) * 120
        return { left, duration, delay, size, drift, id: i }
      }),
    [],
  )

  return (
    <section
      className={`hero2 relative min-h-screen w-full overflow-hidden bg-paper ${greyQo.variable}`}
    >
      <div className="hero2-card flex min-h-screen flex-col">
        {/* Top title */}
        <motion.p
          className="hero2-title text-center text-ink"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <T id="hero.tagline" />
        </motion.p>

        {/* Photo — flush left, margins on top / right / bottom */}
        <div className="hero2-image">
          <img
            src={heroImage.src}
            alt="عروس و داماد"
            style={{
              transform: `scale(${heroImage.scale})`,
              transformOrigin: `${heroImage.position.x}% ${heroImage.position.y}%`,
            }}
          />

          {/* Raining petals — fall across the whole photo */}
          <div className="hero2-petals absolute inset-0 overflow-hidden pointer-events-none">
            {petals.map((p) => (
              <motion.div
                key={p.id}
                className="absolute"
                style={{ left: `${p.left}%` }}
                initial={{ top: '-10%', opacity: 0, rotate: 0 }}
                animate={{
                  top: '110%',
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

          {/* Couple names — shallow top-left → bottom-right diagonal.
              مریم top-left, & centred, سعید bottom-right. The band spans the
              full photo width but only ~10% of its height, and sits above the
              monogram (left:10%/top:70%). */}
          <div className="hero2-names z-20">
            <motion.h1
              className="hero2-name hero2-name-left text-white/90"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <T id="hero.bride" />
            </motion.h1>
            <motion.span
              className="hero2-name hero2-name-center hero2-amp text-rose"
              style={{ fontSize: '4vh' }}
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.7, type: 'spring' }}
            >
              &
            </motion.span>
            <motion.h1
              className="hero2-name hero2-name-right text-white/90"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <T id="hero.groom" />
            </motion.h1>
          </div>

          {/* Monogram — reproduced exactly from hero.html */}
          <div
            className="hero2-monogram"
            style={{ fontFamily: 'var(--font-grey-qo), cursive' }}
          >
            <span className="hero2-char hero2-char-m">M</span>
            <span className="hero2-char hero2-char-amp">&amp;</span>
            <span className="hero2-char hero2-char-s">S</span>
          </div>
        </div>

        {/* Date — minimalist Jalali display */}
        <motion.div
          className="mt-[3vh]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          <JalaliDate />
        </motion.div>
      </div>
    </section>
  )
}
