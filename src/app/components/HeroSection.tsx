'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const chars = 'LUCASPORTO01ABCDEF><{}[]#@$%&*';
    const fontSize = 13;
    const cols = Math.floor(width / fontSize);
    const drops: number[] = new Array(cols).fill(1);

    function draw() {
      ctx!.fillStyle = 'rgba(6, 10, 6, 0.055)';
      ctx!.fillRect(0, 0, width, height);
      ctx!.fillStyle = 'rgba(74, 222, 128, 0.55)';
      ctx!.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx!.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    let lastTime = 0;
    const fps = 18;
    const interval = 1000 / fps;

    function loop(time: number) {
      animRef.current = requestAnimationFrame(loop);
      if (time - lastTime < interval) return;
      lastTime = time;
      draw();
    }

    animRef.current = requestAnimationFrame(loop);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      drops.length = Math.floor(width / fontSize);
      drops.fill(1);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const elements = document.querySelectorAll('.hero-reveal');
    elements.forEach((el, i) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(40px)';
      setTimeout(() => {
        (el as HTMLElement).style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)';
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Matrix Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.18 }}
        aria-hidden="true"
      />

      {/* Atmospheric blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 blob-primary pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 blob-accent pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full">
        {/* Status pill */}
        <div className="hero-reveal inline-flex items-center gap-2 mb-8 font-mono text-xs text-accent border border-accent/30 bg-accent/5 px-4 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          STATUS: ACEITANDO_NOVOS_PROJETOS — 2026
        </div>

        {/* Main headline */}
        <h1
          className="hero-reveal glitch-text font-mono font-black tracking-tighter leading-none mb-6 uppercase"
          data-text="SOLUÇÕES QUE FUNCIONAM."
          style={{ fontSize: 'clamp(3rem, 10vw, 8.5rem)' }}
        >
          <span className="block text-foreground">SOLUÇÕES QUE</span>
          <span className="block text-accent text-glow">FUNCIONAM.</span>
        </h1>

        <p className="hero-reveal max-w-2xl mx-auto text-muted-foreground text-base md:text-xl mb-10 leading-relaxedubuntu-light">
          Processos lentos, sistemas que não conversam, tarefas manuais que deveriam ser automáticas. Trasformo problemas como esses em soluções de tecnologia que funcionam de verdade — sem jargões, sem surpresas.
        </p>

        {/* CTAs */}
        <div className="hero-reveal flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Link href="/contact" className="hacker-btn text-sm min-w-52">
            INICIAR_PROJETO
          </Link>
          <Link
            href="/services"
            className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors flex items-center gap-3 group cursor-none"
          >
            <span className="w-10 h-px bg-border group-hover:bg-accent transition-all group-hover:w-14" />
            COMO_PODEMOS_AJUDAR?
          </Link>
        </div>

        {/* Terminal Mockup */}
        <div className="hero-reveal w-full max-w-3xl mx-auto">
          <div className="terminal-window border-glow shadow-[0_0_60px_rgba(74,222,128,0.07)]">
            {/* Terminal header */}
            <div className="bg-card px-5 py-3 flex items-center justify-between border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-primary/70" />
              </div>
              <span className="font-mono text-[0.6rem] text-muted-foreground uppercase tracking-widest">
                lucasporto
              </span>
              <div className="w-12" />
            </div>

            {/* Terminal body */}
            <div className="p-6 md:p-8 font-mono text-xs md:text-sm text-foreground/80 space-y-2.5 min-h-56 bg-black/30 text-left">
              <p>
                <span className="text-accent">$</span>{' '}
                <span className="text-foreground/60">lucasporto iniciar --empresa=sua-empresa --desafio=automatizar-processos</span>
              </p>
              <p className="text-muted-foreground">[LP] Entendendo o problema...</p>
              <p className="text-muted-foreground">[LP] Montando a solução ideal para o seu negócio...</p>
              <p className="text-muted-foreground">[LP] Definindo prazos, custos e entregas claras</p>
              <p className="text-accent">[SUCESSO] Projeto iniciado. Soluções reais, sem surpresas.</p>
              <p className="text-muted-foreground">[INFO] Entrega estimada: 8–12 semanas</p>
              <div className="flex gap-2 items-center">
                <span className="text-accent">$</span>
                <span className="inline-block w-2 h-4 bg-accent animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[0.55rem] text-muted-foreground uppercase tracking-widest animate-bounce">
        DESCUBRA_COMO_PODEMOS_AJUDAR
      </div>
    </section>
  );
}