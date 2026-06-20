'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'
import { weddingData } from './wedding-data'
import { Eucalyptus, Peony } from './FloralDecorations'

type VenueProps = {
  googleMapsUrl?: string
  neshanUrl?: string
}

export function Venue({
  googleMapsUrl = weddingData.googleMapsUrl,
  neshanUrl = weddingData.neshanUrl,
}: VenueProps) {
  return (
    <section className="relative py-24 md:py-32 px-4 paper-texture overflow-hidden">
      {/* Background floral accents */}
      <div
        className="absolute top-10 right-0 w-32 h-32 opacity-50 pointer-events-none"
        style={{ transform: 'rotate(20deg)' }}
        aria-hidden="true"
      >
        <Eucalyptus />
      </div>
      <div
        className="absolute bottom-10 left-0 w-32 h-32 opacity-50 pointer-events-none"
        style={{ transform: 'rotate(-160deg)' }}
        aria-hidden="true"
      >
        <Eucalyptus />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
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
          className="font-display text-4xl md:text-6xl text-ink mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          محلِ برگزاری
        </motion.h2>

        <motion.div
          className="inline-flex items-center gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <MapPin className="w-5 h-5 text-rose" />
          <span className="font-body text-xl md:text-2xl text-ink">
            {weddingData.venueName}
          </span>
        </motion.div>

        <motion.p
          className="font-body text-ink-soft text-base md:text-lg mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {weddingData.venueAddress}
        </motion.p>

        <motion.p
          className="font-body text-ink-soft text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {weddingData.venueDescription}
        </motion.p>

        {/* Map buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group inline-flex items-center gap-2 rounded-full bg-rose text-white px-7 py-3.5 font-body text-base md:text-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <MapPin className="w-5 h-5" />
            <span>گوگل مپ</span>
            <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          <motion.a
            href={neshanUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group inline-flex items-center gap-2 rounded-full bg-white text-ink border-2 border-sage px-7 py-3.5 font-body text-base md:text-lg shadow-md hover:shadow-lg transition-colors hover:bg-sage/10"
          >
            <Navigation className="w-5 h-5 text-sage" />
            <span>نشان</span>
            <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>

        {/* Decorative peony accent below buttons */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-10 text-rose"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-lg">✦</span>
          <span className="text-sm tracking-widest font-body">منتظر دیدارتان هستیم</span>
          <span className="text-lg">✦</span>
        </motion.div>

        {/* Peony accents */}
        <div
          className="absolute -top-2 -left-2 w-16 h-16 opacity-70 pointer-events-none"
          style={{ transform: 'rotate(-25deg)' }}
          aria-hidden="true"
        >
          <Peony />
        </div>
        <div
          className="absolute -bottom-2 -right-2 w-16 h-16 opacity-70 pointer-events-none"
          style={{ transform: 'rotate(155deg)' }}
          aria-hidden="true"
        >
          <Peony />
        </div>
      </div>
    </section>
  )
}
