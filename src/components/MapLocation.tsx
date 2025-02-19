import { MapPin } from 'lucide-react';

const MapLocation = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-gray-50 border-b flex items-center gap-2">
        <MapPin className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold">Our Location</h3>
      </div>
      <div className="aspect-video w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.711151267729!2d13.146960137309772!3d11.855480958382806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x110498b565689505%3A0x5082c68abf40f218!2sNew%20Foundation%20Hospital%2C%20Shehuri%2C%20Maiduguri%20600282%2C%20Borno!5e0!3m2!1sen!2sng!4v1739996929628!5m2!1sen!2sng"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default MapLocation;
