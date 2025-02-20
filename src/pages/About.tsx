import { Clock, Award, Users, Building, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import MapLocation from '../components/MapLocation';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[200px] md:h-[400px] bg-cover bg-center">
        <img 
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Hospital Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl px-4 text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">About Us</h1>
            <p className="text-base md:text-xl">Three decades of excellence in healthcare</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-xl md:text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Established in 1992, New Foundation Hospital is a licensed, private healthcare facility 
              located in Lamisula Jabbamari, Maiduguri, Borno State. We are committed to delivering 
              exceptional medical services to our community, operating 24/7 to meet the healthcare needs 
              of our patients with compassion, professionalism, and state-of-the-art medical care.
            </p>
            <p className="text-gray-600 mb-6">
              Our approach combines advanced medical technology with a compassionate, patient-centered 
              philosophy to ensure optimal health outcomes. We pride ourselves on maintaining high 
              standards of medical excellence while providing accessible healthcare services to our community.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Galladima Junction, Lamisula Jabbamari, Maiduguri</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Working Hours</h3>
                <p className="text-gray-600">24/7 Emergency Services</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Key Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-blue-600" />
                  <span>Established in 1992</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>Licensed by Nigerian Ministry of Health</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Expert Medical Team</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>24/7 Emergency Services</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+2347060999747</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>info@newfoundationhospitals.com.ng</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Galladima Junction, Lamisula Jabbamari, Maiduguri</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-xl md:text-3xl font-bold mb-6">Find Us</h2>
          <MapLocation />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
