import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

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
    imageUrl:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    description:
      "A patient's tooth alignment and jaw development issues may show up when they are very young. Early intervention can aid children in properly developing.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    condition: "Impacted tooth (angimes)",
    imageUrl:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    description:
      "Early detection and treatment of impacted teeth can prevent more serious complications and ensure proper dental development.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    condition: "Dental Implants",
    imageUrl:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    description:
      "The dental implant procedure was seamless and the results are amazing. I can finally smile with confidence again!",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    condition: "Teeth Whitening",
    imageUrl:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    description:
      "The professional whitening treatment exceeded my expectations. My teeth are noticeably brighter after just one session.",
    rating: 5,
  },
  {
    name: "Robert Martinez",
    condition: "Root Canal Treatment",
    imageUrl:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    description:
      "I was nervous about getting a root canal, but Dr. Mitchell made the process comfortable and pain-free.",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  // Determine items per page based on screen size
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1; // Mobile: 1 card
      if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
      return 3; // Desktop: 3 cards
    }
    return 3; // Default to 3 for server-side rendering
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // Update itemsPerPage on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const paginate = (newDirection: number) => {
    const newIndex =
      (currentIndex + newDirection + testimonials.length) % testimonials.length;
    setCurrentIndex([newIndex, newDirection]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, index) => (
      <Star key={index} className="w-4 h-4 text-yellow-400 fill-current" />
    ));
  };

  // Calculate visible testimonials
  const visibleTestimonials = Array.from({ length: itemsPerPage }).map(
    (_, i) => testimonials[(currentIndex + i) % testimonials.length]
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust if your header size is different
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex justify-between items-center mb-12 md:flex-row flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-black">
            HAPPY CLIENT'S
            <br />
            BRIGHT TREATMENT
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium mt-8 md:mt-0"
            onClick={() => scrollToSection("services")}
          >
            Explore all treatment
          </motion.button>
        </motion.div>

        <div className="relative min-h-[400px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full">
            {visibleTestimonials.map((testimonial, index) => (
              <AnimatePresence
                key={(currentIndex + index) % testimonials.length}
                mode="wait"
              >
                <motion.div
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 },
                  }}
                  className="relative overflow-hidden rounded-3xl bg-gray-100 group w-full"
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
                    className="absolute bottom-0 left-0 right-0 p-6 bg-white/70 backdrop-blur-md"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-lg font-medium mb-2">
                      {testimonial.condition}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.description}
                    </p>
                    <p className="text-blue-600 font-medium mt-2">
                      {testimonial.name}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
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
