import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const siteUrl = 'https://jenilgajera.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Jenil Gajera Portfolio | MERN Stack Developer | Full Stack Developer',
    template: '%s | Jenil Gajera Portfolio'
  },
  description: 'Portfolio of Jenil Gajera - Expert MERN Stack Developer specializing in React, Node.js, MongoDB, and Express.js. View my projects, skills, and experience. Professional web developer portfolio.',
  keywords: [
    'Jenil Gajera',
    'Jenil Gajera Portfolio',
    'MERN Stack Developer',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'JavaScript Developer',
    'Web Developer',
    'Portfolio Website',
    'Jenil Gajera Portfolio Website',
    'MERN Developer India',
    'React Portfolio',
    'Next.js Developer',
    'TypeScript Developer'
  ],
  authors: [{ name: 'Jenil Gajera' }],
  creator: 'Jenil Gajera',
  publisher: 'Jenil Gajera',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Jenil Gajera Portfolio',
    title: 'Jenil Gajera Portfolio | MERN Stack Developer',
    description: 'Portfolio of Jenil Gajera - Expert MERN Stack Developer specializing in React, Node.js, MongoDB, and Express.js. View my projects, skills, and experience.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Jenil Gajera - MERN Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jenil Gajera Portfolio | MERN Stack Developer',
    description: 'Portfolio of Jenil Gajera - Expert MERN Stack Developer. View my projects, skills, and experience.',
    images: [`${siteUrl}/og-image.jpg`],
    creator: '@jenilgajera',
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Portfolio',
  classification: 'Portfolio Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="google-site-verification" content="" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
 
