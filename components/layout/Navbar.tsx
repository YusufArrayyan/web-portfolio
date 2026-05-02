'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { easing } from '@/lib/animations'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActiveLink(href)
      setMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'navbar-frosted' : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: easing.outExpo }}
      >
        <div className="container-main flex items-center justify-between h-[var(--nav-height)]">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="relative w-9 h-9 overflow-hidden rounded-lg">
              <Image
                src="/web-portfolio/logo.png"
                alt="Rayyan"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display text-sm font-800 uppercase tracking-widest text-ink">
              Rayyan
            </span>
          </motion.a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                className="relative text-sm font-body text-ink-secondary hover:text-ink transition-colors duration-300 group"
                onClick={() => scrollTo(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06, ease: easing.outExpo }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[1px] bg-accent transition-all duration-300 ease-out-expo" />
              </motion.button>
            ))}
          </div>

          {/* CTA & Theme */}
          <div className="hidden md:flex items-center gap-4">
            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-ink-secondary hover:text-ink hover:bg-white/5 transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                {theme === 'dark' ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                )}
              </motion.button>
            )}
            
            <motion.a
              href="/web-portfolio/web-portfolio/MuhammadYusufArrayyan_UniversitasBengkulu__CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-widest text-ink-secondary hover:text-ink transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              CV
            </motion.a>
            <motion.a
              href="/web-portfolio/web-portfolio/MuhammadYusufArrayyan_UniversitasBengkulu_Portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-widest text-ink-secondary hover:text-ink transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.62 }}
            >
              Portfolio
            </motion.a>
            <motion.button
              className="btn-primary text-xs py-3 px-6"
              onClick={() => scrollTo('#contact')}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65, ease: easing.outExpo }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Hire me
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-[1.5px] bg-ink block"
              animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: easing.outExpo }}
            />
            <motion.span
              className="w-6 h-[1.5px] bg-ink block"
              animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-6 h-[1.5px] bg-ink block"
              animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: easing.outExpo }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg flex flex-col justify-between"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: easing.inOutExpo }}
          >
            <div className="container-main pt-32 pb-12 flex flex-col gap-2 flex-1 justify-center">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  className="text-left font-display text-6xl font-800 text-ink-secondary hover:text-accent transition-colors duration-200 py-2 border-b border-border"
                  onClick={() => scrollTo(link.href)}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.1 + i * 0.06, ease: easing.outExpo }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Bottom row */}
            <div className="container-main pb-12 flex items-center justify-between">
              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {['LinkedIn', 'GitHub', 'Instagram'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-xs font-mono uppercase tracking-widest text-ink-tertiary hover:text-ink transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </motion.div>
              <motion.div className="flex items-center gap-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
                <a
                  href="/web-portfolio/web-portfolio/MuhammadYusufArrayyan_UniversitasBengkulu__CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-3 px-6"
                >
                  Download CV
                </a>
                <a
                  href="/web-portfolio/web-portfolio/MuhammadYusufArrayyan_UniversitasBengkulu_Portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-3 px-6"
                >
                  Portfolio
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
