'use client';

import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { CONTACT_INFO } from '@/lib/constants';

export function ContactCTA() {
  return (
    <SectionWrapper className="bg-gradient-to-br from-[rgb(var(--color-primary))]/20 to-[rgb(var(--color-accent))]/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
          Pronto para Começar?
        </h2>
        <p className="text-lg sm:text-xl text-[rgb(var(--color-text-muted))] mb-8 lg:mb-12">
          Junte-se a milhares de utilizadores que já confiam na MOVAGO para os seus trajetos diários.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 lg:mb-16">
          <Button size="lg" href="#download" className="w-full sm:w-auto justify-center">
            Baixar a App
          </Button>
          <Button variant="outline" size="lg" href="/contacto" className="w-full sm:w-auto justify-center">
            Fale Connosco
          </Button>
        </div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 bg-[rgb(var(--color-primary))]/10 rounded-xl flex items-center justify-center">
              <Mail className="text-[rgb(var(--color-primary))]" size={28} />
            </div>
            <div>
              <div className="text-white font-semibold mb-1">Email</div>
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="text-[rgb(var(--color-text-muted))] hover:text-white transition-colors text-sm lg:text-base"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 bg-[rgb(var(--color-primary))]/10 rounded-xl flex items-center justify-center">
              <Phone className="text-[rgb(var(--color-primary))]" size={28} />
            </div>
            <div>
              <div className="text-white font-semibold mb-1">Telefone</div>
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
                className="text-[rgb(var(--color-text-muted))] hover:text-white transition-colors text-sm lg:text-base"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 bg-[rgb(var(--color-primary))]/10 rounded-xl flex items-center justify-center">
              <MapPin className="text-[rgb(var(--color-primary))]" size={28} />
            </div>
            <div>
              <div className="text-white font-semibold mb-1">Sede</div>
              <span className="text-[rgb(var(--color-text-muted))] text-sm lg:text-base">
                {CONTACT_INFO.location}, Moçambique
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
