
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Contact
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Neem contact met ons op voor een vrijblijvende offerte of 
              persoonlijk advies voor uw project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">
                Stuur ons een bericht
              </h2>
              
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Voornaam
                        </label>
                        <Input placeholder="Uw voornaam" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Achternaam
                        </label>
                        <Input placeholder="Uw achternaam" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mailadres
                      </label>
                      <Input type="email" placeholder="uw@email.nl" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefoonnummer
                      </label>
                      <Input type="tel" placeholder="06 12345678" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Onderwerp
                      </label>
                      <Input placeholder="Waarover gaat uw vraag?" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bericht
                      </label>
                      <Textarea 
                        placeholder="Vertel ons meer over uw project..."
                        className="min-h-32"
                      />
                    </div>
                    
                    <Button size="lg" className="w-full">
                      Verstuur bericht
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-8">
                  Contactgegevens
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Telefoon</h3>
                      <p className="text-gray-600">+31 6 12345678</p>
                      <p className="text-sm text-gray-500">Ma-vr 8:00-17:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">E-mail</h3>
                      <p className="text-gray-600">info@mvdaa-stucadoor.nl</p>
                      <p className="text-sm text-gray-500">Binnen 24 uur reactie</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Locatie</h3>
                      <p className="text-gray-600">Utrecht, Nederland</p>
                      <p className="text-sm text-gray-500">Werkzaam in heel Nederland</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Openingstijden</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Maandag - Vrijdag: 8:00 - 17:00</p>
                        <p>Zaterdag: 9:00 - 15:00</p>
                        <p>Zondag: Gesloten</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Gratis offerte</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Bel ons voor een gratis offerte op locatie. 
                    Wij komen graag bij u langs om uw project te bespreken.
                  </p>
                  <Button className="w-full">
                    <Phone className="mr-2" size={16} />
                    Bel nu
                  </Button>
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

export default Contact;
