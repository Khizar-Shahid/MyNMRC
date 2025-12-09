import { useState } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabaseClient';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { session } = useAuth();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Laboratory', href: '/laboratory' },
    { name: 'Dispensary', href: '/dispensary' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-nmrc-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">NG</span>
            </div>
            <div>
              <h1 className="font-playfair font-bold text-xl text-gray-900">NaturaGlow</h1>
              <p className="text-xs text-gray-600">Natural Medical & Research Centre</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActive(item.href)
                    ? 'text-nmrc-green border-b-2 border-nmrc-green'
                    : 'text-gray-700 hover:text-nmrc-green'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info & Social */}
          <div className="hidden lg:flex items-center space-x-4">
            {session ? (
              <Button onClick={handleSignOut} className="bg-gray-800 text-white hover:bg-gray-700 ml-4">Sign Out</Button>
            ) : (
              <Button asChild className="bg-gray-800 text-white hover:bg-gray-700 ml-4">
                <Link to="/login">Login</Link>
              </Button>
            )}
            <a href="tel:+92512351404" className="flex items-center space-x-2 text-nmrc-green font-semibold whitespace-nowrap">
              <Phone className="w-4 h-4" />
              <span>+92 51-2351404</span>
            </a>
            <div className="flex space-x-2">
              <a href="https://instagram.com/nmrcg10.naturaglow_aesthetics" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-gray-600 hover:text-nmrc-green transition-colors" />
              </a>
              <a href="https://wa.me/923205047947" target="_blank" rel="noopener noreferrer">
                <div className="w-5 h-5 bg-green-500 rounded text-white text-xs flex items-center justify-center">W</div>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium ${
                    isActive(item.href) ? 'text-nmrc-green' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                {session ? (
                  <Button onClick={handleSignOut} className="bg-gray-800 text-white hover:bg-gray-700 ml-4 w-full">Sign Out</Button>
                ) : (
                  <Button asChild className="bg-gray-800 text-white hover:bg-gray-700 ml-4 w-full">
                    <Link to="/login">Login</Link>
                  </Button>
                )}
              </div>
              <div className="pt-4 border-t">
                <a href="tel:+92512351404" className="flex items-center space-x-2 text-nmrc-green font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>+92 51-2351404</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
