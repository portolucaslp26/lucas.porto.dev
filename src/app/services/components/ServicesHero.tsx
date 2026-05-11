'use client';

import React, { useEffect } from 'react';

export default function ServicesHero() {
  useEffect(() => {
    const items = document.querySelectorAll('.svc-hero-reveal');
    items.forEach((item, i) => {
      (item as HTMLElement).style.opacity = '0';
      (item as HTMLElement).style.transform = 'translateY(30px)';
      setTimeout(() => {
        (item as HTMLElement).style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
        (item as HTMLElement).style.opacity = '1';
        (item as HTMLElement).style.transform = 'translateY(0)';
      }, 150 + i * 120);
    });
  }, []);

  return (
    <section className="pt-36 pb-20 px-6 relative overflow-hidden border-b border-border">
      {/* Atmospheric blob */}
      <div className="absolute top-0 right-0 w-96 h-96 blob-accent pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <div className="svc-hero-reveal">
            <span className="section-label block mb-4">SOLUÇÕES // PARA_SEU_NEGÓCIO</span>
          </div>
          <h1 className="svc-hero-reveal font-mono font-black tracking-tighter leading-none uppercase text-foreground mb-8" style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}>
            O Que Eu<br />
            <span className="text-accent text-glow">Resolvo?</span>
          </h1>
          <p className="svc-hero-reveal text-muted-foreground text-lg max-w-2xl leading-relaxedubuntu-light">
            Entendo o problema do seu negócio primeiro, depois construo uma solução tecnológica personalizada. Sem intermediários. Você trabalha direto comigo — do diagnóstico à solução funcionando.
          </p>
        </div>

        {/* Stats row */}
        <div className="svc-hero-reveal mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
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
      </div>
    </section>
  );
}