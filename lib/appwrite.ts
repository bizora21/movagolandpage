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

export async function getPostBySlug(
  slug: string
): Promise<AppwriteBlogPost | null> {
  try {
    const response = await databases.listDocuments(
      DB_ID,
      BLOG_POSTS_COLLECTION,
      [
        Query.equal('slug', slug),
        Query.equal('status', 'published'),
        Query.limit(1),
      ]
    );
    if (response.documents.length === 0) return null;
    return response.documents[0] as unknown as AppwriteBlogPost;
  } catch (error) {
    console.error('Erro ao buscar artigo:', error);
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