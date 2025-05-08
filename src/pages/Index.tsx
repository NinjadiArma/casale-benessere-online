
import { Link } from 'react-router-dom';
import { Heart, Book, Flower } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="hero-section relative py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-theme-teal mb-6">
              Virginia Casale
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif text-theme-mauve mb-6">
              Psicologa e Psicoterapeuta ad orientamento analitico
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              Un approccio fondato sull'ascolto, l'empatia e il profondo rispetto per la storia di ogni persona.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-theme-teal hover:bg-theme-sage text-white"
              >
                <Link to="/contatti">
                  Prenota una consulenza
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-theme-mauve text-theme-mauve hover:bg-theme-mauve hover:text-white"
              >
                <Link to="/servizi">
                  Scopri i miei servizi
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#ffffff">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Chi Sono Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif font-medium text-theme-teal mb-6">Chi Sono</h2>
              <p className="text-gray-700 mb-4">
                Sono una psicologa e psicoterapeuta ad orientamento analitico con oltre 20 anni di esperienza, 
                specializzata nel trattamento di adulti, adolescenti, bambini e coppie.
              </p>
              <p className="text-gray-700 mb-6">
                Il mio approccio clinico è profondamente radicato nell'ascolto, nell'empatia e nel rispetto della 
                storia personale di ciascuno. La mia formazione comprende esperienze in carceri, strutture 
                psichiatriche, scuole e centri per anziani.
              </p>
              <Button 
                asChild
                variant="outline" 
                className="border-theme-teal text-theme-teal hover:bg-theme-teal hover:text-white"
              >
                <Link to="/chi-sono">
                  Scopri di più su di me
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/lovable-uploads/b21f2471-3ac3-4f61-a72a-73629b80efe1.png" 
                alt="Virginia Casale" 
                className="rounded-lg shadow-xl w-full h-auto content-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ambiti di Intervento */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium text-theme-teal mb-4">Ambiti di Intervento</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Offro supporto psicologico per diverse problematiche, creando un ambiente sicuro e accogliente 
              in cui affrontare le difficoltà e trovare nuove prospettive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Heart className="h-12 w-12 text-theme-dusty-rose mb-4" />
                <h3 className="font-serif font-medium text-theme-teal text-lg mb-2">Ansia e Depressione</h3>
                <p className="text-gray-600">
                  Supporto per gestire stati d'ansia, attacchi di panico, depressione e disturbi dell'umore.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Flower className="h-12 w-12 text-theme-sage mb-4" />
                <h3 className="font-serif font-medium text-theme-teal text-lg mb-2">Trauma e Lutto</h3>
                <p className="text-gray-600">
                  Elaborazione di esperienze traumatiche e percorsi di accompagnamento nel processo di lutto.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Book className="h-12 w-12 text-theme-mauve mb-4" />
                <h3 className="font-serif font-medium text-theme-teal text-lg mb-2">Relazioni e Coppia</h3>
                <p className="text-gray-600">
                  Supporto per difficoltà relazionali, conflitti di coppia e problematiche sessuali.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button 
              asChild
              className="bg-theme-teal hover:bg-theme-sage text-white"
            >
              <Link to="/servizi">
                Tutti i servizi
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section 
        className="py-20 bg-theme-teal text-white relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(91, 140, 133, 0.9), rgba(91, 140, 133, 0.9)), url('/lovable-uploads/53a5b39c-687f-4ed9-ad8c-dda8cc3de173.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl italic font-serif mb-6">
              "Il percorso terapeutico è un viaggio verso la conoscenza di sé, un'opportunità 
              di trasformazione e crescita personale."
            </blockquote>
            <cite className="text-lg">— Virginia Casale</cite>
          </div>
        </div>
      </section>

      {/* Sedi */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium text-theme-teal mb-4">Dove Ricevo</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Ricevo su appuntamento nelle mie sedi di Torino, Pinerolo e Candiolo. È inoltre disponibile 
              il servizio di terapia a domicilio per chi ha difficoltà a spostarsi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="font-serif font-medium text-theme-teal text-lg mb-2">Torino</h3>
                <p className="text-gray-600 mb-4">
                  Via Esempio, 123<br />
                  10100 Torino (TO)
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-theme-teal text-theme-teal hover:bg-theme-teal hover:text-white"
                >
                  <Link to="/contatti">Contattami</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="font-serif font-medium text-theme-teal text-lg mb-2">Pinerolo</h3>
                <p className="text-gray-600 mb-4">
                  Via Esempio, 456<br />
                  10064 Pinerolo (TO)
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-theme-teal text-theme-teal hover:bg-theme-teal hover:text-white"
                >
                  <Link to="/contatti">Contattami</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="font-serif font-medium text-theme-teal text-lg mb-2">Candiolo</h3>
                <p className="text-gray-600 mb-4">
                  Via Esempio, 789<br />
                  10060 Candiolo (TO)
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-theme-teal text-theme-teal hover:bg-theme-teal hover:text-white"
                >
                  <Link to="/contatti">Contattami</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-theme-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-medium text-theme-teal mb-6">
              Pronto ad iniziare il tuo percorso di benessere?
            </h2>
            <p className="text-gray-700 mb-8">
              Il primo passo è sempre il più importante. Contattami per fissare una prima consulenza e 
              parlare delle tue esigenze in un ambiente sicuro e accogliente.
            </p>
            <Button 
              asChild
              className="bg-theme-teal hover:bg-theme-sage text-white"
            >
              <Link to="/contatti">
                Prenota una consulenza
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
