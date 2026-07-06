import { weddingData } from './wedding-data'
import { BADGE_TITLE_OUTLINE_D } from './badge-title-outline'
import { Monogram } from './Monogram'
import { listTextStyle } from './T'

/**
 * Wedding timeline badge — a tall capsule (aspect 1 : 1.55) with two thin
 * nested outlines, a curved Persian title along the top arch, a centred
 * monogram, and a two-column schedule. The SVG draws the frame + curved
 * title + floral; an HTML overlay (sized in cqw) holds the monogram and
 * schedule so the whole badge scales proportionally.
 *
 * NOTE: the curved Persian title is baked as outlined vector paths (see
 * badge-title-outline.ts) because WebKit cannot shape RTL text on an SVG
 * textPath — it scrambled on every iOS browser. Reposition the title via
 * the nested <svg> x/y below; to change the wording, re-export outlines
 * from a design tool and regenerate that module.
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

          {/* Curved Persian title — outlined vector paths. WebKit can't shape
              RTL on an SVG textPath, so the title is baked as geometry and
              positioned via the nested <svg> x/y below. */}
          <svg
            x="68.5"
            y="24"
            width="103"
            height="30"
            viewBox="0 0 103 30"
            overflow="visible"
          >
            <path d={BADGE_TITLE_OUTLINE_D} fill="var(--color-ink-soft)" />
          </svg>

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
