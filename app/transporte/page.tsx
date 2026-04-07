import type { Metadata } from "next";
import Link from "next/link";
import { TransportServiceSchema } from "@/components/seo/JsonLd";
import { APP_STORES, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Transporte em Maputo e Moçambique | MOVAGO",
  description: "Encontre transporte seguro, rápido e acessível em Maputo, Matola, Beira e todo Moçambique. Chapas, táxis e moto-táxis em um só app. Rastreie em tempo real e viaje com segurança.",
  keywords: [
    "transporte em Maputo",
    "transporte em Moçambique",
    "transporte público",
    "chapas Maputo",
    "táxi Maputo",
    "moto-táxi",
    "transporte urbano",
    "mobilidade urbana",
    "transporte compartilhado",
    "app de transporte",
    "viagens Maputo",
    "corridas de táxi",
    "transporte Beira",
    "transporte Matola"
  ],
  openGraph: {
    title: "Transporte Inteligente em Maputo e Moçambique | MOVAGO",
    description: "Encontre chapas, táxis e moto-táxis em um só app. Rastreie em tempo real e viaje com segurança por toda Moçambique.",
    url: `${SITE_URL}/transporte`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/transporte`,
  },
};

export default function TransportePage() {
  return (
    <>
      <TransportServiceSchema />
      
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-white py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transporte Inteligente em{" "}
                <span className="text-yellow-300">Maputo e Moçambique</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-50 leading-relaxed">
                Encontre <strong>chapas, táxis e moto-táxis</strong> em um só app. 
                Rastreie em tempo real, pague via M-Pesa e viaje com segurança.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href={APP_STORES.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  📱 Baixar App Grátis
                </Link>
                <Link
                  href="/motoristas"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all"
                >
                  🚗 Seja Motorista
                </Link>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="container mx-auto px-4 mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "50.000+", label: "Viagens/mês" },
                { value: "500+", label: "Motoristas" },
                { value: "3", label: "Cidades" },
                { value: "4.8★", label: "Avaliação" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300">{stat.value}</div>
                  <div className="text-sm text-orange-50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problema */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cansado das Chapas Sobrelotadas e Táxis Caros?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sabemos como é difícil se locomover em <strong>Maputo, Matola e Beira</strong>. 
                Filas enormes, chapas superlotadas, táxis sem taxímetro e a incerteza de quando o próximo transporte vai chegar.
              </p>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Todas as Opções de Transporte em Um Só App
              </h2>
              <p className="text-xl text-gray-600">
                Escolha o tipo de transporte que melhor se adapta à sua necessidade
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Chapas */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-t-4 border-orange-500">
                <div className="text-5xl mb-4">🚌</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Transporte em Chapas</h3>
                <p className="text-gray-600 mb-4">
                  Viagens compartilhadas econômicas com rotas otimizadas. Encontre a chapa certa para o seu destino sem andar sem rumo.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Rotas em tempo real
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Previsões de chegada
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Mais econômico
                  </li>
                </ul>
              </div>

              {/* Táxi */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-t-4 border-blue-500">
                <div className="text-5xl mb-4">🚕</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Táxi Particular</h3>
                <p className="text-gray-600 mb-4">
                  Corridas exclusivas com motoristas verificados. Viaje com conforto, privacidade e segurança para qualquer lugar.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Motoristas verificados
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Preço transparente
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Viagem exclusiva
                  </li>
                </ul>
              </div>

              {/* Moto-táxi */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-t-4 border-purple-500">
                <div className="text-5xl mb-4">🏍️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Moto-táxi</h3>
                <p className="text-gray-600 mb-4">
                  Para destinos curtos ou quando precisa vencer o trânsito. Rápido, ágil e econômico para pequenas distâncias.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Vence o trânsito
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Ideal para curtas distâncias
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Chega mais rápido
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Como Usar o Transporte na MOVAGO
              </h2>
              <p className="text-xl text-gray-600">
                Em 4 passos simples você está no caminho
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Baixe o App",
                  desc: "Disponível gratuitamente na Play Store"
                },
                {
                  step: "2",
                  title: "Escolha a Rota",
                  desc: "Selecione seu ponto de partida e destino"
                },
                {
                  step: "3",
                  title: "Selecione o Transporte",
                  desc: "Escolha entre chapa, táxi ou moto-táxi"
                },
                {
                  step: "4",
                  title: "Acompanhe em Tempo Real",
                  desc: "Rastreie sua viagem até o destino"
                }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cidades */}
        <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Onde Estamos Presentes
              </h2>
              <p className="text-xl text-orange-50">
                Cobertura expandindo constantemente por todo Moçambique
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { city: "Maputo", desc: "Capital e maior cidade" },
                { city: "Matola", desc: "Região metropolitana" },
                { city: "Beira", desc: "Segunda maior cidade" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <div className="text-3xl mb-3">📍</div>
                  <h3 className="text-2xl font-bold mb-2">{item.city}</h3>
                  <p className="text-orange-50">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-orange-50">
                🚀 Mais cidades chegando em breve! Fique atento.
              </p>
            </div>
          </div>
        </section>

        {/* Segurança */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Sua Segurança é Nossa Prioridade
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "🛡️",
                    title: "Motoristas Verificados",
                    desc: "Todos os motoristas passam por verificação de antecedentes e documento"
                  },
                  {
                    icon: "📍",
                    title: "Rastreamento em Tempo Real",
                    desc: "Compartilhe sua viagem com contatos de emergência"
                  },
                  {
                    icon: "🆘",
                    title: "Botão SOS Integrado",
                    desc: "Em emergências, alerte seus contatos com localização precisa"
                  },
                  {
                    icon: "⭐",
                    title: "Sistema de Avaliação",
                    desc: "Avalie motoristas e passageiros após cada viagem"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comece a Viajar com Inteligência Hoje
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Baixe o app MOVAGO e descubra uma nova forma de se locomover em Moçambique. 
                É gratuito, rápido e seguro.
              </p>
              <Link
                href={APP_STORES.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-orange-600 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                📱 Baixar Agora na Play Store
              </Link>
            </div>
          </div>
        </section>

        {/* Links relacionados */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Outras páginas úteis
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/motoristas" className="text-orange-600 hover:text-orange-700 underline">
                  Seja Motorista Parceiro
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/taxi" className="text-orange-600 hover:text-orange-700 underline">
                  App de Táxi
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/passageiros" className="text-orange-600 hover:text-orange-700 underline">
                  Para Passageiros
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/sobre" className="text-orange-600 hover:text-orange-700 underline">
                  Sobre a MOVAGO
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}