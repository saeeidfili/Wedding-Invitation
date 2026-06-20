import type { CSSProperties } from 'react'

type FloralProps = {
  className?: string
  style?: CSSProperties
}

/* ============================================================
   Soft pastel peony — full bloom, layered petals
   ============================================================ */
export function Peony({ className, style }: FloralProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="peony-outer" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#FCEAEC" />
          <stop offset="60%" stopColor="#F7D6D0" />
          <stop offset="100%" stopColor="#E8B8B2" />
        </radialGradient>
        <radialGradient id="peony-inner" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FFF5F3" />
          <stop offset="100%" stopColor="#F7D6D0" />
        </radialGradient>
      </defs>
      <g fill="url(#peony-outer)" opacity="0.95">
        <ellipse cx="100" cy="40" rx="32" ry="42" />
        <ellipse cx="160" cy="70" rx="32" ry="42" transform="rotate(45 160 70)" />
        <ellipse cx="170" cy="130" rx="32" ry="42" transform="rotate(90 170 130)" />
        <ellipse cx="130" cy="170" rx="32" ry="42" transform="rotate(135 130 170)" />
        <ellipse cx="70" cy="170" rx="32" ry="42" transform="rotate(180 70 170)" />
        <ellipse cx="30" cy="130" rx="32" ry="42" transform="rotate(225 30 130)" />
        <ellipse cx="30" cy="70" rx="32" ry="42" transform="rotate(270 30 70)" />
        <ellipse cx="70" cy="30" rx="32" ry="42" transform="rotate(315 70 30)" />
      </g>
      <g fill="url(#peony-inner)" opacity="0.95">
        <ellipse cx="100" cy="65" rx="22" ry="28" transform="rotate(22 100 65)" />
        <ellipse cx="130" cy="85" rx="22" ry="28" transform="rotate(67 130 85)" />
        <ellipse cx="130" cy="120" rx="22" ry="28" transform="rotate(112 130 120)" />
        <ellipse cx="100" cy="135" rx="22" ry="28" transform="rotate(157 100 135)" />
        <ellipse cx="70" cy="120" rx="22" ry="28" transform="rotate(202 70 120)" />
        <ellipse cx="70" cy="85" rx="22" ry="28" transform="rotate(247 70 85)" />
      </g>
      <circle cx="100" cy="100" r="18" fill="#E8B8B2" opacity="0.7" />
      <circle cx="100" cy="100" r="10" fill="#D8A7A1" opacity="0.6" />
      <circle cx="100" cy="100" r="4" fill="#B88A85" opacity="0.8" />
    </svg>
  )
}

/* ============================================================
   Dusty rose garden rose — tighter, spiral bloom
   ============================================================ */
export function GardenRose({ className, style }: FloralProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="rose-grad" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#F7D6D0" />
          <stop offset="100%" stopColor="#D8A7A1" />
        </radialGradient>
      </defs>
      <g fill="url(#rose-grad)" opacity="0.92">
        <path d="M100,30 Q150,40 165,90 Q175,140 130,165 Q80,180 45,140 Q25,90 55,55 Q80,30 100,30 Z" />
        <path d="M100,55 Q140,60 150,100 Q145,140 110,150 Q70,145 60,110 Q60,75 100,55 Z" fill="#E8B8B2" />
        <path d="M100,75 Q130,80 135,105 Q130,135 105,135 Q80,130 75,105 Q80,80 100,75 Z" fill="#F0C2BC" />
        <path d="M95,95 Q115,95 115,110 Q110,125 100,120 Q85,115 95,95 Z" fill="#D8A7A1" opacity="0.85" />
        <circle cx="100" cy="105" r="6" fill="#B88A85" opacity="0.7" />
      </g>
    </svg>
  )
}

/* ============================================================
   Ranunculus — many small rounded petals
   ============================================================ */
export function Ranunculus({ className, style }: FloralProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="ran-grad" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#FFF5F3" />
          <stop offset="100%" stopColor="#F7D6D0" />
        </radialGradient>
      </defs>
      <g fill="url(#ran-grad)" opacity="0.92">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16
          return (
            <ellipse
              key={i}
              cx="100"
              cy="55"
              rx="14"
              ry="22"
              transform={`rotate(${angle} 100 100)`}
              fill={i % 2 === 0 ? '#F7D6D0' : '#FCE3DE'}
              opacity="0.9"
            />
          )
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12 + 15
          return (
            <ellipse
              key={`m-${i}`}
              cx="100"
              cy="72"
              rx="11"
              ry="18"
              transform={`rotate(${angle} 100 100)`}
              fill="#FCE3DE"
            />
          )
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8
          return (
            <ellipse
              key={`s-${i}`}
              cx="100"
              cy="88"
              rx="8"
              ry="13"
              transform={`rotate(${angle} 100 100)`}
              fill="#FFDDD6"
            />
          )
        })}
        <circle cx="100" cy="100" r="12" fill="#E8B8B2" />
        <circle cx="100" cy="100" r="6" fill="#D8A7A1" opacity="0.7" />
      </g>
    </svg>
  )
}

/* ============================================================
   White hydrangea cluster — many tiny florets
   ============================================================ */
export function Hydrangea({ className, style }: FloralProps) {
  const positions = [
    [100, 100], [70, 85], [130, 85], [70, 115], [130, 115],
    [85, 65], [115, 65], [85, 135], [115, 135], [55, 100],
    [145, 100], [100, 55], [100, 145], [40, 70], [160, 70],
    [40, 130], [160, 130],
  ]
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g>
        {positions.map(([cx, cy], i) => (
          <g key={i}>
            {Array.from({ length: 4 }).map((_, j) => {
              const a = (j * 360) / 4
              return (
                <ellipse
                  key={j}
                  cx={cx}
                  cy={cy - 5}
                  rx="4"
                  ry="6"
                  transform={`rotate(${a} ${cx} ${cy})`}
                  fill={i % 3 === 0 ? '#F0E6F5' : '#FFFFFF'}
                  opacity="0.92"
                />
              )
            })}
            <circle cx={cx} cy={cy} r="3" fill="#DCCFE8" opacity="0.7" />
          </g>
        ))}
      </g>
    </svg>
  )
}

/* ============================================================
   Sweet pea — delicate winged petals
   ============================================================ */
export function SweetPea({ className, style }: FloralProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sp-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8D8F2" />
          <stop offset="100%" stopColor="#DCCFE8" />
        </linearGradient>
      </defs>
      <g opacity="0.92">
        <path d="M100,50 Q70,70 80,110 Q100,90 120,110 Q130,70 100,50 Z" fill="url(#sp-grad)" />
        <path d="M70,90 Q50,110 70,140 Q90,120 90,100 Z" fill="#E8D8F2" opacity="0.85" />
        <path d="M130,90 Q150,110 130,140 Q110,120 110,100 Z" fill="#E8D8F2" opacity="0.85" />
        <path d="M85,130 Q100,160 115,130 Q100,150 85,130 Z" fill="#DCCFE8" />
        <circle cx="100" cy="115" r="4" fill="#B89DC8" opacity="0.7" />
      </g>
    </svg>
  )
}

/* ============================================================
   Eucalyptus branch — elongated leaves on a stem
   ============================================================ */
export function Eucalyptus({ className, style }: FloralProps) {
  const leaves = Array.from({ length: 9 }).map((_, i) => {
    const t = i / 8
    const cx = 100 + Math.sin(t * Math.PI) * 60 - 30
    const cy = 20 + t * 160
    const side = i % 2 === 0 ? 1 : -1
    return { cx, cy, side, rot: side * 35 }
  })
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="euca-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C8D2C0" />
          <stop offset="100%" stopColor="#B8C4B2" />
        </linearGradient>
      </defs>
      <path
        d="M100,15 Q90,80 95,150 Q97,180 100,195"
        stroke="#9AAE92"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {leaves.map((l, i) => (
        <g key={i} transform={`translate(${l.cx} ${l.cy}) rotate(${l.rot})`}>
          <ellipse
            cx={l.side * 18}
            cy="0"
            rx="22"
            ry="10"
            fill="url(#euca-grad)"
            opacity="0.85"
          />
          <ellipse
            cx={l.side * 18}
            cy="-1"
            rx="14"
            ry="5"
            fill="#D2DAC8"
            opacity="0.6"
          />
        </g>
      ))}
    </svg>
  )
}

/* ============================================================
   Baby's breath — tiny white dots on a stem (deterministic)
   ============================================================ */
export function BabyBreath({ className, style }: FloralProps) {
  const seed = (n: number) => ((n * 9301 + 49297) % 233280) / 233280
  const fixedDots: { cx: number; cy: number; r: number }[] = []
  let counter = 0
  for (let i = 0; i < 24; i++) {
    const t = i / 23
    const baseX = 100 + Math.sin(t * Math.PI * 1.5) * 35
    const baseY = 20 + t * 160
    for (let j = 0; j < 3; j++) {
      fixedDots.push({
        cx: baseX + (seed(counter) - 0.5) * 35,
        cy: baseY + (seed(counter + 1) - 0.5) * 18,
        r: 2 + seed(counter + 2) * 1.8,
      })
      counter += 3
    }
  }
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M100,15 Q105,80 100,150 Q98,180 100,195"
        stroke="#9AAE92"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      {fixedDots.map((d, i) => (
        <g key={i}>
          <circle cx={d.cx} cy={d.cy} r={d.r} fill="#FFFFFF" opacity="0.9" />
          <circle cx={d.cx} cy={d.cy} r={d.r * 0.5} fill="#F0E6F5" opacity="0.7" />
        </g>
      ))}
    </svg>
  )
}

/* ============================================================
   Pre-arranged corner cluster — composition of multiple florals
   ============================================================ */
export function FloralCluster({
  className,
  style,
  variant = 'default',
}: FloralProps & { variant?: 'default' | 'soft' | 'full' }) {
  return (
    <div className={className} style={style} aria-hidden="true">
      <svg viewBox="0 0 240 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20 20) rotate(-15)" opacity="0.85">
          <Eucalyptus />
        </g>
        <g transform="translate(140 30) rotate(40)" opacity="0.8">
          <Eucalyptus />
        </g>
        <g transform="translate(30 130) rotate(20)" opacity="0.9">
          <BabyBreath />
        </g>
        <g transform="translate(160 140) rotate(-25) scale(0.8)" opacity="0.85">
          <BabyBreath />
        </g>
        {variant !== 'soft' && (
          <g transform="translate(80 60) scale(0.7)">
            <Peony />
          </g>
        )}
        <g transform="translate(130 110) scale(0.55)">
          <GardenRose />
        </g>
        {variant === 'full' && (
          <g transform="translate(60 150) scale(0.5)">
            <Ranunculus />
          </g>
        )}
        <g transform="translate(170 60) scale(0.5)" opacity="0.85">
          <Hydrangea />
        </g>
      </svg>
    </div>
  )
}

/* ============================================================
   Floating petal — single small petal for particle effects
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
