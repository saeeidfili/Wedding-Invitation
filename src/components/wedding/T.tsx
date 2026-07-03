import type { CSSProperties } from 'react'
import { texts, listText, type TextId } from './wedding-data'

export type { TextId }

type TProps = {
  id: TextId
  className?: string
  style?: CSSProperties
}

/**
 * Renders a Persian text from the central `texts` config (wedding-data.ts),
 * applying its assigned font ('nozha' | 'pinar') and size (px). Use `className`
 * for colour/weight/spacing — the font and size come from the config.
 */
export function T({ id, className, style }: TProps) {
  const t = texts[id]
  const fontFamily = t.font === 'nozha' ? 'var(--font-nozha)' : 'var(--font-pinar)'
  return (
    <span
      className={className}
      style={{ fontFamily, fontSize: `${t.size}px`, ...style }}
    >
      {t.text}
    </span>
  )
}

const FONT_VAR = { nozha: 'var(--font-nozha)', pinar: 'var(--font-pinar)' } as const

/** Inline style ({ fontFamily, fontSize }) for a list-text key — apply to list items. */
export function listTextStyle(key: keyof typeof listText): CSSProperties {
  const lt = listText[key]
  return { fontFamily: FONT_VAR[lt.font], fontSize: `${lt.size}px` }
}
