'use client'

import { motion, useMotionValue, type PanInfo } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { timelinePhotos } from './wedding-data'
import { Hand } from 'lucide-react'
import { Flora } from './Flora'
import { floraPlacements } from './flora-placements'
import { T } from './T'

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const [maxDrag, setMaxDrag] = useState(0)

  // Compute drag bounds based on content vs container width.
  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return
      const containerWidth = containerRef.current.offsetWidth
      const contentWidth = containerRef.current.scrollWidth
      // RTL — drag from right side towards left and back.
      const dragDistance = Math.max(0, contentWidth - containerWidth)
      setMaxDrag(dragDistance)
    }
    update()
    window.addEventListener('resize', update)
    // Re-measure once images have a chance to settle.
    const t = setTimeout(update, 400)
    return () => {
      window.removeEventListener('resize', update)
      clearTimeout(t)
    }
  }, [])

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    // Snap back if user drags past bounds (Framer handles via constraints).
    void info
  }

  return (
    <section className="relative py-24 md:py-32">
      {/* Floral corner accents — edit in flora-placements.ts */}
      <Flora placement={floraPlacements.gallery.cornerTopRight} />
      <Flora placement={floraPlacements.gallery.cornerBottomLeft} />

      <div className="text-center mb-12 px-4 relative z-10">
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
          <T id="gallery.heading" className="text-ink mb-3" />
        </motion.h2>
        <motion.p
          className="text-ink-soft flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Hand className="w-4 h-4" />
          <T id="gallery.subtitle" />
        </motion.p>
      </div>

      {/* Draggable carousel */}
      <motion.div
        ref={containerRef}
        className="relative cursor-grab active:cursor-grabbing overflow-hidden"
        dir="ltr"
      >
        <motion.div
          className="flex gap-6 px-6 md:px-12 py-6"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.08}
          onDragEnd={handleDragEnd}
        >
          {timelinePhotos.map((photo, i) => (
            <motion.div
              key={photo.id}
              className="relative flex-shrink-0 polaroid-frame"
              style={{ width: 232 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.6) }}
            >
              <div
                className="relative overflow-hidden bg-paper"
                style={{ width: 204, height: 204 }}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover pointer-events-none select-none"
                  draggable={false}
                  style={{ filter: 'saturate(0.92) contrast(0.97) sepia(0.06)' }}
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, transparent 60%, rgba(74,63,58,0.12) 100%)',
                  }}
                />
              </div>
              <figcaption
                className="handwritten text-center text-ink mt-3 text-base"
                style={{ fontSize: 16 }}
              >
                {photo.caption}
              </figcaption>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative accent at the end — edit in flora-placements.ts */}
      <Flora placement={floraPlacements.gallery.endAccent} />
    </section>
  )
}
