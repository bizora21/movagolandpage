const { Client, Databases, Query } = require('node-appwrite');

const client = new Client()
  .setEndpoint('https://nyc.cloud.appwrite.io/v1')
  .setProject('6921bac2003624668e3b');

const databases = new Databases(client);

const DB_ID = '695697ce000769bc5746';
const BLOG_POSTS_COLLECTION = 'blog_posts';

function normalizeSlugForPath(slug) {
  return slug
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/:/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

async function getPublishedPosts() {
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
    return response.documents;
  } catch (error) {
    console.error('Erro ao buscar artigos:', error);
    return [];
  }
}

async function getPostBySlug(slug) {
  try {
    if (!slug || slug === 'undefined') {
      console.log('❌ Slug inválido recebido:', slug);
      return null;
    }
    
    const decodedSlug = decodeURIComponent(slug);
    
    console.log('🔍 Buscando artigo:');
    console.log('   Slug recebido:', slug);
    console.log('   Slug decodificado:', decodedSlug);
    console.log('   Slug normalizado:', normalizeSlugForPath(slug));
    
    const allPosts = await getPublishedPosts();
    console.log('   Total de posts encontrados:', allPosts.length);
    
    console.log('\n   Posts disponíveis:');
    allPosts.forEach(post => {
      console.log(`   - ${post.title}`);
      console.log(`     Slug: ${post.slug}`);
      console.log(`     Slug normalizado: ${normalizeSlugForPath(post.slug)}`);
    });
    
    let foundPost = allPosts.find(
      post => post.slug === slug || post.slug === decodedSlug
    );
    
    if (foundPost) {
      console.log('\n✅ Artigo encontrado por correspondência direta!');
      console.log('   Título:', foundPost.title);
      return foundPost;
    }
    
    console.log('\n⚠️ Não encontrado por correspondência direta, tentando normalização...');
    const normalizedSlug = normalizeSlugForPath(slug);
    console.log('   Procurando por slug normalizado:', normalizedSlug);
    
    allPosts.forEach(post => {
      const normalizedPostSlug = normalizeSlugForPath(post.slug);
      console.log(`   - Comparando: "${normalizedPostSlug}" === "${normalizedSlug}"`, 
                  normalizedPostSlug === normalizedSlug ? '✅' : '❌');
    });
    
    foundPost = allPosts.find(post => 
      normalizeSlugForPath(post.slug) === normalizedSlug
    );
    
    if (foundPost) {
      console.log('\n✅ Artigo encontrado por normalização!');
      console.log('   Título:', foundPost.title);
      return foundPost;
    }
    
    console.log('\n❌ Artigo não encontrado após todas as tentativas');
    return null;
  } catch (error) {
    console.error('❌ Erro ao buscar artigo:', error);
    return null;
  }
}

async function test() {
  const slug = 'a-mente-sintetica-como-a-ia-generativa-esta-reescrevendo-as-regras-da-arte-e-do-design';
  console.log('🧪 Testando busca de artigo com slug:', slug);
  console.log('='.repeat(80));
  const post = await getPostBySlug(slug);
  if (post) {
    console.log('\n🎉 SUCESSO! Artigo encontrado');
    console.log('   Título:', post.title);
    console.log('   Slug:', post.slug);
  } else {
    console.log('\n❌ FALHA! Artigo não encontrado');
  }
}

test();