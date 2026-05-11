'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.cta-reveal');
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.transform = 'translateY(0)';
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="terminal-window border-glow overflow-hidden">
          {/* Terminal bar */}
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
            {/* Background glow */}
            <div className="absolute inset-0 blob-primary pointer-events-none" aria-hidden="true" />

            <div
              className="cta-reveal relative z-10"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)' }}
            >
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
          </div>
        </div>
      </div>
    </section>
  );
}