import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AppFeatureSection from './components/AppFeatureSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div 
      className="min-h-screen bg-white pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AppFeatureSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;