'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card, CardContent } from '@/components/ui/Card';

const testimonials = [
  {
    name: 'Ana Mondlane',
    role: 'Utilizadora Regular',
    content: 'A MOVA transformou a forma como me desloco na cidade. Consigo ver todas as rotas disponíveis e o transporte público em tempo real.',
    rating: 5,
  },
  {
    name: 'Pedro Santos',
    role: 'Utilizador Frequente',
    content: 'Nunca foi tão fácil encontrar transporte público. A MOVA mostra exactamente quando o próximo carro vai chegar.',
    rating: 5,
  },
  {
    name: 'Maria Machava',
    role: 'Utilizadora Diária',
    content: 'Acompanhar a localização em tempo real dá-me muita segurança. Chego sempre aos meus destinos sem preocupações.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <SectionWrapper className="bg-[rgb(var(--color-secondary))]">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          O Que Dizem Sobre Nós
        </h2>
        <p className="text-xl text-[rgb(var(--color-text-muted))] max-w-2xl mx-auto">
          Milhares de utilizadores satisfeitos
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card variant="glass" className="h-full">
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-accent))] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-[rgb(var(--color-text-muted))] text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}