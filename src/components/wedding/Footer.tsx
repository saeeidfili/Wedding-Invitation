'use client'

import { motion } from 'framer-motion'
import { weddingData } from './wedding-data'
import { Peony, Eucalyptus, BabyBreath, GardenRose } from './FloralDecorations'

export function Footer() {
  return (
    <footer className="relative paper-texture pt-24 pb-12 px-4 overflow-hidden">
      {/* Decorative top divider with florals */}
      <div className="relative flex items-center justify-center mb-12">
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-6 w-28 h-28 opacity-80 pointer-events-none"
          style={{ transform: 'translate(-50%, -10%) rotate(0deg)' }}
          aria-hidden="true"
        >
          <Peony />
        </div>
        <div
          className="absolute left-1/4 -top-2 w-24 h-24 opacity-70 pointer-events-none"
          style={{ transform: 'translate(-50%, 0) rotate(-25deg)' }}
          aria-hidden="true"
        >
          <Eucalyptus />
        </div>
        <div
          className="absolute right-1/4 -top-2 w-24 h-24 opacity-70 pointer-events-none"
          style={{ transform: 'translate(50%, 0) rotate(25deg) scale(-1, 1)' }}
          aria-hidden="true"
        >
          <Eucalyptus />
        </div>
        <div
          className="absolute left-1/3 -top-4 w-12 h-12 opacity-80 pointer-events-none"
          style={{ transform: 'translate(-50%, 0) rotate(10deg)' }}
          aria-hidden="true"
        >
          <GardenRose />
        </div>
        <div
          className="absolute right-1/3 -top-4 w-12 h-12 opacity-80 pointer-events-none"
          style={{ transform: 'translate(50%, 0) rotate(-10deg)' }}
          aria-hidden="true"
        >
          <GardenRose />
        </div>
        <div
          className="absolute left-1/2 top-2 w-20 h-20 opacity-60 pointer-events-none"
          style={{ transform: 'translate(-50%, 0)' }}
          aria-hidden="true"
        >
          <BabyBreath />
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Decorative divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-rose" />
          <span className="text-rose text-lg">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-rose" />
        </motion.div>

        {/* Main farewell message */}
        <motion.p
          className="font-display text-3xl md:text-5xl text-ink mb-6 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {weddingData.footerMessage}
        </motion.p>

        <motion.p
          className="font-body text-ink-soft text-base md:text-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          حضور شما گرامی‌ترین هدیهٔ این روز ماست
        </motion.p>

        {/* Couple names + date */}
        <motion.div
          className="flex flex-col items-center gap-2 text-ink-soft"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <p className="font-display text-2xl text-rose">
            {weddingData.bride} <span className="text-rose opacity-60">&</span>{' '}
            {weddingData.groom}
          </p>
          <p className="font-body text-sm tracking-widest">
            {weddingData.weddingDateLabel}
          </p>
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          className="mt-12 pt-6 border-t border-rose/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <p className="font-body text-xs text-ink-soft/70 tracking-wider">
            ساخته‌شده با عشق · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>

      {/* Corner floral clusters at very bottom */}
      <div
        className="absolute bottom-0 right-0 w-32 h-32 opacity-60 pointer-events-none"
        style={{ transform: 'translate(30%, 30%) rotate(-15deg)' }}
        aria-hidden="true"
      >
        <Peony />
      </div>
      <div
        className="absolute bottom-0 left-0 w-32 h-32 opacity-60 pointer-events-none"
        style={{ transform: 'translate(-30%, 30%) rotate(165deg)' }}
        aria-hidden="true"
      >
        <Peony />
      </div>
    </footer>
  )
}
