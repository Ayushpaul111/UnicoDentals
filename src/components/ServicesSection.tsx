import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

interface ServiceProps {
  title: string;
  description: string;
  imageUrl: string;
  isOpen?: boolean;
  toggleOpen?: () => void;
}

const ServiceCard: React.FC<ServiceProps> = ({
  title,
  description,
  imageUrl,
  isOpen,
  toggleOpen,
}) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 ease-in-out shadow-sm hover:shadow-md ${
        isOpen
          ? "bg-blue-50 border-2 border-blue-200"
          : "bg-white border-2 border-gray-100"
      }`}
      style={{
        transform: isOpen ? "scale(1.01)" : "scale(1)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div
        className={`flex justify-between items-center p-4 cursor-pointer transition-colors duration-200 ${
          isOpen ? "hover:bg-blue-100" : "hover:bg-gray-50"
        }`}
        onClick={toggleOpen}
      >
        <h3 className="font-medium text-lg text-gray-800">{title}</h3>
        <div
          className="transition-transform duration-300 ease-in-out"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ChevronDown className="h-5 w-5 text-gray-600" />
        </div>
      </div>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "400px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="space-y-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              {description}
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
              data-cal-namespace="15min"
              data-cal-link="unicodentals/15min"
              data-cal-config='{"layout":"month_view"}'
            >
              Book Appointment
            </button>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [openService, setOpenService] = useState<number>(1);

  const services = [
    {
      id: 0,
      title: "Root Canal Dental Care",
      description:
        "A root canal is a treatment to repair and save a badly damaged or infected tooth instead of removing it. The procedure involves removing the damaged area of the tooth, cleaning and disinfecting it, then filling and sealing it.",
      imageUrl: "./rootCanal.jpg",
    },
    {
      id: 1,
      title: "Orthodontist Dental Care",
      description:
        "A dentist is a doctor trained to specialize in teeth, gums, nerves, and jaw, while orthodontists are dentists who specialize in a specific specialty within dentistry. Regular check-ups & professional cleanings to maintain healthy teeth and gums.",
      imageUrl: "./rootCanal.jpg",
    },
    {
      id: 2,
      title: "Cosmetic Dental Care",
      description:
        "Cosmetic dentistry focuses on improving the appearance of your teeth, mouth, and smile. Common procedures include teeth whitening, veneers, fillings, and implants. These services help enhance your smile and boost confidence.",
      imageUrl: "./rootCanal.jpg",
    },
  ];

  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          DIFFERENT SORT OF
          <br />
          <span className="text-blue-600">SERVICES THAT WE OFFER</span>
        </h2>

        <div className="space-y-4 max-w-4xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              isOpen={openService === service.id}
              toggleOpen={() =>
                setOpenService(openService === service.id ? -1 : service.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
