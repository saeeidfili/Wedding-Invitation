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
 * Mobile-first bottom-sheet popup. Shows every time the page loads unless the
 * visitor explicitly ticks the "never show again" checkbox and dismisses it.
 */
export function DeclineNoticePopup() {
  const [open, setOpen] = useState(false)
  const [neverShow, setNeverShow] = useState(false)

  useEffect(() => {
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
    if (!next && neverShow) {
      try {
        window.localStorage.setItem(STORAGE_KEY, '1')
      } catch {
        /* ignore */
      }
    }
  }

  const dismiss = () => handleOpenChange(false)

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

        <div className="my-4 space-y-4">
          {/* Bride's family */}
          <div className="text-center">
            <p className="text-ink-soft mb-1 text-sm">
              <T id="decline.brideLabel" />
            </p>
            <a
              href={`tel:${declineNotice.bridePhone}`}
              dir="ltr"
              className="font-display inline-block text-2xl tracking-wide text-ink md:text-3xl"
            >
              {declineNotice.bridePhone}
            </a>
            <a
              href={`tel:${declineNotice.bridePhone}`}
              className="font-body mx-auto mt-2 flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-rose px-7 py-3 text-base text-white shadow-md transition hover:opacity-90"
            >
              <Phone className="h-4 w-4" />
              <T id="decline.call" />
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 px-4">
            <span className="h-px flex-1 bg-rose/20" />
            <span className="text-ink-soft text-xs">یا</span>
            <span className="h-px flex-1 bg-rose/20" />
          </div>

          {/* Groom's family */}
          <div className="text-center">
            <p className="text-ink-soft mb-1 text-sm">
              <T id="decline.groomLabel" />
            </p>
            <a
              href={`tel:${declineNotice.groomPhone}`}
              dir="ltr"
              className="font-display inline-block text-2xl tracking-wide text-ink md:text-3xl"
            >
              {declineNotice.groomPhone}
            </a>
            <a
              href={`tel:${declineNotice.groomPhone}`}
              className="font-body mx-auto mt-2 flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-rose px-7 py-3 text-base text-white shadow-md transition hover:opacity-90"
            >
              <Phone className="h-4 w-4" />
              <T id="decline.call" />
            </a>
          </div>
        </div>

        <label className="mx-auto mb-2 flex w-fit cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={neverShow}
            onChange={(e) => setNeverShow(e.target.checked)}
            className="size-4 appearance-none rounded-[4px] border border-rose/60 bg-transparent
                       checked:border-rose checked:bg-rose
                       transition-colors"
            style={{
              backgroundImage: neverShow
                ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E")`
                : undefined,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
          />
          <span className="text-ink-soft select-none text-sm">
            <T id="decline.neverShow" />
          </span>
        </label>

        <DrawerFooter className="gap-2 pt-1">
          <button
            type="button"
            onClick={dismiss}
            className="text-ink-soft underline-offset-4 hover:underline"
          >
            <T id="decline.dismiss" />
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
