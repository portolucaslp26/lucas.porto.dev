'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const allServices = [
  {
    id: 'web',
    label: '01',
    title: 'Sistemas Web',
    desc: 'Plataformas feitas sob medida para o seu negócio. Automatizam processos, organizam dados e escalam junto com você. Do simples ao complexo, tudo funciona desde o primeiro dia.',
    stack: [],
    metric: '100% personalizado',
    icon: 'GlobeAltIcon',
    highlight: true,
  },
  {
    id: 'mobile',
    label: '02',
    title: 'Aplicativos Mobile',
    desc: 'Apps que seus clientes e equipe realmente usam. Funcionam em iOS e Android, com uma experiência consistente e sem dor de cabeça de manutenção duplicada.',
    stack: [],
    metric: 'Funciona desde o dia 1',
    icon: 'DevicePhoneMobileIcon',
    highlight: false,
  },
  {
    id: 'cloud',
    label: '03',
    title: 'Infraestrutura Confiável',
    desc: 'Sua operação rodando sem interrupções. Configuro tudo para ser escalável, seguro e monitorado — para que você durma tranquilo sabendo que seus sistemas não vão cair.',
    stack: [],
    metric: '99,97% de uptime médio',
    icon: 'CloudIcon',
    highlight: false,
  },
  {
    id: 'ai',
    label: '04',
    title: 'Automação & IA',
    desc: 'Elimino tarefas repetitivas e processos manuais com automações inteligentes. Uso inteligência artificial onde ela realmente gera resultado — não por moda.',
    stack: [],
    metric: 'Processos manuais eliminados',
    icon: 'CpuChipIcon',
    highlight: true,
  },
  {
    id: 'integrations',
    label: '05',
    title: 'Integrações de Sistemas',
    desc: 'Seus sistemas não precisam viver em ilhas isoladas. Conecto ERPs, CRMs, meios de pagamento e ferramentas para que tudo funcione junto, sem retrabalho.',
    stack: [],
    metric: 'Sem retrabalho entre sistemas',
    icon: 'ArrowsRightLeftIcon',
    highlight: false,
  },
  {
    id: 'consulting',
    label: '06',
    title: 'Consultoria em Tecnologia',
    desc: 'Não sabe por onde começar? Avalio sua situação atual, mapeio oportunidades e traço um caminho claro. Orientação de quem já resolveu isso dezenas de vezes.',
    stack: [],
    metric: 'Decisões com mais segurança',
    icon: 'WrenchScrewdriverIcon',
    highlight: false,
  },
];

export default function ServicesBento() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll direction="up" delay={0}>
          <div className="mb-14">
            <span className="section-label block mb-3">MINHAS_SOLUÇÕES</span>
            <h2 className="font-mono font-black tracking-tighter text-section-xl text-foreground uppercase">
              Soluções <span className="text-accent">Completas.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allServices.map((svc, i) => (
            <AnimateOnScroll key={svc.id} direction="up" delay={i * 60} threshold={0.05}>
              <div
                className={`rounded-2xl p-8 flex flex-col justify-between gap-6 ${
                  svc.highlight
                    ? 'border border-accent/25 bg-card shadow-[0_0_30px_rgba(74,222,128,0.05)]'
                    : 'service-card'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-mono text-[0.6rem] text-muted-foreground uppercase tracking-widest">{svc.label}</span>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${svc.highlight ? 'bg-accent/10 border border-accent/30' : 'bg-muted border border-border'}`}>
                      <Icon name={svc.icon as Parameters<typeof Icon>[0]['name']} size={18} className={svc.highlight ? 'text-accent' : 'text-muted-foreground'} />
                    </div>
                  </div>
                  <h3 className="font-mono font-bold text-xl text-foreground mb-3">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxedubuntu-light">{svc.desc}</p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="font-mono text-[0.6rem] text-primary uppercase tracking-widest">{svc.metric}</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${svc.highlight ? 'bg-accent animate-pulse' : 'bg-muted-foreground'}`} />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}