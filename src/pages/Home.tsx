import React from 'react';
import { Clock, Award, Users, Phone, Stethoscope, Baby, Heart, FlaskRound, Presentation, Droplet } from 'lucide-react';
import { teamMembers } from '../data/teamMembers';

const Home = () => {
  const featuredTeamMembers = teamMembers.slice(0, 4);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to New Foundation Hospital</h1>
            <p className="text-lg md:text-xl mb-2">Providing exceptional healthcare services since 1992</p>
            <p className="text-lg md:text-xl mb-8">
              Your Health, Our Priority.
            </p>
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-block">
              Book an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p>Round-the-clock medical care for emergencies</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Licensed & Certified</h3>
              <p>Approved by Nigerian Ministry of Health</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p>Experienced healthcare professionals</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Easy Access</h3>
              <p>Quick and simple appointment booking</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About New Foundation Hospital</h2>
              <p className="mb-4">
                Established in 1992, New Foundation Hospital is a licensed, private healthcare facility 
                located in Lamisula Jabbamari, Maiduguri, Borno State. We are committed to delivering 
                exceptional medical services to our community.
              </p>
              <p className="mb-4">
                Our approach combines advanced medical technology with a compassionate, patient-centered 
                philosophy to ensure optimal health outcomes.
              </p>
              <a href="/about" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn more about us →
              </a>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Hospital Building"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Medical Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Medical Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Stethoscope className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">General Medicine</h3>
              <p className="text-gray-600">Comprehensive medical care for patients of all ages</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Baby className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pediatrics</h3>
              <p className="text-gray-600">Specialized healthcare for children and adolescents</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Obstetrics & Gynecology</h3>
              <p className="text-gray-600">Complete women's health and maternity care</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FlaskRound className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Laboratory Services</h3>
              <p className="text-gray-600">Advanced diagnostic testing and analysis</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Presentation className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pharmacy</h3>
              <p className="text-gray-600">24/7 pharmacy services with quality medications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Droplet className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
              <p className="text-gray-600">Round-the-clock emergency medical services</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {featuredTeamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/team" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Meet Our Full Team
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-blue-600 text-white py-12 my-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Emergency? Call Us Now</h2>
          <p className="text-xl md:text-2xl font-medium">07060999747</p>
          <p className="mt-2">
            Available 24/7 to meet the healthcare needs of our patients with compassion, <br /> professionalism, and state-of-the-art medical care.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;