import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                +2347060999747
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                newfhm03@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Galladima Junction, Lamisula Jabbamari, Maiduguri
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-blue-400">Our Services</a></li>
              <li><a href="/team" className="hover:text-blue-400">Meet Our Team</a></li>
              <li><a href="/resources" className="hover:text-blue-400">Resources</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-xl font-bold mb-4">Working Hours</h3>
            <p className="mb-2">24/7 Emergency Services</p>
            <p className="mb-2">Regular Consultations:</p>
            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p>Saturday: 9:00 AM - 2:00 PM</p>
          </div> */}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} New Foundation Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;