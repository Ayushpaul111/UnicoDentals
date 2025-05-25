import React, { useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    setEmail('');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white rounded-t-[40px] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.h3 
              className="text-4xl font-black text-blue-600"
              whileHover={{ scale: 1.05 }}
            >
              BRIGHT
            </motion.h3>
            <p className="text-gray-600 max-w-xs">
              Bright goal is to give you as well as your family the highest quality dental care our highly most.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your mail...."
                className="flex-1 px-6 py-3 bg-gray-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </form>
          </div>

          {/* Bright Care */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Bright care</h4>
            <ul className="space-y-3">
              {[
                { label: 'Find doctor', id: 'doctors' },
                { label: 'About us', id: 'about-us' },
                { label: 'Our blog', id: 'blog' },
                { label: 'Team work', id: 'team' }
              ].map((item) => (
                <motion.li 
                  key={item.label}
                  whileHover={{ x: 5 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">COMPANY</h4>
            <ul className="space-y-3">
              {[
                { label: 'Who we are', id: 'about-us' },
                { label: 'Resources', id: 'resources' },
                { label: 'Our experts', id: 'doctors' },
                { label: 'Feedback', id: 'testimonials' }
              ].map((item) => (
                <motion.li 
                  key={item.label}
                  whileHover={{ x: 5 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">CONTACT</h4>
            <ul className="space-y-3">
              {[
                { label: 'Customer care', id: 'contact' },
                { label: 'Social media', href: '#' },
                { label: 'www.brightcare.com', href: '#' }
              ].map((item) => (
                <motion.li 
                  key={item.label}
                  whileHover={{ x: 5 }}
                >
                  {item.id ? (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
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
            <p className="text-gray-600 text-sm">© 2025 kahaf. All rights reserved.</p>
            <a href="#" className="text-gray-600 text-sm hover:text-blue-600">Privacy policy</a>
            <a href="#" className="text-gray-600 text-sm hover:text-blue-600">Terms & condition</a>
          </div>

          <div className="flex items-center gap-8">
            <a href="mailto:bright@gmail.com" className="text-gray-600 hover:text-blue-600">
              bright@gmail.com
            </a>
            <div className="flex items-center gap-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Twitter, href: '#' }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
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
      </div>
    </footer>
  );
};

export default Footer;