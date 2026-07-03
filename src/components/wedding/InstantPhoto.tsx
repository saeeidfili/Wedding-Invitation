'use client'

import { motion } from 'framer-motion'
import type { TimelinePhoto } from './wedding-data'
import { listTextStyle } from './T'

type InstantPhotoProps = {
  photo: TimelinePhoto
  /** rotation in degrees, slight tilt for scrapbook feel */
  rotate?: number
  /** animation delay in seconds for staggered entrance */
  delay?: number
  /** image width on the screen */
  width?: number
  className?: string
}

/* Instant-camera photograph with white border, thick bottom margin,
   paper shadow, and a handwritten Persian caption underneath. */
export function InstantPhoto({
  photo,
  rotate = 0,
  delay = 0,
  width = 260,
  className,
}: InstantPhotoProps) {
  return (
    <motion.figure
      className={`polaroid-frame inline-block ${className ?? ''}`}
      style={{ width: width + 28, transform: `rotate(${rotate}deg)` }}
      initial={{ opacity: 0, rotate: rotate - 4, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, rotate, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.03,
        rotate: rotate * 0.4,
        transition: { duration: 0.35, ease: 'easeOut' },
      }}
    >
      <div
        className="relative overflow-hidden bg-paper"
        style={{ width, height: width }}
      >
        <img
          src={photo.src}
          alt={photo.caption}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0.92) contrast(0.97) sepia(0.06)' }}
        />
        {/* soft warm vignette for film feel */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 60%, rgba(74,63,58,0.12) 100%)',
          }}
        />
      </div>
      <figcaption
        className="text-center text-ink mt-3"
        style={listTextStyle('timeline.caption')}
      >
        {photo.caption}
      </figcaption>
    </motion.figure>
  )
}
