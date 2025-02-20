import React from 'react';
import { Video, Camera, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import HealthNews from '../components/HealthNews';

const Resources = () => {
  const photos = [
    {
      title: "State-of-the-art Facilities",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Our Medical Team",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Laboratory Services",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Resources</h1>
          <p className="text-base md:text-xl">Stay informed with our latest updates and educational materials</p>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <a href="#news" className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <Camera className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg md:text-xl font-semibold">Health News</h3>
          </a>
          <a href="#videos" className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <Video className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg md:text-xl font-semibold">Videos</h3>
          </a>
          <a href="#events" className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg md:text-xl font-semibold">Events</h3>
          </a>
        </motion.div>

        <section id="news" className="mb-16">
          <HealthNews />
        </section>

        {/* Photo Gallery - Coming Soon */}
        <section id="photos" className="mb-16">
          <h2 className="text-xl md:text-3xl font-bold mb-8">Photo Gallery</h2>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Camera className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg md:text-xl font-semibold mb-4">Coming Soon</h3>
            <p className="text-gray-600">
              We're currently curating a collection of photos showcasing our facilities, 
              medical team, and healthcare services. Check back soon to explore our gallery!
            </p>
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos" className="mb-16">
          <h2 className="text-xl md:text-3xl font-bold mb-8">Educational Videos</h2>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Video className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg md:text-xl font-semibold mb-4">Coming Soon</h3>
            <p className="text-gray-600">
              We're currently working on creating educational videos about various health topics. 
              Check back soon for updates!
            </p>
          </div>
        </section>

        {/* Events Section */}
        <section id="events">
          <h2 className="text-xl md:text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="border-l-4 border-blue-600 pl-4 mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Community Health Awareness Day</h3>
              <p className="text-gray-600 mb-2">Date: April 15, 2024</p>
              <p className="text-gray-600">Join us for free health screenings and educational sessions.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Maternal Health Workshop</h3>
              <p className="text-gray-600 mb-2">Date: April 30, 2024</p>
              <p className="text-gray-600">Learn about prenatal care and healthy pregnancy practices.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;