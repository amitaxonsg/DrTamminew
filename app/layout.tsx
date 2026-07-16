import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { RevealProvider } from './components/reveal-provider';
import { SiteFrame } from './components/site-frame';
import { SITE } from './lib/site';
import './globals.css';
import './forms.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-serif',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? SITE.previewUrl;
const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === 'production';
const socialImage =
  process.env.NEXT_PUBLIC_SOCIAL_IMAGE_URL ?? '/assets/images/social-share.svg';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Developmental Paediatrician Singapore | Dr Tammi Quek',
    template: '%s | Dr Tammi Quek Clinic Singapore',
  },
  description:
    'Developmental and behavioural paediatrics in Singapore for children, adolescents and families with developmental, attention, communication, learning, behavioural and social-emotional concerns.',
  keywords: [
    'developmental paediatrician Singapore',
    'behavioural paediatrics Singapore',
    'developmental assessment Singapore child',
    'ADHD assessment Singapore child',
    'autism assessment Singapore child',
    'learning difficulties child Singapore',
    'speech delay developmental paediatrician Singapore',
    'international family developmental paediatrician Singapore',
    'Dr Tammi Quek',
  ],
  alternates: { canonical: '/' },
  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
        },
      }
    : { index: false, follow: false, noarchive: true },
  icons: {
    icon: [{ url: '/assets/brand/dr-tammi-logo-new.png', type: 'image/png' }],
    apple: [{ url: '/assets/brand/dr-tammi-logo-new.png', type: 'image/png' }],
  },
  openGraph: {
    title: 'Dr Tammi Quek Developmental & Behavioural Paediatrics Clinic',
    description:
      'Holistic, family-centred developmental and behavioural paediatric care in Singapore, with manual appointment review and school coordination where appropriate.',
    type: 'website',
    locale: 'en_SG',
    url: '/',
    siteName: 'Dr Tammi Quek Clinic',
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: 'Dr Tammi Quek Developmental and Behavioural Paediatrics Clinic in Singapore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developmental Paediatrician Singapore | Dr Tammi Quek',
    description:
      'Developmental and behavioural paediatric support for children, adolescents and families in Singapore and the region.',
    images: [socialImage],
  },
  category: 'healthcare',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-SG" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        <RevealProvider>
          <SiteFrame>{children}</SiteFrame>
        </RevealProvider>
      </body>
    </html>
  );
}
