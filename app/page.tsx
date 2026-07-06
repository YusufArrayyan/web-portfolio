'use client'

import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'

import Preloader from '@/components/ui/Preloader'
import Cursor from '@/components/ui/Cursor'
import SmoothScroll from '@/components/ui/SmoothScroll'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import dynamic from 'next/dynamic'

const Projects = dynamic(() => import('@/components/sections/Projects'))
const BrandingReel = dynamic(() => import('@/components/sections/BrandingReel'))
const Certificates = dynamic(() => import('@/components/sections/Certificates'))
const Experience = dynamic(() => import('@/components/sections/Experience'))
const Services = dynamic(() => import('@/components/sections/Services'))
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  const [loading, setLoading] = useState(true)

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {/* Custom cursor — desktop only */}
      <Cursor />

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      {/* Main site */}
      {!loading && (
        <SmoothScroll>
          <main className="bg-bg text-ink overflow-x-hidden relative">
            {/* Global Noise Overlay */}
            <div
              className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <BrandingReel />
            <Certificates />
            <Experience />
            <Services />
            <Contact />
            <Footer />
          </main>
        </SmoothScroll>
      )}
    </>
  )
}
