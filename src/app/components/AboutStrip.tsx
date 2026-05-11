'use client';

import React, { useEffect, useRef } from 'react';

const stats = [
  { value: '7', label: 'Anos de Experiência' },
  { value: '30+', label: 'Clientes Satisfeitos' },
  { value: '4.9', label: 'Avaliação Média' },
  { value: '100%', label: 'Foco no Resultado' },
];

export default function AboutStrip() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.about-reveal');
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.transform = 'translateY(0)';
              }, i * 100);
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
      {/* Background blob */}
      <div className="absolute inset-0 blob-primary pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left — 3 cols */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-10">
            <div
              className="about-reveal"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}
            >
              <span className="section-label block mb-4">03 // SOBRE</span>
              <h2 className="font-mono font-black tracking-tighter leading-tight uppercase text-section-xl text-foreground mb-6">
                Feito por quem <br />
                <span className="text-accent">Entende.</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-lgubuntu-light">
                Sou desenvolvedor independente que resolve problemas de verdade para empresas. Trabalho direto com você — sem intermediários, sem repasse.
              </p>
            </div>

            {/* Terminal manifesto */}
            <div
              className="about-reveal terminal-window"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}
            >
              <div className="bg-card px-5 py-2.5 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                </div>
                <span className="font-mono text-[0.55rem] text-muted-foreground uppercase tracking-widest">nossos_princípios</span>
              </div>
              <div className="p-6 font-mono text-xs space-y-2 text-left">
                <p><span className="text-accent">$</span> <span className="text-muted-foreground">cat princípios.txt</span></p>
                <p className="text-foreground/70">Não inflo projetos para cobrar mais.</p>
                <p className="text-foreground/70">Entrego soluções que funcionam, não promessas.</p>
                <p className="text-foreground/70">Digo quando há um caminho melhor.</p>
                <p className="text-accent">Faço tecnologia resolver o que importa.</p>
                <p className="text-muted-foreground">— Lucas Porto</p>
              </div>
            </div>
          </div>

          {/* Right — 2 cols: stat block */}
          <div
            className="lg:col-span-2 about-reveal"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="service-card rounded-2xl p-6 flex flex-col justify-between min-h-36"
                >
                  <span className="stat-number">{stat.value}</span>
                  <span className="font-mono text-[0.6rem] text-muted-foreground uppercase tracking-widest border-t border-border pt-3 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}