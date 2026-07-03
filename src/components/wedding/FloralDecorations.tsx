import type { CSSProperties } from 'react'

type FloralProps = {
  className?: string
  style?: CSSProperties
}

/* ============================================================
   Floating petal — single small petal for the hero rain effect.
   (The other hand-drawn florals were replaced by the watercolor PNG
   flora system — see Flora.tsx + flora-placements.ts.)
   ============================================================ */
export function Petal({ className, style }: FloralProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="10" cy="10" rx="6" ry="9" fill="#F7D6D0" opacity="0.85" />
      <ellipse cx="10" cy="8" rx="3" ry="5" fill="#FCEAEC" opacity="0.7" />
    </svg>
  )
}
