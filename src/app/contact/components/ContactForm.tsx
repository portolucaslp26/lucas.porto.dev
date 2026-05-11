'use client';

import React, { useState } from 'react';

type FormState = {
  name: string;
  company: string;
  email: string;
  projectType: string;
  message: string;
};

const projectTypes = [
  'Sistema Web',
  'Aplicativo Mobile',
  'Infraestrutura e Cloud',
  'Automação e IA',
  'Integração de Sistemas',
  'Consultoria em Tecnologia',
  'Outro',
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Obrigatório';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'E-mail válido obrigatório';
    }
    if (!form.message.trim()) newErrors.message = 'Obrigatório';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="terminal-window border-glow py-20 px-10 text-center mt-10">
        <div className="font-mono text-xs text-muted-foreground space-y-3">
          <p><span className="text-accent">$</span> lucasporto enviar --mensagem</p>
          <p className="text-muted-foreground">[LP] Recebendo sua mensagem...</p>
          <p className="text-accent font-bold">[SUCESSO] Mensagem recebida. Entrarei em contato em até 1 dia útil.</p>
          <p className="text-muted-foreground">— Lucas Porto</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5" noValidate>
      <div className="terminal-window">
        <div className="bg-card px-5 py-2.5 flex items-center gap-2 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
          </div>
          <span className="font-mono text-[0.55rem] text-muted-foreground uppercase tracking-widest">
            consulta.sh
          </span>
        </div>

        <div className="p-8 space-y-6">
          {/* Name + Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-[0.6rem] text-muted-foreground uppercase tracking-widest block mb-2">
                Seu Nome *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Carlos Silva"
                className="form-input"
                autoComplete="name"
              />
              {errors.name && (
                <span className="font-mono text-[0.6rem] text-red-400 mt-1 block">{errors.name}</span>
              )}
            </div>
            <div>
              <label className="font-mono text-[0.6rem] text-muted-foreground uppercase tracking-widest block mb-2">
                Empresa
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Grupo Meridian"
                className="form-input"
                autoComplete="organization"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="font-mono text-[0.6rem] text-muted-foreground uppercase tracking-widest block mb-2">
              E-mail *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="carlos@grupomeridian.com.br"
              className="form-input"
              autoComplete="email"
            />
            {errors.email && (
              <span className="font-mono text-[0.6rem] text-red-400 mt-1 block">{errors.email}</span>
            )}
          </div>

          {/* Project Type */}
          <div>
            <label className="font-mono text-[0.6rem] text-muted-foreground uppercase tracking-widest block mb-2">
              Tipo de Solução
            </label>
            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Selecione o tipo de solução...</option>
              {projectTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="font-mono text-[0.6rem] text-muted-foreground uppercase tracking-widest block mb-2">
              Descreva Seu Desafio *
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Conte sobre o desafio do seu negócio — o que precisa ser resolvido, o impacto que causa e quanto tempo você tem..."
              className="form-input min-h-36"
              rows={6}
            />
            {errors.message && (
              <span className="font-mono text-[0.6rem] text-red-400 mt-1 block">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="hacker-btn w-full text-sm py-4">
            ENVIAR_MENSAGEM →
          </button>
        </div>
      </div>
    </form>
  );
}