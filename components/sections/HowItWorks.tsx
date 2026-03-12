'use client';

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
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Como Funciona
        </h2>
        <p className="text-lg sm:text-xl text-[rgb(var(--color-text-muted))] max-w-2xl mx-auto">
          Em apenas 3 passos simples, está pronto para viajar
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <Card key={step.step} variant="glass" className="h-full relative">
              <CardContent className="p-6 lg:p-8">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 lg:w-12 lg:h-12 bg-[rgb(var(--color-primary))] rounded-full flex items-center justify-center text-white font-bold text-lg lg:text-xl">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[rgb(var(--color-primary))]/10 rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
                  <Icon className="text-[rgb(var(--color-primary))]" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">
                  {step.title}
                </h3>
                <p className="text-[rgb(var(--color-text-muted))] leading-relaxed text-sm lg:text-base">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
