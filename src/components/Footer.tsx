
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">MvDAa</h3>
            <p className="text-gray-400 mb-6">
              Uw specialist in stucwerk en afbouw. Kwaliteit en vakmanschap 
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>+31 6 12345678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>mvdaastucwerk@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>Nuenen, Nederland</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Traditioneel Stucwerk</li>
              <li>Moderne Afbouw</li>
              <li>Decoratieve Technieken</li>
              <li>Nieuwbouw</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Werkgebied</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Eindhoven</li>
              <li>Geldrop</li>
              <li>Veldhoven</li>
              <li>En omstreken</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MvDAa Stucadoor & Afbouw. Alle rechten voorbehouden. Powerd Spectux</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
