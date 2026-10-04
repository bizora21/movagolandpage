import { MetadataRoute } from 'next';
import { getPublishedPosts, normalizeSlugForPath } from '@/lib/appwrite';

// Configuração necessária para static export
export const dynamic = 'force-static';

type Entry = MetadataRoute.Sitemap[number];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // O site usa trailingSlash: true, por isso todas as URLs terminam em "/"
  const baseUrl = 'https://movagomz.com';

  const page = (
    path: string,
    changeFrequency: Entry['changeFrequency'],
    priority: number
  ): Entry => ({ url: `${baseUrl}${path}`, changeFrequency, priority });

  const staticPages: MetadataRoute.Sitemap = [
    page('/', 'weekly', 1),
    // Logística de encomendas (SaaS)
    page('/logistica/', 'weekly', 0.95),
    page('/logistica/transportadoras/', 'monthly', 0.9),
    page('/logistica/rastreio-de-encomendas/', 'monthly', 0.9),
    // Transporte urbano
    page('/transporte/', 'weekly', 0.9),
    page('/motoristas/', 'weekly', 0.9),
    page('/taxi/', 'weekly', 0.9),
    page('/passageiros/', 'weekly', 0.9),
    // Institucional
    page('/sobre/', 'monthly', 0.8),
    page('/faq/', 'monthly', 0.8),
    page('/contacto/', 'monthly', 0.7),
    page('/blog/', 'weekly', 0.8),
    page('/privacidade/', 'yearly', 0.5),
    page('/termos/', 'yearly', 0.5),
  ];

  // Artigos reais do blog (Appwrite), em vez de uma lista fixa que podia
  // incluir URLs inexistentes
  const posts = await getPublishedPosts();
  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${normalizeSlugForPath(post.slug)}/`,
    lastModified: new Date(post.updatedAt || post.publishedAt || Date.now()),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}
