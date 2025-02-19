import React from 'react';
import { UserCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { technicalTeamMembers } from '../data/teamMembers';
import { Wrench, Server, Shield, Database } from 'lucide-react';

const TechnicalTeamMember = ({ name, role }: { name: string, role: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ margin: "-100px" }}
    className="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <div className="flex justify-center py-6 bg-gray-50">
      <UserCircle className="w-32 h-32 text-gray-400" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-blue-600 mb-2">{role}</p>
    </div>
  </motion.div>
);

const TechnicalTeam = () => {
  const responsibilities = [
    {
      icon: Wrench,
      title: "Equipment Maintenance",
      description: "Regular maintenance and calibration of medical equipment to ensure optimal performance"
    },
    {
      icon: Server,
      title: "IT Infrastructure",
      description: "Managing and maintaining hospital's IT systems and network infrastructure"
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "Implementing and monitoring security measures for both physical and digital assets"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Ensuring proper storage, backup, and security of patient and hospital data"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Technical Team</h1>
          <p className="text-xl">Meet the experts behind our medical technology</p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalTeamMembers.map((member, index) => (
            <TechnicalTeamMember key={index} {...member} />
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Responsibilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {responsibilities.map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Support */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Technical Support?</h2>
            <p className="text-xl mb-6">Our technical team is available to assist with any equipment or system-related issues</p>
            <div className="space-y-2">
              <p>Internal Extension: 1234</p>
              <p>Email: support@newfoundation.com</p>
              <p>Available Monday - Friday: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalTeam;