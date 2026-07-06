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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Rayyan — Full Stack Developer',
  description:
    'Muhammad Yusuf Arrayyan is a Full Stack Developer specializing in Next.js, TypeScript, FastAPI, and Go. Building high-performance web applications from Indonesia.',
  keywords: [
    'Rayyan',
    'Muhammad Yusuf Arrayyan',
    'Full Stack Developer',
    'Software Engineer',
    'Next.js',
    'TypeScript',
    'FastAPI',
    'Python',
    'Go',
    'React',
    'Portfolio',
    'Indonesia',
    'Bengkulu',
    'Web Developer',
  ],
  authors: [{ name: 'Muhammad Yusuf Arrayyan' }],
  creator: 'Muhammad Yusuf Arrayyan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Rayyan — Full Stack Developer',
    description:
      'Full Stack Developer specializing in Next.js, TypeScript, FastAPI, and Go. Building high-performance web applications.',
    siteName: 'Rayyan Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Yusuf Arrayyan — Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rayyan — Full Stack Developer',
    description: 'Full Stack Developer — Next.js, TypeScript, FastAPI, Go.',
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
