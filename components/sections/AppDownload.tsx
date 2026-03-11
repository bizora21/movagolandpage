'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Play, Apple, QrCode } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

export function AppDownload() {
  return (
    <SectionWrapper id="download" className="bg-gradient-to-br from-[rgb(var(--color-primary))]/20 to-[rgb(var(--color-accent))]/10">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Baixe a App Agora
          </h2>
          <p className="text-xl text-[rgb(var(--color-text-muted))] mb-12">
            Comece a usar a MOVAGO em segundos. Disponível para Android e iOS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="primary"
              size="lg"
              href="https://play.google.com/store/apps/details?id=com.movago"
              className="min-w-[200px]"
            >
              <Play size={24} />
              <div className="text-left">
                <div className="text-xs opacity-80">Disponível no</div>
                <div className="font-bold">Google Play</div>
              </div>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="https://apps.apple.com/app/movago"
              className="min-w-[200px]"
            >
              <Apple size={24} />
              <div className="text-left">
                <div className="text-xs opacity-80">Baixar na</div>
                <div className="font-bold">App Store</div>
              </div>
            </Button>
          </div>

          {/* QR Code Section */}
          <div className="glass rounded-2xl p-8 inline-block">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center p-4">
                <QrCode className="text-black" size={120} />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Digitalize o QR Code
                </h3>
                <p className="text-[rgb(var(--color-text-muted))] mb-4">
                  Use a câmara do seu smartphone para baixar a app diretamente
                </p>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-[rgb(var(--color-primary))]/20 rounded-full text-sm text-[rgb(var(--color-primary))]">
                    Android
                  </div>
                  <div className="px-3 py-1 bg-[rgb(var(--color-accent))]/20 rounded-full text-sm text-[rgb(var(--color-accent))]">
                    iOS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}