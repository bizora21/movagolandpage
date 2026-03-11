import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/Card";
import { Target, Eye, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nós — MOVAGO",
  description: "Conheça a MOVAGO, o sistema inteligente de mobilidade urbana que está a revolucionar o transporte público.",
};

export default function SobrePage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Sobre a <span className="gradient-text">MOVAGO</span>
          </h1>
          <p className="text-xl text-[rgb(var(--color-text-muted))] leading-relaxed">
            Estamos a transformar a mobilidade urbana com tecnologia inteligente,
            segurança e compromisso com a comunidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card variant="glass">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[rgb(var(--color-primary))]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="text-[rgb(var(--color-primary))]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Nossa Missão</h3>
              <p className="text-[rgb(var(--color-text-muted))]">
                Proporcionar um sistema inteligente de mobilidade urbana que conecta
                passageiros ao transporte público em tempo real.
              </p>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[rgb(var(--color-accent))]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="text-[rgb(var(--color-accent))]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Nossa Visão</h3>
              <p className="text-[rgb(var(--color-text-muted))]">
                Ser a referência em sistemas inteligentes de mobilidade urbana, melhorando
                a qualidade de vida dos nossos utilizadores através de tecnologia acessível.
              </p>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-green-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Nossos Valores</h3>
              <p className="text-[rgb(var(--color-text-muted))]">
                Segurança, transparência, inovação e compromisso com a comunidade são
                os pilares que guiam todas as nossas acções.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">A Nossa História</h2>
            <div className="space-y-4 text-[rgb(var(--color-text-muted))] leading-relaxed">
              <p>
                A MOVAGO nasceu em 2024 com um objectivo simples: transformar
                a forma como as pessoas se deslocam nas cidades. Percebemos que o transporte
                público enfrentava desafios — dificuldade em encontrar rotas,
                falta de informação em tempo real e ausência de rastreamento.
              </p>
              <p>
                Desenvolvemos um sistema inteligente que facilita o acesso ao transporte público.
                A nossa plataforma permite escolher rotas, visualizar transportes disponíveis
                e acompanhar a localização em tempo real.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}