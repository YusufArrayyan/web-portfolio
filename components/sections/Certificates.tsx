'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import { certificatesData, type Certificate } from '@/data/certificates'
import { SectionLabel } from '@/components/shared/AnimatedText'
import { easing, overlayVariants, drawerVariants } from '@/lib/animations'

/* ============================================================
   Certificate Card
   ============================================================ */

function CertCard({ cert, index, onOpen }: {
  cert: Certificate
  index: number
  onOpen: (cert: Certificate) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05, ease: easing.outExpo }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border cursor-pointer group"
      onClick={() => onOpen(cert)}
      data-cursor
      data-cursor-label="View"
    >
      <Image
        src={cert.image}
        alt={cert.title}
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
        onError={() => {}} // Silent fail for missing images
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4"
        initial={{ opacity: 0, y: 10 }}
      >
        <div
          className="w-4 h-[2px] rounded-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundColor: cert.color }}
        />
        <p
          className="text-[10px] font-mono uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ color: cert.color }}
        >
          {cert.issuer}
        </p>
        <p className="text-xs font-body text-ink line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {cert.title}
        </p>
      </motion.div>

      {/* Number badge */}
      <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-bg/80 backdrop-blur-sm flex items-center justify-center">
        <span className="text-[8px] font-mono text-ink-tertiary">{String(index + 1).padStart(2, '0')}</span>
      </div>
    </motion.div>
  )
}

/* ============================================================
   Certificate Lightbox
   ============================================================ */

function CertLightbox({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-bg/90 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-2xl"
        variants={drawerVariants}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-secondary hover:text-ink transition-colors"
        >
          Close
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border">
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Info bar */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="font-display text-xl font-800 text-ink">{cert.title}</p>
            <p className="text-sm font-mono text-ink-secondary mt-1">
              {cert.issuer} · {cert.year} · {cert.category}
            </p>
          </div>
          <div
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: cert.color }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ============================================================
   Certificates Section
   ============================================================ */

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null)
  const [filter, setFilter] = useState<string>('All')
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px' })

  const categories = ['All', ...Array.from(new Set(certificatesData.map((c) => c.category)))]
  const filtered = filter === 'All'
    ? certificatesData
    : certificatesData.filter((c) => c.category === filter)

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="section-padding bg-bg relative"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-border" />

      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 mb-16">
          <div className="space-y-6">
            <SectionLabel index="04">Credentials</SectionLabel>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: easing.outExpo }}
            >
              <h2 className="font-display text-fluid-3xl font-800 tracking-tighter text-ink">
                Global
                <br />
                <span className="text-accent">Recognition</span>
              </h2>
            </motion.div>
          </div>

          <motion.div
            className="text-right"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="font-display text-8xl font-800 text-accent/20">22+</p>
            <p className="text-xs font-mono uppercase tracking-widest text-ink-tertiary -mt-2">
              Accreditations
            </p>
          </motion.div>
        </div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 0.4 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`tag transition-all duration-200 ${
                filter === cat
                  ? 'bg-accent text-bg border-accent'
                  : 'hover:border-border-hover hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, i) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <CertCard cert={cert} index={i} onOpen={setSelected} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <CertLightbox cert={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
