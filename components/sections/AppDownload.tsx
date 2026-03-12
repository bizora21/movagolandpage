'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Play, Apple, QrCode, X } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { APP_STORES } from '@/lib/constants';

export function AppDownload() {
  const [showIOSMessage, setShowIOSMessage] = useState(false);

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
              href={APP_STORES.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Baixar MOVAGO no Google Play"
              className="min-w-[200px]"
            >
              <Play size={24} />
              <div className="text-left">
                <div className="text-xs opacity-80">Disponível no</div>
                <div className="font-bold">Google Play</div>
              </div>
            </Button>

            <button
              onClick={() => setShowIOSMessage(true)}
              aria-label="App Store - Em breve"
              className="min-w-[200px] px-6 py-4 bg-[rgb(var(--color-surface))] border-2 border-[rgb(var(--color-primary))]/20 rounded-xl flex items-center gap-3 hover:bg-[rgb(var(--color-elevated))] transition-colors duration-200 cursor-pointer"
            >
              <Apple size={24} />
              <div className="text-left">
                <div className="text-xs opacity-80">Em breve na</div>
                <div className="font-bold text-white">App Store</div>
              </div>
            </button>
          </div>

          {/* iOS Coming Soon Message */}
          {showIOSMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm p-4"
              onClick={() => setShowIOSMessage(false)}
            >
              <div 
                className="bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-primary))]/20 rounded-2xl p-8 max-w-md relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowIOSMessage(false)}
                  className="absolute top-4 right-4 text-[rgb(var(--color-text-muted))] hover:text-white transition-colors"
                  aria-label="Fechar"
                >
                  <X size={24} />
                </button>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[rgb(var(--color-primary))]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Apple className="text-[rgb(var(--color-primary))]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Em Breve na App Store
                  </h3>
                  <p className="text-[rgb(var(--color-text-muted))] mb-6">
                    Estamos a trabalhar para trazer a MOVAGO para iOS. Fique atento!
                  </p>
                  <Button
                    onClick={() => setShowIOSMessage(false)}
                    variant="primary"
                    className="w-full"
                  >
                    Entendido
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

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
                    iOS em breve
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
