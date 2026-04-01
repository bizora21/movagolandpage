const { Client, Databases } = require('node-appwrite');

const client = new Client()
  .setEndpoint('https://nyc.cloud.appwrite.io/v1')
  .setProject('6921bac2003624668e3b');

const databases = new Databases(client);

const DB_ID = '695697ce000769bc5746';
const BLOG_POSTS_COLLECTION = 'blog_posts';

async function fixMovagoSlug() {
  try {
    console.log('🔍 Buscando artigo "Movago,porque e que devo usar esse app para a minha mobilidade?"...\n');
    
    const response = await databases.listDocuments(
      DB_ID,
      BLOG_POSTS_COLLECTION,
      []
    );
    
    // Encontrar o artigo pelo slug incorreto
    const post = response.documents.find(p => 
      p.slug === 'Movago,porque e que devo usar esse app para a minha mobilidade?'
    );
    
    if (!post) {
      console.log('❌ Artigo não encontrado');
      console.log('   Slug procurado: Movago,porque e que devo usar esse app para a minha mobilidade?');
      console.log('\n📝 Artigos disponíveis:');
      response.documents.forEach(p => {
        console.log(`   - ${p.title}`);
        console.log(`     Slug atual: ${p.slug}`);
      });
      return;
    }
    
    console.log('📝 Artigo encontrado:');
    console.log('   Título:', post.title);
    console.log('   Slug atual:', post.slug);
    console.log('   ID:', post.$id);
    
    const newSlug = 'o-que-e-movago-passageiros';
    console.log('\n📌 Novo slug:', newSlug);
    console.log('   Nova URL: https://movagomz.com/blog/' + newSlug + '/');
    
    // Atualizar o slug
    console.log('\n✏️ Atualizando slug no Appwrite...');
    
    await databases.updateDocument(
      DB_ID,
      BLOG_POSTS_COLLECTION,
      post.$id,
      {
        slug: newSlug
      }
    );
    
    console.log('✅ Slug atualizado com sucesso!');
    console.log('\n🎉 O artigo agora está acessível em:');
    console.log('   https://movagomz.com/blog/' + newSlug + '/');
    
  } catch (error) {
    console.error('❌ Erro ao atualizar slug:', error.message);
    console.error('Detalhes:', error);
  }
}

fixMovagoSlug();