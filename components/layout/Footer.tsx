import Link from 'next/link';
import { Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { FOOTER_LINKS, SOCIAL_LINKS, SITE_NAME, SITE_TAGLINE } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgb(var(--color-secondary))] border-t border-slate-700/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
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
                    className="text-[rgb(var(--color-text-muted))] hover:text-white transition-colors"
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
                    className="text-[rgb(var(--color-text-muted))] hover:text-white transition-colors"
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
                    className="text-[rgb(var(--color-text-muted))] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[rgb(var(--color-text-muted))] text-sm">
            © {currentYear} {SITE_NAME}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[rgb(var(--color-text-muted))] hover:text-white transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-[rgb(var(--color-text-muted))]">
            <span>Feito em</span>
            <span>🇲🇿</span>
          </div>
        </div>
      </div>
    </footer>
  );
}