
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, MapPin, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const projectData = {
  1: {
    title: "Villa Moderne Stuc",
    category: "Renovatie",
    year: "2024",
    location: "Utrecht",
    client: "Particulier",
    description: "Een complete renovatie van een luxe villa waarbij moderne stuctechnieken zijn toegepast voor een eigentijdse uitstraling. Het project omvatte zowel binnen- als buitenstuc met speciale aandacht voor detail en afwerking.",
    challenge: "De uitdaging was om de historische charme van de villa te behouden terwijl moderne technieken werden toegepast.",
    solution: "Door gebruik te maken van traditionele technieken gecombineerd met moderne materialen hebben we een perfecte balans gevonden.",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id as keyof typeof projectData] || projectData[1];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projecten">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2" size={16} />
              Terug naar projecten
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="aspect-video rounded-xl overflow-hidden mb-8">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {project.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-4">De Uitdaging</h3>
                    <p className="text-gray-600">{project.challenge}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-4">Onze Oplossing</h3>
                    <p className="text-gray-600">{project.solution}</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 className="text-3xl font-bold text-black mb-8">Project Galerij</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${project.title} foto ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black mb-6">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="text-gray-400" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">Jaar</p>
                        <p className="font-semibold">{project.year}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-gray-400" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">Locatie</p>
                        <p className="font-semibold">{project.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <User className="text-gray-400" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">Opdrachtgever</p>
                        <p className="font-semibold">{project.client}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-4">
                      Geïnteresseerd in een vergelijkbaar project?
                    </p>
                    <Link to="/contact">
                      <Button className="w-full">
                        Vraag offerte aan
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
