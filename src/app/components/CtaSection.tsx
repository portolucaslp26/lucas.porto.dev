'use client';

import React from 'react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function CtaSection() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="terminal-window border-glow overflow-hidden">
          <div className="bg-card px-6 py-3 flex items-center justify-between border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
            </div>
            <span className="font-mono text-[0.6rem] text-muted-foreground uppercase tracking-widest">iniciar_conversa.sh</span>
            <div className="w-12" />
          </div>

          <div className="p-10 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 blob-primary pointer-events-none" aria-hidden="true" />

            <AnimateOnScroll direction="up" delay={0} threshold={0.2} scale={0.98}>
              <div className="relative z-10">
                <span className="section-label block mb-6">VAMOS_RESOLVER_ISSO?</span>
                <h2 className="font-mono font-black tracking-tighter leading-tight uppercase text-foreground mb-6" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
                  Seu problema.<br />
                  <span className="text-accent text-glow">Nossa solução.</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxedubuntu-light">
                  Conte-nos o desafio do seu negócio. Vamos te mostrar como resolver — sem jargões, sem surpresas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="hacker-btn text-sm px-10">
                    INICIAR_PROJETO
                  </Link>
                  <Link href="/services" className="hacker-btn text-sm px-10" style={{ color: 'var(--muted-foreground)', borderColor: 'var(--border)' }}>
                    VER_SOLUÇÕES
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}