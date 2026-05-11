'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const faqs = [
  {
    q: 'Com que rapidez você responde?',
    a: 'Em até 1 dia útil. Sem respostas automáticas — eu leio cada mensagem que chega.',
  },
  {
    q: 'Preciso entender de tecnologia para trabalhar com você?',
    a: 'Não. Eu traduzo o problema do seu negócio em solução técnica. Você foca no que precisa, eu cuido de como fazer.',
  },
  {
    q: 'Você assina NDAs?',
    a: 'Sempre. Sua informação é tratada com o mesmo cuidado que gostaria para a minha.',
  },
];

export default function ContactInfo() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="mt-10 space-y-6">
      <AnimateOnScroll direction="up" delay={0} threshold={0.1}>
        <div className="terminal-window">
          <div className="bg-card px-5 py-2.5 flex items-center gap-2 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
            </div>
            <span className="font-mono text-[0.55rem] text-muted-foreground uppercase tracking-widest">contato.sh</span>
          </div>
          <div className="p-6 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="EnvelopeIcon" size={14} className="text-accent" />
              </div>
              <div>
                <p className="font-mono text-[0.6rem] text-muted-foreground uppercase tracking-widest mb-1">E-mail</p>
                <p className="font-mono text-sm text-foreground">lucasporto.dev.lp@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="MapPinIcon" size={14} className="text-accent" />
              </div>
              <div>
                <p className="font-mono text-[0.6rem] text-muted-foreground uppercase tracking-widest mb-1">Base de Operações</p>
                <p className="font-mono text-sm text-foreground">Curitiba, PR · Remoto</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center shrink-0 mt-0.5">
                <Icon name="ClockIcon" size={14} className="text-accent" />
              </div>
              <div>
                <p className="font-mono text-[0.6rem] text-muted-foreground uppercase tracking-widest mb-1">Tempo de Resposta</p>
                <p className="font-mono text-sm text-foreground">Resposta em até 1 dia útil</p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll direction="up" delay={100} threshold={0.1}>
        <div>
          <span className="section-label block mb-4">PERGUNTAS_FREQUENTES</span>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="service-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-none"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-mono text-sm text-foreground font-semibold">{faq.q}</span>
                  <Icon
                    name="ChevronDownIcon"
                    size={16}
                    className={`text-accent shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-muted-foreground text-sm leading-relaxedubuntu-light">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}