import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalEffects from '@/app/components/GlobalEffects';
import ServicesHero from '@/app/services/components/ServicesHero';
import ServicesBento from '@/app/services/components/ServicesBento';
import ProcessSection from '@/app/services/components/ProcessSection';
import ServicesCtaBanner from '@/app/services/components/ServicesCtaBanner';

export default function ServicesPage() {
  return (
    <>
      <GlobalEffects />
      <Header />
      <main>
        <ServicesHero />
        <ServicesBento />
        <ProcessSection />
        <ServicesCtaBanner />
      </main>
      <Footer />
    </>
  );
}