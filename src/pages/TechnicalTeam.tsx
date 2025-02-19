import React from 'react';
import { Wrench, Server, Shield, Database } from 'lucide-react';

const TechnicalTeam = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Head of IT Infrastructure",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      expertise: ["Network Management", "System Administration", "IT Security"]
    },
    {
      name: "Alice Johnson",
      role: "Medical Equipment Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      expertise: ["Medical Device Maintenance", "Equipment Calibration", "Technical Training"]
    },
    {
      name: "David Chen",
      role: "Database Administrator",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      expertise: ["Database Management", "Data Security", "System Integration"]
    },
    {
      name: "Sarah Williams",
      role: "IT Security Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      expertise: ["Cybersecurity", "Risk Assessment", "Security Protocols"]
    }
  ];

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
          <h1 className="text-4xl font-bold mb-4">Technical Team</h1>
          <p className="text-xl">Meet the experts behind our hospital's technical operations</p>
        </div>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Technical Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-4">{ member.role}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <p key={skillIndex} className="text-gray-600 text-sm">• {skill}</p>
                  ))}
                </div>
              </div>
            </div>
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