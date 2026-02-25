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
  keywords: [
    'Bisrat Dereje',
    'Software Engineer',
    'Software Engineer Ethiopia',
    'Full Stack Developer',
    'Web Developer Ethiopia',
    'Addis Ababa',
    'Ethiopia',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Node.js',
  ],
  authors: [{ name: 'Bisrat Dereje', url: 'https://bisratdereje.me' }],
  creator: 'Bisrat Dereje',
  metadataBase: new URL('https://bisratdereje.me'),
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://bisratdereje.me',
    title: 'Bisrat Dereje | Software Engineer',
    description: 'Software Engineer specializing in building reliable, well-structured web applications and scalable systems.',
    siteName: 'Bisrat Dereje Portfolio',
    images: [
      {
        url: '/Bisrat.png',
        width: 1200,
        height: 630,
        alt: 'Bisrat Dereje - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bisrat Dereje | Software Engineer',
    description: 'Software Engineer specializing in building reliable, well-structured web applications and scalable systems.',
    creator: '@bisrat_dereje',
    images: ['/Bisrat.png'],
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
        url: '/favicon.svg?v=1',
        type: 'image/svg+xml',
      }
    ],
    apple: '/favicon.svg?v=1',
  },
  alternates: {
    canonical: 'https://bisratdereje.me',
  },
  manifest: '/manifest.json',
  other: {
    'geo.region': 'ET',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bisrat Dereje',
    url: 'https://bisratdereje.me',
    jobTitle: 'Software Engineer',
    description: 'Software Engineer specializing in building reliable, well-structured web applications and scalable systems.',
    image: {
      '@type': 'ImageObject',
      url: 'https://bisratdereje.me/Bisrat.png',
      width: 1200,
      height: 630,
    },
    sameAs: [
      'https://github.com/Bisrat-19',
      'https://www.linkedin.com/in/bisrat19/',
      'https://twitter.com/bisrat_dereje',
    ],
    knowsAbout: [
      'Software Engineering',
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Full Stack Development',
      'System Architecture',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Addis Ababa University',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Addis Ababa',
      addressCountry: 'Ethiopia',
    },
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bisrat Dereje - Software Engineer',
    url: 'https://bisratdereje.me',
    description: 'Portfolio of Bisrat Dereje, Software Engineer in Addis Ababa, Ethiopia.',
    author: {
      '@type': 'Person',
      name: 'Bisrat Dereje',
      jobTitle: 'Software Engineer',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://bisratdereje.me/Bisrat.png',
      width: 1200,
      height: 630,
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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

