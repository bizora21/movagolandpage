const { Client, Databases } = require('node-appwrite');

const client = new Client()
  .setEndpoint('https://nyc.cloud.appwrite.io/v1')
  .setProject('6921bac2003624668e3b');

const databases = new Databases(client);
const DB_ID = '695697ce000769bc5746';
const BLOG_POSTS_COLLECTION = 'blog_posts';

async function checkPostContent() {
  try {
    console.log('🔍 Buscando detalhes do artigo "o-que-e-movago-passageiros"...\n');
    
    // Buscar todos os posts
    const response = await databases.listDocuments(DB_ID, BLOG_POSTS_COLLECTION);
    
    // Encontrar o post específico
    const post = response.documents.find(doc => 
      doc.slug === 'o-que-e-movago-passageiros'
    );
    
    if (!post) {
      console.log('❌ Artigo não encontrado');
      return;
    }
    
    console.log('✅ Artigo encontrado:\n');
    console.log('Título:', post.title);
    console.log('Slug:', post.slug);
    console.log('Status:', post.status);
    console.log('Publicado em:', post.publishedAt);
    console.log('ID:', post.$id);
    
    console.log('\n📄 Conteúdo (primeiros 500 caracteres):');
    console.log(post.content.substring(0, 500));
    console.log('...\n');
    
    // Verificar se contém o texto problemático
    if (post.content.toLowerCase().includes('viatura') || 
        post.content.toLowerCase().includes('caminho')) {
      console.log('✅ O conteúdo MENCIONA "viatura" ou "caminho"');
    } else {
      console.log('❌ O conteúdo NÃO menciona "viatura" ou "caminho"');
    }
    
    // Verificar excerpt
    if (post.excerpt) {
      console.log('\n📝 Excerpt:', post.excerpt);
    }
    
  } catch (error) {
    console.error('❌ Erro:', error);
  }
}

checkPostContent();