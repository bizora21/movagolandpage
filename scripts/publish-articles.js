/**
 * Publica (ou atualiza) os artigos de content/blog/artigos/ no Appwrite.
 * Precisa de uma chave de API com permissão de escrita na coleção blog_posts:
 *
 *   APPWRITE_API_KEY=... node scripts/publish-articles.js          (publica)
 *   node scripts/publish-articles.js --dry                         (só valida, não escreve)
 */
const fs = require('fs');
const path = require('path');
const { Client, Databases, ID, Query } = require('node-appwrite');

const DIR = path.join(__dirname, '..', 'content', 'blog', 'artigos');
const DB_ID = '695697ce000769bc5746';
const COLLECTION = 'blog_posts';
const SITE = 'https://movagomz.com';
const dry = process.argv.includes('--dry');

const articles = JSON.parse(fs.readFileSync(path.join(DIR, 'articles.json'), 'utf8'));

function build(a) {
  const content = fs.readFileSync(path.join(DIR, `${a.slug}.html`), 'utf8').trim();
  const words = content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return {
    title: a.title,
    slug: a.slug,
    content,
    excerpt: a.excerpt,
    featuredImage: `https://images.unsplash.com/${a.image}?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1600&h=900`,
    featuredImageAlt: a.imageAlt,
    featuredImageCredits:
      '<a href="https://unsplash.com/?utm_source=movago&utm_medium=referral">Foto no Unsplash</a>',
    category: 'Geral',
    tags: JSON.stringify(a.tags),
    author: 'Equipa MOVAGO',
    authorEmail: 'admin@mova.co.mz',
    status: 'published',
    publishedAt: a.publishedAt,
    updatedAt: a.publishedAt,
    metaDescription: a.metaDescription,
    metaKeywords: [a.focusKeyword, ...a.secondaryKeywords].join(', '),
    focusKeyword: a.focusKeyword,
    secondaryKeywords: JSON.stringify(a.secondaryKeywords),
    canonicalUrl: `${SITE}/blog/${a.slug}/`,
    views: 0,
    readTime: Math.max(1, Math.round(words / 200)),
    wordCount: String(words),
  };
}

async function main() {
  for (const a of articles) {
    const d = build(a);
    const warn = [];
    if (d.title.length > 70) warn.push(`título ${d.title.length} car.`);
    if (d.metaDescription.length < 120 || d.metaDescription.length > 160) warn.push(`meta ${d.metaDescription.length} car.`);
    console.log(`${dry ? '[dry] ' : ''}${a.slug} | ${d.wordCount} palavras | ${d.readTime} min ${warn.length ? '| AVISO: ' + warn.join(', ') : ''}`);
  }
  if (dry) return;

  if (!process.env.APPWRITE_API_KEY) {
    console.error('\nFalta APPWRITE_API_KEY (chave com escrita em blog_posts).');
    process.exit(1);
  }
  const db = new Databases(
    new Client()
      .setEndpoint('https://nyc.cloud.appwrite.io/v1')
      .setProject('6921bac2003624668e3b')
      .setKey(process.env.APPWRITE_API_KEY)
  );
  for (const a of articles) {
    const data = build(a);
    const found = await db.listDocuments(DB_ID, COLLECTION, [Query.equal('slug', a.slug), Query.limit(1)]);
    if (found.total > 0) {
      await db.updateDocument(DB_ID, COLLECTION, found.documents[0].$id, data);
      console.log('atualizado:', a.slug);
    } else {
      await db.createDocument(DB_ID, COLLECTION, ID.unique(), { ...data, createdAt: a.publishedAt });
      console.log('criado:', a.slug);
    }
  }
}

main().catch((e) => {
  console.error('Erro:', e.message);
  process.exit(1);
});
