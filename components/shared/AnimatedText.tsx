'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { splitWords } from '@/lib/utils'
import { easing } from '@/lib/animations'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  once?: boolean
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
  type?: 'words' | 'lines'
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  stagger = 0.04,
  once = true,
  tag: Tag = 'div',
  type = 'words',
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once, margin: '-10% 0px' })

  const words = splitWords(text)

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement & HTMLParagraphElement>}
      className={`overflow-hidden ${className}`}
    >
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.25em]"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: stagger,
              delayChildren: delay,
            },
          },
        }}
        aria-label={text}
      >
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '110%', opacity: 0 },
                visible: {
                  y: '0%',
                  opacity: 1,
                  transition: {
                    duration,
                    ease: easing.outExpo,
                  },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}

/* ============================================================
   SectionLabel — Small eyebrow label with line
   ============================================================ */

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  index?: string
}

export function SectionLabel({ children, className = '', index }: SectionLabelProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <div ref={ref} className={`flex items-center gap-4 ${className}`}>
      {index && (
        <motion.span
          className="font-mono text-xs text-ink-tertiary"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {index}
        </motion.span>
      )}
      <motion.div
        className="h-[1px] w-8 bg-accent"
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.5, ease: easing.outExpo, delay: 0.15 }}
      />
      <motion.span
        className="text-xs font-mono uppercase tracking-widest text-ink-secondary"
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        {children}
      </motion.span>
    </div>
  )
}

/* ============================================================
   MagneticButton — Magnetic hover effect
   ============================================================ */

import { useState, MouseEvent } from 'react'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  onClick?: () => void
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  onClick,
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = (e.clientX - centerX) * strength
    const y = (e.clientY - centerY) * strength
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={btnRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.5 }}
    >
      {children}
    </motion.button>
  )
}
