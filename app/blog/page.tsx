import { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/Card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — MOVAGO",
  description: "Notícias, dicas e atualizações sobre a MOVAGO e o mundo do transporte urbano em Moçambique.",
};

// Mock blog posts - in production, this would come from a CMS or MDX files
const blogPosts = [
  {
    slug: "como-usar-movago",
    title: "Como Usar a MOVAGO: Guia Completo para Iniciantes",
    excerpt: "Aprenda passo a passo como solicitar sua primeira viagem e chegar ao seu destino com segurança.",
    category: "Tutoriais",
    date: "15 Mar 2026",
    readTime: "5 min",
  },
  {
    slug: "motoristas-maputo",
    title: "MOVAGO Chega a Maputo: Conheça os Primeiros Motoristas",
    excerpt: "Conheça algumas histórias dos nossos primeiros motoristas que estão a revolucionar o transporte urbano.",
    category: "Comunidade",
    date: "10 Mar 2026",
    readTime: "4 min",
  },
  {
    slug: "formas-pagamento",
    title: "Formas de Pagamento na MOVAGO",
    excerpt: "Descubra como é fácil pagar suas viagens directamente ao motorista.",
    category: "Tutoriais",
    date: "05 Mar 2026",
    readTime: "3 min",
  },
  {
    slug: "seguranca-viagens",
    title: "Segurança em Primeiro Lugar: Recursos da MOVAGO",
    excerpt: "Conheça todos os recursos de segurança que implementamos para proteger passageiros e motoristas.",
    category: "Segurança",
    date: "01 Mar 2026",
    readTime: "6 min",
  },
  {
    slug: "expansao-matola",
    title: "MOVAGO Expande para a Matola",
    excerpt: "Anunciamos com orgulho a nossa expansão para a cidade da Matola. Agora é mais fácil mover-se na região.",
    category: "Notícias",
    date: "25 Fev 2026",
    readTime: "3 min",
  },
  {
    slug: "dicas-economizar",
    title: "5 Dicas para Economizar nas Suas Viagens",
    excerpt: "Aprenda estratégias simples para reduzir os custos de transporte sem comprometer a qualidade.",
    category: "Dicas",
    date: "20 Fev 2026",
    readTime: "4 min",
  },
];

const categories = ["Todas", "Tutoriais", "Comunidade", "Segurança", "Notícias", "Dicas"];

export default function BlogPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Blog <span className="gradient-text">MOVAGO</span>
            </h1>
            <p className="text-xl text-[rgb(var(--color-text-muted))] max-w-2xl mx-auto">
              Notícias, dicas e atualizações sobre transporte urbano em Moçambique
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category === "Todas"
                    ? "bg-[rgb(var(--color-primary))] text-white"
                    : "bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text-muted))] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card variant="glass" className="h-full hover:border-[rgb(var(--color-primary))]/50 transition-all hover:transform hover:scale-105">
                  <CardContent className="p-6">
                    {/* Category Badge */}
                    <div className="inline-block px-3 py-1 bg-[rgb(var(--color-primary))]/20 rounded-full text-[rgb(var(--color-primary))] text-sm font-medium mb-4">
                      {post.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[rgb(var(--color-text-muted))] mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-[rgb(var(--color-text-muted))] mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-[rgb(var(--color-primary))] font-medium">
                      Ler mais
                      <ArrowRight size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}