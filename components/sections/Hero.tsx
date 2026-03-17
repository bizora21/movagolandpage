'use client';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Play, Apple } from 'lucide-react';
import Image from 'next/image';
import { APP_STORES } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[rgb(var(--color-bg))] pt-24 sm:pt-32 lg:pt-20">
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

      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 lg:py-32 relative z-10">
        {/* Text Content */}
        <div className="space-y-6 sm:space-y-8">
          <Badge variant="default" className="mb-4">🚀 Sistema Inteligente de Mobilidade</Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight sm:leading-tight text-white">
            A forma mais{' '}
            <span className="gradient-text">inteligente</span>{' '}
            de se mover
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[rgb(var(--color-text-muted))] max-w-xl leading-relaxed">
            Transporte seguro, rápido e acessível. Tecnologia de ponta 
            para passageiros e motoristas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-10">
            <Button 
              variant="primary" 
              size="md" 
              href={APP_STORES.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center text-xs sm:text-sm relative z-10"
            >
              <Play size={16} className="sm:w-4" />
              Google Play
            </Button>
            <Button 
              variant="outline" 
              size="md" 
              href="https://apps.apple.com/app/movago"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center text-xs sm:text-sm relative z-10"
            >
              <Apple size={16} className="sm:w-4" />
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
            
            {/* Static notification cards - no animations - Hidden on very small screens */}
            <div className="hidden sm:block absolute -right-2 md:-right-4 lg:-right-8 top-12 md:top-16 lg:top-20 bg-[rgb(var(--color-surface))] rounded-xl p-2 md:p-3 shadow-lg border border-slate-700/50 max-w-[160px] md:max-w-[200px]">
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-500 text-xs md:text-sm">✓</span>
                </div>
                <div className="text-xs md:text-sm min-w-0">
                  <div className="text-white font-medium truncate text-xs md:text-sm">Viagem confirmada</div>
                  <div className="text-[rgb(var(--color-text-muted))] text-[10px] md:text-xs">A chegar em 2 min</div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -left-2 md:-left-4 lg:-left-8 bottom-20 md:bottom-24 lg:bottom-32 bg-[rgb(var(--color-surface))] rounded-xl p-2 md:p-3 shadow-lg border border-slate-700/50 max-w-[160px] md:max-w-[200px]">
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-[rgb(var(--color-primary))]/20 rounded-full flex items-center justify-center text-[rgb(var(--color-primary))] flex-shrink-0">
                  <span className="text-xs md:text-sm">★</span>
                </div>
                <div className="text-xs md:text-sm min-w-0">
                  <div className="text-white font-medium truncate text-xs md:text-sm">Excelente!</div>
                  <div className="text-[rgb(var(--color-text-muted))] text-[10px] md:text-xs">4.9 estrelas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
