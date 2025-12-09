
import { Heart, MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Laboratory', href: '/laboratory' },
    { name: 'Dispensary', href: '/dispensary' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-nmrc-green rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">NMRC</h3>
                <p className="text-sm text-gray-400">Natural Medical & Research Centre</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Over 30 years of homeopathic excellence, providing natural healing solutions 
              with advanced diagnostic capabilities and personalized care.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-nmrc-green" />
                <div>
                  <p className="font-semibold">+92 51-2351404, +92 51-2351277</p>
                  <p className="text-sm text-gray-400">Emergency: +92 320-5047947</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-nmrc-green" />
                <p>nmrcg10.naturaglow_aesthetics@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-nmrc-green" />
                <p>Islamabad, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-nmrc-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Health Tips & Updates</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Receive health tips and updates from NMRC's 30-year expertise!
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-nmrc-green hover:bg-nmrc-green-dark">
                Subscribe Now
              </Button>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://instagram.com/nmrcg10.naturaglow_aesthetics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-nmrc-green transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/923205047947" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <span className="text-sm font-bold">W</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Natural Medical & Research Centre. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
