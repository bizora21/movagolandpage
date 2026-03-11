'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

export function ContactCTA() {
  return (
    <SectionWrapper className="bg-gradient-to-br from-[rgb(var(--color-primary))]/20 to-[rgb(var(--color-accent))]/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-[rgb(var(--color-text-muted))] mb-12">
            Junte-se a milhares de utilizadores que já confiam na MOVAGO para os seus trajetos diários.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" href="#download">
              Baixar a App
            </Button>
            <Button variant="outline" size="lg" href="/contacto">
              Fale Connosco
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-[rgb(var(--color-primary))]/10 rounded-xl flex items-center justify-center">
                <Mail className="text-[rgb(var(--color-primary))]" size={28} />
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Email</div>
                <a href="mailto:ola@movago.co.mz" className="text-[rgb(var(--color-text-muted))] hover:text-white transition-colors">
                  ola@movago.co.mz
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-[rgb(var(--color-primary))]/10 rounded-xl flex items-center justify-center">
                <Phone className="text-[rgb(var(--color-primary))]" size={28} />
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Telefone</div>
                <a href="tel:+258841234567" className="text-[rgb(var(--color-text-muted))] hover:text-white transition-colors">
                  +258 84 123 4567
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-[rgb(var(--color-primary))]/10 rounded-xl flex items-center justify-center">
                <MapPin className="text-[rgb(var(--color-primary))]" size={28} />
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Sede</div>
                <span className="text-[rgb(var(--color-text-muted))]">
                  Maputo, Moçambique
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}