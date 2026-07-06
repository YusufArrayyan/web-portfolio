'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function InteractiveMascot({ className = '' }: { className?: string }) {
  const [animationData, setAnimationData] = useState<any>(null)

  useEffect(() => {
    // Dynamically fetch the json from public folder to avoid bundling massive json
    fetch('/assets/mascot.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load mascot animation', err))
  }, [])

  if (!animationData) return null

  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={true} className="w-full h-full" />
    </div>
  )
}
