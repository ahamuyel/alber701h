import type { MetadataRoute } from 'next';
import { projectIds } from './data';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = projectIds.map((id) => ({
    url: `https://alber701h.vercel.app/projects/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://alber701h.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectEntries,
  ];
}
