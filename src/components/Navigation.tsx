
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-black">
            MvDAa
            <span className="text-sm font-normal block text-gray-600">stucadoor & afbouw</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-black transition-colors">
              Home
            </Link>
            <Link to="/projecten" className="text-gray-800 hover:text-black transition-colors">
              Projecten
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-black transition-colors">
              Contact
            </Link>
          </div>

          <Button variant="outline" className="hidden md:block">
            Offerte aanvragen
          </Button>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-800 hover:text-black transition-colors">
                Home
              </Link>
              <Link to="/projecten" className="text-gray-800 hover:text-black transition-colors">
                Projecten
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-black transition-colors">
                Contact
              </Link>
              <Button variant="outline" className="w-full">
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
