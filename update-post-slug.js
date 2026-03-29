const { Client, Databases } = require('node-appwrite');

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
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/:/g, '-') // Substitui dois pontos por hífen
    .replace(/[^a-z0-9\-]/g, '') // Remove caracteres especiais exceto hífen
    .replace(/-+/g, '-') // Remove hífens duplicados
    .replace(/^-|-$/g, ''); // Remove hífens no início/fim
}

async function updatePostSlug() {
  try {
    console.log('🔍 Buscando artigo com caracteres especiais...\n');
    
    const response = await databases.listDocuments(
      DB_ID,
      BLOG_POSTS_COLLECTION,
      []
    );
    
    const post = response.documents.find(p => p.slug.includes(':') || p.slug.includes('é') || p.slug.includes('á'));
    
    if (!post) {
      console.log('❌ Nenhum artigo com caracteres especiais encontrado');
      return;
    }
    
    console.log('📝 Artigo encontrado:');
    console.log('   Título:', post.title);
    console.log('   Slug atual:', post.slug);
    
    const normalizedSlug = normalizeSlugForPath(post.slug);
    console.log('   Slug normalizado:', normalizedSlug);
    
    console.log('\n⚠️ ATENÇÃO: Este script vai ATUALIZAR o slug no Appwrite');
    console.log('   Isso mudará permanentemente o slug do artigo no banco de dados');
    console.log('   Slug atual:', post.slug);
    console.log('   Novo slug:', normalizedSlug);
    
    // Atualizar o slug
    console.log('\n✏️ Atualizando slug...');
    
    await databases.updateDocument(
      DB_ID,
      BLOG_POSTS_COLLECTION,
      post.$id,
      {
        slug: normalizedSlug
      }
    );
    
    console.log('✅ Slug atualizado com sucesso!');
    console.log('   Novo slug:', normalizedSlug);
    console.log('\n📌 Nova URL do artigo:');
    console.log('   https://movagomz.com/blog/' + normalizedSlug + '/');
    
  } catch (error) {
    console.error('❌ Erro ao atualizar slug:', error.message);
    console.error('Detalhes:', error);
  }
}

updatePostSlug();