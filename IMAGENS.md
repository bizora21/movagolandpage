# 📸 Guia de Imagens - MOVAGO Landing Page

## 📍 Localização das Imagens

Todas as imagens devem ser colocadas no subdiretório `public/images/`.

### ✅ Estrutura Correta
```
public/
  ├── images/
  │   ├── hero-banner.jpg        ✅
  │   ├── app-mockup.png         ✅
  │   ├── og-image.png           ✅
  │   └── (outras imagens)
  ├── icons/
  └── robots.txt
```

## 📋 Lista de Imagens Necessárias

### 1. Imagens da Homepage

#### Hero Section
- **hero-banner.jpg** - Banner principal do hero (1920x1080px recomendado)
  - Deve mostrar pessoas usando transporte em Maputo
  - Estilo: vibrante, moderno, com cores quentes

#### App Download Section
- **app-mockup.png** - Mockup do app (800x600px)
  - Screenshot do app MOVAGO em smartphone
  - Fundo transparente ou branca

#### Features Section
- **feature-tracking.jpg** - Rastreamento em tempo real (600x400px)
- **feature-secure.jpg** - Segurança (600x400px)
- **feature-easy.jpg** - Fácil de usar (600x400px)
- **feature-affordable.jpg** - Preço acessível (600x400px)

### 2. Imagens de Páginas

#### Sobre Nós
- **about-team.jpg** - Equipa MOVAGO (1200x800px)
- **about-mission.jpg** - Imagem ilustrativa da missão (1200x800px)

#### Motoristas
- **driver-benefits.jpg** - Benefícios para motoristas (1200x600px)
- **driver-app.jpg** - Screenshot do app de motoristas (800x600px)

#### Blog
- **blog-default.jpg** - Imagem padrão para artigos (1200x630px)

### 3. Imagens de SEO

#### Open Graph (Redes Sociais)
- **og-image.png** - Imagem para partilhas (1200x630px obrigatório)
  - Logo MOVAGO + slogan
  - Fundo com cor da marca (#F97316)

### 4. Ícones e Favicons

#### Favicons (geralmente já existem)
- `favicon.ico` - Favicon principal (32x32px)
- `apple-touch-icon.png` - Ícone iOS (180x180px)
- `icon-192.png` - Ícone PWA (192x192px)
- `icon-512.png` - Ícone PWA (512x512px)

## 🎨 Especificações Técnicas

### Formatos Recomendados
- **Fotos**: JPG (qualidade 85%) ou WebP
- **Gráficos/Logos**: PNG com transparência ou SVG
- **Ícones**: SVG ou PNG

### Tamanhos Recomendados
- **Hero banner**: 1920x1080px (Full HD)
- **Secções**: 1200x800px ou 1200x600px
- **Cards/Features**: 600x400px
- **Screenshots**: 800x600px ou proporcional
- **Open Graph**: 1200x630px (obrigatório para SEO)

### Otimização
- Comprimir imagens antes de adicionar ao projeto
- Usar ferramentas como TinyPNG, Squoosh, ou ImageOptim
- Tamanho máximo recomendado: 500KB por imagem
- Para WebP: usar qualidade 80-85%

## 📝 Como Referenciar as Imagens

No código Next.js, use o componente `Image`:

```tsx
import Image from 'next/image';

// ✅ CORRETO - caminho a partir de /public
<Image 
  src="/images/hero-banner.jpg" 
  alt="Hero banner MOVAGO"
  width={1920}
  height={1080}
/>

// ❌ ERRADO - não incluir "public" no caminho
<Image 
  src="/public/images/hero-banner.jpg"  // ❌
  alt="Hero banner"
/>

// ❌ ERRADO - não esquecer do subdiretório "images/"
<Image 
  src="/hero-banner.jpg"  // ❌
  alt="Hero banner"
/>
```

## 🎯 Estilo Visual das Imagens

### Cores e Atmosfera
- **Tons quentes**: Laranja (#F97316), amarelo
- **Contraste**: Fundos escuros com elementos vibrantes
- **Pessoas**: Diversas, representando a população moçambicana
- **Ambiente**: Urbano, Maputo, transporte público

### Diretrizes de Conteúdo
- Mostrar pessoas reais usando o serviço
- Incluir elementos de transporte (chapas, táxis)
- Destacar tecnologia (smartphones, apps)
- Atmosfera positiva e profissional

## 🚀 Como Adicionar Imagens

1. **Prepare a imagem**
   - Redimensionar para o tamanho adequado
   - Otimizar/comprimir
   - Converter para formato adequado (JPG/PNG/WebP)

2. **Coloque no diretório correto**
   ```bash
   # Copiar para o subdiretório images/
   cp minha-imagem.jpg public/images/hero-banner.jpg
   ```

3. **Use no código**
   ```tsx
   <Image 
     src="/hero-banner.jpg" 
     alt="Descrição da imagem"
     width={1920}
     height={1080}
     priority // Para imagens above-the-fold
   />
   ```

## 📦 Checklist de Imagens

### ✅ Já Implementadas no Código
- [x] `og-image.png` - Open Graph (1200x630px) - usado em layout.tsx
- [x] `hero-banner.jpg` - Hero principal (1920x1080px) - usado em Hero.tsx
- [x] `app-mockup.png` - Mockup do app (800x600px) - usado em Hero.tsx

### Recomendadas
- [ ] `favicon.ico` - Favicon
- [ ] `apple-touch-icon.png` - Ícone iOS
- [ ] `feature-tracking.jpg` - Feature 1
- [ ] `feature-secure.jpg` - Feature 2
- [ ] `feature-easy.jpg` - Feature 3
- [ ] `feature-affordable.jpg` - Feature 4
- [ ] `about-team.jpg` - Página Sobre
- [ ] `driver-benefits.jpg` - Página Motoristas

## 🔧 Ferramentas Úteis

### Criação de Imagens
- **Canva** - Templates e design gráfico
- **Figma** - Design profissional
- **Adobe Express** - Gráficos rápidos

### Otimização
- **TinyPNG** - Compressão online
- **Squoosh** - Google (compressão e conversão)
- **ImageOptim** - Mac app

### Screenshots de Apps
- **ScreenStudio** - Mockups profissionais
- **Mockuphone** - Templates de mockups
- **Placeit** - Mockups com dispositivos reais

---

**Nota**: Todas as imagens devem respeitar direitos autorais. Use imagens livres de direitos ou crie conteúdo original.