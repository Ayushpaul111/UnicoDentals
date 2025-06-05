import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
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
    <footer className="bg-[#f0f7ff]">
      <div className="rounded-t-4xl bg-gradient-to-b from-[#0f4c8a] to-[#021c39]">
        {/* bg-gradient-to-b from-[#f0f7ff] from-2% via-10% to-[#001730] */}
        <div className=" py-8 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-2">
              <motion.h3
                className="text-4xl font-black text-blue-600"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="./logo.png"
                  alt="Unico dentals logo"
                  className="h-28"
                />
              </motion.h3>
              <p className="text-white max-w-xs">
                Our goal is to give you as well as your family the highest
                quality dental care by our highly qualified and skilled dental
                professionals.
              </p>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">COMPANY</h4>
              <ul className="space-y-3">
                {[
                  { label: "We Do Care", id: "services" },
                  { label: "Our Doctor", id: "doctor" },
                  { label: "Testimonials", id: "testimonials" },
                ].map((item) => (
                  <motion.li key={item.label} whileHover={{ x: 5 }}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">CONTACT</h4>
              <ul className="space-y-3">
                {[
                  { label: "Customer care", id: "contact" },
                  { label: "Doctor", id: "doctor" },
                ].map((item) => (
                  <motion.li key={item.label} whileHover={{ x: 5 }}>
                    {item.id ? (
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bright Care */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">OUR SOCIALS</h4>
              <ul className="space-y-3">
                {[
                  {
                    label: "Facebook",
                    href: "https://www.facebook.com/profile.php?id=61557281675521",
                  },
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/unico_dentals/",
                  },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/company/unicodentals/",
                  },
                ].map((item) => (
                  <motion.li key={item.label} whileHover={{ x: 5 }}>
                    {item.id ? (
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-8">
              <p className="text-white/80 text-sm">
                © 2025 Unico Dentals. All rights reserved.
              </p>
              {/* <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
            Privacy policy
            </a>
            <a href="#" className="text-gray-600 text-sm hover:text-blue-600">
            Terms & condition
            </a> */}
            </div>

            <div className="flex items-center gap-8 flex-col md:flex-row">
              <a
                href="mailto:unicodentals@gmail.com"
                className="text-white/80 hover:text-white"
              >
                unicodentals@gmail.com
              </a>
              <div className="flex items-center gap-4">
                {[
                  {
                    Icon: Facebook,
                    href: "https://www.facebook.com/profile.php?id=61557281675521",
                  },
                  {
                    Icon: Instagram,
                    href: "https://www.instagram.com/unico_dentals/",
                  },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/company/unicodentals/",
                  },
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-gray-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Created by Ehike */}
          <div className="mt-4 text-center">
            <p className="text-white/80 text-sm">
              Created by{" "}
              <a
                href="https://ehike.in"
                target="_blank"
                className="bg-clip-text text-transparent bg-gradient-to-br from-[#723FCD] to-[#DB9FF5] font-bold italic min-w-fit"
              >
                Ehike
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
