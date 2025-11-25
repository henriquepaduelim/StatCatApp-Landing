
'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Highlights from '@/components/Highlights';
import HowItWorks from '@/components/HowItWorks';
import Metrics from '@/components/Metrics';
import Analytics from '@/components/Analytics';
import TeamEvents from '@/components/TeamEvents';
import Branding from '@/components/Branding';
import Security from '@/components/Security';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => sections.forEach(section => {
      observer.unobserve(section);
    });
  }, []);

  // Wrapper function to add animation class
  const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
    <div className="fade-in-section">
      {children}
    </div>
  );

  return (
    <div className="bg-navy">
      <Header />
      <main>
        <Hero />
        <AnimatedSection><TrustedBy /></AnimatedSection>
        <AnimatedSection><Highlights /></AnimatedSection>
        <AnimatedSection><HowItWorks /></AnimatedSection>
        <AnimatedSection><Metrics /></AnimatedSection>
        <AnimatedSection><Analytics /></AnimatedSection>
        <AnimatedSection><TeamEvents /></AnimatedSection>
        <AnimatedSection><Branding /></AnimatedSection>
        <AnimatedSection><Security /></AnimatedSection>
        <AnimatedSection><Testimonials /></AnimatedSection>
        <AnimatedSection><Pricing /></AnimatedSection>
        <AnimatedSection><FAQ /></AnimatedSection>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
