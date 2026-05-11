'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const projects = [
  // {
  //   id: 1,
  //   title: 'NexaFlow',
  //   category: 'Sistema de Gestão',
  //   result: 'Reduziu overhead operacional em 38%',
  //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1eb3d60-1777367904588.png",
  //   alt: 'Dashboard de gestão operacional com indicadores verdes em monitores',
  //   size: 'md:col-span-2 md:row-span-2',
  //   isLarge: true,
  // },
  // {
  //   id: 2,
  //   title: 'TrailPay',
  //   category: 'App Financeiro',
  //   result: 'Aumentou a adoção do app em 3x',
  //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_12b275988-1776005653209.png",
  //   alt: 'Aplicativo financeiro em smartphone com interface moderna',
  //   size: 'col-span-1',
  // },
  // {
  //   id: 3,
  //   title: 'CloudCore',
  //   category: 'Infraestrutura Confiável',
  //   result: '99,98% de uptime alcançado',
  //   image: "https://images.unsplash.com/photo-1639066648921-82d4500abf1a",
  //   alt: 'Infraestrutura de servidores com iluminação ambiente azul-esverdeada',
  //   size: 'col-span-1',
  // },
  // {
  //   id: 4,
  //   title: 'Veridian',
  //   category: 'Automação Inteligente',
  //   result: 'Eliminou processos manuais críticos',
  //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_19f8fe7fc-1772547120162.png",
  //   alt: 'Visualização de rede neural abstrata com nós de conexão brilhantes',
  //   size: 'md:col-span-2',
  //   isWide: true,
  // },
  // {
  //   id: 5,
  //   title: 'MeshLink',
  //   category: 'Integração de Sistemas',
  //   result: 'Unificou todos os sistemas da empresa',
  //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_138e050bc-1772478851122.png",
  //   alt: 'Fluxo de dados conectando sistemas diferentes em ambiente escuro',
  //   size: 'col-span-1',
  // },
  // {
  //   id: 6,
  //   title: 'Habitat',
  //   category: 'Sistema de Gestão',
  //   result: 'Entregue em 6 semanas',
  //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ca4e8d79-1768647192769.png",
  //   alt: 'Interface de sistema de gestão em laptop com design limpo e escuro',
  //   size: 'col-span-1',
  // },
  {
    id: 7,
    title: 'VoIP Academia',
    category: 'Landing Page',
    result: 'Academia de musculação',
    image: '/assets/images/voip-home.png',
    alt: 'Screenshot da landing page da VoIP Academia',
    size: 'col-span-1',
    url: 'https://voip-academia.vercel.app/',
    isWide: true,
    isLarge: false
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
          {projects.map((project, index) => {
            const isLarge = project.isLarge;
            const isWide = project.isWide;
            const isFullWidth = project.id === 6;
            const minH = isLarge ? 'min-h-80 md:min-h-[480px]' : isWide ? 'min-h-64' : isFullWidth ? 'min-h-56' : 'min-h-56';
            const titleSize = isLarge ? 'text-2xl' : isWide || isFullWidth ? 'text-xl' : 'text-lg';
            const mbSpacing = isLarge ? 'mb-2' : (isWide || isFullWidth) && !isLarge ? 'mb-1' : 'mb-1';
            const imgSizes = isLarge ? '(max-width: 768px) 100vw, 66vw' : isWide ? '(max-width: 768px) 100vw, 66vw' : isFullWidth ? '100vw' : '(max-width: 768px) 100vw, 33vw';
            const delay = index % 3 === 0 ? 0 : index % 3 === 1 ? 120 : 240;

            const cardContent = (
              <div className={`portfolio-card ${project.size} rounded-2xl overflow-hidden ${minH} ${project.url ? 'cursor-pointer' : ''}`}>
                <div className={`relative w-full h-full ${minH}`}>
                  <AppImage src={project.image} alt={project.alt} fill className="portfolio-img object-cover" sizes={imgSizes} priority={index === 0} />
                  <div className="portfolio-overlay">
                    {/* <span className={`font-mono text-[0.6rem] text-accent uppercase tracking-widest ${isLarge ? 'mb-2' : 'mb-1'}`}>{project.category}</span> */}
                    <h3 className={`font-mono font-bold ${titleSize} text-foreground ${mbSpacing}`}>{project.title}</h3>
                    {isLarge ? (
                      <div className="flex items-center gap-2 mt-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="font-mono text-xs text-accent">{project.result}</span>
                      </div>
                    ) : (
                      <span className="font-mono text-xs text-accent">{project.result}</span>
                    )}
                  </div>
                </div>
              </div>
            );

            return (
              <AnimateOnScroll key={project.id} direction="up" delay={delay} threshold={0.05} scale={0.98}>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block no-underline">
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
