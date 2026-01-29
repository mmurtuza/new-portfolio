import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'Md Murtuza Hussain | Senior Software Engineer',
    template: '%s | Md Murtuza Hussain',
  },
  description: 'Reliable Senior Software Engineer specializing in scalable backend systems with Laravel, PHP, and Golang. Delivering high-performance solutions.',
  keywords: [
    'Senior Software Engineer',
    'Golang Developer',
    'Laravel Developer',
    'PHP Developer',
    'Reliable Software Engineer',
    'Backend Developer',
    'System Architecture',
    'Web Development',
    'Go Lang',
    'Software Developer'
  ],
  authors: [{ name: 'Md Murtuza Hussain', url: 'https://murtuza.dev' }],
  creator: 'Md Murtuza Hussain',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://murtuza.dev',
    title: 'Md Murtuza Hussain | Senior Software Engineer',
    description: 'Reliable Senior Software Engineer specializing in scalable backend systems with Laravel, PHP, and Golang. Delivering high-performance solutions.',
    siteName: 'Md Murtuza Hussain',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Md Murtuza Hussain - Senior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md Murtuza Hussain | Senior Software Engineer',
    description: 'Reliable Senior Software Engineer specializing in scalable backend systems with Laravel, PHP, and Golang. Delivering high-performance solutions.',
    images: ['/banner.png'],
    creator: '@murtuza_dev',
  },
  metadataBase: new URL('https://murtuza.dev'),
  icons: {
    icon: [
      {
        url: '/icon-light.svg',
        media: '(prefers-color-scheme: light)',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-dark.svg',
        media: '(prefers-color-scheme: dark)',
        type: 'image/svg+xml',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
