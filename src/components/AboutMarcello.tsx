
import { useEffect, useRef } from 'react';
import { Award, Users, Heart } from 'lucide-react';

const AboutMarcello = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={aboutRef} className="py-16 sm:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative overflow-hidden">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-full">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Marcello - Eigenaar MvDAa Stucadoor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-black text-white p-4 sm:p-6 rounded-xl shadow-xl min-w-[140px] sm:min-w-[160px] text-center">
              <div className="text-xl sm:text-2xl font-bold">5+</div>
              <div className="text-sm sm:text-base whitespace-nowrap">Jaar ervaring</div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                Over Marcello
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
                "Vakmanschap is meer dan alleen techniek - het gaat om passie, 
                precisie en de trots om iets moois achter te laten."
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Met meer dan 5 jaar ervaring in de stucadoorsbranche heeft Marcello 
                van der Aa zich ontwikkeld tot een echte vakman. Begonnen als leerling, 
                groeide hij uit tot een gespecialiseerde stucadoor die zowel traditionele 
                als moderne technieken beheerst.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-black mb-2">Vakmanschap</h3>
                <p className="text-gray-600 text-sm">Perfectie in elk detail</p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-black mb-2">Persoonlijk</h3>
                <p className="text-gray-600 text-sm">Meedenken met de klant</p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-black mb-2">Passie</h3>
                <p className="text-gray-600 text-sm">Liefde voor het vak</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMarcello;
