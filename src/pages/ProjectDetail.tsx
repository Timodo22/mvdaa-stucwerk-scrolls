
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import fotos from '@/img/Toilet.png'
import fotos1 from '@/img/Toilet2.png'
import fotos2 from '@/img/Toilet3.png'
import fotos3 from '@/img/Toilet4.png'


// Mock project data - in a real app this would come from an API
const projects = {
  1: {
    id: 1,
    title: "Toilet ruimte",
    location: "Nuenen",
    date: "2024",
    description: "In dit project hebben we een verouderde toiletruimte omgetoverd tot een strakke, moderne ruimte. De muren zijn vakkundig gestuukt voor een egaal en naadloos resultaat, wat direct zorgt voor een frisse en luxueuze uitstraling. Dankzij het strakke stucwerk komt het sanitair optimaal tot zijn recht en vormt de ruimte een harmonieus geheel. Perfect als onderdeel van een grotere renovatie of als stijlvolle upgrade van een bestaand interieur.",
    images: [
      fotos,
      fotos1,
      fotos2,
      fotos3,
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
          <Link to="/projecten" className="inline-flex items-center text-gray-600 hover:text-black mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Terug naar projecten
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">{project.title}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 mb-6 text-gray-600">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  {project.location}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {project.date}
                </div>
              </div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">{project.description}</p>
            </div>

            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={project.images[0]} 
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Creative Photo Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 text-center">Projectfoto's</h2>
            
            {/* Creative Mosaic Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
              {/* Large featured image */}
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300">
                <img 
                  src={project.images[1]} 
                  alt={`${project.title} - hoofdfoto`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Top right small image */}
              <div className="col-span-2 md:col-span-1 rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={project.images[2]} 
                  alt={`${project.title} - detail 1`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Right middle image */}
              <div className="col-span-2 md:col-span-1 rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={project.images[3]} 
                  alt={`${project.title} - detail 2`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Bottom wide image */}
              <div className="col-span-2 rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={project.images[4]} 
                  alt={`${project.title} - overzicht`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
              Geïnteresseerd in een soortgelijk project?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
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
