'use client';

import React, { useEffect } from 'react';

export default function GlobalEffects() {
  useEffect(() => {
    // Custom cursor
    const cursor = document.getElementById('lp-cursor');
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 9}px, ${e.clientY - 9}px)`;
    };

    const expandCursor = () => cursor.classList.add('cursor-expanded');
    const shrinkCursor = () => cursor.classList.remove('cursor-expanded');

    window.addEventListener('mousemove', moveCursor);

    const interactables = document.querySelectorAll('a, button, .portfolio-card, .service-card');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', expandCursor);
      el.addEventListener('mouseleave', shrinkCursor);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div id="lp-cursor" className="custom-cursor" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
}