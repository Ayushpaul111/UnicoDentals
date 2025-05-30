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
    imageUrl: "./doctor.jpg",
    description:
      "A patient's tooth alignment and jaw development issues may show up when they are very young. Early intervention can aid children in properly developing.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    condition: "Impacted tooth (angimes)",
    imageUrl: "./doctor.jpg",
    description:
      "Early detection and treatment of impacted teeth can prevent more serious complications and ensure proper dental development.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    condition: "Dental Implants",
    imageUrl: "./doctor.jpg",
    description:
      "The dental implant procedure was seamless and the results are amazing. I can finally smile with confidence again!",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    condition: "Teeth Whitening",
    imageUrl: "./doctor.jpg",
    description:
      "The professional whitening treatment exceeded my expectations. My teeth are noticeably brighter after just one session.",
    rating: 5,
  },
  {
    name: "Robert Martinez",
    condition: "Root Canal Treatment",
    imageUrl: "./doctor.jpg",
    description:
      "I was nervous about getting a root canal, but Dr. Mitchell made the process comfortable and pain-free.",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

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
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Star className="w-5 h-5 text-yellow-400 fill-current" />
      </motion.div>
    ));
  };

  const visibleTestimonials = Array.from({ length: itemsPerPage }).map(
    (_, i) => testimonials[(currentIndex + i) % testimonials.length]
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex justify-between items-center mb-12 md:flex-row flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-black text-gray-900">
            HAPPY CLIENTS'
            <br />
            UNICO TREATMENT
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium mt-8 md:mt-0 hover:bg-blue-700 transition-colors"
            onClick={() => scrollToSection("services")}
            aria-label="Explore all treatments"
          >
            Explore all treatment
          </motion.button>
        </motion.div>

        <div className="relative min-h-[450px] overflow-hidden">
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
                    x: { type: "spring", stiffness: 500, damping: 25 },
                    opacity: { duration: 0.15 },
                    scale: { duration: 0.15 },
                  }}
                  className="relative overflow-hidden rounded-2xl bg-white shadow-lg group w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <motion.img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 from-10% to-transparent to-90% text-white"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                  >
                    <div className="flex items-center gap-1.5 mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-xl font-bold text-white-300 mb-2">
                      {testimonial.condition}
                    </p>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {testimonial.description}
                    </p>
                    <p className="text-white font-medium mt-3 text-lg">
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
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </motion.button>
          <motion.button
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
