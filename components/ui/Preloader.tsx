'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { easing } from '@/lib/animations'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0)
  const [phase, setPhase] = useState<'counting' | 'reveal' | 'exit'>('counting')
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    // Animate count from 0 to 100
    let current = 0
    const duration = 2200
    const steps = 100
    const stepTime = duration / steps

    intervalRef.current = setInterval(() => {
      current += 1
      setCount(current)

      if (current >= 100) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setPhase('reveal')

        setTimeout(() => {
          setPhase('exit')
          setTimeout(onComplete, 1000)
        }, 600)
      }
    }, stepTime)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="preloader"
          initial={{ y: '0%' }}
          exit={{
            y: '-100%',
            transition: { duration: 0.9, ease: easing.inOutExpo },
          }}
        >
          {/* Counter — massive background number */}
          <motion.span
            className="preloader-counter select-none"
            animate={{
              opacity: phase === 'reveal' ? 0 : 0.07,
              scale: phase === 'reveal' ? 1.05 : 1,
            }}
            transition={{ duration: 0.4 }}
          >
            {count}
          </motion.span>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: easing.outExpo }}
            >
              <Image
                src="/logo.png"
                alt="Rayyan"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
                priority
              />
            </motion.div>

            {/* Wordmark */}
            <motion.p
              className="preloader-wordmark tracking-[0.25em]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easing.outExpo }}
            >
              Rayyan
            </motion.p>

            {/* Status */}
            <motion.p
              className="preloader-status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Loading experience
            </motion.p>
          </div>

          {/* Progress bar at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5">
            <motion.div
              className="h-full bg-accent origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              transition={{ duration: 0.05, ease: 'linear' }}
            />
          </div>

          {/* Percentage bottom-right */}
          <motion.div
            className="absolute bottom-6 right-6 font-mono text-xs text-ink-tertiary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {count.toString().padStart(3, '0')}
          </motion.div>

          {/* Grid lines — decorative */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Vertical center line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/[0.03]" />
            {/* Horizontal center line */}
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/[0.03]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
