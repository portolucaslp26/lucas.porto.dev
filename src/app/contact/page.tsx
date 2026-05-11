import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalEffects from '@/app/components/GlobalEffects';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactForm from '@/app/contact/components/ContactForm';
import ContactInfo from '@/app/contact/components/ContactInfo';

export default function ContactPage() {
  return (
    <>
      <GlobalEffects />
      <Header />
      <main>
        <ContactHero />
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}