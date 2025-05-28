
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Vakmanschap in
              <span className="block text-gray-600">Stuc & Afbouw</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Bij MvDAa stucadoor & afbouw zorgen we voor perfecte afwerking van uw wanden en plafonds. 
              Van traditioneel stucwerk tot moderne afbouwtechnieken - kwaliteit staat voorop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/projecten">
                <Button size="lg" className="group">
                  Bekijk onze projecten
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Gratis offerte
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professioneel stucwerk"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-xl shadow-xl">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm text-gray-300">Jaar ervaring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
