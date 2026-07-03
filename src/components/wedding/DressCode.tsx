'use client'

import { motion } from 'framer-motion'
import { CoupleSilhouette } from './CoupleSilhouette'
import { T } from './T'

type IconStyle = 'filled' | 'line-ink' | 'line-rose'
type Layout = 'A' | 'B' | 'C' | 'D'
type Illustration =
  | 'detailed-original'
  | 'detailed-theme'
  | 'simplified-original'
  | 'simplified-theme'

type DressCodeProps = {
  layout?: Layout
  iconStyle?: IconStyle
  illustration?: Illustration
}

/* Paint recipe per icon style — uses only palette tokens. */
function paint(style: IconStyle) {
  if (style === 'filled') {
    return {
      fill: 'var(--color-ink)',
      stroke: 'var(--color-ink)',
      strokeWidth: 0,
      detailStroke: 'var(--color-paper)',
      detailFill: 'var(--color-paper)',
    }
  }
  if (style === 'line-ink') {
    return {
      fill: 'none',
      stroke: 'var(--color-ink-soft)',
      strokeWidth: 2,
      detailStroke: 'var(--color-ink-soft)',
      detailFill: 'none',
    }
  }
  return {
    fill: 'none',
    stroke: 'var(--color-rose)',
    strokeWidth: 2,
    detailStroke: 'var(--color-rose)',
    detailFill: 'none',
  }
}

/* Minimal tuxedo silhouette. */
function SuitIcon({ style, className }: { style: IconStyle; className?: string }) {
  const p = paint(style)
  return (
    <svg viewBox="0 0 80 96" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 18 L36 14 L44 14 L64 18 L69 30 L60 35 L58 84 L22 84 L20 35 L11 30 Z"
        fill={p.fill}
        stroke={p.stroke}
        strokeWidth={p.strokeWidth}
        strokeLinejoin="round"
      />
      {/* Lapels V + buttons */}
      <path
        d="M36 14 L40 50 L44 14"
        fill="none"
        stroke={p.detailStroke}
        strokeWidth={p.strokeWidth || 2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="40" cy="58" r="2" fill={p.detailFill} stroke={p.detailStroke} strokeWidth={p.strokeWidth || 0} />
      <circle cx="40" cy="68" r="2" fill={p.detailFill} stroke={p.detailStroke} strokeWidth={p.strokeWidth || 0} />
    </svg>
  )
}

/* Minimal wedding-gown silhouette. */
function GownIcon({ style, className }: { style: IconStyle; className?: string }) {
  const p = paint(style)
  return (
    <svg viewBox="0 0 80 96" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      {/* Straps */}
      <path d="M34 26 L36 26 L37 10 L35 10 Z" fill={p.fill} stroke={p.stroke} strokeWidth={p.strokeWidth} strokeLinejoin="round" />
      <path d="M44 26 L46 26 L45 10 L43 10 Z" fill={p.fill} stroke={p.stroke} strokeWidth={p.strokeWidth} strokeLinejoin="round" />
      {/* Bodice + flared skirt */}
      <path
        d="M33 26 L47 26 L46 42 L67 84 Q40 92 13 84 L34 42 Z"
        fill={p.fill}
        stroke={p.stroke}
        strokeWidth={p.strokeWidth}
        strokeLinejoin="round"
      />
      {/* Waist seam */}
      <path d="M34 42 L46 42" fill="none" stroke={p.detailStroke} strokeWidth={p.strokeWidth || 2} strokeLinecap="round" />
    </svg>
  )
}

function Divider() {
  return (
    <motion.div
      className="mb-4 flex items-center justify-center gap-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span className="bg-rose h-px w-12" />
      <span className="text-rose text-lg">✦</span>
      <span className="bg-rose h-px w-12" />
    </motion.div>
  )
}

function Icons({ iconStyle }: { iconStyle: IconStyle }) {
  return (
    <motion.div
      className="flex items-end justify-center gap-8 md:gap-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      <SuitIcon style={iconStyle} className="h-20 w-16 md:h-24 md:w-20" />
      <GownIcon style={iconStyle} className="h-20 w-16 md:h-24 md:w-20" />
    </motion.div>
  )
}

function Caption() {
  return (
    <div className="mt-6">
      <motion.div
        className="text-rose"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <T id="dress.formal" />
      </motion.div>
      <motion.p
        className="text-ink-soft mt-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35 }}
      >
        <T id="dress.mixed" />
      </motion.p>
    </div>
  )
}

/* Couple illustration picker for layout D. Detailed versions are static SVGs;
   simplified versions use the inline CoupleSilhouette (tintable via color). */
function CoupleArt({
  illustration,
  className,
}: {
  illustration: Illustration
  className?: string
}) {
  if (illustration === 'detailed-original')
    return <img src="/couple-detailed-original.svg" alt="" className={className} />
  if (illustration === 'detailed-theme')
    return <img src="/couple-figures-theme.svg" alt="" className={className} />
  if (illustration === 'simplified-original')
    return <CoupleSilhouette color="#15130F" className={className} />
  return <CoupleSilhouette className={`${className ?? ''} text-ink`} />
}

/**
 * Dress-code section. `layout` picks the arrangement; `iconStyle` picks the
 * suit/gown rendering (layouts A–C); `illustration` picks the couple artwork
 * (layout D). All colours/fonts/spacing use design-system tokens.
 */
export function DressCode({
  layout = 'A',
  iconStyle = 'filled',
  illustration = 'detailed-theme',
}: DressCodeProps) {
  if (layout === 'D') {
    // Big illustration layout — redesigned around the couple artwork.
    return (
      <section className="px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Divider />
          <motion.h2
            className="text-ink"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <T id="dress.heading" />
          </motion.h2>
          {illustration === 'detailed-theme' ? (
            <motion.div
              className="relative mt-8"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Section-width rose band at the panel's exact vertical position
                  (19.28%–71.34%, measured from the original EPS artwork). */}
              <div
                aria-hidden="true"
                className="bg-rose absolute inset-x-0"
                style={{ top: '19.28%', height: '52.06%' }}
              />
              <div className="relative z-10 mx-auto w-56 md:w-72">
                <img
                  src="/couple-figures-theme.svg"
                  alt=""
                  className="h-auto w-full"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="mx-auto mt-8 w-56 md:w-72"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <CoupleArt illustration={illustration} className="h-auto w-full" />
            </motion.div>
          )}
          <div className="mt-8">
            <Caption />
          </div>
        </div>
      </section>
    )
  }

  if (layout === 'C') {
    // Ultra-minimal: icons + caption only.
    return (
      <section className="px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Icons iconStyle={iconStyle} />
          <Caption />
        </div>
      </section>
    )
  }

  if (layout === 'B') {
    // Badge-card: framed capsule around icons + caption.
    return (
      <section className="px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            className="text-ink"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <T id="dress.heading" />
          </motion.h2>
          <motion.div
            className="mt-10 inline-block rounded-full border-border border bg-paper px-12 py-10"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Icons iconStyle={iconStyle} />
            <Caption />
          </motion.div>
        </div>
      </section>
    )
  }

  // Layout A — icon-forward (divider + heading + icons + caption).
  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Divider />
        <motion.h2
          className="text-ink"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <T id="dress.heading" />
        </motion.h2>
        <div className="mt-10">
          <Icons iconStyle={iconStyle} />
          <Caption />
        </div>
      </div>
    </section>
  )
}
