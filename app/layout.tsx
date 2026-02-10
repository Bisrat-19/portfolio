import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'Bisrat Dereje Gizaw | Software Engineer | Portfolio',
    template: '%s | Bisrat Dereje'
  },
  description: 'Bisrat Dereje Gizaw — Software engineer born in Chiro town, Ethiopia. Portfolio showcasing full-stack development, React, Next.js, and scalable systems. Based in Addis Ababa.',
  keywords: [
    'Bisrat Dereje',
    'Bisrat Dereje Gizaw',
    'Bisrat Gizaw',
    'Software Engineer',
    'Software Engineer Ethiopia',
    'Full Stack Developer',
    'Web Developer Ethiopia',
    'Chiro town',
    'Chiro Ethiopia',
    'Addis Ababa',
    'Ethiopia',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Node.js',
  ],
  authors: [{ name: 'Bisrat Dereje Gizaw', url: 'https://bisratdereje.me' }],
  creator: 'Bisrat Dereje Gizaw',
  metadataBase: new URL('https://bisratdereje.me'),
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://bisratdereje.me',
    title: 'Bisrat Dereje Gizaw | Software Engineer born in Chiro town',
    description: 'Bisrat Dereje Gizaw — Software engineer born in Chiro town, Ethiopia. Full-stack developer building web applications and scalable systems in Addis Ababa.',
    siteName: 'Bisrat Dereje Gizaw Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bisrat Dereje Gizaw - Software Engineer from Chiro town, Ethiopia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bisrat Dereje Gizaw | Software Engineer | Chiro town',
    description: 'Bisrat Dereje Gizaw — Software engineer born in Chiro town. Full-stack developer in Addis Ababa.',
    creator: '@bisrat_dereje',
    images: ['/og-image.png'],
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
    name: 'Bisrat Dereje Gizaw',
    alternateName: ['Bisrat Dereje', 'Bisrat Gizaw'],
    givenName: 'Bisrat',
    familyName: 'Gizaw',
    url: 'https://bisratdereje.me',
    jobTitle: 'Software Engineer',
    description: 'Bisrat Dereje Gizaw — Software engineer born in Chiro town, Ethiopia. Full-stack developer building web applications and scalable systems.',
    image: 'https://bisratdereje.me/og-image.png',
    birthPlace: {
      '@type': 'Place',
      name: 'Chiro',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chiro',
        addressRegion: 'Oromia',
        addressCountry: 'Ethiopia',
      },
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
    name: 'Bisrat Dereje Gizaw - Software Engineer',
    url: 'https://bisratdereje.me',
    description: 'Portfolio of Bisrat Dereje Gizaw, software engineer born in Chiro town, Ethiopia.',
    author: {
      '@type': 'Person',
      name: 'Bisrat Dereje Gizaw',
      jobTitle: 'Software Engineer',
      birthPlace: 'Chiro town, Ethiopia',
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

