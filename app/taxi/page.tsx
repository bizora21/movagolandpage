import type { Metadata } from "next";
import Link from "next/link";
import { TaxiServiceSchema } from "@/components/seo/JsonLd";
import { APP_STORES, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "App de Táxi MOVAGO | Chame Táxi e Chapas em Maputo e Moçambique",
  description: "Chame táxi, chapa e moto-táxi com o app MOVAGO em Maputo, Matola, Beira e todo Moçambique. Preços transparentes, motoristas verificados e pagamento via M-Pesa.",
  keywords: [
    "táxi app",
    "app de táxi",
    "chamar táxi",
    "táxi Maputo",
    "táxi Moçambique",
    "chapas app",
    "transporte particular",
    "corridas de táxi",
    "táxi online",
    "uber-style Moçambique",
    "táxi com aplicativo",
    "moto-táxi app",
    "taxi service"
  ],
  openGraph: {
    title: "App de Táxi MOVAGO | Chame Táxi em Maputo e Moçambique",
    description: "Substituto moderno para chapas e táxis tradicionais. Chame motoristas verificados com preços transparentes.",
    url: `${SITE_URL}/taxi`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/taxi`,
  },
};

export default function TaxiPage() {
  return (
    <>
      <TaxiServiceSchema />
      
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-green-400 text-white py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Chame Táxi com o{" "}
                <span className="text-yellow-300">App MOVAGO</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-50 leading-relaxed">
                Esqueça as chapas superlotadas e táxis sem taxímetro. Com a <strong>MOVAGO</strong>, você chama 
                <strong> motoristas verificados</strong> com <strong>preços transparentes</strong> e paga via <strong>M-Pesa</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href={APP_STORES.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  📱 Baixar App Grátis
                </Link>
                <Link
                  href="/transporte"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-all"
                >
                  🚗 Ver Todos os Serviços
                </Link>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="container mx-auto px-4 mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "500+", label: "Motoristas" },
                { value: "4.8★", label: "Avaliação" },
                { value: "24/7", label: "Disponível" },
                { value: "M-Pesa", label: "Pagamento" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300">{stat.value}</div>
                  <div className="text-sm text-green-50 mt-1">{stat.label}</div>
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
                Cansado de Táxis Caros e Chapas Perigosas?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                <strong>Táxis que não usam taxímetro</strong>, <strong>chapas superlotadas</strong>, 
                <strong>medo de assaltos</strong> e a incerteza de quanto vai pagar. 
                Sabemos como é difícil se locomover em <strong>Maputo, Matola e Beira</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Comparação */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Táxi Tradicional vs MOVAGO
              </h2>
              <p className="text-xl text-gray-600">
                Veja por que milhares de pessoas já mudaram para o app MOVAGO
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Táxi Tradicional */}
                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                  <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                    <span className="text-3xl">🚕</span>
                    Táxi Tradicional
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { text: "Sem taxímetro - preço incerto", bad: true },
                      { text: "Motoristas não verificados", bad: true },
                      { text: "Não sabe o nome do motorista", bad: true },
                      { text: "Sem rastreamento da viagem", bad: true },
                      { text: "Precisa de dinheiro em espécie", bad: true },
                      { text: "Difícil achar táxi à noite", bad: true }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-red-500 font-bold text-xl mt-1">✗</span>
                        <span className="text-gray-700">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* MOVAGO */}
                <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 shadow-xl">
                  <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                    <span className="text-3xl">📱</span>
                    App MOVAGO
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { text: "Preço transparente antes da corrida", good: true },
                      { text: "Motoristas 100% verificados", good: true },
                      { text: "Nome, foto e avaliação do motorista", good: true },
                      { text: "Rastreamento em tempo real", good: true },
                      { text: "Paga via M-Pesa fácil e seguro", good: true },
                      { text: "Disponível 24 horas, 7 dias", good: true }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-500 font-bold text-xl mt-1">✓</span>
                        <span className="text-gray-700 font-semibold">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Táxi */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Escolha o Tipo de Táxi Ideal
              </h2>
              <p className="text-xl text-gray-600">
                Temos opções para todas as necessidades e orçamentos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Econômico */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-t-4 border-green-500">
                <div className="text-5xl mb-4">🚗</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Táxi Econômico</h3>
                <p className="text-gray-600 mb-4">
                  Carros compactos para viagens econômicas. Ideal para 1-3 passageiros e trajetos curtos.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li>✓ Até 3 passageiros</li>
                  <li>✓ Melhor preço</li>
                  <li>✓ Ideal para cidade</li>
                </ul>
                <div className="text-green-600 font-bold text-xl">
                  $$$ Econômico
                </div>
              </div>

              {/* Conforto */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-t-4 border-blue-500 transform md:scale-105">
                <div className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MAIS POPULAR
                </div>
                <div className="text-5xl mb-4">🚙</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Táxi Conforto</h3>
                <p className="text-gray-600 mb-4">
                  Carros espaçosos e confortáveis. Perfeito para famílias ou grupos de até 4 pessoas.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li>✓ Até 4 passageiros</li>
                  <li>✓ Ar condicionado</li>
                  <li>✓ Mais espaço</li>
                </ul>
                <div className="text-blue-600 font-bold text-xl">
                  $$$$ Conforto
                </div>
              </div>

              {/* Premium */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border-t-4 border-purple-500">
                <div className="text-5xl mb-4">🏎️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Táxi Premium</h3>
                <p className="text-gray-600 mb-4">
                  Carros de luxo para ocasiões especiais, negócios ou quando quer viajar com estilo.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li>✓ Veículos de luxo</li>
                  <li>✓ Motoristas VIP</li>
                  <li>✓ Experiência exclusiva</li>
                </ul>
                <div className="text-purple-600 font-bold text-xl">
                  $$$$$ Premium
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Como Chamar um Táxi em 3 Passos
              </h2>
              <p className="text-xl text-green-100">
                Simples, rápido e seguro
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Abra o App",
                  desc: "Selecione seu destino e veja o preço estimado antes de confirmar"
                },
                {
                  step: "2",
                  title: "Escolha o Motorista",
                  desc: "Veja nome, foto, avaliação e distância do motorista mais próximo"
                },
                {
                  step: "3",
                  title: "Viaje com Segurança",
                  desc: "Acompanhe em tempo real e pague via M-Pesa ao chegar"
                }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-white text-green-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-green-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preços Transparentes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Preços Transparentes, Sem Surpresas
                </h2>
                <p className="text-xl text-gray-600">
                  Saiba exatamente quanto vai pagar antes de confirmar a corrida
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">💰</span>
                      Como Funciona o Preço
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span><strong>Tarifa base:</strong> Valor fixo por corrida</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span><strong>Por quilômetro:</strong> R$X por KM percorrido</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span><strong>Por minuto:</strong> R$Y por minuto de viagem</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">✓</span>
                        <span><strong>Taxa de serviço:</strong> Pequena taxa para a plataforma</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">📱</span>
                      Estimativa Antes da Corrida
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Ao selecionar seu destino, o app calcula automaticamente:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Preço estimado</strong> da viagem</li>
                      <li>• <strong>Tempo de chegada</strong> do motorista</li>
                      <li>• <strong>Tempo total</strong> da viagem</li>
                      <li>• <strong>Distância</strong> a ser percorrida</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl border-2 border-green-500">
                  <p className="text-center text-lg text-gray-700">
                    <strong className="text-green-600">💡 Dica:</strong> O preço final pode variar ligeiramente se houver mudanças na rota, 
                    mas você será notificado antes de qualquer alteração significativa.
                  </p>
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
                  Sua Segurança em Primeiro Lugar
                </h2>
                <p className="text-xl text-gray-600">
                  Recursos exclusivos para viagens tranquilas
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "👤",
                    title: "Motoristas Verificados",
                    desc: "Todos passam por verificação de antecedentes criminais, documento e entrevista"
                  },
                  {
                    icon: "📍",
                    title: "Compartilhamento de Viagem",
                    desc: "Envie sua localização em tempo real para familiares ou amigos"
                  },
                  {
                    icon: "🆘",
                    title: "Botão SOS",
                    desc: "Em emergências, alerte contatos com sua localização precisa em um clique"
                  },
                  {
                    icon: "⭐",
                    title: "Sistema de Avaliação",
                    desc: "Avalie motoristas após cada viagem. Motoristas com baixa avaliação são removidos"
                  },
                  {
                    icon: "🛡️",
                    title: "Seguro Obrigatório",
                    desc: "Todos os motoristas têm seguro válido do veículo e passageiros cobertos"
                  },
                  {
                    icon: "💳",
                    title: "Pagamento Seguro",
                    desc: "Pague via M-Pesa sem lidar com dinheiro em espécie"
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Onde Funciona */}
        <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Onde Nossos Táxis Operam
              </h2>
              <p className="text-xl text-green-100">
                Cobertura em expansão por todo Moçambique
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { city: "Maputo", desc: "Capital e região metropolitana", badge: "MAIOR COBERTURA" },
                { city: "Matola", desc: "Região industrial e subúrbios", badge: "DISPONÍVEL" },
                { city: "Beira", desc: "Segunda maior cidade", badge: "DISPONÍVEL" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <div className="text-4xl mb-3">📍</div>
                  <div className="bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                    {item.badge}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.city}</h3>
                  <p className="text-green-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-green-100">
                🚀 Mais cidades chegando em 2025! Quer ver o MOVAGO na sua cidade? 
                <Link href="/contacto" className="underline font-bold text-yellow-300 hover:text-yellow-200 ml-2">
                  Fale conosco
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pronto para Sua Primeira Viagem?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Baixe o app MOVAGO agora e chame seu primeiro táxi em segundos. 
                É gratuito, seguro e você paga apenas pelo que usar.
              </p>
              <Link
                href={APP_STORES.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-green-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                📱 Baixar App de Táxi Grátis
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
                <Link href="/transporte" className="text-green-600 hover:text-green-700 underline">
                  Serviços de Transporte
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/motoristas" className="text-green-600 hover:text-green-700 underline">
                  Seja Motorista
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/passageiros" className="text-green-600 hover:text-green-700 underline">
                  Para Passageiros
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/sobre" className="text-green-600 hover:text-green-700 underline">
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