import type { CSSProperties } from 'react'
import type { FloraPlacement } from './flora-placements'

type FloraProps = {
  placement: FloraPlacement
  className?: string
}

const toSize = (v: number | string | undefined): string | undefined => {
  if (v === undefined) return undefined
  return typeof v === 'number' ? `${v}px` : v
}

/**
 * Renders one watercolor flora PNG from /public/flora/, absolutely positioned
 * per the supplied placement (see flora-placements.ts). Edit the PNG name,
 * size, position, rotation and opacity there — not here.
 */
export function Flora({ placement, className }: FloraProps) {
  const { png, width, height, top, right, bottom, left, tx, ty, rotate, opacity, z, flipX } =
    placement

  const transform = `translate(${tx ?? 0}, ${ty ?? 0}) rotate(${rotate ?? 0}deg)${
    flipX ? ' scale(-1,1)' : ''
  }`

  const style: CSSProperties = {
    position: 'absolute',
    width: toSize(width),
    height: toSize(height) ?? 'auto',
    top,
    right,
    bottom,
    left,
    transform,
    opacity,
    zIndex: z,
    pointerEvents: 'none',
  }

  return (
    <img
      src={`/flora/${png}`}
      alt=""
      aria-hidden="true"
      className={className}
      style={style}
    />
  )
}
