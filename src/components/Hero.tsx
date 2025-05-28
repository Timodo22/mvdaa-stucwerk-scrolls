
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Professioneel stucwerk"
          className="w-full h-full object-cover scale-110 animate-[zoom-in_20s_ease-out_infinite_alternate]"
        />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-md animate-[float_8s_ease-in-out_infinite_reverse]"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-white/15 rounded-full blur-sm animate-[float_7s_ease-in-out_infinite]"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-white font-medium">15+ jaar ervaring in vakmanschap</span>
          </div>
          
          <h1 className="text-7xl lg:text-8xl font-black text-white mb-8 leading-none">
            <span className="block">PERFECTE</span>
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AFWERKING
            </span>
          </h1>
          
          <p className="text-2xl text-gray-200 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Van traditioneel stucwerk tot moderne afbouwtechnieken - 
            <br />
            <span className="font-semibold">MvDAa</span> zorgt voor een onberispelijke uitstraling van uw project.
          </p>

          <div className="flex justify-center">
            <Link to="/projecten">
              <Button size="lg" className="group bg-white text-black hover:bg-gray-100 text-xl px-10 py-6 h-auto">
                Bekijk onze projecten
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-5xl font-black text-white mb-2">500+</div>
            <div className="text-gray-300 font-medium">Projecten voltooid</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-white mb-2">15+</div>
            <div className="text-gray-300 font-medium">Jaar ervaring</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-white mb-2">100%</div>
            <div className="text-gray-300 font-medium">Klanttevredenheid</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
