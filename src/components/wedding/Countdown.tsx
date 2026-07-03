'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { weddingData } from './wedding-data'
import { Flora } from './Flora'
import { floraPlacements } from './flora-placements'
import { T, type TextId } from './T'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function computeTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const units: { key: keyof TimeLeft; textId: TextId }[] = [
  { key: 'days', textId: 'countdown.day' },
  { key: 'hours', textId: 'countdown.hour' },
  { key: 'minutes', textId: 'countdown.minute' },
  { key: 'seconds', textId: 'countdown.second' },
]

export function Countdown() {
  const target = useMemo(
    () => new Date(weddingData.weddingDate),
    []
  )
  // Initialize with zeros so server and client agree (no hydration mismatch).
  // Real values are set inside the client-only effect below.
  const [time, setTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set real value immediately on mount, then tick every second.
    // This is a legitimate "sync with external system" use case (system clock),
    // so the react-hooks/set-state-in-effect rule is intentionally suppressed.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTime(computeTimeLeft(target))
    const id = setInterval(() => setTime(computeTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <section className="relative py-24 md:py-32 px-4">
      {/* Soft floral background — edit in flora-placements.ts */}
      <div className="pointer-events-none absolute inset-0">
        <Flora placement={floraPlacements.countdown.cornerTopRight} />
        {/* <Flora placement={floraPlacements.countdown.cornerBottomLeft} />
        <Flora placement={floraPlacements.countdown.accentTop} />
        <Flora placement={floraPlacements.countdown.accentBottom} /> */}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="h-px w-12 bg-rose" />
          <span className="text-rose text-lg">✦</span>
          <span className="h-px w-12 bg-rose" />
        </motion.div>

        <motion.h2
          className="font-display text-4xl md:text-6xl text-ink mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <T id="countdown.heading" className="text-ink mb-3" />
        </motion.h2>

        <motion.p
          className="text-ink-soft mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <T id="countdown.date" />
        </motion.p>

        {/* Countdown grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {units.map(({ key, textId }, i) => (
            <motion.div
              key={key}
              className="relative rounded-2xl bg-white/70 backdrop-blur-sm border border-rose/20 px-2 py-6 md:py-8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="font-display text-4xl md:text-6xl text-rose tabular-nums leading-none">
                <AnimatedDigit value={time[key]} />
              </div>
              <div className="text-ink-soft mt-3">
                <T id={textId} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Smooth digit transition — animates the number on change */
function AnimatedDigit({ value }: { value: number }) {
  const display = String(value).padStart(2, '0')
  return (
    <span className="inline-flex" dir="ltr">
      {display.split('').map((d, i) => (
        <span key={i} className="relative inline-block w-[0.6em] overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={d}
              className="inline-block w-full"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {d}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
    </span>
  )
}
