import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPublishedPosts } from '@/lib/appwrite';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog | MOVAGO',
  description:
    'Notícias, dicas e actualizações sobre transporte urbano em Moçambique.',
};

export const revalidate = 60; // revalida a cada 60 segundos

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <main className="min-h-screen bg-[#0A0F1E] pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Blog MOVAGO
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Notícias, dicas e actualizações sobre mobilidade urbana
            em Moçambique.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">
              Nenhum artigo publicado ainda. Volte em breve!
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.$id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="bg-[#111827] rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                  {/* Imagem */}
                  <div className="relative h-48 bg-slate-800 flex-shrink-0">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl">📰</span>
                      </div>
                    )}
                    {/* Categoria */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-white font-bold text-xl mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                    )}
                    {/* Meta */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/50">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {post.author.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-slate-400 text-xs">
                          {post.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-500 text-xs">
                        <span>
                          {post.publishedAt
                            ? formatDate(post.publishedAt)
                            : formatDate(post.createdAt)}
                        </span>
                        <span>·</span>
                        <span>{post.readTime} min</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}