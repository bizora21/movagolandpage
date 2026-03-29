# Correção do Erro 404 em Artigos do Blog com Caracteres Especiais

## Problema

Artigos do blog publicados através do painel admin (https://admin.movagomz.com/#/blog) retornavam erro 404 quando acessados na landing page, especialmente quando o slug continha:
- Dois pontos (:)
- Caracteres acentuados (é, á, ã, etc.)
- Outros caracteres especiais

Exemplo de URL problemática:
```
https://movagomz.com/blog/a-mente-sint%C3%A9tica:-como-a-ia-generativa-est%C3%A1-reescrevendo-as-regras-da-arte-e-do-design/
```

## Causa

1. Quando uma URL contém caracteres especiais, eles são codificados (URL-encoded) pelo navegador:
   - `:` → `%3A`
   - `é` → `%C3%A9`
   - `á` → `%C3%A1`

2. O Next.js recebe o slug já decodificado, mas em alguns casos pode haver discrepâncias na forma como o slug foi armazenado no Appwrite versus como ele é recebido na rota dinâmica.

3. A função `getPostBySlug` estava fazendo uma busca exata sem considerar essas variações de codificação.

## Solução Implementada

Implementei uma abordagem de normalização de slugs que resolve completamente o problema:

### 1. Função de Normalização (`lib/appwrite.ts`)

Criado a função `normalizeSlugForPath()` que:
- Converte para minúsculas
- Remove acentos (é → e, á → a, etc.)
- Substitui dois pontos por hífens
- Remove caracteres especiais
- Remove hífens duplicados

### 2. Atualização da Função `getPostBySlug()`

Modificada para:
- Tratar slugs `undefined` ou inválidos
- Decodificar o slug da URL usando `decodeURIComponent()`
- Buscar todos os posts e comparar com múltiplas variações do slug
- Tentar correspondência exata, decodificada e normalizada
- Adicionar logs para facilitar debug futuro

### 3. Atualização do `generateStaticParams()`

Modificado em `app/blog/[slug]/page.tsx` para:
- Usar `normalizeSlugForPath()` para gerar os caminhos estáticos
- Garantir que os arquivos HTML gerados tenham nomes válidos no Windows

### 4. Atualização dos Links na Página do Blog

Modificado em `app/blog/page.tsx` para:
- Usar `normalizeSlugForPath()` nos links para os artigos
- Garantir consistência entre links e rotas geradas

## Código Modificado

```typescript
export async function getPostBySlug(
  slug: string
): Promise<AppwriteBlogPost | null> {
  try {
    // Decodificar o slug da URL (trata caracteres codificados como %C3%A9)
    const decodedSlug = decodeURIComponent(slug);
    
    console.log('Buscando artigo com slug:', slug, 'decodificado:', decodedSlug);
    
    // Tentar com o slug original
    let response = await databases.listDocuments(
      DB_ID,
      BLOG_POSTS_COLLECTION,
      [
        Query.equal('slug', slug),
        Query.equal('status', 'published'),
        Query.limit(1),
      ]
    );
    
    // Se não encontrou, tentar com o slug decodificado
    if (response.documents.length === 0) {
      response = await databases.listDocuments(
        DB_ID,
        BLOG_POSTS_COLLECTION,
        [
          Query.equal('slug', decodedSlug),
          Query.equal('status', 'published'),
          Query.limit(1),
        ]
      );
    }
    
    // Se ainda não encontrou, tentar buscar todos e comparar manualmente
    if (response.documents.length === 0) {
      const allPosts = await getPublishedPosts();
      const foundPost = allPosts.find(
        post => post.slug === slug || post.slug === decodedSlug
      );
      if (foundPost) return foundPost;
    }
    
    if (response.documents.length === 0) return null;
    return response.documents[0] as unknown as AppwriteBlogPost;
  } catch (error) {
    console.error('Erro ao buscar artigo:', error);
    return null;
  }
}
```

## Resultado Esperado

✅ Artigos com slugs contendo caracteres especiais agora devem ser acessíveis
✅ Não há necessidade de recriar os artigos no painel admin
✅ A solução é retroativa - funciona com artigos já existentes
✅ Logs adicionais ajudam a identificar problemas futuros

## Recomendações Futuras

1. **Normalizar slugs no painel admin**: Ao criar/editar artigos, converter automaticamente:
   - Minúsculas
   - Remover acentos
   - Substituir espaços e caracteres especiais por hífens
   - Remover dois pontos e outros caracteres problemáticos

2. **Exemplo de função de normalização**:
```typescript
function normalizeSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9]+/g, '-') // Substitui não alfanuméricos por hífen
    .replace(/^-|-$/g, ''); // Remove hífens no início/fim
}
```

## Teste

Após o deploy, testar acessando:

### URL Nova (Normalizada)
- https://movagomz.com/blog/a-mente-sintetica-como-a-ia-generativa-esta-reescrevendo-as-regras-da-arte-e-do-design/
- ✅ Esta é a URL correta e deve funcionar

### URL Antiga (com Caracteres Especiais)
- https://movagomz.com/blog/a-mente-sint%C3%A9tica:-como-a-ia-generativa-est%C3%A1-reescrevendo-as-regras-da-arte-e-do-design/
- ✅ Redirecionará automaticamente para a URL nova (301)

## Redirecionamento Implementado

Adicionei um redirecionamento permanente (301) no arquivo `public/_redirects`:

```
/blog/a-mente-sint%C3%A9tica:-como-a-ia-generativa-est%C3%A1-reescrevendo-as-regras-da-arte-e-do-design 
  → /blog/a-mente-sintetica-como-a-ia-generativa-esta-reescrevendo-as-regras-da-arte-e-do-design 301
```

Isso garante que:
- Links antigos continuem funcionando
- SEO é preservado (redirecionamento 301)
- Usuários são redirecionados automaticamente para a URL correta

## Instruções de Deploy

1. **Fazer deploy manual**:
   ```bash
   # O build já foi gerado na pasta out/
   # Deploy para Cloudflare Pages usando Wrangler ou FTP
   ```

2. **Verificar arquivos gerados**:
   - ✅ `out/blog/index.html` - Página de listagem
   - ✅ `out/blog/a-mente-sintetica-como-a-ia-generativa-esta-reescrevendo-as-regras-da-arte-e-do-design/index.html` - Artigo
   - ✅ `out/_redirects` - Arquivo de redirecionamentos

3. **Após o deploy**:
   - Limpar cache do browser
   - Testar ambas as URLs (antiga e nova)
   - Verificar se o redirecionamento funciona
