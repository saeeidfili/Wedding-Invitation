'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Music, Volume2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

/**
 * Floating music toggle.
 *
 * Set `src` to your own Persian instrumental music file (e.g. /music/persian.mp3
 * placed in /public/music/). The button gracefully hides if no audio file is
 * available — users see the toggle but nothing plays until audio loads.
 */
type MusicButtonProps = {
  src?: string
}

export function MusicButton({ src }: MusicButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  // Derive availability from props — no setState-in-effect needed.
  const audioAvailable = Boolean(src)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    if (!src) return
    const audio = new Audio(src)
    audio.loop = true
    audio.preload = 'none'
    audio.volume = 0.4
    audioRef.current = audio

    const handleError = () => {
      // If the file fails to load, pause + reset state.
      setIsPlaying(false)
    }
    audio.addEventListener('error', handleError)
    return () => {
      audio.removeEventListener('error', handleError)
      audio.pause()
      audioRef.current = null
    }
  }, [src])

  const toggle = () => {
    setHasInteracted(true)
    if (!audioRef.current || !audioAvailable) {
      // No audio file — still toggle the visual state so the user gets feedback.
      setIsPlaying((p) => !p)
      return
    }
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false)
        })
    }
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
    >
      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-md border border-rose/30 shadow-lg flex items-center justify-center text-rose hover:bg-white"
        aria-label={isPlaying ? 'قطع موسیقی' : 'پخش موسیقی'}
      >
        {/* Pulsing ring when playing */}
        <AnimatePresence>
          {isPlaying && (
            <>
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-rose"
                initial={{ opacity: 0.6, scale: 1 }}
                animate={{ opacity: 0, scale: 1.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-rose"
                initial={{ opacity: 0.6, scale: 1 }}
                animate={{ opacity: 0, scale: 1.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
            </>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.span
              key="on"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.25 }}
            >
              <Volume2 className="w-6 h-6 md:w-7 md:h-7" />
            </motion.span>
          ) : (
            <motion.span
              key="off"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.25 }}
            >
              <Music className="w-6 h-6 md:w-7 md:h-7" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Tiny icon to indicate music unavailable */}
        {!audioAvailable && hasInteracted && (
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 ring-2 ring-white" />
        )}
      </motion.button>
    </motion.div>
  )
}
