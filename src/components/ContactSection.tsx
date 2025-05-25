import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+91 86539 61813",
      link: "tel:+91 86539 61813",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "unicodentals@gmail.com",
      link: "mailto:unicodentals@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "Shiv Mandir, Bara Mohansingh, Siliguri",
      link: "https://maps.app.goo.gl/A2G1Sp7BFsZSJGoH9",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      content: "Mon-Fri: 10:30AM-8:00PM",
      link: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 px-4 bg-blue-50" id="contact">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            GET IN TOUCH WITH US
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to help! Reach out to us through any of the following
            channels or visit our clinic during working hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <div className="text-blue-600">{info.icon}</div>
                <div>
                  <h3 className="font-semibold">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-600">{info.content}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center">
          {/* <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-bold">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <motion.button
                className="bg-blue-600 text-white px-6 py-2 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "#1D4ED8" }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div> */}

          <motion.div
            className="h-[400px] rounded-xl overflow-hidden shadow-lg"
            variants={itemVariants}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.167037540137!2d88.35890677576664!3d26.707110176770414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e447bb3ed1cab5%3A0xe6a84582e2e5cad!2sUnico%20Dentals!5e0!3m2!1sen!2sin!4v1748170651910!5m2!1sen!2sin "
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
