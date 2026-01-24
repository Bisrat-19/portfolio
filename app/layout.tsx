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
  metadataBase: new URL('https://bisratdereje.me'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bisratdereje.me',
    title: 'Bisrat Dereje | Software Engineer',
    description: 'Software Engineer specializing in building reliable, well-structured web applications and scalable systems.',
    siteName: 'Bisrat Dereje Portfolio',
    images: [
      {
        url: '/og-image.png',
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
    url: 'https://bisratdereje.me',
    jobTitle: 'Software Engineer',
    description: 'Software Engineer specializing in building reliable, well-structured web applications and scalable systems.',
    image: 'https://bisratdereje.me/og-image.png',
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
      'System Architecture'
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

