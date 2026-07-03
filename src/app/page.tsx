import { HeroV2 } from '@/components/wedding/HeroV2'
import { Timeline } from '@/components/wedding/Timeline'
import { Countdown } from '@/components/wedding/Countdown'
import { TimelineBadge } from '@/components/wedding/TimelineBadge'
import { Venue } from '@/components/wedding/Venue'
import { DressCode } from '@/components/wedding/DressCode'
import { Gallery } from '@/components/wedding/Gallery'
import { Footer } from '@/components/wedding/Footer'
import { DeclineNoticePopup } from '@/components/wedding/DeclineNoticePopup'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-paper text-ink overflow-x-hidden">
      <HeroV2 />
      <section className="px-4 py-20 md:py-28">
        <TimelineBadge />
      </section>
      <Timeline />
      <Countdown />
      <Venue />
      <DressCode layout="D" illustration="detailed-theme" />
      <Gallery />
      <Footer />
      <DeclineNoticePopup />
    </main>
  )
}
