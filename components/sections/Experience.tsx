'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { experienceData, type ExperienceItem } from '@/data/experience'
import { SectionLabel } from '@/components/shared/AnimatedText'
import { easing } from '@/lib/animations'

/* ============================================================
   Experience Item
   ============================================================ */

function ExpItem({ item, index }: { item: ExperienceItem; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' })

  const typeColor =
    item.type === 'Work'
      ? 'bg-accent text-bg'
      : 'bg-white/10 text-ink'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: easing.outExpo }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-2 h-2 rounded-full bg-border">
        <motion.div
          className="absolute inset-0 rounded-full bg-accent"
          animate={{ scale: isInView ? [0, 1.4, 1] : 0 }}
          transition={{ duration: 0.5, delay: index * 0.06 + 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="pl-8 pb-12 border-l border-border ml-1 last:pb-0 last:border-transparent">
        {/* Header row */}
        <button
          className="w-full text-left group"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              {/* Period */}
              <span className="font-mono text-xs text-ink-tertiary uppercase tracking-widest">
                {item.date}
              </span>

              {/* Role */}
              <h3 className="font-display text-xl md:text-2xl font-800 tracking-tight text-ink mt-1 group-hover:text-accent transition-colors duration-300">
                {item.role}
              </h3>

              {/* Company + type */}
              <div className="flex items-center gap-3 mt-2">
                <span className="text-sm font-body text-ink-secondary">{item.company}</span>
                <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full ${typeColor}`}>
                  {item.type}
                </span>
              </div>
            </div>

            {/* Expand icon */}
            <motion.div
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0 mt-1"
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-3.5 h-3.5 text-ink-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </motion.div>
          </div>
        </button>

        {/* Expandable content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: easing.outExpo }}
              className="overflow-hidden"
            >
              <div className="pt-6 space-y-6">
                {/* Description */}
                <p className="text-ink-secondary text-sm leading-relaxed font-body">
                  {item.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 text-xs font-mono text-ink-tertiary uppercase tracking-widest">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {item.location}
                </div>

                {/* Images */}
                {item.images && item.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {item.images.map((img, i) => (
                      <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-border">
                        <Image
                          src={img}
                          alt=""
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
                          sizes="150px"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

/* ============================================================
   Experience Section
   ============================================================ */

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px' })

  const workItems = experienceData.filter((e) => e.type === 'Work')
  const orgItems = experienceData.filter((e) => e.type === 'Organization')

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding bg-surface relative"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-border" />

      <div className="container-main">
        {/* Header - Changed layout to xl:flex-row and reduced font size to prevent overlapping */}
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-32 mb-20">
          <div className="xl:w-5/12 space-y-6">
            <SectionLabel index="05">Journey</SectionLabel>
            <motion.h2
              className="font-display text-fluid-2xl font-800 tracking-tighter text-ink"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: easing.outExpo }}
            >
              The
              <br />
              Timeline
            </motion.h2>
            <motion.p
              className="text-sm text-ink-secondary leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              A retrospective of professional evolution — each milestone a leap in
              understanding of the digital medium.
            </motion.p>
          </div>

          {/* Timeline entries */}
          <div className="xl:w-7/12">
            <div className="mb-16">
              <p className="text-[10px] font-mono uppercase tracking-widest text-accent mb-8">
                Work Experience
              </p>
              {workItems.map((item, i) => (
                <ExpItem key={item.id} item={item} index={i} />
              ))}
            </div>

            <div className="mt-12">
              <p className="text-[10px] font-mono uppercase tracking-widest text-ink-tertiary mb-8">
                Organizations & Activities
              </p>
              {orgItems.map((item, i) => (
                <ExpItem key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
