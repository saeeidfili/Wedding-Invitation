import { Grey_Qo } from 'next/font/google'
import type { CSSProperties } from 'react'

const greyQo = Grey_Qo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mono-gq',
  display: 'swap',
})

type MonogramProps = {
  className?: string
  style?: CSSProperties
}

/**
 * Reusable M & S monogram — an EXACT replica of the HeroV2 monogram's
 * relative layout. The three glyphs use the hero's precise positions and
 * sizes (base font 37.5 × scales 3 / 0.65 / 1.15), so S, & and M keep the
 * exact same positions and proportions as in the hero:
 *   S  → center (30, 0),    font 112.5   (scale 3)
 *   &  → center (45, -12.5), font 24.375 (scale 0.65)
 *   M  → center (60, 0.75), font 43.125  (scale 1.15)
 * Each glyph is centred on its coordinate (text-anchor middle + central
 * baseline), equivalent to the hero's translate(-50%,-50%) scale().
 * Grey Qo script, ~60% opacity, ink colour. The viewBox just frames the
 * cluster; the SVG scales to any slot.
 */
export function Monogram({ className, style }: MonogramProps) {
  return (
    <span
      className={`block text-ink ${greyQo.variable} ${className ?? ''}`}
      style={style}
      role="img"
      aria-label="نشان"
    >
      <svg
        viewBox="-12 -55 92 93"
        className="block h-auto w-full"
        style={{ overflow: 'visible' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="currentColor"
          fillOpacity={0.6}
          style={{ fontFamily: 'var(--font-mono-gq), cursive' }}
        >
          <text
            x="30"
            y="0"
            fontSize="112.5"
            textAnchor="middle"
            dominantBaseline="central"
          >
            S
          </text>
          <text
            x="45"
            y="-12.5"
            fontSize="24.375"
            textAnchor="middle"
            dominantBaseline="central"
          >
            &amp;
          </text>
          <text
            x="60"
            y="0.75"
            fontSize="43.125"
            textAnchor="middle"
            dominantBaseline="central"
          >
            M
          </text>
        </g>
      </svg>
    </span>
  )
}
