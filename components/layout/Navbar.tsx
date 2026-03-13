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
          isScrolled ? 'glass py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[rgb(var(--color-primary))] rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg sm:text-xl">M</span>
              </div>
            <span className="text-white font-bold text-lg sm:text-xl sm:inline-block hidden">{SITE_NAME}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[rgb(var(--color-text-muted))] hover:text-white transition-colors font-medium py-3 px-2 rounded-lg hover:bg-white/5 min-h-[48px] flex items-center"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block pl-4">
              <Button href="#download">Baixar App</Button>
            </div>

            {/* Mobile Menu Button - Touch target 44x44px */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-[rgb(var(--color-surface))] p-6">
          <div className="flex flex-col gap-6 mt-16">
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