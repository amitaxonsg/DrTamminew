import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://new.drtammiquek.com';
const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === 'production';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Developmental Paediatrician Singapore | Dr Tammi Quek',
    template: '%s | Dr Tammi Quek Clinic',
  },
  description:
    'Developmental and behavioural paediatrics in Singapore for children, adolescents and families with developmental, attention, communication, learning and social-emotional concerns.',
  keywords: [
    'developmental paediatrician Singapore',
    'behavioural paediatrics Singapore',
    'developmental assessment child Singapore',
    'ADHD assessment Singapore child',
    'autism developmental concerns Singapore',
    'learning difficulties paediatrician Singapore',
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
  openGraph: {
    title: 'Dr Tammi Quek Developmental & Behavioural Paediatrics Clinic',
    description:
      'Evidence-informed, family-centred support for developmental, behavioural, communication and learning concerns.',
    type: 'website',
    locale: 'en_SG',
    url: '/',
    siteName: 'Dr Tammi Quek Clinic',
    images: [
      {
        url: '/assets/images/social-share.svg',
        width: 1200,
        height: 630,
        alt: 'Dr Tammi Quek Developmental and Behavioural Paediatrics Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developmental Paediatrician Singapore | Dr Tammi Quek',
    description:
      'Developmental and behavioural paediatric support for children, adolescents and families in Singapore.',
    images: ['/assets/images/social-share.svg'],
  },
  category: 'healthcare',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-SG">
      <body>{children}</body>
    </html>
  );
}
