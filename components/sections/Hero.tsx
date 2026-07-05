'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { easing, staggerBase, fadeInUp, wordRevealContainer } from '@/lib/animations'
import { splitWords } from '@/lib/utils'

const ThreeScene = dynamic(() => import('@/components/3d/Scene'), {
  ssr: false,
  loading: () => null,
})

/* ============================================================
   Floating Thumbnail Card — replaces empty video cards
   ============================================================ */

interface FloatingCardProps {
  src: string
  className: string
  rotate: number
  delay: number
  label: string
}

function FloatingCard({ src, className, rotate, delay, label }: FloatingCardProps) {
  return (
    <motion.div
      className={`absolute ${className} hidden xl:block`}
      initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ duration: 1.2, delay, ease: easing.outExpo }}
      style={{ animation: `float ${5 + delay}s ease-in-out infinite` }}
    >
      <motion.div
        className="relative w-44 h-56 md:w-52 md:h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        whileHover={{ scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover opacity-60 hover:opacity-90 transition-opacity duration-700"
          sizes="208px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="text-[9px] font-mono uppercase tracking-widest text-white/60">
            {label}
          </span>
          <div className="w-6 h-6 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
            <div className="w-2 h-2 bg-accent rounded-full" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ============================================================
   Stat Badge
   ============================================================ */

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-1"
      variants={fadeInUp}
    >
      <span className="font-display text-3xl md:text-4xl font-800 text-accent">{value}</span>
      <span className="text-[10px] font-mono uppercase tracking-widest text-ink-tertiary">{label}</span>
    </motion.div>
  )
}

/* ============================================================
   Hero Word Reveal Headline
   ============================================================ */

function HeroHeadline({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = useMemo(() => splitWords(text), [text])

  return (
    <motion.div
      className="flex flex-wrap gap-x-[0.2em]"
      variants={wordRevealContainer}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block pb-2 -mb-2 pr-2 -mr-2">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%' },
              visible: {
                y: '0%',
                transition: { duration: 0.9, delay: delay + i * 0.04, ease: easing.outExpo },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}

/* ============================================================
   Hero Section
   ============================================================ */

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[var(--nav-height)]"
    >
      {/* 3D Scene — background */}
      <div className="absolute inset-0 pointer-events-none">
        <ThreeScene className="opacity-40" />
      </div>

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />

      {/* Floating project thumbnail cards — visible on xl+ */}
      <FloatingCard
        src="/projects/aksesnonton_1.png"
        className="top-[18%] left-[4%]"
        rotate={-8}
        delay={0.6}
        label="AksesNonton"
      />
      <FloatingCard
        src="/projects/digsi_1.png"
        className="top-[50%] left-[8%]"
        rotate={5}
        delay={0.8}
        label="DigSi"
      />
      <FloatingCard
        src="/projects/RyNote_1.png"
        className="top-[12%] right-[4%]"
        rotate={9}
        delay={0.7}
        label="RyNote"
      />
      <FloatingCard
        src="/projects/elok_1.png"
        className="top-[50%] right-[6%]"
        rotate={-6}
        delay={0.9}
        label="Elok Galo"
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 container-main"
        style={{ y, opacity }}
      >
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easing.outExpo }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-ink-secondary">
            Available for work
          </span>
        </motion.div>

        {/* Hero headline */}
        <div className="overflow-visible mb-2">
          <h1
            className="font-display text-fluid-hero font-800 leading-none tracking-tighter text-ink uppercase px-2"
            style={{ letterSpacing: '-0.02em' }}
          >
            <HeroHeadline text="Full Stack" delay={0.3} />
          </h1>
        </div>
        <div className="overflow-visible mb-12">
          <h1
            className="font-display text-fluid-hero font-800 leading-none tracking-tighter text-accent uppercase px-2"
            style={{ letterSpacing: '-0.02em' }}
          >
            <HeroHeadline text="Developer" delay={0.42} />
          </h1>
        </div>

        {/* Sub row */}
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10"
          variants={staggerBase}
          initial="hidden"
          animate="visible"
        >
          {/* Description */}
          <motion.p
            className="max-w-md text-ink-secondary text-base leading-relaxed font-body"
            variants={fadeInUp}
          >
            Building high-performance web applications with Next.js, TypeScript,
            FastAPI & Go — from Bengkulu, Indonesia, for the world.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex items-center gap-8 md:gap-12"
            variants={staggerBase}
          >
            <StatBadge value="10+" label="Projects" />
            <div className="w-[1px] h-8 bg-border" />
            <StatBadge value="16+" label="Certs" />
            <div className="w-[1px] h-8 bg-border" />
            <StatBadge value="3+" label="Yrs Exp" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex items-center gap-4"
            variants={fadeInUp}
          >
            <button
              className="btn-primary group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="View my projects"
            >
              View Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              className="btn-secondary group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Go to contact section"
            >
              Get in touch
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ink-tertiary">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-border to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-accent"
            animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border" />
    </section>
  )
}
