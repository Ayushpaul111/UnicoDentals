import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Play, Pause } from "lucide-react";

interface TestimonialProps {
  name: string;
  condition: string;
  imageUrl: string;
  description: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Sweta Rani Gajamer",
    condition: "RCT & Zirconia Crown",
    imageUrl: "./testimonials/Sweta_Rani_Gajamer.jpg",
    description:
      "My root canal treatment was painless, and the zirconia crown looks completely natural. Truly grateful for the excellent care!",
    rating: 5,
  },
  {
    name: "Bishal Bagchi",
    condition: "Scaling & PFM Crown",
    imageUrl: "./testimonials/Bishal_bagchi.jpg",
    description:
      "The scaling left my teeth feeling super clean, and the PFM crown was a perfect fit. Great experience overall!",
    rating: 5,
  },
  {
    name: "Roshan",
    condition: "Smile makeover & Zirconia Crown",
    imageUrl: "./testimonials/roshan.jpg",
    description:
      "My smile makeover with zirconia crowns gave me a whole new level of confidence. The transformation is incredible!",
    rating: 5,
  },
  {
    name: "Mrs Long ko Kyangla",
    condition: "Zirconia Crown & Scaling",
    imageUrl: "./testimonials/Mrs_Long_ko_Kyangla.jpg",
    description:
      "The scaling was gentle yet thorough, and the zirconia crown blends perfectly with my natural teeth. Couldn’t be happier!",
    rating: 5,
  },
  {
    name: "Dipak Roy",
    condition: "Smile Makeover & PFM Crown",
    imageUrl: "./testimonials/Dipak_Roy.jpg",
    description:
      "The smile makeover changed how I see myself, and the PFM crown looks amazing. Thank you for the beautiful work!",
    rating: 5,
  },
];

// Memoized StarRating component
const StarRating = memo(
  ({ rating, index: cardIndex }: { rating: number; index: number }) => {
    return (
      <div className="flex items-center gap-1.5">
        {Array.from({ length: rating }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: cardIndex * 0.15 + index * 0.1 + 0.6,
              type: "spring",
              stiffness: 500,
              damping: 15,
            }}
            whileHover={{
              scale: 1.3,
              rotate: 360,
              transition: { duration: 0.3 },
            }}
          >
            <Star className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" />
          </motion.div>
        ))}
      </div>
    );
  }
);

StarRating.displayName = "StarRating";

// Memoized TestimonialCard component
const TestimonialCard = memo(
  ({
    testimonial,
    index,
    direction,
  }: {
    testimonial: TestimonialProps;
    index: number;
    direction: number;
  }) => {
    const variants = useMemo(
      () => ({
        enter: (direction: number) => ({
          x: direction > 0 ? 400 : -400,
          opacity: 0,
          scale: 0.7,
          rotateY: direction > 0 ? 25 : -25,
          filter: "blur(4px)",
        }),
        center: {
          x: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
          filter: "blur(0px)",
        },
        exit: (direction: number) => ({
          x: direction < 0 ? 400 : -400,
          opacity: 0,
          scale: 0.7,
          rotateY: direction < 0 ? 25 : -25,
          filter: "blur(4px)",
        }),
      }),
      []
    );

    const transitionConfig = useMemo(
      () => ({
        x: {
          type: "spring" as const,
          stiffness: 200,
          damping: 25,
          delay: index * 0.1,
        },
        opacity: {
          duration: 0.5,
          delay: index * 0.08,
        },
        scale: {
          duration: 0.6,
          delay: index * 0.08,
        },
        rotateY: {
          duration: 0.7,
          delay: index * 0.1,
        },
        filter: {
          duration: 0.4,
          delay: index * 0.08,
        },
      }),
      [index]
    );

    return (
      <motion.div
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={transitionConfig}
        className="relative overflow-hidden rounded-2xl bg-white shadow-lg group w-full transition-all duration-500 hover:shadow-2xl"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />

        <motion.img
          src={testimonial.imageUrl}
          alt={testimonial.name}
          className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.1 + 0.2,
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 from-20% via-black/70 via-60% to-transparent to-100% text-white"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: index * 0.12 + 0.4,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.div
            className="mb-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.15 + 0.6,
              duration: 0.5,
            }}
          >
            <StarRating rating={testimonial.rating} index={index} />
          </motion.div>

          <motion.p
            className="text-xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15 + 0.7,
              duration: 0.5,
            }}
          >
            {testimonial.condition}
          </motion.p>

          <motion.p
            className="text-gray-200 text-sm leading-relaxed"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15 + 0.8,
              duration: 0.5,
            }}
          >
            {testimonial.description}
          </motion.p>

          <motion.p
            className="text-white font-medium mt-3 text-lg"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15 + 0.9,
              duration: 0.5,
            }}
          >
            {testimonial.name}
          </motion.p>
        </motion.div>
      </motion.div>
    );
  }
);

TestimonialCard.displayName = "TestimonialCard";

// Memoized NavigationControls component
const NavigationControls = memo(
  ({ onPrevious, onNext }: { onPrevious: () => void; onNext: () => void }) => {
    return (
      <motion.div
        className="flex justify-center mt-8 space-x-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.button
          onClick={onPrevious}
          className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{
            scale: 1.15,
            rotate: -5,
            borderColor: "#2563eb",
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors" />
        </motion.button>

        <motion.button
          onClick={onNext}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{
            scale: 1.15,
            rotate: 5,
            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </motion.div>
    );
  }
);

NavigationControls.displayName = "NavigationControls";

// Memoized ProgressControls component
const ProgressControls = memo(
  ({
    isAutoPlaying,
    progress,
    currentIndex,
    totalTestimonials,
    onToggleAutoPlay,
  }: {
    isAutoPlaying: boolean;
    progress: number;
    currentIndex: number;
    totalTestimonials: number;
    onToggleAutoPlay: () => void;
  }) => {
    return (
      <motion.div
        className="flex items-center justify-center mb-8 space-x-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.button
          onClick={onToggleAutoPlay}
          className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={
            isAutoPlaying ? "Pause auto-scroll" : "Resume auto-scroll"
          }
        >
          {isAutoPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" />
          )}
        </motion.button>

        <div className="flex-1 max-w-xs bg-gray-200 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <span className="text-sm text-gray-500 font-medium">
          {currentIndex + 1} / {totalTestimonials}
        </span>
      </motion.div>
    );
  }
);

ProgressControls.displayName = "ProgressControls";

// Memoized TestimonialIndicators component
const TestimonialIndicators = memo(
  ({
    testimonials,
    currentIndex,
    onIndicatorClick,
  }: {
    testimonials: TestimonialProps[];
    currentIndex: number;
    onIndicatorClick: (index: number) => void;
  }) => {
    return (
      <motion.div
        className="flex justify-center mt-6 space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => onIndicatorClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </motion.div>
    );
  }
);

TestimonialIndicators.displayName = "TestimonialIndicators";

// Main component with memo
const TestimonialsSection: React.FC = memo(() => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const getItemsPerPage = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  }, []);

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getItemsPerPage]);

  const paginate = useCallback(
    (newDirection: number) => {
      const newIndex =
        (currentIndex + newDirection + testimonials.length) %
        testimonials.length;
      setCurrentIndex([newIndex, newDirection]);
      setProgress(0);
    },
    [currentIndex]
  );

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          paginate(1);
          return 0;
        }
        return prev + 2.5; // Increment by 2.5% every 100ms (4 seconds total)
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isAutoPlaying, paginate]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying);
    if (isAutoPlaying) {
      setProgress(0);
    }
  }, [isAutoPlaying]);

  const handleManualNavigation = useCallback(
    (newDirection: number) => {
      setIsAutoPlaying(false);
      paginate(newDirection);
    },
    [paginate]
  );

  const handleIndicatorClick = useCallback(
    (index: number) => {
      setIsAutoPlaying(false);
      setCurrentIndex([index, index > currentIndex ? 1 : -1]);
      setProgress(0);
    },
    [currentIndex]
  );

  const scrollToSection = useCallback((id: string) => {
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
  }, []);

  const visibleTestimonials = useMemo(
    () =>
      Array.from({ length: itemsPerPage }).map(
        (_, i) => testimonials[(currentIndex + i) % testimonials.length]
      ),
    [itemsPerPage, currentIndex]
  );

  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex justify-between items-center mb-12 md:flex-row flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.h2
            className="text-5xl font-black text-gray-900"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              HAPPY CLIENTS'
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              UNICO TREATMENT
            </motion.span>
          </motion.h2>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-medium mt-8 md:mt-0 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
            onClick={() => scrollToSection("services")}
            aria-label="Explore all treatments"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore all treatment
          </motion.button>
        </motion.div>

        <ProgressControls
          isAutoPlaying={isAutoPlaying}
          progress={progress}
          currentIndex={currentIndex}
          totalTestimonials={testimonials.length}
          onToggleAutoPlay={toggleAutoPlay}
        />

        <div className="relative min-h-[450px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full">
            {visibleTestimonials.map((testimonial, index) => (
              <AnimatePresence
                key={`testimonial-${
                  (currentIndex + index) % testimonials.length
                }`}
                mode="wait"
              >
                <TestimonialCard
                  testimonial={testimonial}
                  index={index}
                  direction={direction}
                />
              </AnimatePresence>
            ))}
          </div>
        </div>

        <NavigationControls
          onPrevious={() => handleManualNavigation(-1)}
          onNext={() => handleManualNavigation(1)}
        />

        <TestimonialIndicators
          testimonials={testimonials}
          currentIndex={currentIndex}
          onIndicatorClick={handleIndicatorClick}
        />
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;
