const { Client, Databases } = require('node-appwrite');

const client = new Client()
  .setEndpoint('https://nyc.cloud.appwrite.io/v1')
  .setProject('6921bac2003624668e3b');

const databases = new Databases(client);
const DB_ID = '695697ce000769bc5746';
const BLOG_POSTS_COLLECTION = 'blog_posts';

async function searchAllPosts() {
  try {
    console.log('🔍 Buscando TODOS os posts (incluindo despublicados)...\n');
    
    // Buscar todos sem filtro de status
    const response = await databases.listDocuments(
      DB_ID,
      BLOG_POSTS_COLLECTION
    );
    
    console.log(`✅ Total de documentos encontrados: ${response.documents.length}\n`);
    
    if (response.documents.length === 0) {
      console.log('❌ Nenhum documento encontrado na coleção');
      return;
    }
    
    // Listar todos os artigos
    response.documents.forEach((doc, index) => {
      console.log(`\n${index + 1}. ${doc.title}`);
      console.log(`   Slug: ${doc.slug}`);
      console.log(`   Status: ${doc.status}`);
      console.log(`   Published: ${doc.publishedAt || 'N/A'}`);
      console.log(`   ID: ${doc.$id}`);
    });
    
    // Buscar especificamente pelo título mencionado
    console.log('\n\n🎯 Procurando por: "Como saber que a viatura está a caminho?"');
    const found = response.documents.find(doc => 
      doc.title.toLowerCase().includes('viatura') ||
      doc.title.toLowerCase().includes('caminho')
    );
    
    if (found) {
      console.log('\n✅ Artigo encontrado!');
      console.log(`   Título: ${found.title}`);
      console.log(`   Status: ${found.status}`);
      console.log(`   ID: ${found.$id}`);
    } else {
      console.log('\n❌ Artigo "Como saber que a viatura está a caminho?" NÃO encontrado no Appwrite');
      console.log('\n💡 Pode ser cache do navegador ou CDN. Tente:');
      console.log('   1. Limpar cache do navegador (Ctrl+Shift+Del)');
      console.log('   2. Abrir em modo incógnito');
      console.log('   3. Forçar rebuild do site');
    }
    
  } catch (error) {
    console.error('❌ Erro ao buscar documentos:', error);
  }
}

searchAllPosts();