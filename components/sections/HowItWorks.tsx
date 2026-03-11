'use client';

import { motion } from 'framer-motion';
import { Download, MapPin, CheckCircle } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card, CardContent } from '@/components/ui/Card';

const steps = [
  {
    icon: Download,
    title: 'Descarregue a app',
    description: 'Baixe a MOVAGO gratuitamente na Google Play ou App Store. Crie a sua conta em menos de 2 minutos.',
    step: '1',
  },
  {
    icon: MapPin,
    title: 'Escolha a rota',
    description: 'Selecione o seu ponto de partida e destino. Veja todas as opções de transporte público disponíveis.',
    step: '2',
  },
  {
    icon: CheckCircle,
    title: 'Acompanhe em tempo real',
    description: 'Escolha o carro e acompanhe a localização em tempo real até chegar ao seu destino.',
    step: '3',
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Como Funciona
        </h2>
        <p className="text-xl text-[rgb(var(--color-text-muted))] max-w-2xl mx-auto">
          Em apenas 3 passos simples, está pronto para viajar
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card variant="glass" className="h-full relative">
                <CardContent className="p-8">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[rgb(var(--color-primary))] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-[rgb(var(--color-primary))]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-[rgb(var(--color-primary))]" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[rgb(var(--color-text-muted))] leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}