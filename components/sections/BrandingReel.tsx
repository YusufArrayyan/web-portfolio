'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionLabel } from '@/components/shared/AnimatedText'
import { easing } from '@/lib/animations'

const marqueeItems = [
  { label: 'UI Design', img: '/projects/aksesnonton_1.png' },
  { label: 'Branding', img: '/projects/elok_1.png' },
  { label: 'Motion', img: '/projects/RyNote_1.png' },
  { label: 'Web Dev', img: '/projects/digsi_1.png' },
  { label: 'Full-Stack', img: '/projects/anthfis_1.png' },
  { label: 'Creative', img: '/thumb1.png' },
  { label: 'Cinematic', img: '/thumb2.png' },
  { label: 'Editorial', img: '/projects/BeautyScent_1.png' },
]

// High-quality aesthetic thumbnails generated for the creative showcase
const showcaseItems = [
  { img: '/thumbnails/cinematic.png', label: 'Cinematic', subtitle: 'Visual Storytelling' },
  { img: '/thumbnails/ambassador.png', label: 'Ambassadorship', subtitle: 'Campus Representation' },
  { img: '/thumbnails/brand.png', label: 'Brand Selling', subtitle: 'Product Campaign' },
  { img: '/thumbnails/story.png', label: 'Story Telling', subtitle: 'Narrative Vlog' },
  { img: '/thumbnails/motion.png', label: 'Motion', subtitle: 'Dynamic Editing' },
]

/* ============================================================
   Marquee Track — infinite scroll
   ============================================================ */

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems]

  return (
    <div className={`flex gap-4 ${reverse ? 'marquee-track-reverse' : 'marquee-track'}`}>
      {items.map((item, i) => (
        <div
          key={i}
          className="relative w-[280px] h-[180px] flex-shrink-0 rounded-2xl overflow-hidden border border-border group"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-secondary">
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ============================================================
   Thumbnail Card (Replaced VideoCard)
   ============================================================ */

function ThumbnailCard({ img, label, subtitle }: { img: string; label: string; subtitle: string }) {
  return (
    <motion.div
      className="relative aspect-video rounded-3xl overflow-hidden border border-border group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: easing.outExpo }}
      data-cursor="view"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt={label}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      {/* View indicator */}
      <motion.div
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-bg/50 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500"
      >
        <svg className="w-4 h-4 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.div>

      {/* Label */}
      <div className="absolute bottom-6 left-6">
        <h4 className="font-display text-2xl md:text-3xl font-800 text-ink tracking-tight mb-1">{label}</h4>
        <p className="text-xs font-mono uppercase tracking-widest text-accent">{subtitle}</p>
      </div>
    </motion.div>
  )
}

/* ============================================================
   BrandingReel Section
   ============================================================ */

export default function BrandingReel() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px' })

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-surface relative overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-border" />

      {/* Marquee rows */}
      <div className="mb-24 space-y-4 overflow-hidden">
        <MarqueeTrack reverse={false} />
        <MarqueeTrack reverse={true} />
      </div>

      {/* Section header */}
      <div className="container-main mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="space-y-6">
            <SectionLabel index="03">Branding & Motion</SectionLabel>
            <motion.h2
              className="font-display text-fluid-3xl font-800 tracking-tighter text-ink"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: easing.outExpo }}
            >
              Creative
              <br />
              Showcase
            </motion.h2>
          </div>
          <motion.p
            className="max-w-xs text-sm text-ink-secondary leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Beyond engineering, I specialize in visual storytelling through motion graphics
            and brand design.
          </motion.p>
        </div>
      </div>

      {/* Video showcase grid */}
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: easing.outExpo }}
            >
              <ThumbnailCard {...item} />
            </motion.div>
          ))}
        </div>

        {/* Scrolling text row */}
        <motion.div
          className="mt-20 overflow-hidden py-12 -my-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="flex items-center w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {/* First Half */}
            <div className="flex items-center gap-10 pr-10">
              {Array(4).fill(null).map((_, i) => (
                <span key={i} className="flex items-center gap-10">
                  <span className="font-display text-8xl font-800 tracking-tighter text-ink-tertiary/20 uppercase">
                    Creative
                  </span>
                  <span className="w-4 h-4 rounded-full bg-accent flex-shrink-0" />
                  <span className="font-display text-8xl font-800 tracking-tighter text-ink-tertiary/20 uppercase italic">
                    Developer
                  </span>
                  <span className="w-4 h-4 rounded-full bg-border flex-shrink-0" />
                </span>
              ))}
            </div>
            {/* Second Half (Exact Duplicate) */}
            <div className="flex items-center gap-10 pr-10">
              {Array(4).fill(null).map((_, i) => (
                <span key={i} className="flex items-center gap-10">
                  <span className="font-display text-8xl font-800 tracking-tighter text-ink-tertiary/20 uppercase">
                    Creative
                  </span>
                  <span className="w-4 h-4 rounded-full bg-accent flex-shrink-0" />
                  <span className="font-display text-8xl font-800 tracking-tighter text-ink-tertiary/20 uppercase italic">
                    Developer
                  </span>
                  <span className="w-4 h-4 rounded-full bg-border flex-shrink-0" />
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
