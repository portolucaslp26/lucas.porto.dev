'use client';

import React, { useEffect, useRef, useState } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  scale?: number;
  threshold?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  once?: boolean;
}

const directionMap: Record<Direction, string> = {
  up: 'translateY(24px)',
  down: 'translateY(-24px)',
  left: 'translateX(24px)',
  right: 'translateX(-24px)',
};

export default function AnimateOnScroll({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  scale = 0.97,
  threshold = 0.1,
  className = '',
  as: Tag = 'div',
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const initialTransform = `${directionMap[direction]} scale(${scale})`;

  const style: React.CSSProperties = isVisible
    ? {
        opacity: 1,
        transform: 'translateY(0) translateX(0) scale(1)',
        transition: `opacity ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }
    : {
        opacity: 0,
        transform: initialTransform,
      };

  return (
    // @ts-expect-error dynamic element type
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}