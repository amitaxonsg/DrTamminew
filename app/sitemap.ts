import type { MetadataRoute } from 'next';
import { SITE, concerns } from './lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? SITE.previewUrl;
  const now = new Date();
  const staticPages = [
    '',
    '/about',
    '/clinic',
    '/services',
    '/concerns',
    '/international-families',
    '/schools-professionals',
    '/resources',
    '/faq',
    '/ai-guidance',
    '/contact',
  ];

  return [
    ...staticPages.map((path, index) => ({
      url: `${base}${path}/`,
      lastModified: now,
      changeFrequency: index === 0 ? ('weekly' as const) : ('monthly' as const),
      priority: index === 0 ? 1 : 0.8,
    })),
    ...concerns.map((concern) => ({
      url: `${base}/concerns/${concern.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ];
}
