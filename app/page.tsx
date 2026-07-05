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
