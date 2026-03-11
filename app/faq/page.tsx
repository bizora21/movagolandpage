import { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Perguntas Frequentes — MOVAGO",
  description: "Encontre respostas para as dúvidas mais comuns sobre a MOVAGO. Como funciona, pagamentos, segurança e muito mais.",
};

export default function FAQPage() {
  const categories = [
    { id: 'general', name: 'Geral' },
    { id: 'payments', name: 'Pagamentos' },
    { id: 'drivers', name: 'Motoristas' },
    { id: 'safety', name: 'Segurança' },
  ];

  return (
    <div className="pt-24">
      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h1>
          <p className="text-xl text-[rgb(var(--color-text-muted))]">
            Encontre respostas para as dúvidas mais comuns sobre a MOVAGO
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {categories.map((category) => {
            const items = FAQ_ITEMS.filter(item => item.category === category.id);
            if (items.length === 0) return null;

            return (
              <div key={category.id}>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[rgb(var(--color-primary))] rounded-full"></span>
                  {category.name}
                </h2>
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <details
                      key={index}
                      className="group glass rounded-xl overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors">
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {item.question}
                        </h3>
                        <span className="flex-shrink-0 w-8 h-8 bg-[rgb(var(--color-primary))]/20 rounded-lg flex items-center justify-center text-[rgb(var(--color-primary))] group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-[rgb(var(--color-text-muted))] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="glass rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-[rgb(var(--color-text-muted))] mb-6">
              A nossa equipa está disponível 24/7 para ajudar.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[rgb(var(--color-primary))] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[rgb(var(--color-primary-dark))] transition-colors"
            >
              Fale Connosco
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}