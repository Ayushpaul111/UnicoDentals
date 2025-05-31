import React, { useState } from "react";

interface ServiceProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div
      className="rounded-3xl overflow-hidden transition-all duration-300 ease-in-out shadow-sm border-2 bg-white border-gray-300"
      style={{
        transform: "scale(1.01)",
        transition: "all 0.3s ease-in-out",
        display: "block",
      }}
    >
      {/* Placeholder for the image */}
      <div className="h-48 w-full rounded-t-3xl p-2">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Title and description section */}
      <div className="p-4">
        <div className="flex justify-between items-center cursor-pointer transition-colors duration-200">
          <h3 className="font-semibold text-xl text-gray-800">{title}</h3>
        </div>

        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: "400px",
            opacity: 1,
          }}
        >
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const services = [
    {
      id: 0,
      title: "Dental Implants",
      description:
        "Permanent tooth replacement solution using titanium posts surgically placed into the jawbone. Implants provide a stable foundation for crowns, bridges, or dentures, restoring both function and appearance.",
      imageUrl:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=300&fit=crop",
    },
    {
      id: 1,
      title: "Dentures & Bridges",
      description:
        "Custom-fitted removable or fixed prosthetic devices to replace missing teeth. Bridges connect to existing teeth while dentures can replace partial or complete sets of teeth, restoring your smile and chewing ability.",
      imageUrl:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Extractions",
      description:
        "Safe and comfortable tooth removal procedures for damaged, decayed, or impacted teeth. Includes wisdom tooth extractions and surgical extractions with proper pain management and aftercare guidance.",
      imageUrl:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Fillings and Sealants",
      description:
        "Tooth-colored composite fillings to repair cavities and restore tooth structure. Preventive sealants protect molars from decay by covering deep grooves where bacteria commonly accumulate.",
      imageUrl:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Mouth Guards",
      description:
        "Custom-fitted protective appliances for sports activities and nighttime teeth grinding. Guards prevent dental injuries, reduce jaw tension, and protect against tooth wear from bruxism.",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Online Dentist Booking",
      description:
        "Convenient 24/7 online appointment scheduling system. Book consultations, routine cleanings, and emergency visits with real-time availability and automated reminders for your dental care needs.",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Root Canals",
      description:
        "Advanced endodontic treatment to save severely infected or damaged teeth. The procedure removes infected pulp, cleans the root canals, and seals the tooth to prevent further infection while preserving the natural tooth.",
      imageUrl:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&h=300&fit=crop",
    },
    {
      id: 7,
      title: "Teeth Cleaning",
      description:
        "Professional dental hygiene services including scaling, polishing, and plaque removal. Regular cleanings prevent gum disease, maintain oral health, and keep your smile bright and healthy.",
      imageUrl:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=300&fit=crop",
    },
    {
      id: 8,
      title: "Teeth Reshaping",
      description:
        "Cosmetic contouring to improve tooth shape, length, and surface irregularities. Minor adjustments can dramatically enhance your smile's appearance by creating better proportion and symmetry.",
      imageUrl:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=300&fit=crop",
    },
    {
      id: 9,
      title: "Veneers & Crowns",
      description:
        "Premium cosmetic restorations using porcelain veneers for front teeth and crowns for damaged teeth. These solutions provide natural-looking results that enhance both appearance and function.",
      imageUrl:
        "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&h=300&fit=crop",
    },
    {
      id: 10,
      title: "X-ray",
      description:
        "Digital dental radiography for accurate diagnosis and treatment planning. Advanced imaging technology provides detailed views of teeth, roots, and jaw structure with minimal radiation exposure.",
      imageUrl:
        "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=500&h=300&fit=crop",
    },
    {
      id: 11,
      title: "Periodontal Treatment",
      description:
        "Comprehensive gum disease treatment including deep cleaning, scaling, root planing, and maintenance therapy. Specialized care to restore gum health and prevent tooth loss from advanced periodontitis.",
      imageUrl:
        "https://images.unsplash.com/photo-1606811832074-7d8db6395212?w=500&h=300&fit=crop",
    },
    {
      id: 12,
      title: "Orthodontic Treatment",
      description:
        "Teeth straightening solutions including traditional braces, clear aligners, and retainers. Corrects bite issues, spacing problems, and alignment concerns for improved oral health and aesthetics.",
      imageUrl:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=300&fit=crop",
    },
    {
      id: 13,
      title: "Pedodontic Treatment",
      description:
        "Specialized pediatric dental care for children from infancy through adolescence. Child-friendly environment with gentle techniques for cleanings, fillings, fluoride treatments, and preventive care.",
      imageUrl:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=300&fit=crop",
    },
    {
      id: 14,
      title: "Pedodontic Treatment",
      description:
        "Specialized pediatric dental care for children from infancy through adolescence. Child-friendly environment with gentle techniques for cleanings, fillings, fluoride treatments, and preventive care.",
      imageUrl:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=300&fit=crop",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            if (index >= 3 && !showAll) return null;

            const shouldAnimate = index >= 3;
            return (
              <div
                key={service.id}
                className={`transition-all duration-700 ease-in-out transform ${
                  shouldAnimate && showAll
                    ? "opacity-100 translate-y-0"
                    : shouldAnimate
                    ? "opacity-0 -translate-y-10"
                    : "opacity-100 translate-y-0"
                }`}
                style={{
                  transitionDelay:
                    shouldAnimate && showAll ? `${(index - 3) * 150}ms` : "0ms",
                  display: "block",
                }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  key={service.id}
                />
              </div>
            );
          })}
        </div>

        <div className="text-center pt-8">
          <button
            onClick={() => {
              setShowAll(!showAll);
              if (showAll) {
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className={`${
              showAll
                ? "bg-gray-600 hover:bg-gray-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl transform`}
          >
            {showAll
              ? "Show Less"
              : `Show More Services (${services.length - 3} more)`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
