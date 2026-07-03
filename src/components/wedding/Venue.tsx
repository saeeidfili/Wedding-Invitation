'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { weddingData } from './wedding-data'
import { Flora } from './Flora'
import { floraPlacements } from './flora-placements'
import { T } from './T'

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
    <section className="relative py-24 md:py-32 px-4 bg-paper">
      {/* Background floral accents — edit in flora-placements.ts */}
      <Flora placement={floraPlacements.venue.bgTopRight} />
      <Flora placement={floraPlacements.venue.bgBottomLeft} />

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
          <T id="venue.heading" className="text-ink mb-4" />
        </motion.h2>

        <motion.div
          className="inline-flex items-center gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <MapPin className="w-5 h-5 text-rose" />
          <T id="venue.name" className="text-ink" />
        </motion.div>

        <motion.p
          className="text-ink-soft mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <T id="venue.address" />
        </motion.p>

        <motion.p
          className="text-ink-soft max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <T id="venue.description" />
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
            label={<T id="venue.btnGoogle" />}
            variant="primary"
          />
          <MapButton
            href={neshanUrl}
            icon="/icons/neshan.png"
            label={<T id="venue.btnNeshan" />}
            variant="sage"
          />
          <MapButton
            href={wazeUrl}
            icon="/icons/waze.png"
            label={<T id="venue.btnWaze" />}
            variant="rose"
          />
        </motion.div>

        {/* Parking map subsection */}
        <motion.div
          className="mt-12 flex flex-col items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="mb-3 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-rose h-px w-10" />
            <span className="text-rose tracking-widest">
              <T id="venue.parkingLabel" />
            </span>
            <span className="bg-rose h-px w-10" />
          </motion.div>
          <p className="text-ink-soft mb-4 text-center">
            <T id="venue.parkingNote" />
          </p>
          <iframe
            title="parking-map"
            src={weddingData.parking.mapSrc}
            loading="lazy"
            allowFullScreen
            className="aspect-[3/2] w-full max-w-md rounded-2xl border border-rose/20 shadow-sm"
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
          <span className="text-rose tracking-widest">
            <T id="venue.closing" />
          </span>
          <span className="text-lg">✦</span>
        </motion.div>

        {/* Card-corner accents — edit in flora-placements.ts */}
        <Flora placement={floraPlacements.venue.cardTopLeft} />
        <Flora placement={floraPlacements.venue.cardBottomRight} />
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
  label: React.ReactNode
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
