import type { Metadata } from 'next';
import { Inter_Tight, Playfair_Display } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Peak — Futuristic, Apple-inspired landing page design',
  description: 'Peak presents a clean, Apple-inspired single-page site with a sleek hero, crisp sections, and a lightweight feel—designed for clarity and conversion.',
  keywords: ['peak', 'landing page', 'apple-inspired', 'futuristic design', 'single-page site', 'ux design', 'minimal UI', 'conversion-focused', 'branding', 'tech company'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Peak — Futuristic, Apple-inspired landing page design',
    description: 'Peak presents a clean, Apple-inspired single-page site with a sleek hero, crisp sections, and a lightweight feel—designed for clarity and conversion.',
    type: 'website',
    url: '/',
    siteName: 'Peak',
    images: [{ url: '/images/logo.svg', width: 1200, height: 630, alt: 'Peak — Futuristic, Apple-inspired landing page design' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peak — Futuristic, Apple-inspired landing page design',
    description: 'Peak presents a clean, Apple-inspired single-page site with a sleek hero, crisp sections, and a lightweight feel—designed for clarity and conversion.',
    images: ['/images/logo.svg']
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
