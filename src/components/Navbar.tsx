import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8" />
              <span className="font-bold text-xl">New Foundation Hospital</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md">About</Link>
              <Link to="/services" className="hover:bg-blue-700 px-3 py-2 rounded-md">Services</Link>
              <Link to="/team" className="hover:bg-blue-700 px-3 py-2 rounded-md">Our Team</Link>
              <Link to="/resources" className="hover:bg-blue-700 px-3 py-2 rounded-md">Resources</Link>
              <Link to="/technical-team" className="hover:bg-blue-700 px-3 py-2 rounded-md">Technical Team</Link>
              <Link to="/contact" className="hover:bg-blue-700 px-3 py-2 rounded-md">Contact</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/about" className="block hover:bg-blue-700 px-3 py-2 rounded-md">About</Link>
              <Link to="/services" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Services</Link>
              <Link to="/team" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Our Team</Link>
              <Link to="/resources" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Resources</Link>
              <Link to="/technical-team" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Technical Team</Link>
              <Link to="/contact" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;