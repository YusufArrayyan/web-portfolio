'use client'

import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'

import Preloader from '@/components/ui/Preloader'
import Cursor from '@/components/ui/Cursor'
import SmoothScroll from '@/components/ui/SmoothScroll'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import BrandingReel from '@/components/sections/BrandingReel'
import Certificates from '@/components/sections/Certificates'
import Experience from '@/components/sections/Experience'
import Services from '@/components/sections/Services'
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
          <main className="bg-bg text-ink overflow-x-hidden">
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
