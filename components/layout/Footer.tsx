import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { FOOTER_LINKS, SOCIAL_LINKS, SITE_NAME, SITE_TAGLINE, CONTACT_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgb(var(--color-secondary))] border-t border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[rgb(var(--color-primary))] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-white font-bold text-xl">{SITE_NAME}</span>
            </div>
            <p className="text-[rgb(var(--color-text-muted))] mb-6 max-w-sm">
              {SITE_TAGLINE}
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 text-[rgb(var(--color-text-muted))] hover:text-white transition-colors py-2 px-1 -mx-1 rounded-lg hover:bg-white/5"
              >
                <Mail size={18} className="text-[rgb(var(--color-primary))]" />
                <span className="text-sm">{CONTACT_INFO.email}</span>
              </a>
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-[rgb(var(--color-text-muted))] hover:text-white transition-colors py-2 px-1 -mx-1 rounded-lg hover:bg-white/5"
              >
                <Phone size={18} className="text-[rgb(var(--color-primary))]" />
                <span className="text-sm">{CONTACT_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-[rgb(var(--color-text-muted))] py-2 px-1">
                <MapPin size={18} className="text-[rgb(var(--color-primary))]" />
                <span className="text-sm">Sede: {CONTACT_INFO.location}</span>
              </div>
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = {
                  instagram: Instagram,
                  facebook: Facebook,
                  linkedin: Linkedin,
                  'message-circle': MessageCircle,
                }[social.icon];

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-700/50 hover:bg-[rgb(var(--color-primary))] transition-colors flex items-center justify-center text-white"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produto</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.produto.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-block text-[rgb(var(--color-text-muted))] hover:text-white transition-colors py-2 px-1 -mx-1 rounded-lg hover:bg-white/5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-block text-[rgb(var(--color-text-muted))] hover:text-white transition-colors py-2 px-1 -mx-1 rounded-lg hover:bg-white/5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.suporte.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-block text-[rgb(var(--color-text-muted))] hover:text-white transition-colors py-2 px-1 -mx-1 rounded-lg hover:bg-white/5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[rgb(var(--color-text-muted))] text-sm text-center md:text-left">
            © {currentYear} {SITE_NAME}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="inline-block text-[rgb(var(--color-text-muted))] hover:text-white transition-colors text-sm py-2 px-1 -mx-1 rounded-lg hover:bg-white/5"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}