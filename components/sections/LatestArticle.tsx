import Link from 'next/link';
import Image from 'next/image';
import { getPublishedPosts, normalizeSlugForPath } from '@/lib/appwrite';
import { formatDate } from '@/lib/utils';

export async function LatestArticle() {
  const posts = await getPublishedPosts();
  const latestPost = posts[0]; // Get the most recent post

  if (!latestPost) {
    return null; // Don't render if no posts exist
  }

  return (
    <section className="py-16 bg-[#0A0F1E]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Última Publicação
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Fique por dentro das novidades e actualizações sobre mobilidade urbana
          </p>
        </div>

        <Link
          href={`/blog/${normalizeSlugForPath(latestPost.slug)}`}
          className="group block max-w-4xl mx-auto"
        >
          <article className="bg-[#111827] rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="md:flex">
              {/* Imagem */}
              <div className="md:w-1/2 relative h-64 md:h-auto bg-slate-800">
                {latestPost.featuredImage ? (
                  <Image
                    src={latestPost.featuredImage}
                    alt={latestPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl">📰</span>
                  </div>
                )}
                {/* Categoria */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                    {latestPost.category}
                  </span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-slate-400 text-sm mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {latestPost.author.charAt(0).toUpperCase()}
                  </div>
                  <span>{latestPost.author}</span>
                  <span>·</span>
                  <span>
                    {latestPost.publishedAt
                      ? formatDate(latestPost.publishedAt)
                      : formatDate(latestPost.createdAt)}
                  </span>
                </div>

                <h3 className="text-white font-bold text-2xl lg:text-3xl mb-4 group-hover:text-blue-400 transition-colors">
                  {latestPost.title}
                </h3>

                {latestPost.excerpt && (
                  <p className="text-slate-400 text-base leading-relaxed mb-6 line-clamp-3">
                    {latestPost.excerpt}
                  </p>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <span className="text-slate-500 text-sm">
                    ⏱️ {latestPost.readTime} min de leitura
                  </span>
                  <span className="text-blue-400 font-semibold text-sm group-hover:text-blue-300 transition-colors">
                    Ler artigo completo →
                  </span>
                </div>
              </div>
            </div>
          </article>
        </Link>

        {/* Link para o blog */}
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
          >
            Ver todos os artigos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}