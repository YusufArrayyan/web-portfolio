'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { isTouchDevice } from '@/lib/utils'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 }
  const springConfigSlow = { damping: 35, stiffness: 180, mass: 0.8 }

  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const dotX = useSpring(mouseX, springConfigSlow)
  const dotY = useSpring(mouseY, springConfigSlow)

  const [cursorState, setCursorState] = useState<
    'default' | 'hover' | 'click' | 'text' | 'video'
  >('default')
  const [label, setLabel] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isTouchDevice()) return

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Interactive element detection
    const interactiveEls = document.querySelectorAll(
      'a, button, [data-cursor], input, textarea, select, video, [role="button"]'
    )

    const enterHandler = (e: Event) => {
      const el = e.currentTarget as HTMLElement
      const cursorType = el.dataset.cursor || ''
      const cursorLabel = el.dataset.cursorLabel || ''

      if (cursorLabel) setLabel(cursorLabel)

      if (el.tagName === 'VIDEO' || cursorType === 'video') {
        setCursorState('video')
      } else if (cursorType === 'text') {
        setCursorState('text')
      } else {
        setCursorState('hover')
      }
    }

    const leaveHandler = () => {
      setCursorState('default')
      setLabel('')
    }

    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', enterHandler as EventListener)
      el.addEventListener('mouseleave', leaveHandler)
    })

    // Mouse down / up
    const handleDown = () => setCursorState('click')
    const handleUp = () => setCursorState('default')
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', enterHandler as EventListener)
        el.removeEventListener('mouseleave', leaveHandler)
      })
    }
  }, [mouseX, mouseY, isVisible])

  if (typeof window !== 'undefined' && isTouchDevice()) return null

  const getCursorSize = () => {
    switch (cursorState) {
      case 'hover': return 44
      case 'click': return 28
      case 'text': return 2
      case 'video': return 80
      default: return 12
    }
  }

  const getOuterSize = () => {
    switch (cursorState) {
      case 'hover': return 0
      case 'video': return 0
      default: return 40
    }
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 rounded-full border border-white/20 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: getOuterSize(),
          height: getOuterSize(),
          opacity: isVisible ? (cursorState === 'hover' || cursorState === 'video' ? 0 : 1) : 0,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Inner dot / fill */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: getCursorSize(),
          height: getCursorSize(),
          opacity: isVisible ? 1 : 0,
          backgroundColor:
            cursorState === 'hover'
              ? '#b8f455'
              : cursorState === 'video'
              ? 'rgba(184, 244, 85, 0.9)'
              : cursorState === 'click'
              ? '#ffffff'
              : cursorState === 'text'
              ? '#f0ede8'
              : '#f0ede8',
          mixBlendMode: cursorState === 'hover' ? 'normal' : 'difference',
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Video cursor label */}
        {cursorState === 'video' && (
          <motion.span
            className="text-[10px] font-mono font-500 text-bg uppercase tracking-widest"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            Play
          </motion.span>
        )}

        {/* Hover label */}
        {label && cursorState === 'hover' && (
          <motion.span
            className="text-[9px] font-mono font-500 text-bg uppercase tracking-wider whitespace-nowrap px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </>
  )
}
