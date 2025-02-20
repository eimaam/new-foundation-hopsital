import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { Clock, Award, Users, Phone, Stethoscope, Baby, Heart, FlaskRound, Presentation, Droplet, UserCircle } from 'lucide-react';
import { teamMembers } from '../data/teamMembers';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Updated heroImages array with images depicting Black healthcare professionals and hospital scenes.
  const heroImages = [
    {
      url: "https://plus.unsplash.com/premium_photo-1731410157470-cd041742d53a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Hospital Room with a man in a hospital bed"
    },
    
    {
      url: "https://plus.unsplash.com/premium_photo-1682130004675-b1cb3991bf3b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Male Doctor consulting with a patient"
    },
    {
      url: "https://images.unsplash.com/photo-1574500918933-0b57a8d1b8c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      caption: "Compassionate Black Medical Team"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661723117437-12df365de677?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Doctor with little girl patient"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const featuredTeamMembers = teamMembers.slice(0, 4);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with sliding animation */}
      <div className="relative h-[600px] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${heroImages[currentImageIndex].url}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '600px', // Explicit height
              width: '100%' // Explicit width
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="text-white">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl md:text-5xl font-bold mb-4"
                >
                  Welcome to New Foundation Hospital
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-lg md:text-xl mb-2"
                >
                  Providing exceptional healthcare services since 1992
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-block mt-4">
                    Book an Appointment
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <motion.section 
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-100px" }} // Remove once: true to repeat animations
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Add motion.div to each feature */}
            <motion.div variants={fadeIn} className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p>Round-the-clock medical care for emergencies</p>
            </motion.div>
            <motion.div variants={fadeIn} className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Licensed & Certified</h3>
              <p>Approved by Nigerian Ministry of Health</p>
            </motion.div>
            <motion.div variants={fadeIn} className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p>Experienced healthcare professionals</p>
            </motion.div>
            <motion.div variants={fadeIn} className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Easy Access</h3>
              <p>Quick and simple appointment booking</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xl md:text-3xl font-bold mb-6">About New Foundation Hospital</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Medical Excellence</h2>
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: "-100px" }} // Remove once: true to repeat animations
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Stethoscope className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">General Medicine</h3>
              <p className="text-gray-600">Comprehensive medical care for patients of all ages</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Baby className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pediatrics</h3>
              <p className="text-gray-600">Specialized healthcare for children and adolescents</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Heart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Obstetrics & Gynecology</h3>
              <p className="text-gray-600">Complete women's health and maternity care</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <FlaskRound className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Laboratory Services</h3>
              <p className="text-gray-600">Advanced diagnostic testing and analysis</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Presentation className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pharmacy</h3>
              <p className="text-gray-600">24/7 pharmacy services with quality medications</p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Droplet className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
              <p className="text-gray-600">Round-the-clock emergency medical services</p>
            </motion.div>
          </motion.div>
          <div className="text-center mt-8">
            <a href="/services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Team Section with animations */}
      <motion.section
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ margin: "-100px" }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {featuredTeamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="text-center"
              >
                <div className="flex justify-center">
                  {member.image ? (
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-48 h-48 rounded-full bg-gray-50 flex items-center justify-center">
                      <UserCircle className="w-32 h-32 text-gray-400" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/team" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Meet Our Full Team
            </a>
          </div>
        </div>
      </motion.section>

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