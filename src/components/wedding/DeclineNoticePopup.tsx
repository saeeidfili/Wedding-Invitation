'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from '@/components/ui/drawer'
import { weddingData } from './wedding-data'
import { T } from './T'

const STORAGE_KEY = 'decline-notice-shown'
const DELAY_MS = 2500

const { declineNotice } = weddingData

/**
 * Mobile-first bottom-sheet popup. Shows once per visitor, a couple of
 * seconds after load, telling non-attendees they can call to let us know.
 * Copy/number live in wedding-data.ts (declineNotice).
 */
export function DeclineNoticePopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Only show once per visitor.
    if (typeof window === 'undefined') return
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) return
    } catch {
      /* localStorage may be blocked — fall through to showing the notice */
    }
    const id = window.setTimeout(() => setOpen(true), DELAY_MS)
    return () => window.clearTimeout(id)
  }, [])

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) {
      try {
        window.localStorage.setItem(STORAGE_KEY, '1')
      } catch {
        /* ignore */
      }
    }
  }

  return (
    <Drawer open={open} onOpenChange={handleOpenChange}>
      <DrawerContent className="mx-auto max-w-md rounded-t-3xl bg-paper px-6 pb-8 pt-4">
        <DrawerHeader className="text-center">
          <DrawerTitle className="text-ink">
            <T id="decline.title" />
          </DrawerTitle>
          <DrawerDescription className="text-ink-soft leading-relaxed">
            <T id="decline.message" />
          </DrawerDescription>
        </DrawerHeader>

        <div className="my-2 text-center">
          <a
            href={`tel:${declineNotice.phone}`}
            dir="ltr"
            className="font-display inline-block text-2xl tracking-wide text-ink md:text-3xl"
          >
            {declineNotice.phone}
          </a>
        </div>

        <DrawerFooter className="gap-3 pt-2">
          <a
            href={`tel:${declineNotice.phone}`}
            className="font-body inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose px-7 py-3.5 text-lg text-white shadow-md transition hover:opacity-90"
          >
            <Phone className="h-5 w-5" />
            <T id="decline.call" />
          </a>
          <button
            type="button"
            onClick={() => handleOpenChange(false)}
            className="text-ink-soft underline-offset-4 hover:underline"
          >
            <T id="decline.dismiss" />
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
