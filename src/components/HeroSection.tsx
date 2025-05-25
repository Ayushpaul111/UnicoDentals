import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-blue-50 rounded-[40px] p-8 md:p-12">
          {/* Text Content */}
          <div className="max-w-3xl space-y-6">
            <motion.h1 
              className="text-5xl md:text-7xl font-black tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              NEW LIFE<br />
              BEGIN WITH SMILE
            </motion.h1>
            
            <motion.p 
              className="text-gray-600 text-lg max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Bright goal is to give you as well as your family from the highest quality dental care via our highly most well trained dental professionals solution.
            </motion.p>
          </div>

          {/* Main Image */}
          <motion.div 
            className="mt-8 rounded-[32px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img 
              src="https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg"
              alt="Dental care" 
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Circular Badge */}
          <motion.div 
            className="absolute top-8 right-8 w-24 h-24"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full border-2 border-blue-600/20 animate-spin-slow">
                <div className="w-2 h-2 bg-blue-600 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white text-2xl">★</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;