import { weddingData, texts } from './wedding-data'
import { Monogram } from './Monogram'
import { listTextStyle } from './T'

/**
 * Wedding timeline badge — a tall capsule (aspect 1 : 1.55) with two thin
 * nested outlines, a curved Persian title along the top arch, a centred
 * monogram, and a two-column schedule. The SVG draws the frame + curved
 * title + floral; an HTML overlay (sized in cqw) holds the monogram and
 * schedule so the whole badge scales proportionally.
 *
 * NOTE: the arc path runs left→right over the top so the glyphs render
 * upright (a right→left path flips them upside down). The browser still
 * shapes the Persian text RTL. If it ever renders upside down, flip the
 * arc direction in the <defs> path below.
 */
export function TimelineBadge() {
  return (
    <div
      className="mx-auto w-full max-w-[300px]"
      style={{ aspectRatio: '1 / 1.55' }}
    >
      <div
        className="relative h-full w-full"
        style={{ containerType: 'inline-size' }}
      >
        {/* ---- SVG frame: outlines, curved title, floral ---- */}
        <svg
          viewBox="0 0 240 372"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Top-arch arc the title follows. Runs left→right over the top
                so the glyphs render upright (right→left flips them upside down).
                The browser still shapes the Persian text RTL. The two y-values
                (82) set the arc height — increase to move the words DOWN,
                decrease to move them UP. */}
            <path id="badgeTopArc" d="M 36 90 A 95 95 0 0 1 204 90" fill="none" />
          </defs>

          {/* Outer + inner capsule outlines (true semicircular caps) */}
          <rect
            x="1"
            y="1"
            width="238"
            height="370"
            rx="119"
            ry="119"
            fill="none"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            style={{ stroke: 'var(--color-border)' }}
          />
          <rect
            x="9"
            y="9"
            width="222"
            height="354"
            rx="111"
            ry="111"
            fill="none"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            style={{ stroke: 'var(--color-border)' }}
          />

          {/* Curved Persian title */}
          <text
            fontSize={texts['badge.title'].size}
            style={{
              fill: 'var(--color-ink-soft)',
              direction: 'rtl',
              unicodeBidi: 'isolate',
              fontFamily:
                texts['badge.title'].font === 'nozha'
                  ? 'var(--font-nozha), serif'
                  : 'var(--font-pinar), serif',
            }}
          >
            <textPath href="#badgeTopArc" startOffset="50%" textAnchor="middle">
              {texts['badge.title'].text}
            </textPath>
          </text>

          {/* Minimal monochromatic floral above the top arch */}
          <g
            transform="translate(120 6)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            style={{ stroke: 'var(--color-border)' }}
          >
            {[0, 72, 144, 216, 288].map((a) => (
              <ellipse
                key={a}
                cx="0"
                cy="-7"
                rx="3.4"
                ry="5.5"
                transform={`rotate(${a})`}
              />
            ))}
            <circle cx="0" cy="0" r="1.8" />
            <path d="M 0 6 C -3 12 -7 13 -11 11" />
            <path d="M -9 12 C -8 16 -5 18 -2 17" />
            <path d="M 0 6 C 3 12 7 13 11 11" />
            <path d="M 9 12 C 8 16 5 18 2 17" />
          </g>
        </svg>

        {/* ---- HTML overlay: monogram + schedule (scales via cqw) ---- */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{
            paddingTop: '32%',
            paddingBottom: '18%',
            paddingLeft: '16%',
            paddingRight: '16%',
          }}
        >
          <div style={{ width: '60cqw' , transform: 'translate(-9cqw, -13cqw)'}}>
            <Monogram />
          </div>

          <div
            dir="ltr"
            className="mt-[5cqw] grid w-full grid-cols-2 items-baseline"
            style={{
              columnGap: '7.5cqw',
              rowGap: '4.2cqw',
              transform: 'translateY(-10cqw)',
            }}
          >
            {weddingData.schedule.map((item) => (
              <div key={item.label} className="contents">
                <span
                  className="text-ink-soft whitespace-nowrap"
                  style={{ ...listTextStyle('schedule.time'), textAlign: 'left' }}
                >
                  {item.time}
                </span>
                <span
                  className="text-ink-soft whitespace-nowrap"
                  style={{ ...listTextStyle('schedule.label'), textAlign: 'right', direction: 'rtl' }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
