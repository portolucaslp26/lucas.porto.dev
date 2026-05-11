'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const projects = [
  {
    id: 1,
    title: 'NexaFlow',
    category: 'Sistema de Gestão',
    result: 'Reduziu overhead operacional em 38%',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1eb3d60-1777367904588.png",
    alt: 'Dashboard de gestão operacional com indicadores verdes em monitores',
    size: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 2,
    title: 'TrailPay',
    category: 'App Financeiro',
    result: 'Aumentou a adoção do app em 3x',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12b275988-1776005653209.png",
    alt: 'Aplicativo financeiro em smartphone com interface moderna',
    size: 'col-span-1'
  },
  {
    id: 3,
    title: 'CloudCore',
    category: 'Infraestrutura Confiável',
    result: '99,98% de uptime alcançado',
    image: "https://images.unsplash.com/photo-1639066648921-82d4500abf1a",
    alt: 'Infraestrutura de servidores com iluminação ambiente azul-esverdeada',
    size: 'col-span-1'
  },
  {
    id: 4,
    title: 'Veridian',
    category: 'Automação Inteligente',
    result: 'Eliminou processos manuais críticos',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19f8fe7fc-1772547120162.png",
    alt: 'Visualização de rede neural abstrata com nós de conexão brilhantes',
    size: 'md:col-span-2'
  },
  {
    id: 5,
    title: 'MeshLink',
    category: 'Integração de Sistemas',
    result: 'Unificou todos os sistemas da empresa',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_138e050bc-1772478851122.png",
    alt: 'Fluxo de dados conectando sistemas diferentes em ambiente escuro',
    size: 'col-span-1'
  },
  {
    id: 6,
    title: 'Habitat',
    category: 'Sistema de Gestão',
    result: 'Entregue em 6 semanas',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ca4e8d79-1768647192769.png",
    alt: 'Interface de sistema de gestão em laptop com design limpo e escuro',
    size: 'col-span-1'
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-24 px-6 relative border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <AnimateOnScroll direction="up" delay={0}>
            <div>
              <span className="section-label block mb-3">02 // RESULTADOS</span>
              <h2 className="font-mono font-black tracking-tighter leading-tight uppercase text-section-xl text-foreground">
                Problemas <br />
                <span className="text-accent">Resolvidos.</span>
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="up" delay={100}>
            <div className="flex items-center gap-4 font-mono text-[0.6rem] text-muted-foreground uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              RESULTADOS QUE FAZEM DIFERENÇA
            </div>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AnimateOnScroll direction="up" delay={0} threshold={0.05} scale={0.98}>
            <div className="portfolio-card md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden min-h-80">
              <div className="relative w-full h-full min-h-80 md:min-h-[480px]">
                <AppImage src={projects[0].image} alt={projects[0].alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 66vw" priority />
                <div className="portfolio-overlay">
                  <span className="font-mono text-[0.6rem] text-accent uppercase tracking-widest mb-2">{projects[0].category}</span>
                  <h3 className="font-mono font-bold text-2xl text-foreground mb-2">{projects[0].title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="font-mono text-xs text-accent">{projects[0].result}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={120} threshold={0.05} scale={0.98}>
            <div className="portfolio-card col-span-1 rounded-2xl overflow-hidden min-h-56">
              <div className="relative w-full h-full min-h-56">
                <AppImage src={projects[1].image} alt={projects[1].alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="portfolio-overlay">
                  <span className="font-mono text-[0.6rem] text-accent uppercase tracking-widest mb-1">{projects[1].category}</span>
                  <h3 className="font-mono font-bold text-lg text-foreground mb-1">{projects[1].title}</h3>
                  <span className="font-mono text-xs text-accent">{projects[1].result}</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0} threshold={0.05} scale={0.98}>
            <div className="portfolio-card col-span-1 rounded-2xl overflow-hidden min-h-56">
              <div className="relative w-full h-full min-h-56">
                <AppImage src={projects[2].image} alt={projects[2].alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="portfolio-overlay">
                  <span className="font-mono text-[0.6rem] text-accent uppercase tracking-widest mb-1">{projects[2].category}</span>
                  <h3 className="font-mono font-bold text-lg text-foreground mb-1">{projects[2].title}</h3>
                  <span className="font-mono text-xs text-accent">{projects[2].result}</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={120} threshold={0.05} scale={0.98}>
            <div className="portfolio-card md:col-span-2 rounded-2xl overflow-hidden min-h-64">
              <div className="relative w-full h-full min-h-64">
                <AppImage src={projects[3].image} alt={projects[3].alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 66vw" />
                <div className="portfolio-overlay">
                  <span className="font-mono text-[0.6rem] text-accent uppercase tracking-widest mb-2">{projects[3].category}</span>
                  <h3 className="font-mono font-bold text-xl text-foreground mb-1">{projects[3].title}</h3>
                  <span className="font-mono text-xs text-accent">{projects[3].result}</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0} threshold={0.05} scale={0.98}>
            <div className="portfolio-card col-span-1 rounded-2xl overflow-hidden min-h-64">
              <div className="relative w-full h-full min-h-64">
                <AppImage src={projects[4].image} alt={projects[4].alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="portfolio-overlay">
                  <span className="font-mono text-[0.6rem] text-accent uppercase tracking-widest mb-1">{projects[4].category}</span>
                  <h3 className="font-mono font-bold text-lg text-foreground mb-1">{projects[4].title}</h3>
                  <span className="font-mono text-xs text-accent">{projects[4].result}</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={240} threshold={0.05} scale={0.98}>
            <div className="portfolio-card md:col-span-3 rounded-2xl overflow-hidden min-h-56">
              <div className="relative w-full h-full min-h-56">
                <AppImage src={projects[5].image} alt={projects[5].alt} fill className="object-cover" sizes="100vw" />
                <div className="portfolio-overlay">
                  <span className="font-mono text-[0.6rem] text-accent uppercase tracking-widest mb-2">{projects[5].category}</span>
                  <h3 className="font-mono font-bold text-xl text-foreground mb-2">{projects[5].title}</h3>
                  <span className="font-mono text-xs text-accent">{projects[5].result}</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}