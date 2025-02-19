import React from 'react';
import { Mail, Phone, Award } from 'lucide-react';
import { teamMembers, ITeamMember } from '../data/teamMembers';

const TeamMember = ({ 
  image, 
  name, 
  role
}: { 
  image: string, 
  name: string, 
  role: string
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-blue-600 mb-2">{role}</p>
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Medical Team</h1>
          <p className="text-xl">Meet our experienced healthcare professionals</p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>

      {/* Join Our Team */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-8">
            We're always looking for talented medical professionals to join our team.
            If you're passionate about healthcare and making a difference, we'd love to hear from you.
          </p>
          <a 
            href="/careers" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;