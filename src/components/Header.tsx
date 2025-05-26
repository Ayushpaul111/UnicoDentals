import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "../lib/utils";
import { getCalApi } from "@calcom/embed-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Transform scroll values to create smooth scaling effect
  const headerScale = useTransform(scrollY, [0, 200], [1, 0.85]);
  const headerPadding = useTransform(scrollY, [0, 200], [24, 16]);
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const textSize = useTransform(scrollY, [0, 200], [1, 0.9]);

  const navItems = [
    { id: "services", label: "SERVICES" },
    { id: "doctor", label: "DOCTOR" },
    { id: "testimonials", label: "TESTIMONIALS" },
  ];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  // Close menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const menuButton = document.querySelector("[data-menu-button]");
      const menuDropdown = document.querySelector("[data-menu-dropdown]");

      if (
        isMenuOpen &&
        !menuButton?.contains(target) &&
        !menuDropdown?.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const menuVariants = {
    open: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50%)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          style={{
            scale: headerScale,
            paddingLeft: headerPadding,
            paddingRight: headerPadding,
          }}
          className={cn(
            "rounded-full py-3",
            "flex items-center justify-between",
            "bg-white/80 backdrop-blur-md shadow-lg",
            "border border-white/20",
            "transition-all duration-300 ease-out"
          )}
        >
          <motion.div
            className="flex items-center"
            style={{ scale: logoScale }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="./logoBlack.png"
              alt="Unico dentals logo"
              className="h-16 transition-all duration-300 ease-out"
            />
          </motion.div>

          <motion.nav
            className="hidden md:flex items-center space-x-8"
            style={{ scale: textSize }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>

          <div className="flex items-center space-x-4">
            <motion.button
              className="bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full whitespace-nowrap"
              style={{ scale: textSize }}
              whileHover={{ scale: 1.05, backgroundColor: "#1D4ED8" }}
              whileTap={{ scale: 0.95 }}
              data-cal-namespace="15min"
              data-cal-link="unicodentals/15min"
              data-cal-config='{"layout":"month_view"}'
            >
              Book Online
            </motion.button>

            {/* Removed the textSize transform from the menu button */}
            <motion.button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-menu-button
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-lg md:hidden"
                data-menu-dropdown
              >
                <nav className="flex flex-col p-4">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      variants={itemVariants}
                      onClick={() => scrollToSection(item.id)}
                      className="py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </div>
    </div>
  );
};

export default Header;
