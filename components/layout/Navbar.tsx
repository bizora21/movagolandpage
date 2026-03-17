'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAVIGATION, SITE_NAME, APP_STORES } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
          isScrolled ? 'glass py-2 sm:py-4' : 'bg-transparent py-2 sm:py-6'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-20">
            {/* Logo - Mobile profissional */}
            <Link 
              href="/" 
              className="flex items-center gap-2 sm:gap-3 flex-shrink-0 z-[110] relative"
              aria-label={`${SITE_NAME} - Página inicial`}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-10 md:h-10 lg:w-11 lg:h-11 bg-[rgb(var(--color-primary))] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-base sm:text-lg md:text-lg">M</span>
              </div>
              <span className="text-white font-bold text-lg sm:text-xl md:text-xl hidden sm:block">{SITE_NAME}</span>
            </Link>

            {/* Desktop Navigation - Oculto em mobile/tablet */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-5">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[rgb(var(--color-text-muted))] hover:text-white transition-colors font-medium py-3 px-4 rounded-lg hover:bg-white/5 min-h-[48px] flex items-center text-sm xl:text-base whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Link real do Google Play */}
            <div className="hidden lg:flex items-center">
              <Button 
                href={APP_STORES.googlePlay} 
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                className="text-xs sm:text-sm"
              >
                Baixar
              </Button>
            </div>

            {/* Mobile Menu Button - Profissional e destacado */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden bg-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary-dark))] text-white p-2.5 sm:p-3 min-w-[44px] min-h-[44px] sm:min-w-[48px] sm:min-h-[48px] flex items-center justify-center rounded-lg transition-all duration-200 z-[110] relative flex-shrink-0 shadow-lg hover:shadow-xl"
              aria-label={`${isMobileMenuOpen ? 'Fechar' : 'Abrir'} menu de navegação`}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={20} strokeWidth={2.5} className="w-5 h-5" /> : <Menu size={20} strokeWidth={2.5} className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-0 z-[90] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 bottom-0 w-[280px] sm:w-72 bg-[rgb(var(--color-surface))] p-4 overflow-y-auto h-screen shadow-2xl">
            <div className="flex flex-col gap-4 mt-20">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[rgb(var(--color-text-muted))] hover:text-white transition-colors py-4 px-4 rounded-lg hover:bg-white/5 min-h-[48px] flex items-center text-base"
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                href={APP_STORES.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Baixar App
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}