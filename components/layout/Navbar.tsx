'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAVIGATION, SITE_NAME } from '@/lib/constants';
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
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 z-50 relative">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[rgb(var(--color-primary))] rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base sm:text-lg md:text-xl">M</span>
              </div>
            <span className="text-white font-bold text-base sm:text-lg md:text-xl hidden sm:inline-block">{SITE_NAME}</span>
            </Link>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[rgb(var(--color-text-muted))] hover:text-white transition-colors font-medium py-2 px-2 xl:px-3 rounded-lg hover:bg-white/5 min-h-[44px] flex items-center text-sm xl:text-base"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Hidden on mobile/tablet */}
            <div className="hidden lg:block pl-2 xl:pl-4">
              <Button href="#download" size="sm">Baixar</Button>
            </div>

            {/* Mobile Menu Button - Touch target 44x44px */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors z-50 relative"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
          <div className="absolute right-0 top-0 bottom-0 w-72 sm:w-80 bg-[rgb(var(--color-surface))] p-4 sm:p-6 overflow-y-auto">
          <div className="flex flex-col gap-4 sm:gap-6 mt-20 pt-safe">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block text-lg text-[rgb(var(--color-text-muted))] hover:text-white transition-colors py-3 px-2 -mx-2 rounded-lg hover:bg-white/5"
                >
                  {item.name}
                </Link>
              ))}
              <Button href="#download" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
                Baixar App
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}