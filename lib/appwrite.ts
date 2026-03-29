import { Client, Databases, Query } from 'node-appwrite';

const client = new Client()
  .setEndpoint('https://nyc.cloud.appwrite.io/v1')
  .setProject('6921bac2003624668e3b');

export const databases = new Databases(client);

export const DB_ID = '695697ce000769bc5746';
export const BLOG_POSTS_COLLECTION = 'blog_posts';

export interface AppwriteBlogPost {
  $id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featuredImage: string | null;
  category: string;
  tags: string[];
  author: string;
  authorEmail: string;
  status: string;
  createdAt: string;
  publishedAt: string | null;
  updatedAt: string;
  views: number;
  readTime: number;
  metaDescription: string | null;
  metaKeywords: string | null;
}

export async function getPublishedPosts(): Promise<AppwriteBlogPost[]> {
  try {
    const response = await databases.listDocuments(
      DB_ID,
      BLOG_POSTS_COLLECTION,
      [
        Query.equal('status', 'published'),
        Query.orderDesc('publishedAt'),
        Query.limit(50),
      ]
    );
    return response.documents as unknown as AppwriteBlogPost[];
  } catch (error) {
    console.error('Erro ao buscar artigos:', error);
    return [];
  }
}

// Função para normalizar slug (remover caracteres inválidos para nomes de arquivo)
export function normalizeSlugForPath(slug: string): string {
  return slug
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/:/g, '-') // Substitui dois pontos por hífen
    .replace(/[^a-z0-9\-]/g, '') // Remove caracteres especiais exceto hífen
    .replace(/-+/g, '-') // Remove hífens duplicados
    .replace(/^-|-$/g, ''); // Remove hífens no início/fim
}

export async function getPostBySlug(
  slug: string
): Promise<AppwriteBlogPost | null> {
  try {
    // Se o slug for undefined ou vazio, retornar null
    if (!slug || slug === 'undefined') {
      console.log('❌ Slug inválido recebido:', slug);
      return null;
    }
    
    // Decodificar o slug da URL (trata caracteres codificados como %C3%A9)
    const decodedSlug = decodeURIComponent(slug);
    
    console.log('🔍 Buscando artigo:');
    console.log('   Slug recebido:', slug);
    console.log('   Slug decodificado:', decodedSlug);
    console.log('   Slug normalizado:', normalizeSlugForPath(slug));
    
    // Buscar todos os posts publicados primeiro
    const allPosts = await getPublishedPosts();
    console.log('   Total de posts encontrados:', allPosts.length);
    
    // Tentar encontrar o post pelo slug original ou decodificado
    let foundPost = allPosts.find(
      post => post.slug === slug || post.slug === decodedSlug
    );
    
    if (foundPost) {
      console.log('✅ Artigo encontrado por correspondência direta!');
      console.log('   Título:', foundPost.title);
      return foundPost;
    }
    
    console.log('⚠️ Não encontrado por correspondência direta, tentando normalização...');
    
    // Se ainda não encontrou, tentar comparar com slug normalizado
    const normalizedSlug = normalizeSlugForPath(slug);
    console.log('   Procurando por slug normalizado:', normalizedSlug);
    
    allPosts.forEach(post => {
      const normalizedPostSlug = normalizeSlugForPath(post.slug);
      console.log(`   - Comparando: ${normalizedPostSlug} === ${normalizedSlug}`, 
                  normalizedPostSlug === normalizedSlug ? '✅' : '❌');
      if (normalizedPostSlug === normalizedSlug) {
        console.log('   🎯 CORRESPONDÊNCIA ENCONTRADA!');
        console.log('   Título:', post.title);
      }
    });
    
    foundPost = allPosts.find(post => 
      normalizeSlugForPath(post.slug) === normalizedSlug
    );
    
    if (foundPost) {
      console.log('✅ Artigo encontrado por normalização!');
      return foundPost;
    }
    
    console.log('❌ Artigo não encontrado após todas as tentativas');
    return null;
  } catch (error) {
    console.error('❌ Erro ao buscar artigo:', error);
    return null;
  }
}

export async function getPostsByCategory(
  category: string
): Promise<AppwriteBlogPost[]> {
  try {
    const response = await databases.listDocuments(
      DB_ID,
      BLOG_POSTS_COLLECTION,
      [
        Query.equal('status', 'published'),
        Query.equal('category', category),
        Query.orderDesc('publishedAt'),
        Query.limit(20),
      ]
    );
    return response.documents as unknown as AppwriteBlogPost[];
  } catch (error) {
    console.error('Erro ao buscar artigos por categoria:', error);
    return [];
  }
}