import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { AppDownload } from "@/components/sections/AppDownload";
import { LatestArticle } from "@/components/sections/LatestArticle";
import { ContactCTA } from "@/components/sections/ContactCTA";
import Link from "next/link";
import { APP_STORES } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <AppDownload />
      <LatestArticle />
      <ContactCTA />
      
      {/* SEO Keywords Section - Natural Integration */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Solução Completa de Mobilidade Urbana
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Para Passageiros</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A MOVAGO oferece <strong>transporte urbano inteligente</strong> em Moçambique, 
                  conectando passageiros a motoristas verificados. Seja para <strong>transporte em Maputo</strong>, 
                  <strong> Matola</strong> ou <strong>Beira</strong>, nossa plataforma garante viagens 
                  seguras com rastreamento em tempo real e pagamento via <strong>M-Pesa</strong>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Para Motoristas</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Motoristas parceiros podem <strong>ganhar dinheiro com seu veículo</strong>, 
                  recebendo entre 15.000 e 80.000 MZN por mês. Com horários flexíveis e pagamentos 
                  via M-Pesa, é a oportunidade perfeita para quem quer trabalhar como <strong>motorista particular</strong> 
                  ou oferecer <strong>corridas de táxi</strong>.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4 text-center">Nossos Serviços de Transporte</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link href="/transporte" className="text-orange-600 hover:text-orange-700 hover:underline">
                  Transporte em Chapas
                </Link>
                <Link href="/taxi" className="text-orange-600 hover:text-orange-700 hover:underline">
                  App de Táxi
                </Link>
                <Link href="/motoristas" className="text-orange-600 hover:text-orange-700 hover:underline">
                  Motoristas Parceiros
                </Link>
                <Link href="/passageiros" className="text-orange-600 hover:text-orange-700 hover:underline">
                  Para Passageiros
                </Link>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  A MOVAGO é a plataforma líder de <strong>ride hailing</strong> em Moçambique, 
                  oferecendo alternativas modernas ao <strong>transporte público tradicional</strong>. 
                  Com <strong>tecnologia de transporte</strong> avançada, facilitamos a conexão entre 
                  <strong> passageiros e motoristas</strong>, promovendo <strong>mobilidade sustentável</strong> 
                  e acessível em Maputo, Matola, Beira e outras cidades moçambicanas.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link
                href={APP_STORES.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-lg"
              >
                📱 Baixar App MOVAGO
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
