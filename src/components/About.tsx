
import { useEffect, useRef } from 'react';
import { Award, Users, Clock } from 'lucide-react';

const About = () => {
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
    <section ref={aboutRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Waarom kiezen voor MvDAa?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Met jarenlange ervaring en passie voor vakmanschap leveren wij topkwaliteit 
            stucwerk en afbouw voor zowel particulieren als bedrijven.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Vakmanschap</h3>
            <p className="text-gray-600">
              Elk project wordt uitgevoerd met de hoogste kwaliteit en aandacht voor detail. 
              Uw tevredenheid is onze garantie.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Betrouwbaar</h3>
            <p className="text-gray-600">
              Afspraken zijn afspraken. Wij leveren op tijd en binnen budget, 
              zonder concessies aan kwaliteit.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Persoonlijk</h3>
            <p className="text-gray-600">
              Van advies tot oplevering - wij denken mee en zorgen voor een 
              persoonlijke aanpak die bij u past.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
