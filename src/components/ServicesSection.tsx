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
      title: "Teeth Scaling",
      description:
        "Professional deep cleaning procedure to remove plaque, tartar, and bacterial deposits from above and below the gum line. Scaling helps prevent gum disease, reduces inflammation, and maintains optimal oral health.",
      imageUrl: "./services/teeth-scaling-vs-cleaning.webp",
    },
    {
      id: 1,
      title: "Extraction",
      description:
        "Safe and comfortable tooth removal procedures for damaged, decayed, or impacted teeth. Includes wisdom tooth extractions and surgical extractions with proper pain management and aftercare guidance.",
      imageUrl: "./services/Extraction.jpg",
    },
    {
      id: 2,
      title: "Fillings and Sealants",
      description:
        "Tooth-colored composite fillings to repair cavities and restore tooth structure. Preventive sealants protect molars from decay by covering deep grooves where bacteria commonly accumulate.",
      imageUrl: "./services/Fillings_and_Sealants.webp",
    },
    {
      id: 3,
      title: "Removable Partial Dentures",
      description:
        "Custom-fitted removable prosthetic devices designed to replace several missing teeth while preserving remaining natural teeth. Provides comfortable chewing function and natural appearance with easy maintenance.",
      imageUrl: "./services/Removable_Partial_Dentures.webp",
    },
    {
      id: 4,
      title: "Complete Partial Dentures",
      description:
        "Comprehensive partial denture solutions for patients missing multiple teeth in different areas of the mouth. Custom-designed for optimal fit, function, and aesthetics while maintaining oral health.",
      imageUrl: "./services/Complete_Partial_Dentures.jpeg",
    },
    {
      id: 5,
      title: "Tooth Crown",
      description:
        "Durable ceramic or porcelain crowns that completely cover damaged or weakened teeth. Crowns restore tooth strength, function, and appearance while providing long-lasting protection against further damage.",
      imageUrl: "./services/Crown.jpeg",
    },
    {
      id: 6,
      title: "Root Canal Treatment",
      description:
        "Advanced endodontic treatment to save severely infected or damaged teeth. The procedure removes infected pulp, cleans the root canals, and seals the tooth to prevent further infection while preserving the natural tooth.",
      imageUrl: "./services/Root_Canal_Treatment.jpg",
    },
    {
      id: 7,
      title: "Periodontal Treatments",
      description:
        "Comprehensive gum disease treatment including deep cleaning, scaling, root planing, and maintenance therapy. Specialized care to restore gum health and prevent tooth loss from advanced periodontitis.",
      imageUrl: "./services/Periodontal_Treatments.jpeg",
    },
    {
      id: 8,
      title: "Orthodontic Treatment",
      description:
        "Teeth straightening solutions including traditional braces, clear aligners, and retainers. Corrects bite issues, spacing problems, and alignment concerns for improved oral health and aesthetics.",
      imageUrl: "./services/Orthodontic_Treatment.jpg",
    },
  ];
  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          {/* DIFFERENT SORT OF
          <br /> */}
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
