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

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'glass py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - Mobile profissional */}
            <Link 
              href="/" 
              className="flex items-center gap-2 sm:gap-3 flex-shrink-0 z-50 relative"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-9 md:h-9 bg-[rgb(var(--color-primary))] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-base sm:text-lg md:text-lg">M</span>
              </div>
              <span className="text-white font-bold text-base sm:text-lg md:text-lg hidden sm:block">{SITE_NAME}</span>
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
              className="lg:hidden bg-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary-dark))] text-white p-3 min-w-[52px] min-h-[52px] flex items-center justify-center rounded-xl transition-all duration-200 z-50 relative flex-shrink-0 shadow-lg hover:shadow-xl"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-[rgb(var(--color-surface))] p-4 overflow-y-auto">
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