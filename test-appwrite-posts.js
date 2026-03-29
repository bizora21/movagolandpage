const { Client, Databases, Query } = require('node-appwrite');

const client = new Client()
  .setEndpoint('https://nyc.cloud.appwrite.io/v1')
  .setProject('6921bac2003624668e3b');

const databases = new Databases(client);

const DB_ID = '695697ce000769bc5746';
const BLOG_POSTS_COLLECTION = 'blog_posts';

async function testPosts() {
  try {
    console.log('🔍 Buscando todos os posts publicados...\n');
    
    const response = await databases.listDocuments(
      DB_ID,
      BLOG_POSTS_COLLECTION,
      [
        Query.equal('status', 'published'),
        Query.orderDesc('publishedAt'),
        Query.limit(50),
      ]
    );
    
    console.log(`✅ Encontrados ${response.documents.length} posts:\n`);
    
    response.documents.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   Slug original: ${post.slug}`);
      console.log(`   Status: ${post.status}`);
      console.log(`   Published: ${post.publishedAt}`);
      console.log('');
    });
    
  } catch (error) {
    console.error('❌ Erro ao buscar posts:', error.message);
    console.error('Detalhes:', error);
  }
}

testPosts();