import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'Bisrat Dereje | Software Engineer',
    template: '%s | Bisrat Dereje'
  },
  description: 'Software Engineer specializing in building reliable, well-structured web applications and scalable systems.',
  keywords: ['Bisrat Dereje', 'Software Engineer', 'Full Stack Developer', 'Web Development', 'Addis Ababa', 'Ethiopia', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Bisrat Dereje' }],
  creator: 'Bisrat Dereje',
  metadataBase: new URL('https://bisratdereje.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bisratdereje.vercel.app',
    title: 'Bisrat Dereje | Software Engineer',
    description: 'Software Engineer specializing in building reliable, well-structured web applications and scalable systems.',
    siteName: 'Bisrat Dereje Portfolio',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Bisrat Dereje',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bisrat Dereje | Software Engineer',
    description: 'Software Engineer specializing in building reliable, well-structured web applications and scalable systems.',
    creator: '@bisrat_dereje',
    images: ['/images/profile.jpg'],
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
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/images/profile.jpg',
        type: 'image/jpeg',
      }
    ],
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bisrat Dereje',
    url: 'https://bisratdereje.vercel.app',
    jobTitle: 'Software Engineer',
    sameAs: [
      'https://github.com/Bisrat-19',
      'https://linkedin.com/in/bisrat-dereje-434496356',
    ],
    description: 'Software Engineer specializing in building reliable, well-structured web applications and scalable systems.',
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

