'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { servicesData } from '@/data/experience'
import { SectionLabel } from '@/components/shared/AnimatedText'
import { easing } from '@/lib/animations'

function ServiceRow({ service, index }: { service: typeof servicesData[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: easing.outExpo }}
      className="border-b border-border"
    >
      <button
        className="w-full py-8 flex items-center justify-between group text-left"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-6 md:gap-10">
          <span className="font-mono text-xs text-ink-tertiary w-6">{service.id}</span>
          <motion.h3
            className="font-display text-2xl md:text-4xl font-800 tracking-tight text-ink group-hover:text-accent transition-colors duration-300"
            animate={{ x: open ? 8 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {service.title}
          </motion.h3>
        </div>

        <motion.div
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-300"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: easing.outExpo }}
        >
          <svg
            className="w-4 h-4 text-ink-secondary group-hover:text-bg transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easing.outExpo }}
            className="overflow-hidden"
          >
            <div className="pl-12 md:pl-16 pb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-ink-secondary text-base leading-relaxed font-body">
                {service.description}
              </p>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-ink-tertiary mb-4">
                  Deliverables
                </p>
                <ul className="space-y-2">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-sm font-body text-ink-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px' })

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-bg relative"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-border" />

      <div className="container-main">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 mb-16">
          <div className="space-y-6">
            <SectionLabel index="06">What I Do</SectionLabel>
            <motion.h2
              className="font-display text-fluid-3xl font-800 tracking-tighter text-ink"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: easing.outExpo }}
            >
              Service
              <br />
              Offerings
            </motion.h2>
          </div>
          <motion.p
            className="max-w-xs text-sm text-ink-secondary leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            End-to-end digital product creation — from concept and design to
            engineering and deployment.
          </motion.p>
        </div>

        {/* Service accordion */}
        <div>
          {servicesData.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
