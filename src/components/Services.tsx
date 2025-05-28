
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: "Traditioneel Stucwerk",
    description: "Klassieke stuctechnieken voor een tijdloze uitstraling",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Moderne Afbouw",
    description: "Eigentijdse afbouwtechnieken en materialen",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Decoratieve Technieken",
    description: "Speciale decoratieve afwerking voor unieke projecten",
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={servicesRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Onze Diensten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van traditioneel stucwerk tot moderne afbouwtechnieken - 
            wij bieden de volledige service voor uw project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button variant="outline" className="w-full">
                  Meer informatie
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
