import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';
import { matterFont, seasonFont } from './fonts';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: 'Mangesh Kumar Chauhan | React, React Native, Next.js, UI/UX Expert',
    template: '%s | Mangesh Kumar Chauhan',
  },
  description:
    'Discover the portfolio of Mangesh Kumar Chauhan, an expert Frontend Developer specializing in React, React Native, Next.js, and TypeScript. Explore innovative UI/UX designs and responsive applications. View projects and get in touch.',
  keywords: [
    'Mangesh Kumar Chauhan',
    'Mangesh',
    'Mangesh Kumar',
    'Frontend Developer',
    'React',
    'React Native',
    'Next.js',
    'TypeScript',
    'UI/UX',
    'portfolio',
    'web developer',
  ],
  authors: [{ name: 'Mangesh Kumar Chauhan', url: 'https://github.com/mangeshkchauhan' }],
  creator: 'Mangesh Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Mangesh Kumar Chauhan - Portfolio',
    title: 'Mangesh Kumar Chauhan | React, React Native, Next.js, UI/UX Expert',
    description:
      'Frontend Developer specializing in React, React Native, Next.js, and TypeScript. Explore projects and get in touch.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mangesh Kumar Chauhan | React, React Native, Next.js, UI/UX Expert',
    description: 'Frontend Developer portfolio - React, Next.js, TypeScript, React Native.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  category: 'portfolio',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#000000' }],
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mangesh Kumar Chauhan',
  url: siteUrl ?? 'https://github.com/mangeshkchauhan',
  image: siteUrl ? `${siteUrl}/og-image.png` : undefined,
  jobTitle: 'Frontend Developer',
  description:
    'Expert Frontend Developer specializing in React, React Native, Next.js, and TypeScript. Building polished web and mobile experiences.',
  sameAs: [
    'https://github.com/mangeshkchauhan',
    'https://twitter.com/mangeshkchauhan',
    'https://www.linkedin.com/in/mangeshkchauhan/',
  ],
  knowsAbout: ['React', 'React Native', 'Next.js', 'TypeScript', 'UI/UX'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${matterFont.variable} ${seasonFont.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          Skip to main content
        </a>
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
  );
}
