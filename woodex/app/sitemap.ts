import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { services } from '@/lib/services';
import { projects, posts } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/services', '/pricing', '/projects', '/journal', '/contact'].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${site.url}/projects#${p.slug}`,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${site.url}/journal/${p.slug}`,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...postRoutes];
}
