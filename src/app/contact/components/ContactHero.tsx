'use client';

import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function ContactHero() {
  return (
    <section className="pt-36 pb-16 px-6 border-b border-border relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 blob-accent pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimateOnScroll direction="up" delay={150} duration={0.8} threshold={0}>
          <span className="section-label block mb-4">CONTATO // VAMOS_CONVERSAR</span>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={270} duration={0.8} threshold={0}>
          <h1 className="font-mono font-black tracking-tighter leading-none uppercase text-foreground mb-6" style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}>
            Inicie uma <br />
            <span className="text-accent text-glow">Conversa.</span>
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={390} duration={0.8} threshold={0}>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxedubuntu-light">
            Conte sobre o desafio do seu negócio. Responderei em até um dia útil com uma avaliação honesta e os próximos passos — sem pressão, sem enrolação.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}