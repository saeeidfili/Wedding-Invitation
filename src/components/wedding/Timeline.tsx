'use client'

import { motion } from 'framer-motion'
import { timelinePhotos } from './wedding-data'
import { InstantPhoto } from './InstantPhoto'
import { Peony, Eucalyptus, BabyBreath } from './FloralDecorations'

export function Timeline() {
  return (
    <section className="relative py-20 md:py-32 px-4 paper-texture overflow-hidden">
      {/* Section header */}
      <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto relative">
        <motion.div
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-24 opacity-70 pointer-events-none"
          initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
          whileInView={{ opacity: 0.7, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Eucalyptus />
        </motion.div>
        <motion.h2
          className="font-display text-4xl md:text-6xl text-ink mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          داستانِ ما
        </motion.h2>
        <motion.p
          className="font-body text-ink-soft text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          هفده قاب از خاطراتی که ما را به این روز رساند — یکی‌یکی ورق بزنید
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Central vertical line */}
        <div
          className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, #D8A7A1 8%, #D8A7A1 92%, transparent 100%)',
          }}
        />

        {timelinePhotos.map((photo, i) => {
          const isRight = i % 2 === 0 // on desktop, alternate right/left
          const hasMilestone = Boolean(photo.milestone)
          // Vary the rotation slightly for the scrapbook feel
          const rotate = (i % 5 === 0 ? 1 : -1) * (2 + (i % 3))
          const width = 240

          return (
            <div key={photo.id}>
              {/* Milestone label */}
              {hasMilestone && (
                <MilestoneMarker milestone={photo.milestone!} index={i} />
              )}

              {/* Timeline row */}
              <div
                className={`relative flex items-center mb-16 md:mb-24 ${
                  isRight
                    ? 'md:justify-start md:flex-row'
                    : 'md:justify-end md:flex-row-reverse'
                } justify-center`}
              >
                {/* Date dot on the central line — desktop only */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-rose ring-4 ring-paper"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  />
                </div>

                {/* Photo column */}
                <div className="w-full md:w-1/2 px-4 md:px-12 flex justify-center md:justify-start">
                  <InstantPhoto
                    photo={photo}
                    rotate={rotate}
                    delay={0.05}
                    width={width}
                  />
                </div>

                {/* Empty other column on desktop for spacing */}
                <div className="hidden md:block w-1/2" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* Milestone marker — appears between timeline photos with a floral accent */
function MilestoneMarker({
  milestone,
  index,
}: {
  milestone: string
  index: number
}) {
  const FloralIcon = index % 3 === 0 ? Peony : index % 3 === 1 ? BabyBreath : Peony
  return (
    <motion.div
      className="relative flex justify-center my-8 md:my-12"
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative inline-flex items-center gap-3 md:gap-5 px-8 py-4 rounded-full bg-paper/80 backdrop-blur-sm border border-rose/30 shadow-sm">
        {/* Floral accent — left */}
        <div className="absolute -right-2 -top-3 w-12 h-12 opacity-70 pointer-events-none rotate-12">
          <FloralIcon />
        </div>
        {/* Floral accent — right */}
        <div className="absolute -left-2 -bottom-3 w-12 h-12 opacity-60 pointer-events-none -rotate-12">
          <Eucalyptus />
        </div>
        <span className="text-rose text-lg">✦</span>
        <span className="font-display text-2xl md:text-3xl text-ink whitespace-nowrap">
          {milestone}
        </span>
        <span className="text-rose text-lg">✦</span>
      </div>
    </motion.div>
  )
}
