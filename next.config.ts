import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/web-portfolio/',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'three'],
  },
}

export default nextConfig
