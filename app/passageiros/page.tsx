import type { Metadata } from "next";
import Link from "next/link";
import { PassengerTransportSchema } from "@/components/seo/JsonLd";
import { APP_STORES, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "App para Passageiros MOVAGO | Viaje com Segurança em Moçambique",
  description: "Baixe o app MOVAGO para passageiros. Encontre transporte seguro, rápido e econômico em Maputo e Moçambique. Rastreie em tempo real, pague via M-Pesa e viaje com segurança.",
  keywords: [
    "app para passageiros",
    "aplicativo de transporte",
    "viajar com segurança",
    "transporte de passageiros",
    "app de mobilidade",
    "transporte individual",
    "viagens compartilhadas",
    "app passageiro Maputo",
    "corridas de passageiros",
    "transporte app Moçambique",
    "passageiro MOVAGO",
    "mobilidade urbana app"
  ],
  openGraph: {
    title: "App para Passageiros MOVAGO | Viaje com Segurança em Moçambique",
    description: "Encontre chapa, táxi e moto-táxi em um só app. Rastreie em tempo real, pague via M-Pesa e viaje com segurança.",
    url: `${SITE_URL}/passageiros`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/passageiros`,
  },
};

export default function PassageirosPage() {
  return (
    <>
      <PassengerTransportSchema />
      
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 text-white py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                O App Perfeito para{" "}
                <span className="text-yellow-300">Passageiros</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-50 leading-relaxed">
                Viaje com <strong>segurança</strong>, <strong>conforto</strong> e <strong>preços transparentes</strong>. 
                Encontre <strong>chapas, táxis e moto-táxis</strong> em um só app. Rastreie tudo em tempo real.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href={APP_STORES.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  📱 Baixar App Grátis
                </Link>
                <Link
                  href="/transporte"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all"
                >
                  🚗 Ver Serviços
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
                { value: "4.8★", label: "Avaliação" },
                { value: "100%", label: "Rastreamento" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300">{stat.value}</div>
                  <div className="text-sm text-purple-50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Para quem é */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Para Quem é o App MOVAGO?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Se você precisa se locomover em <strong>Maputo, Matola ou Beira</strong>, 
                o app MOVAGO é a solução ideal. Seja para trabalho, estudos ou lazer, 
                temos o transporte perfeito para você.
              </p>
            </div>
          </div>
        </section>

        {/* Tipos de Passageiros */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perfeito para Todos os Tipos de Passageiros
              </h2>
              <p className="text-xl text-gray-600">
                Seja qual for seu perfil, temos a solução ideal
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: "👨‍💼",
                  title: "Profissionais",
                  desc: "Chegue ao trabalho no horário com transporte confiável",
                  benefits: ["Pontualidade", "Conforto", "Produtividade"]
                },
                {
                  icon: "🎓",
                  title: "Estudantes",
                  desc: "Economize nas viagens para faculdade e escolas",
                  benefits: ["Econômico", "Seguro", "Rotas otimizadas"]
                },
                {
                  icon: "👨‍👩‍👧‍👦",
                  title: "Famílias",
                  desc: "Viajem juntos com segurança e conforto",
                  benefits: ["Espaço para todos", "Motoristas verificados", "Rastreamento"]
                },
                {
                  icon: "🌙",
                  title: "Noturnos",
                  desc: "Transporte seguro a qualquer hora da noite",
                  benefits: ["24/7 disponível", "SOS integrado", "Segurança"]
                }
              ].map((profile, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
                  <div className="text-5xl mb-4">{profile.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{profile.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{profile.desc}</p>
                  <ul className="space-y-1">
                    {profile.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-purple-500">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefícios Exclusivos para Passageiros
              </h2>
              <p className="text-xl text-gray-600">
                Por que milhares de passageiros escolhem a MOVAGO
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: "📍",
                  title: "Rastreamento em Tempo Real",
                  desc: "Saque exatamente onde está seu motorista e quando vai chegar. Compartilhe sua viagem com familiares."
                },
                {
                  icon: "💰",
                  title: "Preços Transparentes",
                  desc: "Veja o preço estimado antes de confirmar. Sem surpresas no final da viagem."
                },
                {
                  icon: "🔒",
                  title: "Motoristas Verificados",
                  desc: "Todos os motoristas passam por verificação de antecedentes e documentos."
                },
                {
                  icon: "📱",
                  title: "Pagamento via M-Pesa",
                  desc: "Pague facilmente e com segurança através do seu telemóvel. Sem necessidade de dinheiro em espécie."
                },
                {
                  icon: "🆘",
                  title: "Botão SOS Integrado",
                  desc: "Em emergências, alerte seus contatos com sua localização precisa em um clique."
                },
                {
                  icon: "⭐",
                  title: "Sistema de Avaliação",
                  desc: "Avalie motoristas após cada viagem. Ajude a manter a qualidade do serviço."
                }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg border border-purple-100">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como Usar */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Como Usar o App como Passageiro
              </h2>
              <p className="text-xl text-purple-100">
                Em 4 passos simples você está pronto para viajar
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Baixe o App",
                  desc: "Instale gratuitamente na Play Store"
                },
                {
                  step: "2",
                  title: "Cadastre-se",
                  desc: "Crie sua conta em segundos"
                },
                {
                  step: "3",
                  title: "Escolha o Destino",
                  desc: "Selecione onde quer ir e veja opções"
                },
                {
                  step: "4",
                  title: "Viaje com Segurança",
                  desc: "Acompanhe em tempo real e pague via M-Pesa"
                }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-white text-purple-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-purple-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Opções de Transporte */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Escolha o Transporte Ideal
              </h2>
              <p className="text-xl text-gray-600">
                Uma opção para cada necessidade e orçamento
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Chapa */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-all">
                <div className="bg-orange-500 text-white p-4 text-center">
                  <div className="text-4xl mb-2">🚌</div>
                  <h3 className="text-2xl font-bold">Chapa</h3>
                  <p className="text-orange-100 text-sm">Mais Econômico</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Viagens compartilhadas com rotas otimizadas. Ideal para trajetos regulares e economia.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Mais econômico</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Rotas em tempo real</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Previsões de chegada</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Táxi */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all transform md:scale-105">
                <div className="bg-blue-500 text-white p-4 text-center">
                  <div className="text-4xl mb-2">🚕</div>
                  <h3 className="text-2xl font-bold">Táxi</h3>
                  <p className="text-blue-100 text-sm">Conforto e Privacidade</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Corridas exclusivas com motoristas verificados. Perfeito para quando precisa de privacidade.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Viagem exclusiva</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Motorista verificado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Preço transparente</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Moto-táxi */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-all">
                <div className="bg-purple-500 text-white p-4 text-center">
                  <div className="text-4xl mb-2">🏍️</div>
                  <h3 className="text-2xl font-bold">Moto-táxi</h3>
                  <p className="text-purple-100 text-sm">Rápido e Ágil</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Para destinos curtos ou quando precisa vencer o trânsito. Chega mais rápido.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Vence o trânsito</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Ideal para curtas distâncias</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Muito econômico</span>
                    </li>
                  </ul>
                </div>
              </div>
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
                <p className="text-xl text-gray-600">
                  Recursos avançados para sua proteção
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: "🛡️",
                      title: "Motoristas Verificados",
                      desc: "Todos passam por verificação completa de antecedentes criminais, documentos e entrevista pessoal."
                    },
                    {
                      icon: "📍",
                      title: "Rastreamento ao Vivo",
                      desc: "Compartilhe sua localização em tempo real com contatos de emergência durante toda a viagem."
                    },
                    {
                      icon: "🆘",
                      title: "Botão SOS",
                      desc: "Em situações de emergência, envie alerta instantâneo com sua localização GPS precisa."
                    },
                    {
                      icon: "💳",
                      title: "Pagamento Seguro",
                      desc: "Pague via M-Pesa sem precisar de dinheiro em espécie. Mais seguro para você e o motorista."
                    },
                    {
                      icon: "⭐",
                      title: "Avaliação Mútua",
                      desc: "Avalie motoristas após cada viagem. Motoristas com baixa avaliação são removidos da plataforma."
                    },
                    {
                      icon: "🔔",
                      title: "Notificações",
                      desc: "Receba alertas quando o motorista estiver chegando e durante toda a viagem."
                    }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cidades */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Onde Você Pode Usar o App
              </h2>
              <p className="text-xl text-purple-100">
                Cobertura em expansão por todo Moçambique
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { city: "Maputo", desc: "Capital e região metropolitana", features: ["Maior cobertura", "24/7 disponível"] },
                { city: "Matola", desc: "Região industrial e subúrbios", features: ["Conexão com Maputo", "Rotas otimizadas"] },
                { city: "Beira", desc: "Segunda maior cidade", features: ["Em expansão", "Mais cidades em breve"] }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <div className="text-4xl mb-3">📍</div>
                  <h3 className="text-2xl font-bold mb-2">{item.city}</h3>
                  <p className="text-purple-100 text-sm mb-3">{item.desc}</p>
                  <ul className="space-y-1">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-purple-200">• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testemunhos */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                O que Dizem Nossos Passageiros
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Marta S.",
                  city: "Maputo",
                  text: "Uso todos os dias para ir ao trabalho. O rastreamento em tempo real me dá muita segurança, especialmente à noite.",
                  rating: 5
                },
                {
                  name: "Pedro M.",
                  city: "Matola",
                  text: "Economizo muito usando as chapas através do app. Sei exatamente quando vai chegar e qual rota tomar.",
                  rating: 5
                },
                {
                  name: "Isabel K.",
                  city: "Beira",
                  text: "Adoro poder pagar via M-Pesa. Não preciso andar com dinheiro e o preço é sempre transparente.",
                  rating: 5
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl p-8 border border-purple-100">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.city}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comece a Viajar com Segurança Hoje
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Baixe o app MOVAGO gratuitamente e descubra uma nova forma de se locomover em Moçambique. 
                Seguro, rápido e econômico.
              </p>
              <Link
                href={APP_STORES.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-purple-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                📱 Baixar App para Passageiros
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
                <Link href="/transporte" className="text-purple-600 hover:text-purple-700 underline">
                  Serviços de Transporte
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/motoristas" className="text-purple-600 hover:text-purple-700 underline">
                  Seja Motorista
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/taxi" className="text-purple-600 hover:text-purple-700 underline">
                  App de Táxi
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/sobre" className="text-purple-600 hover:text-purple-700 underline">
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