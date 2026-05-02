'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { easing } from '@/lib/animations'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/YusufArrayyan' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yusuf-arrayyan/' },
  { label: 'Instagram', href: 'https://www.instagram.com/yus.arrya/' },
  { label: 'TikTok', href: 'https://tiktok.com/@yus.arrya' },
]

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bg border-t border-border">
      {/* Main footer */}
      <div className="container-main py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl">
                <Image src="/logo.png" alt="Rayyan" fill className="object-contain" />
              </div>
              <span className="font-display text-lg font-800 uppercase tracking-widest text-ink">
                Rayyan
              </span>
            </div>
            <p className="text-sm text-ink-secondary max-w-xs leading-relaxed font-body">
              Creative developer & designer crafting cinematic digital experiences from Indonesia.
            </p>
          </div>

          {/* Nav links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body text-ink-secondary hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            className="flex flex-col items-center gap-2 group"
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
              <svg className="w-4 h-4 text-ink-secondary group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              </svg>
            </div>
            <span className="text-[9px] font-mono uppercase tracking-widest text-ink-tertiary">
              Top
            </span>
          </motion.button>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-border mb-10" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Socials */}
          <div className="flex items-center gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono uppercase tracking-widest text-ink-tertiary hover:text-ink transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[10px] font-mono uppercase tracking-widest text-ink-tertiary">
            © {year} Rayyan. All rights reserved.
          </p>

          {/* Status */}
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink-tertiary">
              Available for work
            </span>
          </div>
        </div>
      </div>

      {/* Giant wordmark at bottom */}
      <div className="overflow-hidden border-t border-border">
        <motion.p
          className="font-display font-800 text-[8vw] tracking-tightest text-ink-tertiary/10 uppercase text-center leading-none py-6 select-none"
          style={{ letterSpacing: '-0.05em' }}
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing.outExpo }}
        >
          Rayyan
        </motion.p>
      </div>
    </footer>
  )
}
