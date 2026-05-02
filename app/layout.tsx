import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Syne, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rayyan — Creative Developer & Designer',
  description:
    'Rayyan is a creative frontend developer and designer crafting cinematic digital experiences. Specializing in immersive web design, React, and high-fidelity UI.',
  keywords: [
    'Rayyan',
    'Creative Developer',
    'Frontend Developer',
    'UI Designer',
    'Portfolio',
    'React',
    'Next.js',
    'Framer Motion',
    'Indonesia',
  ],
  authors: [{ name: 'Rayyan' }],
  creator: 'Rayyan',
  metadataBase: new URL('https://rayyan.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rayyan.dev',
    title: 'Rayyan — Creative Developer & Designer',
    description:
      'Cinematic digital experiences crafted with precision. Frontend development, UI design, and motion.',
    siteName: 'Rayyan Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rayyan Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rayyan — Creative Developer & Designer',
    description: 'Cinematic digital experiences crafted with precision.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-ink overflow-x-hidden antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
