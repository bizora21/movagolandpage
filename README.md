# MOVAGO — Landing Page Oficial

Landing page oficial da MOVAGO, sistema inteligente de mobilidade urbana.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14+ (App Router)
- **Linguagem**: TypeScript (strict mode)
- **Estilo**: Tailwind CSS com CSS Variables
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Fontes**: Inter + Sora (Google Fonts)
- **SEO**: Metadata API nativa
- **Formulários**: React Hook Form + Zod

## 📋 Pré-requisitos

- Node.js 18+ ou superior
- npm, yarn, pnpm ou bun
- Git

## 🛠️ Instalação

1. **Clone o repositório**
   ```bash
   git clone <repository-url>
   cd movago_landing
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um ficheiro `.env.local` na raiz do projecto:
   ```env
   # Email Service (Resend/Nodemailer)
   RESEND_API_KEY=your_resend_api_key
   
   # Appwrite (opcional - para backend)
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=6921bac2003624668e3b
   APPWRITE_API_KEY=your_appwrite_api_key
   
   # Google Analytics (opcional)
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

5. **Abra o navegador**
   
   Aceda a [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projecto

```
movago-web/
├── app/
│   ├── layout.tsx              # Root layout com SEO global
│   ├── page.tsx                # Homepage
│   ├── sobre/                  # Página Sobre Nós
│   ├── motoristas/             # Página para Motoristas
│   ├── contacto/               # Página de Contacto
│   ├── faq/                    # Perguntas Frequentes
│   ├── privacidade/            # Política de Privacidade
│   ├── termos/                 # Termos de Uso
│   ├── blog/                   # Blog
│   │   ├── page.tsx            # Lista de artigos
│   │   └── [slug]/page.tsx     # Artigo individual
│   ├── api/
│   │   └── contact/route.ts    # Endpoint formulário
│   └── sitemap.ts              # Sitemap dinâmico
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── sections/               # Secções da homepage
│   ├── ui/                     # Componentes reutilizáveis
│   └── seo/                    # Schema.org
├── lib/
│   ├── utils.ts                # Funções auxiliares
│   └── constants.ts            # Constantes globais
└── public/
    ├── images/                 # Imagens estáticas
    └── robots.txt              # Robots.txt
```

## 🎨 Sistema de Design

### Cores (CSS Variables)

```css
--color-primary: #F97316;      /* Laranja MOVAGO */
--color-primary-dark: #EA6C0A;
--color-secondary: #1E293B;    /* Slate escuro */
--color-bg: #0F172A;           /* Background dark */
--color-surface: #1E293B;
--color-text: #F8FAFC;
--color-text-muted: #94A3B8;
--color-accent: #38BDF8;       /* Azul info */
```

### Tipografia

- **Headings**: Sora (bold, extra-bold)
- **Body**: Inter (regular, medium)

## 📄 Páginas Implementadas

- ✅ Homepage com 5 secções essenciais
- ✅ Sobre Nós
- ✅ Contacto com formulário funcional
- ✅ FAQ com acordeão
- ✅ Política de Privacidade (GDPR compliant)
- ✅ Termos de Uso
- ✅ Blog (listagem e artigos)
- ✅ Sitemap dinâmico
- ✅ Robots.txt

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub/GitLab/Bitbucket
2. Importe o projecto no [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente no painel
4. Deploy automático em cada push para `main`

### Netlify

1. Conecte o repositório no [Netlify](https://netlify.com)
2. Configure o build command: `npm run build`
3. Configure o publish directory: `.next`
4. Adicione as variáveis de ambiente

## 🔐 Variáveis de Ambiente

### Obrigatórias para Produção

- `NEXT_PUBLIC_APPWRITE_PROJECT_ID` - Appwrite Project ID
- `RESEND_API_KEY` - Chave API do Resend (emails)

### Opcionais

- `NEXT_PUBLIC_GA_ID` - Google Analytics Measurement ID
- `NEXT_PUBLIC_SITE_URL` - URL base do site (para links absolutos)

## 📊 SEO & Performance

- ✅ Metadata completa em todas as páginas
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Sitemap XML dinâmico
- ✅ Robots.txt configurado
- ✅ Schema.org structured data (preparado)
- ✅ Core Web Vitals optimizados
- ✅ Imagens optimizadas com next/image
- ✅ Fontes optimizadas com next/font

## 🧪 Testar Localmente

```bash
# Instalar dependências
npm install

# Iniciar dev server
npm run dev

# Aceder a http://localhost:3000
```

## 📝 Recursos Adicionais

### Integração Email Service

O endpoint `/api/contact` está preparado para integrar com Resend:

```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
```

### Integração Appwrite

Para integração completa com Appwrite:

```typescript
import { Client, Databases, Account } from 'appwrite';
```


## 🤝 Contribuir

1. Faça fork do projecto
2. Crie uma branch para a sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit as mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projecto é propriedade da MOVAGO. Todos os direitos reservados.

## 👥 Contacto

- **Website**: https://movago.co.mz
- **Email**: ola@movago.co.mz
- **Telefone**: +258 84 123 4567

---

Desenvolvido com ❤️ para MOVAGO 🚀
