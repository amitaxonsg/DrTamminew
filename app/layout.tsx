import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://new.drtammiquek.com';
const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === 'production';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dr Tammi Quek | Developmental & Behavioural Paediatrics',
  description:
    'Developmental and behavioural paediatrics in Singapore, supporting children, adolescents and families with developmental, behavioural and learning concerns.',
  alternates: { canonical: '/' },
  robots: isProduction
    ? { index: true, follow: true, googleBot: { index: true, follow: true } }
    : { index: false, follow: false, noarchive: true },
  openGraph: {
    title: 'Dr Tammi Quek Developmental & Behavioural Paediatrics Clinic',
    description:
      'Evidence-informed, family-centred support for developmental, behavioural and learning concerns.',
    type: 'website',
    locale: 'en_SG',
    url: '/',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-SG">
      <body>{children}</body>
    </html>
  );
}
