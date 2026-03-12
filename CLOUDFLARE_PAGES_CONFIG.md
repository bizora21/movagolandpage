# Configuração para Cloudflare Pages - Movago Landing ✅

## Configuração Atual e Testada

O projeto está configurado para **Static Export** e foi testado com sucesso. A build gera uma pasta `out` com todos os arquivos estáticos necessários.

## 📋 Configuração do Cloudflare Pages Dashboard

Use estes valores exatos no painel do Cloudflare Pages:

| Campo | Valor |
|-------|-------|
| **Framework preset** | Next.js |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Root directory** | (deixe vazio) |
| **Node.js version** | `20` |
| **Environment variables** | `NODE_VERSION=20` |

## 🚀 Comandos de Build

### Build Local
```bash
npm run build
```

### Script Adicional
```bash
npm run pages:build  # Mesmo que npm run build
```

## 📁 Arquivos de Configuração Criados

### 1. next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuração para Static Export no Cloudflare Pages
  output: 'export',
  
  // Otimização de imagens para build estático
  images: {
    unoptimized: true,
  },
  
  // Configurações adicionais para Cloudflare Pages
  trailingSlash: false, // Remove barra final das URLs
};

export default nextConfig;
```

### 2. wrangler.toml
Arquivo de configuração do Cloudflare que ajuda no processo de build:
```toml
name = "movago-landing"
compatibility_date = "2024-01-01"

[build]
command = "npm run build"
cwd = "."

[build.environment]
NODE_VERSION = "20"

[site]
bucket = "out"
```

### 3. public/_redirects
Configuração de redirecionamentos para roteamento correto:
```
/* /index.html 200
```

### 4. app/blog/[slug]/page.tsx
Adicionado `generateStaticParams()` para suporte a rotas dinâmicas:
```typescript
export function generateStaticParams() {
  return [
    { slug: 'como-usar-movago' },
    { slug: 'dicas-motoristas' },
    { slug: 'novidades-movago' },
  ];
}
```

### 5. app/sitemap.ts
Adicionado `export const dynamic = 'force-static'` para compatibilidade:
```typescript
export const dynamic = 'force-static';
```

---

### Opção 2: Usando @cloudflare/next-on-pages (Para recursos dinâmicos)

Se você precisa de recursos dinâmicos como API routes, use o adaptador oficial:

**Build Command:**
```bash
npm run build
```

**Build Output Directory:**
```
.vercel/output/static
```

**Passos adicionais:**

1. Instale as dependências necessárias:
```bash
npm install --save-dev @cloudflare/next-on-pages
```

2. Adicione o script ao package.json:
```json
{
  "scripts": {
    "pages:build": "npx @cloudflare/next-on-pages"
  }
}
```

3. Use como build command no Cloudflare:
```
npm run pages:build && wrangler pages deploy .vercel/output/static
```

---

## Configuração Recomendada para Cloudflare Pages Dashboard

### Settings > Builds & deployments

| Campo | Valor |
|-------|-------|
| **Framework preset** | Next.js |
| **Build command** | `npm run build` |
| **Build output directory** | `out` (se usar static export) ou `.vercel/output/static` (se usar next-on-pages) |
| **Node.js version** | `20` |
| **Environment variables** | `NODE_VERSION=20` |

### Importante

- Para **landing pages estáticas**, a **Opção 1** (Static Export) é mais simples e adequada
- A **Opção 2** é necessária apenas se você usar recursos dinâmicos como API routes (ex: `/api/contact`)
- Seu projeto atual tem um API route em `app/api/contact/route.ts`, então considere usar a **Opção 2**

---

## Verificação Prévia

Antes de fazer deploy no Cloudflare Pages:

1. Teste localmente:
```bash
npm run build
```

2. Verifique se a pasta de saída foi criada:
- Static export: deve aparecer a pasta `out/`
- Next-on-pages: deve aparecer a pasta `.vercel/output/static`

3. Teste o build local:
```bash
npx serve out  # para static export
```

---

## Dicas Adicionais

- **Imagens**: Com static export, todas as imagens devem usar `unoptimized: true`
- **Trailing slashes**: Adicione `trailingSlash: true` se quiser URLs com `/` no final
- **Base path**: Se fizer deploy em um subdiretório, configure `basePath` no next.config.ts