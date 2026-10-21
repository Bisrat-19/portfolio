import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { Lexend } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend', display: 'swap' })

const siteUrl = 'https://bisratdereje.me'
const title = 'Bisrat Dereje | Software Engineer'
// Leads with the full name so Google uses it as the search snippet for name searches (~155 chars max)
const description =
  'Bisrat Dereje is a software engineer based in Addis Ababa, Ethiopia, who builds fast, reliable web and mobile applications and AI-powered products.'

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
    'NestJS',
    'Microservices',
    'Backend Engineer Ethiopia',
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
    // Google shows this as the site name above the URL in search results
    siteName: 'Bisrat Dereje',
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
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  other: {
    'geo.region': 'ET',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Bisrat Dereje',
      givenName: 'Bisrat',
      familyName: 'Dereje',
      url: `${siteUrl}/`,
      email: 'mailto:bdereje996@gmail.com',
      jobTitle: 'Software Engineer',
      description,
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Software Engineer',
        occupationLocation: { '@type': 'City', name: 'Addis Ababa, Ethiopia' },
      },
      image: {
        '@type': 'ImageObject',
        url: `${siteUrl}/bisrat.jpg`,
        width: 800,
        height: 800,
      },
      sameAs: [
        'https://github.com/Bisrat-19',
        'https://www.linkedin.com/in/bisrat19/',
        'https://t.me/Brt_D19',
        'https://www.instagram.com/bisrat_d19',
        'https://twitter.com/bisrat_dereje',
      ],
      knowsAbout: [
        'Software Engineering',
        'Backend Development',
        'Microservices',
        'Full Stack Development',
        'AI Agents',
        'System Architecture',
        'TypeScript',
        'JavaScript',
        'Python',
        'Go',
        'Node.js',
        'NestJS',
        'Express.js',
        'Django',
        'React',
        'Next.js',
        'Flutter',
        'GraphQL',
        'gRPC',
        'Kafka',
        'RabbitMQ',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Docker',
        'Kubernetes',
        'AWS',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Infra Tech Software Services',
        url: 'https://www.infratechsoftwareservices.com/',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Addis Ababa University',
        url: 'https://www.aau.edu.et/',
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
      // Google's preferred source for the site name shown in search results
      name: 'Bisrat Dereje',
      alternateName: ['Bisrat Dereje Portfolio', 'bisratdereje.me'],
      url: `${siteUrl}/`,
      description,
      inLanguage: 'en',
      author: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profilepage`,
      url: `${siteUrl}/`,
      name: title,
      description,
      dateModified: new Date().toISOString(),
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
    <html lang="en" className={lexend.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
