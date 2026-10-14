'use client';

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { CONTACT_INFO, FORMSPREE_FORM_ID } from "@/lib/constants";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [state, submitToFormspree, resetForm] = useForm(FORMSPREE_FORM_ID);
  const isSubmitting = state.submitting;
  const submitted = state.succeeded;

  // Permite que os CTAs do site abram o formulário com o assunto já preenchido (?assunto=...)
  useEffect(() => {
    const assunto = new URLSearchParams(window.location.search).get('assunto');
    if (assunto) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- o valor vem do URL e só existe no navegador
      setFormData((prev) => ({ ...prev, subject: assunto }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitToFormspree({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      _subject: `Contacto no site: ${formData.subject}`,
      origem: 'contacto',
    });
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
                  <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                  <p className="text-[rgb(var(--color-text-muted))]">
                    Obrigado pelo contacto. Responderemos em breve.
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    className="mt-6"
                    onClick={() => {
                      resetForm();
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
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
                    <ValidationError field="email" errors={state.errors} className="mt-1 text-sm text-red-400" />
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

                  {state.errors && (
                    <p role="alert" className="text-sm text-red-400">
                      Não foi possível enviar a mensagem. Tente novamente ou escreva-nos para{' '}
                      <a href={`mailto:${CONTACT_INFO.email}`} className="underline">{CONTACT_INFO.email}</a>.
                    </p>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'A Enviar...' : 'Enviar Mensagem'}
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