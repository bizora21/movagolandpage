const { Client, Databases } = require('node-appwrite');

const client = new Client()
  .setEndpoint('https://nyc.cloud.appwrite.io/v1')
  .setProject('6921bac2003624668e3b');

const databases = new Databases(client);
const DB_ID = '695697ce000769bc5746';
const BLOG_POSTS_COLLECTION = 'blog_posts';

async function checkMatolaPost() {
  try {
    console.log('🔍 Buscando artigo "5 Segredos para Aumentar sua Renda na Matola usando o MOvago"...\n');
    
    const response = await databases.listDocuments(DB_ID, BLOG_POSTS_COLLECTION);
    const post = response.documents.find(doc => 
      doc.$id === '69d2b088660d007271f1'
    );
    
    if (!post) {
      console.log('❌ Artigo não encontrado');
      return;
    }
    
    console.log('✅ Artigo encontrado:\n');
    console.log('📌 Título:', post.title);
    console.log('🔗 Slug:', post.slug);
    console.log('📊 Status:', post.status);
    console.log('📅 Publicado em:', post.publishedAt);
    console.log('🖼️ Featured Image:', post.featuredImage || '❌ Sem imagem');
    console.log('📝 Excerpt:', post.excerpt || '❌ Sem excerpt');
    console.log('⏱️ Read Time:', post.readTime);
    console.log('📂 Category:', post.category);
    console.log('👤 Author:', post.author);
    console.log('🏷️ Tags:', post.tags);
    
    console.log('\n✅ Campos obrigatórios para landing page:');
    console.log('   - title:', post.title ? '✅' : '❌');
    console.log('   - slug:', post.slug ? '✅' : '❌');
    console.log('   - excerpt:', post.excerpt ? '✅' : '❌');
    console.log('   - featuredImage:', post.featuredImage ? '✅' : '❌');
    console.log('   - category:', post.category ? '✅' : '❌');
    console.log('   - readTime:', post.readTime ? '✅' : '❌');
    console.log('   - author:', post.author ? '✅' : '❌');
    console.log('   - publishedAt:', post.publishedAt ? '✅' : '❌');
    console.log('   - status:', post.status === 'published' ? '✅' : '❌');
    
  } catch (error) {
    console.error('❌ Erro:', error);
  }
}

checkMatolaPost();