import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/Card";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";

// Mock blog post data - in production, this would come from MDX files or a CMS
const blogPost = {
  title: "Como Usar a MOVAGO: Guia Completo para Iniciantes",
  category: "Tutoriais",
  date: "15 Mar 2026",
  readTime: "5 min",
  author: "Equipa MOVAGO",
  content: `
# Como Usar a MOVAGO: Guia Completo para Iniciantes

Bem-vindo à MOVAGO! Este guia irá ajudá-lo a começar a usar a nossa aplicação de forma rápida e segura.

## Passo 1: Baixe a App

A primeira coisa que precisa fazer é baixar a aplicação. A MOVAGO está disponível gratuitamente na Google Play e App Store.

- **Android**: [Google Play Store](https://play.google.com/store/apps/details?id=com.movago)
- **iOS**: [Apple App Store](https://apps.apple.com/app/movago)

## Passo 2: Crie a Sua Conta

Após instalar a app, abra-a e siga estes passos simples:

1. Introduza o seu número de telefone moçambicano
2. Receba o código de verificação por SMS
3. Crie o seu perfil adicionando o seu nome e foto (opcional)

Este processo leva menos de 2 minutos!

## Passo 3: Solicite a Sua Primeira Viagem

Agora está pronto para solicitar a sua primeira viagem:

1. **Defina o destino**: Toque no campo de destino e introduza o endereço ou seleccione no mapa
2. **Veja o preço**: O preço estimado será exibido imediatamente
3. **Confirme a viagem**: Seleccione o tipo de veículo e toque em "Solicitar"

## Passo 4: Acompanhe o Motorista

Após confirmar:

- Verá as informações do motorista (nome, foto, classificação)
- Pode acompanhar a aproximação em tempo real no mapa
- Receberá notificações quando o motorista estiver próximo

## Passo 5: Pague com M-Pesa

Ao chegar ao destino:

1. O preço final será exibido
2. Seleccione "Pagar com M-Pesa"
3. Introduza o seu PIN M-Pesa para confirmar
4. Receberá confirmação do pagamento

Também pode pagar em dinheiro, dependendo da preferência do motorista.

## Dicas Úteis

### Agende Viagens com Antecedência
Precisa de ir para o aeroporto às 6h da manhã? Pode agendar a viagem com até 7 dias de antecedência!

### Adicione Favoritos
Guarde os seus destinos mais frequentes como "Casa", "Trabalho", etc. para solicitar viagens ainda mais rápido.

### Partilhe a Viagem
Pode partilhar o seu trajeto em tempo real com amigos e família para maior segurança.

## Precisa de Ajuda?

A nossa equipa de suporte está disponível 24/7. Contacte-nos:
- Email: ola@movago.co.mz
- Telefone: +258 84 123 4567
- In-app chat

Boas viagens com a MOVAGO! 🚗
  `,
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `${blogPost.title} — MOVAGO`,
    description: blogPost.content.substring(0, 160).replace(/[#*]/g, '').trim(),
    openGraph: {
      title: blogPost.title,
      description: blogPost.content.substring(0, 160).replace(/[#*]/g, '').trim(),
      type: "article",
      publishedTime: blogPost.date,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-[rgb(var(--color-primary))] mb-8 hover:underline">
            <ArrowLeft size={20} />
            Voltar ao Blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="inline-block px-3 py-1 bg-[rgb(var(--color-primary))]/20 rounded-full text-[rgb(var(--color-primary))] text-sm font-medium mb-4">
              {blogPost.category}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {blogPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[rgb(var(--color-text-muted))]">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{blogPost.readTime}</span>
              </div>
              <span>{blogPost.author}</span>
            </div>
          </div>

          {/* Article Content */}
          <Card variant="glass">
            <CardContent className="p-8 lg:p-12">
              <article className="prose prose-invert prose-lg max-w-none">
                {blogPost.content.split('\n').map((paragraph, index) => {
                  // Headers
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-white mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-3xl font-bold text-white mt-8 mb-4">
                        {paragraph.replace('# ', '')}
                      </h1>
                    );
                  }

                  // Lists
                  if (paragraph.match(/^\d+\./)) {
                    return (
                      <li key={index} className="text-[rgb(var(--color-text-muted))] ml-6 mb-2">
                        {paragraph.replace(/^\d+\.\s*/, '')}
                      </li>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="text-[rgb(var(--color-text-muted))] ml-6 mb-2 list-disc">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  }

                  // Empty lines
                  if (!paragraph.trim()) {
                    return <br key={index} />;
                  }

                  // Regular paragraphs
                  return (
                    <p key={index} className="text-[rgb(var(--color-text-muted))] leading-relaxed mb-4">
                      {paragraph
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" className="text-[rgb(var(--color-primary))] hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
                        .split(/<strong>|<em>|<a /g)
                        .map((part, i, arr) => {
                          if (i === 0) return part;
                          const [tag, content] = part.split('>');
                          if (tag === 'strong') return `<strong class="text-white">${content}`;
                          if (tag === 'em') return `<em class="text-white">${content}`;
                          if (tag === 'a ') return `<a ${content}`;
                          return part;
                        })
                        .join('')
                        .replace(/<\/strong>/g, '</strong>')
                        .replace(/<\/em>/g, '</em>')
                        .replace(/<\/a>/g, '</a>')
                      }
                    </p>
                  );
                })}
              </article>
            </CardContent>
          </Card>

          {/* Share and Related */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-between items-center">
            <div className="flex items-center gap-3">
              <Share2 className="text-[rgb(var(--color-text-muted))]" size={20} />
              <span className="text-[rgb(var(--color-text-muted))]">Partilhar artigo:</span>
              <div className="flex gap-2">
                <button className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-[rgb(var(--color-primary))] transition-colors">
                  📱
                </button>
                <button className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-[rgb(var(--color-primary))] transition-colors">
                  📧
                </button>
                <button className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-[rgb(var(--color-primary))] transition-colors">
                  🔗
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}