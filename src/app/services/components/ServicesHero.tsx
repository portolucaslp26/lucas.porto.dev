'use client';

import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function ServicesHero() {
  return (
    <section className="pt-36 pb-20 px-6 relative overflow-hidden border-b border-border">
      <div className="absolute top-0 right-0 w-96 h-96 blob-accent pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <AnimateOnScroll direction="up" delay={150} duration={0.8} threshold={0}>
            <span className="section-label block mb-4">SOLUÇÕES // PARA_SEU_NEGÓCIO</span>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={270} duration={0.8} threshold={0}>
            <h1 className="font-mono font-black tracking-tighter leading-none uppercase text-foreground mb-8" style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}>
              Engenharia de<br />
              <span className="text-accent text-glow">Ponta a ponta.</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={390} duration={0.8} threshold={0}>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxedubuntu-light">
              Entendo o problema do seu negócio primeiro, depois construo uma solução tecnológica personalizada. Sem intermediários. Você trabalha direto comigo — do diagnóstico à solução funcionando.
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll direction="up" delay={510} duration={0.8} threshold={0}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { val: '7', lbl: 'Anos de Experiência' },
              { val: '8', lbl: 'Semanas para Primeira Entrega' },
              { val: '100%', lbl: 'Foco no Resultado' },
              { val: '4.9★', lbl: 'Satisfação dos Clientes' },
            ].map((s, i) => (
              <div key={i} className="bg-background px-8 py-8 text-center">
                <div className="stat-number mb-2">{s.val}</div>
                <span className="font-mono text-[0.6rem] text-muted-foreground uppercase tracking-widest">{s.lbl}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}