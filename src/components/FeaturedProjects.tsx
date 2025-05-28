
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const featuredProjects = [
  {
    id: 1,
    title: "Villa Moderne Stuc",
    description: "Complete renovatie met moderne stuctechnieken",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Renovatie"
  },
  {
    id: 2,
    title: "Kantoorpand Afbouw",
    description: "Professionele afbouw voor zakelijke ruimtes",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Commercieel"
  },
  {
    id: 3,
    title: "Decoratief Stucwerk",
    description: "Artistieke decoratieve technieken",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Decoratief"
  }
];

const FeaturedProjects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={projectsRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Uitgelichte Projecten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Een selectie van onze mooiste projecten die onze kwaliteit en 
            vakmanschap demonstreren.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <Link to={`/project/${project.id}`}>
                  <Button variant="outline" className="w-full group">
                    Bekijk project
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projecten">
            <Button size="lg" className="group">
              Alle projecten bekijken
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
