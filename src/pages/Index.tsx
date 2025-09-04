import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Founders from '@/components/Founders';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Add scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with slide-up-fade class
    const elementsToAnimate = document.querySelectorAll('.slide-up-fade');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <div className="slide-up-fade">
          <About />
        </div>

        {/* Services Section */}
        <div className="slide-up-fade">
          <Services />
        </div>

        {/* Founders Section */}
        <div className="slide-up-fade">
          <Founders />
        </div>

        {/* CTA Section */}
        <div className="slide-up-fade">
          <CTA onContactClick={() => setIsContactModalOpen(true)} />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default Index;
