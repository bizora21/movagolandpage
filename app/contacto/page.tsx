'use client';

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Permite que os CTAs do site abram o formulário com o assunto já preenchido (?assunto=...)
  useEffect(() => {
    const assunto = new URLSearchParams(window.location.search).get('assunto');
    if (assunto) {
      setFormData((prev) => ({ ...prev, subject: assunto }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // O site é estático (sem servidor): abrimos o email do utilizador com a mensagem pronta
    const body = `${formData.message}

—
Nome: ${formData.name}
Email: ${formData.email}`;
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="pt-24">
      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Fale <span className="gradient-text">Connosco</span>
          </h1>
          <p className="text-xl text-[rgb(var(--color-text-muted))]">
            Tem alguma dúvida ou sugestão? Estamos aqui para ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card variant="glass">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[rgb(var(--color-primary))]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[rgb(var(--color-primary))]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-[rgb(var(--color-text-muted))] hover:text-white transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[rgb(var(--color-primary))]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[rgb(var(--color-primary))]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Telefone</h3>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-[rgb(var(--color-text-muted))] hover:text-white transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[rgb(var(--color-primary))]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[rgb(var(--color-primary))]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Sede</h3>
                    <p className="text-[rgb(var(--color-text-muted))]">
                      {CONTACT_INFO.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card variant="glass">
            <CardContent className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-green-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Quase lá!</h3>
                  <p className="text-[rgb(var(--color-text-muted))]">
                    Abrimos o seu programa de email com a mensagem pronta. Basta enviá-la.
                    Se nada abriu, escreva-nos para{' '}
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-[rgb(var(--color-primary))] hover:underline">
                      {CONTACT_INFO.email}
                    </a>
                    .
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Escrever Nova Mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[rgb(var(--color-bg))] border border-slate-700 rounded-xl text-white placeholder:text-[rgb(var(--color-text-muted))] focus:outline-none focus:border-[rgb(var(--color-primary))] transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[rgb(var(--color-bg))] border border-slate-700 rounded-xl text-white placeholder:text-[rgb(var(--color-text-muted))] focus:outline-none focus:border-[rgb(var(--color-primary))] transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      Assunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[rgb(var(--color-bg))] border border-slate-700 rounded-xl text-white placeholder:text-[rgb(var(--color-text-muted))] focus:outline-none focus:border-[rgb(var(--color-primary))] transition-colors"
                      placeholder="Assunto da mensagem"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[rgb(var(--color-bg))] border border-slate-700 rounded-xl text-white placeholder:text-[rgb(var(--color-text-muted))] focus:outline-none focus:border-[rgb(var(--color-primary))] transition-colors resize-none"
                      placeholder="Escreva sua mensagem..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'A abrir o email...' : 'Enviar por email'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>
    </div>
  );
}