'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import { SectionLabel } from '@/components/shared/AnimatedText'
import AnimatedText from '@/components/shared/AnimatedText'
import { staggerBase, fadeInUp, fadeInLeft, fadeInRight, scaleIn, easing } from '@/lib/animations'

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Framer Motion', 'Three.js'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Go', 'REST APIs'] },
  { category: 'Design', items: ['Figma', 'UI/UX', 'Motion Design', 'Brand Identity', 'Prototyping'] },
  { category: 'Tools', items: ['Vite', 'Docker', 'Git', 'Vercel', 'Firebase'] },
]

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '22+', label: 'Certifications' },
  { value: '5+', label: 'Projects Shipped' },
  { value: '100%', label: 'Passion' },
]

export default function About() {
  const [mode, setMode] = useState<'identity' | 'mastery'>('identity')
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-15% 0px' })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-border" />

      <div className="container-main">
        {/* Section label */}
        <SectionLabel index="01" className="mb-20">
          About Me
        </SectionLabel>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32 items-center">
          {/* Left — Image */}
          <motion.div
            className="relative"
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Profile image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/web-portfolio/profile.jpg"
                alt="Rayyan — Creative Developer"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />

              {/* Accent overlay */}
              <motion.div
                className="absolute inset-0 bg-accent/10 mix-blend-overlay"
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Stats overlay card */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, ease: easing.outExpo }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-display text-2xl font-800 text-accent">{s.value}</p>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-ink-secondary mt-1">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Location badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-elevated border border-border rounded-2xl px-5 py-3 hidden md:flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.8, ease: easing.outExpo }}
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono text-ink-secondary uppercase tracking-widest">
                Indonesia
              </span>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Mode toggle */}
            <div className="flex items-center gap-1 p-1 bg-elevated rounded-full border border-border w-fit mb-10">
              {(['identity', 'mastery'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`relative px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-colors duration-200 ${
                    mode === m ? 'text-bg' : 'text-ink-secondary hover:text-ink'
                  }`}
                >
                  {mode === m && (
                    <motion.div
                      layoutId="mode-pill"
                      className="absolute inset-0 bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{m}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {mode === 'identity' ? (
                <motion.div
                  key="identity"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: easing.outExpo }}
                  className="space-y-8"
                >
                  <AnimatedText
                    text="The art of the unknown."
                    className="font-display text-fluid-3xl font-800 tracking-tighter text-ink"
                    tag="h2"
                  />

                  <div className="space-y-5">
                    <p className="text-ink-secondary text-base leading-relaxed font-body">
                      I am Rayyan — a creative developer and designer driven by the
                      intersection of{' '}
                      <span className="text-ink font-500">creative chaos</span> and{' '}
                      <span className="text-ink font-500">mathematical precision</span>. I
                      don't just build interfaces — I orchestrate digital experiences that
                      demand attention.
                    </p>
                    <p className="text-ink-secondary text-base leading-relaxed font-body">
                      Based in Indonesia, working globally. Every project starts with a
                      deep understanding of what a product needs to feel, not just look —
                      and ends when the last animation feels exactly right.
                    </p>
                  </div>

                  {/* Info grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Location', value: 'Indonesia / Remote' },
                      { label: 'Focus', value: 'Cinematic UI & Engineering' },
                      { label: 'Availability', value: 'Open to projects' },
                      { label: 'Languages', value: 'ID, EN' },
                    ].map((item) => (
                      <div key={item.label} className="border border-border rounded-2xl p-4">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-ink-tertiary mb-2">
                          {item.label}
                        </p>
                        <p className="text-sm font-body text-ink font-500">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* CV download */}
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex w-fit"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download CV
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key="mastery"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: easing.outExpo }}
                  className="space-y-8"
                >
                  <AnimatedText
                    text="Full-stack mastery, cinematic execution."
                    className="font-display text-fluid-3xl font-800 tracking-tighter text-ink"
                    tag="h2"
                  />

                  <p className="text-ink-secondary text-base leading-relaxed font-body">
                    My expertise spans the entire product stack — from database architecture
                    to pixel-perfect animations. If it moves, I make it move with{' '}
                    <span className="text-ink font-500">purpose</span>.
                  </p>

                  {/* Skill groups */}
                  <div className="space-y-5">
                    {skills.map((group) => (
                      <div key={group.category} className="border-b border-border pb-5 last:border-0 last:pb-0">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-ink-tertiary mb-3">
                          {group.category}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((skill) => (
                            <span
                              key={skill}
                              className="tag hover:border-accent/30 hover:text-accent transition-colors duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
