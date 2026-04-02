import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getPublishedPosts, normalizeSlugForPath } from '@/lib/appwrite';
import { formatDate } from '@/lib/utils';
import { processBlogContent } from '@/lib/blog-content';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    const posts = await getPublishedPosts();
    
    if (!posts || posts.length === 0) {
      console.warn('⚠️ Nenhum post encontrado, usando fallback');
      // Fallback: retornar o slug normalizado que sabemos que existe
      return [{ slug: 'a-mente-sintetica-como-a-ia-generativa-esta-reescrevendo-as-regras-da-arte-e-do-design' }];
    }
    
    // IMPORTANTE: Normalizar os slugs para remover caracteres inválidos (como :)
    // Isso é necessário para o static export funcionar corretamente
    return posts.map((post) => ({ 
      slug: normalizeSlugForPath(post.slug) 
    }));
  } catch (error) {
    console.error('❌ Erro no generateStaticParams:', error);
    console.error('   Usando fallback para garantir que o build não falhe');
    // Fallback: retornar o slug normalizado que sabemos que existe
    return [{ slug: 'a-mente-sintetica-como-a-ia-generativa-esta-reescrevendo-as-regras-da-arte-e-do-design' }];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // No Next.js 15+, params é assíncrono
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Artigo não encontrado | MOVAGO' };
  return {
    title: `${post.title} | MOVAGO Blog`,
    description: post.metaDescription || post.excerpt || '',
    keywords: post.metaKeywords || '',
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: Props) {
  // No Next.js 15+, params é assíncrono
  const { slug } = await params;
  
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0A0F1E] pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Início
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-slate-300 truncate max-w-[200px]">
            {post.title}
          </span>
        </nav>

        {/* Categoria */}
        <div className="mb-4">
          <span className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        {/* Título */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mb-8 pb-8 border-b border-slate-700/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {post.author.charAt(0).toUpperCase()}
            </div>
            <span className="text-white font-medium">{post.author}</span>
          </div>
          <span>·</span>
          <span>
            {post.publishedAt
              ? formatDate(post.publishedAt)
              : formatDate(post.createdAt)}
          </span>
          <span>·</span>
          <span>{post.readTime} min de leitura</span>
          {Array.isArray(post.tags) && post.tags.length > 0 && (
            <>
              <span>·</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Imagem de destaque */}
        {post.featuredImage && (
          <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-slate-300 leading-relaxed mb-8 italic border-l-4 border-blue-500 pl-6">
            {post.excerpt}
          </p>
        )}

        {/* Conteúdo */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white
            prose-p:text-slate-300 prose-p:leading-relaxed
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-code:text-blue-300 prose-code:bg-slate-800 prose-code:px-1 prose-code:rounded
            prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700
            prose-blockquote:border-blue-500 prose-blockquote:text-slate-300
            prose-ul:text-slate-300 prose-ol:text-slate-300
            prose-li:text-slate-300
            prose-hr:border-slate-700
            prose-img:rounded-xl"
          dangerouslySetInnerHTML={{
            __html: processBlogContent(post.content).html
          }}
        />

        {/* Voltar ao blog */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            ← Voltar ao Blog
          </Link>
        </div>
      </div>
    </main>
  );
}