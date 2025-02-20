import React from 'react';
import { Droplet, Stethoscope, Baby, Heart, FlaskRound as Flask, Presentation as PrescriptionBottle, Clock, UserCheck, Award, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ margin: "-100px" }} // Remove once: true to repeat animations
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
  >
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Droplet,
      title: "Hematology",
      description: "Comprehensive diagnosis and treatment of various blood disorders"
    },
    {
      icon: Stethoscope,
      title: "Surgical Services",
      description: "Advanced anesthesia services and pediatric surgery capabilities"
    },
    {
      icon: Baby,
      title: "Pediatric Services",
      description: "Specialized healthcare for infants, children, and adolescents"
    },
    {
      icon: Heart,
      title: "Obstetrics & Gynecology",
      description: "Complete maternity care including antenatal, delivery, and postnatal services"
    },
    {
      icon: Flask,
      title: "Laboratory Services",
      description: "Full-service diagnostic laboratory with modern equipment"
    },
    {
      icon: PrescriptionBottle,
      title: "Pharmacy Services",
      description: "Partnership with trusted pharmacies for prescription fulfillment"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl">Comprehensive healthcare solutions for you and your family</p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Special Clinical Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="font-semibold mb-2">Primary Care</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Antenatal Care (ANC)</li>
                <li>• Immunization</li>
                <li>• Family Planning</li>
                <li>• Health Education</li>
              </ul>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Specialized Care</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• HIV/AIDS Services</li>
                <li>• Tuberculosis (TB) Care</li>
                <li>• Non-Communicable Diseases</li>
                <li>• Maternal and Newborn Care</li>
              </ul>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Emergency Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 24/7 Emergency Care</li>
                <li>• Accident Response</li>
                <li>• Critical Care</li>
                <li>• Emergency Surgery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock medical care for all emergencies</p>
            </div>
            <div className="text-center">
              <UserCheck className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Expert Medical Team</h3>
              <p className="text-gray-600">Highly qualified and experienced healthcare professionals</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Licensed & Certified</h3>
              <p className="text-gray-600">Approved by Nigerian Ministry of Health</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Healthcare Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <Building className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Primary Care</h3>
              <p className="text-gray-600">Your first point of contact for all medical concerns</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <Building className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secondary Care</h3>
              <p className="text-gray-600">Specialized treatments and surgical procedures</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <Building className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tertiary Care</h3>
              <p className="text-gray-600">Collaborative referrals to specialized institutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;