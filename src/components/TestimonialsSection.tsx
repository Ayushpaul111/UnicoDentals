import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  condition: string;
  imageUrl: string;
  description: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    name: "John Davis",
    condition: "Misaligned teeth (malocclusion)",
    imageUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    description: "A patient's tooth alignment and jaw development issues may show up when they are very young. Early intervention can aid children in properly developing.",
    rating: 5
  },
  {
    name: "Emma Wilson",
    condition: "Impacted tooth (angimes)",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    description: "Early detection and treatment of impacted teeth can prevent more serious complications and ensure proper dental development.",
    rating: 5
  },
  {
    name: "Sarah Brown",
    condition: "Tooth injuries (malocclusion)",
    imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    description: "Prompt treatment of dental injuries is crucial for preserving tooth structure and preventing long-term complications.",
    rating: 4
  },
  {
    name: "Michael Chen",
    condition: "Dental Implants",
    imageUrl: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    description: "The dental implant procedure was seamless and the results are amazing. I can finally smile with confidence again!",
    rating: 5
  },
  {
    name: "Lisa Anderson",
    condition: "Teeth Whitening",
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    description: "The professional whitening treatment exceeded my expectations. My teeth are noticeably brighter after just one session.",
    rating: 5
  },
  {
    name: "Robert Martinez",
    condition: "Root Canal Treatment",
    imageUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    description: "I was nervous about getting a root canal, but Dr. Mitchell made the process comfortable and pain-free.",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = (page + newDirection + testimonials.length) % testimonials.length;
    setPage([newPage, newDirection]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, index) => (
      <Star key={index} className="w-4 h-4 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section id="testimonials" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-black">
            HAPPY CLIENT'S<br />
            BRIGHT TREATMENT
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium"
          >
            Explore all treatment
          </motion.button>
        </motion.div>

        <div className="relative min-h-[600px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                testimonials[page],
                testimonials[(page + 1) % testimonials.length],
                testimonials[(page + 2) % testimonials.length]
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-3xl bg-gray-100 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-lg font-medium mb-2">{testimonial.condition}</p>
                    <p className="text-gray-600 text-sm">{testimonial.description}</p>
                    <p className="text-blue-600 font-medium mt-2">{testimonial.name}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div 
          className="flex justify-center mt-8 space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;