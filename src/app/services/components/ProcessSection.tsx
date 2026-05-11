'use client';

import React, { useEffect, useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Entendimento do Problema',
    duration: '1–2 semanas',
    desc: 'Mapeio seus processos, dores e objetivos de negócio. Sem suposições — faço as perguntas certas para que a solução resolva o que realmente precisa ser resolvido.',
    output: 'Diagnóstico claro · Escopo definido · Proposta com valor fixo',
  },
  {
    num: '02',
    title: 'Planejamento & Design',
    duration: '1–2 semanas',
    desc: 'Defino como a solução vai funcionar antes de começar a construir. Fluxos, telas e arquitetura — tudo alinhado com você antes de qualquer código.',
    output: 'Wireframes · Fluxo da solução · Cronograma detalhado',
  },
  {
    num: '03',
    title: 'Construção Focada',
    duration: '4–10 semanas',
    desc: 'Entregas a cada duas semanas. Você acompanha o progresso, dá feedback e vê a solução tomando forma. Comunicação direta comigo, sem burocracia.',
    output: 'Entregas quinzenais · Demonstrações semanais · Ajustes contínuos',
  },
  {
    num: '04',
    title: 'Lançamento & Acompanhamento',
    duration: '1–2 semanas',
    desc: 'Sua solução em produção, com monitoramento e 30 dias de suporte dedicado. Fico até ter certeza que tudo está funcionando como deveria.',
    output: 'Sistema no ar · Documentação · 30 dias de suporte',
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.proc-reveal');
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.transform = 'translateX(0)';
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 blob-primary pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-14">
          <span className="section-label block mb-3">COMO_FUNCIONA?</span>
          <h2 className="font-mono font-black tracking-tighter text-section-xl text-foreground uppercase">
            Do Problema à <span className="text-accent">Solução.</span>
          </h2>
        </div>

        {/* Asymmetric process layout — alternating left/right */}
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`proc-reveal service-card rounded-2xl p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start`}
              style={{
                opacity: 0,
                transform: 'translateX(-20px)',
                transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`,
              }}
            >
              {/* Step number */}
              <div className="md:col-span-1 flex items-start">
                <span className="font-mono text-3xl font-black text-accent/30">{step.num}</span>
              </div>

              {/* Title + duration */}
              <div className="md:col-span-3">
                <h3 className="font-mono font-bold text-lg text-foreground mb-1">{step.title}</h3>
                <span className="font-mono text-[0.6rem] text-primary uppercase tracking-widest">{step.duration}</span>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="text-muted-foreground text-sm leading-relaxedubuntu-light">{step.desc}</p>
              </div>

              {/* Output */}
              <div className="md:col-span-3">
                <span className="font-mono text-[0.55rem] text-muted-foreground uppercase tracking-widest block mb-2">ENTREGA</span>
                <p className="font-mono text-[0.65rem] text-foreground/60 leading-relaxed">{step.output}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}