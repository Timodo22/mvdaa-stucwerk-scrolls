
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Mock project data - in a real app this would come from an API
const projects = {
  1: {
    id: 1,
    title: "Moderne Villa Renovatie",
    location: "Utrecht",
    date: "2024",
    description: "Complete renovatie van een moderne villa inclusief stucwerk en afbouw van alle wanden en plafonds.",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  2: {
    id: 2,
    title: "Kantoorpand Amsterdam",
    location: "Amsterdam",
    date: "2024",
    description: "Professionele afbouw van een modern kantoorpand met decoratieve stuctechnieken.",
    images: [
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  3: {
    id: 3,
    title: "Luxe Penthouse",
    location: "Den Haag",
    date: "2023",
    description: "Exclusieve afwerking van een luxe penthouse met traditionele stuctechnieken.",
    images: [
      "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id || '1');
  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Project niet gevonden</h1>
          <Link to="/projecten">
            <Button>Terug naar projecten</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projecten" className="inline-flex items-center text-gray-600 hover:text-black mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Terug naar projecten
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h1 className="text-5xl font-bold text-black mb-6">{project.title}</h1>
              <div className="flex items-center space-x-6 mb-6 text-gray-600">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  {project.location}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {project.date}
                </div>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">{project.description}</p>
            </div>

            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={project.images[0]} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Projectfoto's</h2>
            
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.slice(1).map((image, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-video">
                    <img 
                      src={image} 
                      alt={`${project.title} - foto ${index + 2}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Card>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.slice(1).map((image, index) => (
                    <CarouselItem key={index}>
                      <Card className="overflow-hidden">
                        <div className="aspect-video">
                          <img 
                            src={image} 
                            alt={`${project.title} - foto ${index + 2}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Geïnteresseerd in een soortgelijk project?
            </h3>
            <p className="text-gray-600 mb-6">
              Neem contact met ons op voor een vrijblijvende offerte
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                Contact opnemen
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
