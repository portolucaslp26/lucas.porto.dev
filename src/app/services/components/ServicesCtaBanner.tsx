'use client';

import React from 'react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function ServicesCtaBanner() {
  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <AnimateOnScroll direction="up" delay={0} threshold={0.2}>
          <div>
            <span className="section-label block mb-3">PRÓXIMO_PASSO</span>
            <h2 className="font-mono font-black tracking-tighter text-foreground uppercase" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Tem um desafio? <span className="text-accent">Vamos resolver juntos.</span>
            </h2>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={120} threshold={0.2}>
          <div className="shrink-0">
            <Link href="/contact" className="hacker-btn text-sm px-8">
              FALAR_COMIGO →
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}