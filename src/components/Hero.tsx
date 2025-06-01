
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent z-10"></div>
        <img 
          src="https://svanrooijenstukadoors.nl/wp-content/uploads/2021/08/gereedschap-stukadoor.png"
          alt="Professioneel stucwerk en afbouw"
          className="w-full h-full object-cover scale-110 animate-[zoom-in_20s_ease-out_infinite_alternate]"
        />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-white/10 rounded-full blur-sm animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute top-32 sm:top-40 right-4 sm:right-20 w-24 sm:w-32 h-24 sm:h-32 bg-white/5 rounded-full blur-md animate-[float_8s_ease-in-out_infinite_reverse]"></div>
      <div className="absolute bottom-32 sm:bottom-40 left-4 sm:left-20 w-12 sm:w-16 h-12 sm:h-16 bg-white/15 rounded-full blur-sm animate-[float_7s_ease-in-out_infinite]"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-16">
        <div className="mb-8">

          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 leading-none">
            <span className="block">PERFECTE</span>
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AFWERKING
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto font-light leading-relaxed px-4 sm:px-0">
            Van traditioneel stucwerk tot moderne afbouwtechnieken - 
            <br className="hidden sm:block" />
            <span className="font-semibold">MvDAa</span> zorgt voor een onberispelijke uitstraling van uw project.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link to="/projecten">
              <Button size="lg" className="group bg-white text-black hover:bg-gray-100 text-lg sm:text-xl px-6 sm:px-10 py-4 sm:py-6 h-auto w-full sm:w-auto">
                Bekijk onze projecten
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-lg sm:text-xl px-6 sm:px-10 py-4 sm:py-6 h-auto w-full sm:w-auto transition-all duration-300">
                Vraag offerte aan
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-20">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">100+</div>
            <div className="text-gray-300 font-medium text-sm sm:text-base">Projecten voltooid</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">5+</div>
            <div className="text-gray-300 font-medium text-sm sm:text-base">Jaar ervaring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">100%</div>
            <div className="text-gray-300 font-medium text-sm sm:text-base">Klanttevredenheid</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
