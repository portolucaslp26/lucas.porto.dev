'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ServicesCtaBanner() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.svc-cta-reveal');
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.transform = 'translateY(0)';
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div
          className="svc-cta-reveal"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <span className="section-label block mb-3">PRÓXIMO_PASSO</span>
          <h2 className="font-mono font-black tracking-tighter text-foreground uppercase" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Tem um desafio? <span className="text-accent">Vamos resolver juntos.</span>
          </h2>
        </div>
        <div
          className="svc-cta-reveal shrink-0"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 120ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) 120ms' }}
        >
          <Link href="/contact" className="hacker-btn text-sm px-10">
            FALAR_COMIGO →
          </Link>
        </div>
      </div>
    </section>
  );
}