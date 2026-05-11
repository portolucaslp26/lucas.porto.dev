'use client';

import React, { useEffect } from 'react';

export default function ContactHero() {
  useEffect(() => {
    const items = document.querySelectorAll('.ct-hero-reveal');
    items.forEach((item, i) => {
      (item as HTMLElement).style.opacity = '0';
      (item as HTMLElement).style.transform = 'translateY(28px)';
      setTimeout(() => {
        (item as HTMLElement).style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
        (item as HTMLElement).style.opacity = '1';
        (item as HTMLElement).style.transform = 'translateY(0)';
      }, 150 + i * 120);
    });
  }, []);

  return (
    <section className="pt-36 pb-16 px-6 border-b border-border relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 blob-accent pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="ct-hero-reveal">
          <span className="section-label block mb-4">CONTATO // VAMOS_CONVERSAR</span>
        </div>
        <h1 className="ct-hero-reveal font-mono font-black tracking-tighter leading-none uppercase text-foreground mb-6" style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}>
          Inicie uma <br />
          <span className="text-accent text-glow">Conversa.</span>
        </h1>
        <p className="ct-hero-reveal text-muted-foreground text-lg max-w-xl leading-relaxedubuntu-light">
          Conte sobre o desafio do seu negócio. Responderei em até um dia útil com uma avaliação honesta e os próximos passos — sem pressão, sem enrolação.
        </p>
      </div>
    </section>
  );
}