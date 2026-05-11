import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesPreview from '@/app/components/ServicesPreview';
import PortfolioSection from '@/app/components/PortfolioSection';
import AboutStrip from '@/app/components/AboutStrip';
import CtaSection from '@/app/components/CtaSection';
import GlobalEffects from '@/app/components/GlobalEffects';

export default function HomePage() {
  return (
    <>
      <GlobalEffects />
      <Header />
      <main>
        <HeroSection />
        <ServicesPreview />
        {/* <PortfolioSection /> */}
        <AboutStrip />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}