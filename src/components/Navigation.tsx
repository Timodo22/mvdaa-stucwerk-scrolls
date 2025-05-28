
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="group flex items-center">
            <div className={`text-3xl font-black transition-colors ${
              isScrolled || !isHomePage ? 'text-black' : 'text-white'
            }`}>
              MvDAa
            </div>
            <div className={`ml-3 text-sm font-medium transition-colors ${
              isScrolled || !isHomePage ? 'text-gray-600' : 'text-gray-300'
            }`}>
              stucadoor & afbouw
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-12">
            <Link 
              to="/" 
              className={`relative font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled || !isHomePage ? 'text-gray-800 hover:text-black' : 'text-white hover:text-gray-200'
              } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              Home
            </Link>
            <Link 
              to="/projecten" 
              className={`relative font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled || !isHomePage ? 'text-gray-800 hover:text-black' : 'text-white hover:text-gray-200'
              } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              Projecten
            </Link>
            <Link 
              to="/contact" 
              className={`relative font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled || !isHomePage ? 'text-gray-800 hover:text-black' : 'text-white hover:text-gray-200'
              } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+31612345678" 
              className={`flex items-center space-x-2 transition-colors ${
                isScrolled || !isHomePage ? 'text-gray-600 hover:text-black' : 'text-white hover:text-gray-200'
              }`}
            >
              <Phone size={16} />
              <span className="font-medium">+31 6 12345678</span>
            </a>
            <Button 
              variant={isScrolled || !isHomePage ? "default" : "outline"} 
              className={`group font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled || !isHomePage 
                  ? '' 
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              Offerte aanvragen
            </Button>
          </div>

          <button
            className={`md:hidden transition-colors ${
              isScrolled || !isHomePage ? 'text-black' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-lg">
            <div className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-black transition-colors font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/projecten" 
                className="text-gray-800 hover:text-black transition-colors font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Projecten
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-800 hover:text-black transition-colors font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="tel:+31612345678" 
                className="flex items-center space-x-2 text-gray-600 hover:text-black font-medium"
              >
                <Phone size={16} />
                <span>+31 6 12345678</span>
              </a>
              <Button className="w-full font-semibold">
                Offerte aanvragen
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
