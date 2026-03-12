'use client';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Play, Apple } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[rgb(var(--color-bg))]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-banner.jpg"
          alt="MOVAGO - Sistema Inteligente de Mobilidade"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/10 via-transparent to-[rgb(var(--color-accent))]/5 pointer-events-none" />
      </div>
      
      {/* Subtle geometric patterns - no blur for performance */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[rgb(var(--color-primary))]/3 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgb(var(--color-accent))]/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
        {/* Text Content */}
        <div className="space-y-8">
          <Badge variant="default">🚀 Sistema Inteligente de Mobilidade</Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white">
            A forma mais{' '}
            <span className="gradient-text">inteligente</span>{' '}
            de se mover
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-[rgb(var(--color-text-muted))] max-w-xl leading-relaxed">
            Transporte seguro, rápido e acessível. Tecnologia de ponta 
            para passageiros e motoristas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" href="https://play.google.com/store/apps/details?id=com.movago" className="w-full sm:w-auto justify-center">
              <Play size={20} />
              Google Play
            </Button>
            <Button variant="outline" size="lg" href="https://apps.apple.com/app/movago" className="w-full sm:w-auto justify-center">
              <Apple size={20} />
              App Store
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-6 pt-4 max-w-md">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">4.8</div>
              <div className="text-xs sm:text-sm text-[rgb(var(--color-text-muted))]">Avaliação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">50k+</div>
              <div className="text-xs sm:text-sm text-[rgb(var(--color-text-muted))]">Viagens</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">500+</div>
              <div className="text-xs sm:text-sm text-[rgb(var(--color-text-muted))]">Motoristas</div>
            </div>
          </div>
        </div>

        {/* App Mockup - Static, no animations */}
        <div className="relative flex justify-center">
          <div className="relative">
            {/* Phone mockup with image */}
            <div className="w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] rounded-[3rem] border-4 border-slate-700 shadow-2xl relative overflow-hidden mx-auto">
              <Image
                src="/images/app-mockup.png"
                alt="MOVAGO App - Aplicação de transporte urbano"
                width={300}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            {/* Static notification cards - no animations */}
            <div className="absolute -right-4 sm:-right-8 top-16 sm:top-20 bg-[rgb(var(--color-surface))] rounded-xl p-3 shadow-lg border border-slate-700/50 max-w-[200px]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-500 text-sm">✓</span>
                </div>
                <div className="text-sm min-w-0">
                  <div className="text-white font-medium truncate">Viagem confirmada</div>
                  <div className="text-[rgb(var(--color-text-muted))] text-xs">A chegar em 2 min</div>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 sm:-left-8 bottom-24 sm:bottom-32 bg-[rgb(var(--color-surface))] rounded-xl p-3 shadow-lg border border-slate-700/50 max-w-[200px]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[rgb(var(--color-primary))]/20 rounded-full flex items-center justify-center text-[rgb(var(--color-primary))] flex-shrink-0">
                  <span className="text-sm">★</span>
                </div>
                <div className="text-sm min-w-0">
                  <div className="text-white font-medium truncate">Excelente!</div>
                  <div className="text-[rgb(var(--color-text-muted))] text-xs">4.9 estrelas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
