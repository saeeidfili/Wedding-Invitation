import { weddingData } from './wedding-data'

type JalaliDateProps = {
  day?: string
  month?: string
  year?: string
}

/**
 * Minimalist Jalali date display: Month | Day | Year.
 * Three equal-gutter blocks. Month & Year are framed by open top/bottom
 * hairlines (no side borders); the Day is the largest, heaviest glyph in
 * the primary/brand colour. All tokens come from the design system.
 */
export function JalaliDate({
  day = weddingData.jalaliDate.day,
  month = weddingData.jalaliDate.month,
  year = weddingData.jalaliDate.year,
}: JalaliDateProps) {
  return (
    <div className="flex items-center justify-center gap-4 font-body md:gap-8">
      {/* Month — uppercase, open top & bottom hairlines */}
      <div className="border-border border-b border-t px-4 py-2 md:px-6">
        <span className="text-muted-foreground text-sm font-semibold uppercase tracking-[0.2em] md:text-base">
          {month}
        </span>
      </div>

      {/* Day — largest & heaviest, primary/brand colour */}
      <span className="text-primary text-4xl font-bold leading-none md:text-6xl">
        {day}
      </span>

      {/* Year — same size/weight as Month, framed identically */}
      <div className="border-border border-b border-t px-4 py-2 md:px-6">
        <span className="text-muted-foreground text-sm font-semibold uppercase tracking-[0.2em] md:text-base">
          {year}
        </span>
      </div>
    </div>
  )
}
