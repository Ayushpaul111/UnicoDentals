import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceProps {
  title: string;
  description: string;
  imageUrl: string;
  isOpen?: boolean;
  toggleOpen?: () => void;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, imageUrl, isOpen, toggleOpen }) => {
  return (
    <motion.div 
      className={`rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-blue-50' : 'bg-white'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: isOpen ? 1 : 1.02 }}
    >
      <motion.div 
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleOpen}
        whileHover={{ backgroundColor: isOpen ? 'rgba(59, 130, 246, 0.1)' : 'rgba(243, 244, 246, 1)' }}
      >
        <h3 className="font-medium text-lg">{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
          >
            <div className="space-y-4">
              <motion.p 
                className="text-gray-700 text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {description}
              </motion.p>
              <motion.button 
                className="bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: '#2563EB' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Book Appointment
              </motion.button>
            </div>
            <motion.div 
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const [openService, setOpenService] = useState<number>(1);

  const services = [
    {
      id: 0,
      title: "Root Canal Dental Care",
      description: "A root canal is a treatment to repair and save a badly damaged or infected tooth instead of removing it. The procedure involves removing the damaged area of the tooth, cleaning and disinfecting it, then filling and sealing it.",
      imageUrl: "https://images.pexels.com/photos/3779702/pexels-photo-3779702.jpeg"
    },
    {
      id: 1,
      title: "Orthodontist Dental Care",
      description: "A dentist is a doctor trained to specialize in teeth, gums, nerves, and jaw, while orthodontists are dentists who specialize in a specific specialty within dentistry. Regular check-ups & professional cleanings to maintain healthy teeth and gums.",
      imageUrl: "https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg"
    },
    {
      id: 2,
      title: "Cosmetic Dental Care",
      description: "Cosmetic dentistry focuses on improving the appearance of your teeth, mouth, and smile. Common procedures include teeth whitening, veneers, fillings, and implants. These services help enhance your smile and boost confidence.",
      imageUrl: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg"
    }
  ];

  return (
    <section id="services" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          DIFFERENT SORT OF<br />SERVICES THAT WE OFFER
        </motion.h2>
        
        <div className="space-y-4 max-w-4xl mx-auto">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              isOpen={openService === service.id}
              toggleOpen={() => setOpenService(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;