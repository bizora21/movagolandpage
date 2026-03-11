'use client';

import { motion } from 'framer-motion';
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-sky-500/5 pointer-events-none" />
      </div>
      
      {/* Geometric patterns */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[rgb(var(--color-primary))]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgb(var(--color-accent))]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center py-32">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <Badge variant="default">🚀 Sistema Inteligente de Mobilidade</Badge>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white">
            A forma mais{' '}
            <span className="gradient-text">inteligente</span>{' '}
            de se mover
          </h1>
          
          <p className="text-lg lg:text-xl text-[rgb(var(--color-text-muted))] max-w-xl leading-relaxed">
            Transporte seguro, rápido e acessível. Tecnologia de ponta 
            para passageiros e motoristas.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" href="https://play.google.com/store/apps/details?id=com.movago">
              <Play size={20} />
              Google Play
            </Button>
            <Button variant="outline" size="lg" href="https://apps.apple.com/app/movago">
              <Apple size={20} />
              App Store
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.8</div>
              <div className="text-sm text-[rgb(var(--color-text-muted))]">Avaliação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50k+</div>
              <div className="text-sm text-[rgb(var(--color-text-muted))]">Viagens</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-[rgb(var(--color-text-muted))]">Motoristas</div>
            </div>
          </div>
        </motion.div>

        {/* App Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Phone mockup with image */}
            <div className="w-[300px] h-[600px] rounded-[3rem] border-4 border-slate-700 shadow-2xl relative overflow-hidden animate-float">
              <Image
                src="/images/app-mockup.png"
                alt="MOVAGO App"
                width={300}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-8 top-20 bg-[rgb(var(--color-surface))] rounded-xl p-3 shadow-lg border border-slate-700/50"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div className="text-sm">
                  <div className="text-white font-medium">Viagem confirmada</div>
                  <div className="text-[rgb(var(--color-text-muted))] text-xs">A chegar em 2 min</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -left-8 bottom-32 bg-[rgb(var(--color-surface))] rounded-xl p-3 shadow-lg border border-slate-700/50"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[rgb(var(--color-primary))]/20 rounded-full flex items-center justify-center text-[rgb(var(--color-primary))]">
                  ★
                </div>
                <div className="text-sm">
                  <div className="text-white font-medium">Excelente!</div>
                  <div className="text-[rgb(var(--color-text-muted))] text-xs">4.9 estrelas</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}