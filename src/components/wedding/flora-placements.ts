// ============================================================
// Flora placements — the ONE place to edit floral decorations.
//
// Each slot renders one watercolor PNG from /public/flora/ as an
// absolutely-positioned <img>. To change a decoration:
//   • png     → filename in /public/flora/ (swap me)
//   • width   → px (height auto-keeps aspect; set height to stretch)
//   • top/right/bottom/left → position insets (e.g. '0', '10%', '-20px')
//   • tx/ty   → fine nudge as translate (e.g. '28%', '-10px')
//   • rotate  → degrees
//   • opacity → 0..1
//   • flipX   → mirror horizontally
// ============================================================

export type FloraPlacement = {
  png: string
  width: number | string
  height?: number | string
  top?: string
  right?: string
  bottom?: string
  left?: string
  tx?: string
  ty?: string
  rotate?: number
  opacity?: number
  z?: number
  flipX?: boolean
}

export const floraPlacements = {
  // ---------- Countdown ----------
  countdown: {
    cornerTopRight: {
      png: 'flower-01.png', width: 360, top: '0', right: '0',
      rotate: 15, opacity: 0.2,
    },
    cornerBottomLeft: {
      png: 'flower-04.png', width: 360, bottom: '0', left: '0',
      rotate: -165, opacity: 0.5,
    },
    accentTop: {
      png: 'flower-08.png', width: 90, top: '40px', left: '25%',
      rotate: -15, opacity: 0.4,
    },
    accentBottom: {
      png: 'flower-06.png', width: 100, bottom: '40px', right: '25%',
      rotate: 25, opacity: 0.4,
    },
  },

  // ---------- Venue ----------
  venue: {
    bgTopRight: {
      png: 'flower-06.png', width: 130, top: '40px', right: '0',
      rotate: 20, opacity: 0.5,
    },
    bgBottomLeft: {
      png: 'flower-11.png', width: 130, bottom: '40px', left: '0',
      rotate: -160, opacity: 0.5,
    },
    cardTopLeft: {
      png: 'flower-12.png', width: 70, top: '-8px', left: '-8px',
      rotate: -25, opacity: 0.7,
    },
    cardBottomRight: {
      png: 'flower-15.png', width: 70, bottom: '-8px', right: '-8px',
      rotate: 155, opacity: 0.7,
    },
  },

  // ---------- Timeline ----------
  timeline: {
    header: {
      png: 'flower-16.png', width: 100, top: '-24px', left: '50%',
      tx: '-50%', rotate: 0, opacity: 0.7,
    },
    milestoneA: {
      png: 'flower-17.png', width: 48, top: '-12px', right: '-8px',
      rotate: 12, opacity: 0.7,
    },
    milestoneB: {
      png: 'flower-18.png', width: 48, bottom: '-12px', left: '-8px',
      rotate: -12, opacity: 0.6,
    },
  },

  // ---------- Gallery ----------
  gallery: {
    cornerTopRight: {
      png: 'flower-07.png', width: 150, top: '0', right: '0',
      rotate: 15, opacity: 0.6,
    },
    cornerBottomLeft: {
      png: 'flower-05.png', width: 150, bottom: '0', left: '0',
      rotate: -165, opacity: 0.6,
    },
    endAccent: {
      png: 'flower-12.png', width: 70, bottom: '24px', right: '24px',
      opacity: 0.5,
    },
  },

  // ---------- Footer ----------
  footer: {
    topCenter: {
      png: 'flower-03.png', width: 110, top: '-24px', left: '50%',
      tx: '-50%', ty: '-10%', rotate: 0, opacity: 0.8,
    },
    topLeft: {
      png: 'flower-11.png', width: 95, top: '-8px', left: '25%',
      tx: '-50%', rotate: -25, opacity: 0.3,
    },
    topRight: {
      png: 'flower-06.png', width: 95, top: '-8px', right: '25%',
      tx: '50%', rotate: 25, opacity: 0.3, flipX: true,
    },
    topInnerLeft: {
      png: 'flower-15.png', width: 50, top: '-16px', left: '33%',
      tx: '-50%', rotate: 10, opacity: 0.8,
    },
    topInnerRight: {
      png: 'flower-17.png', width: 50, top: '-16px', right: '33%',
      tx: '50%', rotate: -10, opacity: 0.8,
    },
    topCenterSprig: {
      png: 'flower-13.png', width: 80, top: '8px', left: '50%',
      tx: '-50%', opacity: 0.6,
    },
    bottomRight: {
      png: 'flower-02.png', width: 130, bottom: '0', right: '0',
      rotate: -15, opacity: 0.6,
    },
    bottomLeft: {
      png: 'flower-09.png', width: 130, bottom: '0', left: '0',
      rotate: 165, opacity: 0.6,
    },
  },
}
