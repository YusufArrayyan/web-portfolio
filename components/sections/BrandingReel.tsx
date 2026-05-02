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

const showcaseVideos = [
  { src: '/vid1.mp4', label: 'Cinematic', subtitle: 'Visual Storytelling' },
  { src: '/vid2.mov', label: 'Ambassadorship', subtitle: 'Campus Representation' },
  { src: '/vid4.mov', label: 'Brand Selling', subtitle: 'Product Campaign' },
  { src: '/vid3.mov', label: 'Story Telling', subtitle: 'Narrative Vlog' },
  { src: '/vid5.mp4', label: 'Motion', subtitle: 'Dynamic Editing' },
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
   Video Showcase Card
   ============================================================ */

function VideoCard({ src, label, subtitle }: { src: string; label: string; subtitle: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <motion.div
      className="relative aspect-video rounded-3xl overflow-hidden border border-border group cursor-pointer"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      onClick={toggle}
      data-cursor="video"
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />

      {/* Play button */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-ink/90 flex items-center justify-center"
        animate={{ opacity: playing ? 0 : 1, scale: playing ? 0.8 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {!playing ? (
          <svg className="w-6 h-6 text-bg translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-bg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        )}
      </motion.div>

      {/* Label */}
      <div className="absolute bottom-6 left-6">
        <h4 className="font-display text-2xl font-800 text-ink">{label}</h4>
        <p className="text-xs font-mono uppercase tracking-widest text-ink-secondary mt-1">{subtitle}</p>
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
          {showcaseVideos.map((vid, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: easing.outExpo }}
            >
              <VideoCard {...vid} />
            </motion.div>
          ))}
        </div>

        {/* Scrolling text row */}
        <motion.div
          className="mt-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-10 whitespace-nowrap"
            animate={{ x: [0, -400] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {Array(6).fill(null).map((_, i) => (
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
