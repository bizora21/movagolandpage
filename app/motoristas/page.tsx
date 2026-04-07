import type { Metadata } from "next";
import Link from "next/link";
import { JobPostingSchema } from "@/components/seo/JsonLd";
import { APP_STORES, SITE_URL, CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Motoristas Parceiros MOVAGO | Ganhe Dinheiro com seu Veículo",
  description: "Torne-se motorista parceiro MOVAGO e ganhe dinheiro oferecendo corridas em Moçambique. Receba pagamentos via M-Pesa, horários flexíveis e renda extra de 15.000 a 80.000 MZN/mês. Sem taxas de adesão.",
  keywords: [
    "motorista parceiro",
    "ganhar dinheiro dirigindo",
    "motorista de app",
    "trabalho como motorista",
    "renda extra Moçambique",
    "motorista particular",
    "chauffeur Maputo",
    "motorista M-Pesa",
    "ser motorista MOVAGO",
    "corridas de táxi",
    "motorista Uber-style",
    "trabalho flexível",
    "ganhos mensais"
  ],
  openGraph: {
    title: "Motoristas Parceiros MOVAGO | Ganhe Dinheiro Dirigindo em Moçambique",
    description: "Junte-se à MOVAGO como motorista parceiro. Horários flexíveis, pagamentos via M-Pesa e renda de até 80.000 MZN/mês.",
    url: `${SITE_URL}/motoristas`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/motoristas`,
  },
};

export default function MotoristasPage() {
  return (
    <>
      <JobPostingSchema />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm mb-6">
                👔 RECRIUTAMENTO ABERTO
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Ganhe Dinheiro com seu{" "}
                <span className="text-yellow-300">Veículo</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed">
                Torne-se <strong>motorista parceiro MOVAGO</strong> e receba <strong>15.000 a 80.000 MZN/mês</strong>. 
                Horários flexíveis, pagamentos via <strong>M-Pesa</strong> e sem taxas de adesão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá, quero ser motorista parceiro MOVAGO!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  💬 Cadastrar via WhatsApp
                </a>
                <Link
                  href={APP_STORES.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
                >
                  📱 Baixar App Motorista
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Banner */}
          <div className="container mx-auto px-4 mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "15.000-80.000", label: "MZN/mês" },
                { value: "Horários", label: "Flexíveis" },
                { value: "M-Pesa", label: "Pagamentos" },
                { value: "0 MZN", label: "Taxa de Adesão" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-xl md:text-2xl font-bold text-yellow-300">{stat.value}</div>
                  <div className="text-sm text-blue-50 mt-1">{stat.label}</div>
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
                Quer Ganhar uma Renda Extra com seu Carro ou Moto?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Se você tem um veículo parado na garagem ou quer aproveitar o tempo livre para ganhar dinheiro, 
                a MOVAGO é a oportunidade perfeita. <strong>Sem horários fixos, sem patrão</strong> - você decide quando trabalhar.
              </p>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Por que ser Motorista Parceiro MOVAGO?
              </h2>
              <p className="text-xl text-gray-600">
                Benefícios exclusivos para nossos parceiros
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: "💰",
                  title: "Renda Mensal de 15.000 a 80.000 MZN",
                  desc: "Ganhe conforme sua disponibilidade. Motoristas dedicados podem chegar a 80.000 MZN/mês."
                },
                {
                  icon: "🕐",
                  title: "Horários 100% Flexíveis",
                  desc: "Trabalhe quando quiser: manhã, tarde, noite ou fins de semana. Você é seu próprio patrão."
                },
                {
                  icon: "📱",
                  title: "Pagamentos via M-Pesa",
                  desc: "Receba seus ganhos diretamente na sua conta M-Pesa. Rápido, seguro e sem burocracia."
                },
                {
                  icon: "🚫",
                  title: "Sem Taxas de Adesão",
                  desc: "Comece a ganhar dinheiro sem pagar nada para se cadastrar. Cadastro 100% gratuito."
                },
                {
                  icon: "🎯",
                  title: "Encontre Passageiros Facilmente",
                  desc: "Nossa tecnologia conecta você a passageiros perto da sua localização em tempo real."
                },
                {
                  icon: "🛡️",
                  title: "Suporte 24/7",
                  desc: "Equipe dedicada pronta para ajudar com qualquer dúvida ou problema a qualquer hora."
                }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requisitos */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Requisitos para se Tornar Parceiro
                </h2>
                <p className="text-xl text-gray-600">
                  Processo simples e rápido
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                    <span className="text-3xl">📋</span>
                    Documentação
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Carta de condução válida",
                      "Bilhete de identidade",
                      "Certificado de registo do veículo",
                      "Atestado de residência",
                      "Conta M-Pesa ativa"
                    ].map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-500 font-bold text-xl mt-1">✓</span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
                  <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                    <span className="text-3xl">🚗</span>
                    Veículo
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Carro, mototáxi ou moto-táxi",
                      "Veículo em bom estado de conservação",
                      "Seguro do veículo válido",
                      "Idade máxima: 15 anos (carros)",
                      "Smartphone com Android 5.0+"
                    ].map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-500 font-bold text-xl mt-1">✓</span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comece a Ganhar em 4 Passos
              </h2>
              <p className="text-xl text-blue-100">
                Processo simplificado para começar rapidamente
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Cadastre-se",
                  desc: "Preencha o formulário com seus dados e documentos"
                },
                {
                  step: "2",
                  title: "Validação",
                  desc: "Nossa equipe analisa seu cadastro em até 24 horas"
                },
                {
                  step: "3",
                  title: "Baixe o App",
                  desc: "Instale o app motorista e configure seu perfil"
                },
                {
                  step: "4",
                  title: "Comece a Ganhar",
                  desc: "Aceite corridas e receba via M-Pesa"
                }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-white text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabela de Ganhos */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Quanto Você Pode Ganhar
                </h2>
                <p className="text-xl text-gray-600">
                  Estimativa baseada em 6 dias de trabalho por semana
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Horas/Dia</th>
                      <th className="px-6 py-4 text-left">Ganho Mensal Estimado</th>
                      <th className="px-6 py-4 text-left">Perfil</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">4-6 horas</td>
                      <td className="px-6 py-4 text-green-600 font-bold">15.000 - 25.000 MZN</td>
                      <td className="px-6 py-4 text-gray-600">Renda extra</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">6-8 horas</td>
                      <td className="px-6 py-4 text-green-600 font-bold">25.000 - 45.000 MZN</td>
                      <td className="px-6 py-4 text-gray-600">Meio período</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">8-12 horas</td>
                      <td className="px-6 py-4 text-green-600 font-bold">45.000 - 80.000 MZN</td>
                      <td className="px-6 py-4 text-gray-600">Tempo integral</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-center text-sm text-gray-500 mt-6">
                * Valores estimados e podem variar conforme demanda, cidade e disponibilidade
              </p>
            </div>
          </div>
        </section>

        {/* Testemunhos */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                O que Dizem Nossos Motoristas
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Carlos M.",
                  city: "Maputo",
                  text: "Trabalhava 8 horas por dia num escritório e ganhava 20.000 MZN. Agora como motorista MOVAGO faço 55.000 MZN no meu próprio ritmo.",
                  rating: 5
                },
                {
                  name: "Ana K.",
                  city: "Matola",
                  text: "Sou mãe e preciso de flexibilidade. Com a MOVAGO trabalho quando os filhos estão na escola e ainda ganho uma renda extra de 18.000 MZN.",
                  rating: 5
                },
                {
                  name: "João B.",
                  city: "Beira",
                  text: "O melhor é receber via M-Pesa. Não preciso ir ao banco, o dinheiro cai direto na minha conta. Recomendo!",
                  rating: 5
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
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

        {/* CTA Cadastro */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comece a Ganhar Dinheiro Hoje
              </h2>
              <p className="text-xl text-orange-50 mb-8">
                Cadastro gratuito, sem compromisso. Junte-se a mais de 500 motoristas parceiros em Moçambique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá, quero ser motorista parceiro MOVAGO!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-green-600 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  💬 Cadastrar Agora via WhatsApp
                </a>
                <Link
                  href="/contacto"
                  className="bg-white text-orange-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-orange-50 transition-all shadow-xl"
                >
                  📧 Outras Formas de Contato
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Perguntas Frequentes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Perguntas Frequentes
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    q: "Preciso ter experiência prévia como motorista?",
                    a: "Não é obrigatório, mas preferimos candidatos com pelo menos 6 meses de experiência e carta de condução válida."
                  },
                  {
                    q: "Quanto tempo demora o processo de cadastro?",
                    a: "Após enviar toda a documentação, a análise leva de 24 a 48 horas úteis."
                  },
                  {
                    q: "Posso usar o mesmo veículo para transporte particular e MOVAGO?",
                    a: "Sim! Você decide quando está disponível para aceitar corridas na plataforma."
                  },
                  {
                    q: "Como recebo meus ganhos?",
                    a: "Todos os pagamentos são feitos via M-Pesa diretamente na sua conta. Semanalmente ou quinzenalmente, conforme sua preferência."
                  },
                  {
                    q: "Preciso pagar alguma taxa para me cadastrar?",
                    a: "Não. O cadastro é 100% gratuito. Só cobramos uma pequena comissão sobre cada corrida realizada."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
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
                <Link href="/transporte" className="text-blue-600 hover:text-blue-700 underline">
                  Serviços de Transporte
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/taxi" className="text-blue-600 hover:text-blue-700 underline">
                  App de Táxi
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/passageiros" className="text-blue-600 hover:text-blue-700 underline">
                  Para Passageiros
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/sobre" className="text-blue-600 hover:text-blue-700 underline">
                  Sobre a MOVAGO
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/faq" className="text-blue-600 hover:text-blue-700 underline">
                  FAQ Completo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}