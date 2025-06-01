
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Fotos from '@/img/Toilet.png';


const projects = [
  {
    id: 1,
    title: "Toilet ruimte",
    description: "In dit project hebben we een verouderde toiletruimte omgetoverd tot een strakke, moderne ruimte. De muren zijn vakkundig gestuukt voor een egaal en naadloos resultaat, wat direct zorgt voor een frisse en luxueuze uitstraling. Dankzij het strakke stucwerk komt het sanitair optimaal tot zijn recht en vormt de ruimte een harmonieus geheel. Perfect als onderdeel van een grotere renovatie of als stijlvolle upgrade van een bestaand interieur.",
    image: Fotos,
    category: "Renovatie",
    year: "2024"
  },
  {
    id: 2,
    title: "Kantoorpand Afbouw",
    description: "Professionele afbouw voor moderne zakelijke ruimtes",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Commercieel",
    year: "2024"
  },
  {
    id: 3,
    title: "Decoratief Stucwerk",
    description: "Artistieke decoratieve technieken voor unieke wandafwerking",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Decoratief",
    year: "2023"
  },
  {
    id: 4,
    title: "Woonhuis Restauratie",
    description: "Restauratie van historisch stucwerk in monumentaal pand",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Restauratie",
    year: "2023"
  },
  {
    id: 5,
    title: "Nieuwbouw Appartement",
    description: "Complete stuc- en afbouwwerkzaamheden nieuwbouwproject",
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Nieuwbouw",
    year: "2023"
  },
  {
    id: 6,
    title: "Boutique Hotel",
    description: "Luxe afwerking voor exclusief boutique hotel",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Commercieel",
    year: "2022"
  }
];

const categories = ["Alle", "Renovatie", "Commercieel", "Decoratief", "Restauratie", "Nieuwbouw"];

const Projecten = () => {
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const filteredProjects = selectedCategory === "Alle" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Onze Projecten
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek onze mooiste stuc- en afbouwprojecten. Van traditioneel 
              stucwerk tot moderne afbouwtechnieken.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">{project.category}</span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <Link to={`/project/${project.id}`}>
                    <Button variant="outline" className="w-full">
                      Bekijk project
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projecten;
