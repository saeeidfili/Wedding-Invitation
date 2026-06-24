'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { weddingData } from './wedding-data'
import { Eucalyptus, Peony } from './FloralDecorations'

type VenueProps = {
  googleMapsUrl?: string
  neshanUrl?: string
  wazeUrl?: string
}

export function Venue({
  googleMapsUrl = weddingData.googleMapsUrl,
  neshanUrl = weddingData.neshanUrl,
  wazeUrl = weddingData.wazeUrl,
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

        {/* Map buttons — each shows a single brand icon + label.
            Icons live in /public/icons/; overwrite the files to swap them. */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MapButton
            href={googleMapsUrl}
            icon="/icons/google-maps.png"
            label="گوگل مپ"
            variant="primary"
          />
          <MapButton
            href={neshanUrl}
            icon="/icons/neshan.png"
            label="نشان"
            variant="sage"
          />
          <MapButton
            href={wazeUrl}
            icon="/icons/waze.png"
            label="وِیز"
            variant="rose"
          />
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

const buttonBase =
  'group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-body text-base md:text-lg shadow-md hover:shadow-lg transition'

const buttonVariants = {
  primary: 'bg-rose text-white',
  sage: 'bg-white text-ink border-2 border-sage hover:bg-sage/10',
  rose: 'bg-white text-ink border-2 border-rose hover:bg-rose/10',
}

type MapButtonProps = {
  href: string
  icon: string
  label: string
  variant: keyof typeof buttonVariants
}

function MapButton({ href, icon, label, variant }: MapButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`${buttonBase} ${buttonVariants[variant]}`}
    >
      <img src={icon} alt="" className="w-6 h-6 object-contain" />
      <span>{label}</span>
    </motion.a>
  )
}
