import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-none group">
          {/* <AppLogo size={28} /> */}
          <span className="font-mono text-sm font-bold text-muted-foreground group-hover:text-accent transition-colors tracking-tight">
            LUCAS PORTO
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-mono text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest cursor-none"
          >
            Início
          </Link>
          <Link
            href="/services"
            className="font-mono text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest cursor-none"
          >
            Soluções
          </Link>
          <Link
            href="/contact"
            className="font-mono text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest cursor-none"
          >
            Contato
          </Link>
          <Link
            href="/contact"
            className="font-mono text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest cursor-none"
          >
            Privacidade
          </Link>
          <Link
            href="/contact"
            className="font-mono text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest cursor-none"
          >
            Termos
          </Link>
        </div>

        {/* Copyright */}
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          © 2026 Lucas Porto - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}