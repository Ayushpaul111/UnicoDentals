import React from 'react';
import { Star, Calendar, Phone } from 'lucide-react';

const AppFeatureSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              MEET OUR EXPERT<br />DR. SARAH MITCHELL
            </h2>
            
            <p className="text-gray-600">
              With over 15 years of experience in cosmetic and restorative dentistry, 
              Dr. Mitchell leads our team with expertise and compassion. She specializes 
              in advanced dental procedures and stays at the forefront of dental technology.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl">
                <Star className="h-8 w-8 text-blue-600 mb-2" />
                <p className="font-semibold">15+ Years Experience</p>
                <p className="text-sm text-gray-600">Advanced Dental Care</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <Calendar className="h-8 w-8 text-blue-600 mb-2" />
                <p className="font-semibold">Easy Scheduling</p>
                <p className="text-sm text-gray-600">Book appointments online</p>
              </div>
              
              <div className="bg-blue-600 p-6 rounded-xl col-span-1 sm:col-span-2">
                <Phone className="h-8 w-8 text-white mb-2" />
                <p className="text-white font-semibold">Emergency Care Available</p>
                <button className="mt-2 bg-white text-blue-600 py-2 px-4 rounded-full text-sm">
                  Contact Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg" 
              alt="Dr. Sarah Mitchell" 
              className="w-full h-auto rounded-3xl shadow-lg"
            />
            <div className="absolute -bottom-4 right-4 bg-white p-4 rounded-xl shadow-lg max-w-xs">
              <h4 className="text-sm font-semibold text-blue-600">Board Certified</h4>
              <p className="text-xs text-gray-600">
                Specialized in Cosmetic & Restorative Dentistry
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatureSection;