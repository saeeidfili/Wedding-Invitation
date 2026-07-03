'use client'

import { motion } from 'framer-motion'
import { Flora } from './Flora'
import { floraPlacements } from './flora-placements'
import { T } from './T'

export function Footer() {
  return (
    <footer className="relative bg-paper pt-24 pb-12 px-4">
      {/* Decorative top divider with florals — edit in flora-placements.ts */}
      <div className="relative flex items-center justify-center mb-12">
        <Flora placement={floraPlacements.footer.topCenter} />
        <Flora placement={floraPlacements.footer.topLeft} />
        <Flora placement={floraPlacements.footer.topRight} />
        <Flora placement={floraPlacements.footer.topInnerLeft} />
        <Flora placement={floraPlacements.footer.topInnerRight} />
        <Flora placement={floraPlacements.footer.topCenterSprig} />
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
          className="text-ink mb-6 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <T id="footer.message" />
        </motion.p>

        <motion.p
          className="text-ink-soft mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <T id="footer.thanks" />
        </motion.p>

        {/* Couple names + date */}
        <motion.div
          className="flex flex-col items-center gap-2 text-ink-soft"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <p className="text-rose">
            <T id="footer.bride" /> <span className="text-rose opacity-60">&</span>{' '}
            <T id="footer.groom" />
          </p>
          <p className="tracking-widest">
            <T id="footer.date" />
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
          <p className="text-ink-soft/70 tracking-wider">
            <T id="footer.made" />
          </p>
        </motion.div>
      </div>

      {/* Corner floral clusters at very bottom — edit in flora-placements.ts */}
      <Flora placement={floraPlacements.footer.bottomRight} />
      <Flora placement={floraPlacements.footer.bottomLeft} />
    </footer>
  )
}
