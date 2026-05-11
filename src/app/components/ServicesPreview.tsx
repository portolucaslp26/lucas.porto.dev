'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    id: 'web',
    label: '01 // SISTEMAS_WEB',
    title: 'Sistemas Web',
    desc: 'Plataformas feitas sob medida para automatizar processos, organizar dados e escalar seu negócio. Do simples ao complexo — tudo funciona desde o primeiro dia.',
    metric: '100% personalizado',
    icon: 'GlobeAltIcon',
    span: 'col-span-1 md:col-span-2',
    tall: true,
  },
  {
    id: 'mobile',
    label: '02 // APPS_MOBILE',
    title: 'Aplicativos Mobile',
    desc: 'Apps que seus clientes e equipe realmente usam. Funcionam no iOS e Android, sem dor de cabeça de manutenção duplicada.',
    metric: 'Funciona desde o dia 1',
    icon: 'DevicePhoneMobileIcon',
    span: 'col-span-1',
    tall: false,
  },
  {
    id: 'cloud',
    label: '03 // INFRAESTRUTURA',
    title: 'Infraestrutura Confiável',
    desc: 'Sistemas que não caem. Sua operação roda sem interrupções, com segurança e escala automática quando precisa.',
    metric: '99,97% de uptime médio',
    icon: 'CloudIcon',
    span: 'col-span-1',
    tall: false,
  },
  {
    id: 'ai',
    label: '04 // AUTOMAÇÃO_E_IA',
    title: 'Automação & IA',
    desc: 'Elimine tarefas repetitivas e libere sua equipe para o que importa. Uso inteligência artificial onde ela realmente gera resultado para o seu negócio.',
    metric: 'Processos manuais eliminados',
    icon: 'CpuChipIcon',
    span: 'col-span-1 md:col-span-2',
    tall: false,
  },
  {
    id: 'int',
    label: '05 // INTEGRAÇÕES',
    title: 'Integrações de Sistemas',
    desc: 'Sistemas que não conversam são dinheiro perdido. Conecto seus ERPs, CRMs, pagamentos e ferramentas para tudo funcionar junto.',
    metric: 'Sem retrabalho entre sistemas',
    icon: 'ArrowsRightLeftIcon',
    span: 'col-span-1',
    tall: false,
  },
];

export default function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.srv-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
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
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label block mb-3">01 // O QUE RESOLVO</span>
            <h2 className="font-mono font-black tracking-tighter leading-tight uppercase text-section-xl text-foreground">
              O Que Eu <br />
              <span className="text -accent">Resolvo?</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed border-l border-primary/30 pl-4ubuntu-light">
            Soluções de tecnologia sob medida para quem precisa de mais do que sistemas prontos. Entendo seu problema primeiro, construo depois — sem jargões, sem surpresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Web — col-span-2 */}
          <div
            className="srv-card service-card md:col-span-2 rounded-2xl p-8 flex flex-col justify-between min-h-64"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="section-label text-[0.55rem] block mb-4">{services[0].label}</span>
                <h3 className="font-mono font-bold text-2xl text-foreground mb-3">{services[0].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{services[0].desc}</p>
              </div>
              <div className="w-12 h-12 border border-border rounded-lg flex items-center justify-center shrink-0 ml-4">
                <Icon name={services[0].icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-accent" />
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
              <span className="font-mono text-[0.6rem] text-primary uppercase tracking-widest">{services[0].metric}</span>
              <span className="font-mono text-[0.6rem] text-muted-foreground uppercase">DISPONÍVEL</span>
            </div>
          </div>

          {/* Mobile — col-span-1 */}
          <div
            className="srv-card service-card col-span-1 rounded-2xl p-8 flex flex-col justify-between min-h-64"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <div>
              <span className="section-label text-[0.55rem] block mb-4">{services[1].label}</span>
              <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center mb-4">
                <Icon name={services[1].icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-accent" />
              </div>
              <h3 className="font-mono font-bold text-xl text-foreground mb-2">{services[1].title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{services[1].desc}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <span className="font-mono text-[0.6rem] text-primary uppercase tracking-widest">{services[1].metric}</span>
            </div>
          </div>

          {/* Cloud — col-span-1 */}
          <div
            className="srv-card service-card col-span-1 rounded-2xl p-8 flex flex-col justify-between min-h-56"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <div>
              <span className="section-label text-[0.55rem] block mb-4">{services[2].label}</span>
              <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center mb-4">
                <Icon name={services[2].icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-accent" />
              </div>
              <h3 className="font-mono font-bold text-xl text-foreground mb-2">{services[2].title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{services[2].desc}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <span className="font-mono text-[0.6rem] text-primary uppercase tracking-widest">{services[2].metric}</span>
            </div>
          </div>

          {/* AI — col-span-2 */}
          <div
            className="srv-card service-card md:col-span-2 rounded-2xl p-8 flex flex-col justify-between min-h-56"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="section-label text-[0.55rem] block mb-4">{services[3].label}</span>
                <h3 className="font-mono font-bold text-2xl text-foreground mb-3">{services[3].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{services[3].desc}</p>
              </div>
              <div className="w-12 h-12 border border-accent/30 rounded-lg flex items-center justify-center shrink-0 ml-4 bg-accent/5">
                <Icon name={services[3].icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-accent" />
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
              <span className="font-mono text-[0.6rem] text-primary uppercase tracking-widest">{services[3].metric}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </div>
          </div>

          {/* Integrations — col-span-3 (last row, full width) */}
          <div
            className="srv-card service-card md:col-span-3 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 min-h-40"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 border border-border rounded-lg flex items-center justify-center shrink-0">
                <Icon name={services[4].icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-accent" />
              </div>
              <div>
                <span className="section-label text-[0.55rem] block mb-1">{services[4].label}</span>
                <h3 className="font-mono font-bold text-xl text-foreground">{services[4].title}</h3>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">{services[4].desc}</p>
            <div className="shrink-0">
              <span className="font-mono text-[0.6rem] text-primary uppercase tracking-widest">{services[4].metric}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className="hacker-btn text-xs px-8">
            VER_TODAS_AS_SOLUÇÕES
          </Link>
        </div>
      </div>
    </section>
  );
}