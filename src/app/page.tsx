import { Hero } from '@/components/wedding/Hero'
import { Timeline } from '@/components/wedding/Timeline'
import { Countdown } from '@/components/wedding/Countdown'
import { Venue } from '@/components/wedding/Venue'
import { Gallery } from '@/components/wedding/Gallery'
import { Footer } from '@/components/wedding/Footer'
import { MusicButton } from '@/components/wedding/MusicButton'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-paper text-ink overflow-x-hidden">
      <Hero />
      <Timeline />
      <Countdown />
      <Venue />
      <Gallery />
      <Footer />
      <MusicButton />
    </main>
  )
}
