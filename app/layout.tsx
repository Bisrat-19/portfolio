import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

const siteUrl = 'https://bisratdereje.me'
const title = 'Bisrat Dereje | Software Engineer'
const description = 'Software Engineer specializing in building reliable, well-structured web applications and scalable systems.'

export const metadata: Metadata = {
  title: {
    default: title,
    template: '%s | Bisrat Dereje'
  },
  description,
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
    'Django',
  ],
  authors: [{ name: 'Bisrat Dereje', url: siteUrl }],
  creator: 'Bisrat Dereje',
  metadataBase: new URL(siteUrl),
  // og:image and twitter:image come from app/opengraph-image.tsx and app/twitter-image.tsx
  openGraph: {
    type: 'profile',
    firstName: 'Bisrat',
    lastName: 'Dereje',
    locale: 'en_US',
    url: siteUrl,
    title,
    description,
    siteName: 'Bisrat Dereje Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@bisrat_dereje',
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
    canonical: '/',
  },
  manifest: '/manifest.json',
  other: {
    'geo.region': 'ET',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Bisrat Dereje',
      url: siteUrl,
      email: 'mailto:bdereje996@gmail.com',
      jobTitle: 'Software Engineer',
      description,
      image: {
        '@type': 'ImageObject',
        url: `${siteUrl}/Bisrat.png`,
        width: 1024,
        height: 1024,
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
        'Django',
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
        addressCountry: 'ET',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Bisrat Dereje - Software Engineer',
      url: siteUrl,
      description: 'Portfolio of Bisrat Dereje, Software Engineer in Addis Ababa, Ethiopia.',
      inLanguage: 'en',
      author: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: title,
      isPartOf: { '@id': `${siteUrl}/#website` },
      mainEntity: { '@id': `${siteUrl}/#person` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
