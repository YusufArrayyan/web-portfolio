'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import { projectsData, type Project } from '@/data/projects'
import { SectionLabel } from '@/components/shared/AnimatedText'
import { easing, drawerVariants, overlayVariants } from '@/lib/animations'
import { padNumber } from '@/lib/utils'

/* ============================================================
   Project Row — Editorial list item
   ============================================================ */

function ProjectRow({ project, index, onOpen }: {
  project: Project
  index: number
  onOpen: (project: Project) => void
}) {
  const [hovered, setHovered] = useState(false)
  const rowRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(rowRef, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: easing.outExpo }}
    >
      <div
        className="group relative border-b border-border py-8 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onOpen(project)}
        data-cursor
        data-cursor-label="Open"
      >
        {/* Background hover fill */}
        <motion.div
          className="absolute inset-0 -mx-6 rounded-2xl"
          style={{ backgroundColor: project.accentColor }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10 grid grid-cols-12 items-center gap-4">
          {/* Number */}
          <div className="col-span-1 hidden md:block">
            <span className="font-mono text-xs text-ink-tertiary">
              {padNumber(index + 1)}
            </span>
          </div>

          {/* Title */}
          <div className="col-span-12 md:col-span-4">
            <motion.h3
              className="font-display text-3xl md:text-4xl font-800 tracking-tighter text-ink"
              animate={{ x: hovered ? 8 : 0 }}
              transition={{ duration: 0.3, ease: easing.outExpo }}
            >
              {project.title}
            </motion.h3>
          </div>

          {/* Category + year */}
          <div className="col-span-5 md:col-span-3 hidden md:block">
            <p className="text-xs font-mono uppercase tracking-widest text-ink-secondary">
              {project.category}
            </p>
            <p className="text-xs font-mono text-ink-tertiary mt-1">{project.year}</p>
          </div>

          {/* Tech pills */}
          <div className="col-span-4 md:col-span-3 hidden lg:flex flex-wrap gap-1">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="tag text-[9px]">{t}</span>
            ))}
          </div>

          {/* Arrow */}
          <div className="col-span-1 ml-auto md:col-span-1">
            <motion.div
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition-colors duration-300"
              animate={{ rotate: hovered ? -45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-4 h-4 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Thumbnail preview on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute right-16 top-1/2 -translate-y-1/2 w-40 h-28 rounded-xl overflow-hidden border border-border z-20 pointer-events-none hidden xl:block"
              initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.85, rotate: 4 }}
              transition={{ duration: 0.25, ease: easing.outExpo }}
            >
              <Image
                src={project.images[0] || project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

/* ============================================================
   Project Modal — Full-screen detail
   ============================================================ */

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const [activeImg, setActiveImg] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-bg/80 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-surface border border-border rounded-t-4xl md:rounded-4xl overflow-hidden flex flex-col md:flex-row"
        variants={drawerVariants}
      >
        {/* Left — Media */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            autoPlay
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/50 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent md:hidden" />

          {/* Year badge */}
          <div className="absolute top-4 left-4">
            <span className="tag bg-bg/60 backdrop-blur-sm">{project.year}</span>
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 flex flex-col gap-6">
          {/* Close */}
          <div className="flex items-center justify-between">
            <span className="tag" style={{ color: project.color, borderColor: `${project.color}40` }}>
              {project.category}
            </span>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-elevated transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <h2 className="font-display text-5xl font-800 tracking-tighter text-ink">
            {project.title}
          </h2>

          <p className="text-ink-secondary text-base leading-relaxed font-body">
            {project.longDescription}
          </p>

          {/* Role */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-tertiary">Role</span>
            <span className="text-sm font-body text-ink">{project.role}</span>
          </div>

          {/* Tech */}
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-ink-tertiary mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-ink-tertiary mb-3">
              Key Features
            </p>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm font-body text-ink-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Image thumbnails */}
          {project.images.length > 0 && (
            <div className="grid grid-cols-3 gap-2">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                    activeImg === i ? 'border-accent' : 'border-border'
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* CTA */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-fit mt-auto"
          >
            Visit Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ============================================================
   Projects Section
   ============================================================ */

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px' })

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-bg relative"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-border" />

      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
          <div className="space-y-6">
            <SectionLabel index="02">Selected Work</SectionLabel>
            <motion.h2
              className="font-display text-fluid-3xl font-800 tracking-tighter text-ink"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: easing.outExpo }}
            >
              Projects that
              <br />
              <span className="text-ink-tertiary italic">speak volumes</span>
            </motion.h2>
          </div>
          <motion.p
            className="max-w-xs text-sm text-ink-secondary leading-relaxed font-body"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            A curated selection of digital experiences — no templates, no shortcuts.
            Pure engineering and craft.
          </motion.p>
        </div>

        {/* Project list */}
        <div className="-mx-6 px-6">
          {projectsData.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
