
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { useState } from 'react';

const ComeLavoro = () => {
  const [openSection1, setOpenSection1] = useState(false);
  const [openSection2, setOpenSection2] = useState(false);
  const [openSection3, setOpenSection3] = useState(false);
  const [openSection4, setOpenSection4] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-theme-cream py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-theme-teal mb-6 text-center">
            Come Lavoro
          </h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              La mia <strong>modalità di lavoro</strong> e la mia idea di <strong>Psicoanalisi</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-8">
              Nelle pagine seguenti trovate alcuni spunti per approfondire la mia <strong>modalità di lavoro</strong> e la mia idea di <strong>Psicoanalisi</strong>
            </p>

            <div className="space-y-6 mb-12">
              <Collapsible 
                open={openSection1} 
                onOpenChange={setOpenSection1}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full p-6 bg-theme-cream hover:bg-theme-cream/80 transition-colors">
                  <div className="flex items-center">
                    <BookOpen className="mr-3 text-theme-teal" size={20} />
                    <h3 className="text-xl font-serif font-medium text-theme-teal text-left">
                      Che cosa significa <strong>guarire</strong>?
                    </h3>
                  </div>
                  {openSection1 ? 
                    <ChevronUp className="text-theme-teal" size={20} /> : 
                    <ChevronDown className="text-theme-teal" size={20} />
                  }
                </CollapsibleTrigger>
                <CollapsibleContent className="p-6 bg-white">
                  <p className="text-gray-700">
                    Per la medicina si è sempre trattato di compensare una <strong>mancanza</strong> o un <strong>eccesso</strong>...
                  </p>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible 
                open={openSection2} 
                onOpenChange={setOpenSection2}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full p-6 bg-theme-cream hover:bg-theme-cream/80 transition-colors">
                  <div className="flex items-center">
                    <BookOpen className="mr-3 text-theme-teal" size={20} />
                    <h3 className="text-xl font-serif font-medium text-theme-teal text-left">
                      Come opera la <strong>Psicoanalisi</strong>?
                    </h3>
                  </div>
                  {openSection2 ? 
                    <ChevronUp className="text-theme-teal" size={20} /> : 
                    <ChevronDown className="text-theme-teal" size={20} />
                  }
                </CollapsibleTrigger>
                <CollapsibleContent className="p-6 bg-white">
                  <p className="text-gray-700">
                    LA <strong>PSICOANALISI</strong>, misurandosi quotidianamente con <strong>disagi</strong> tradizionali e nuovi, si fonda sul <strong>desiderio</strong> di ricollegare il <strong>soggetto</strong> con il suo <strong>inconscio</strong>....
                  </p>
                </CollapsibleContent>
              </Collapsible>

              <div className="my-10 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/c7a68cfe-4478-4d69-9fb6-9b61b16541fb.png" 
                  alt="prova immagine" 
                  className="rounded-lg shadow-md max-w-full md:max-w-lg"
                />
                <p className="text-sm text-gray-500 mt-2 italic">prova immagine</p>
              </div>

              <Collapsible 
                open={openSection3} 
                onOpenChange={setOpenSection3}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full p-6 bg-theme-cream hover:bg-theme-cream/80 transition-colors">
                  <div className="flex items-center">
                    <BookOpen className="mr-3 text-theme-teal" size={20} />
                    <h3 className="text-xl font-serif font-medium text-theme-teal text-left">
                      Caratteristiche <strong>principali</strong> del mio Orientamento
                    </h3>
                  </div>
                  {openSection3 ? 
                    <ChevronUp className="text-theme-teal" size={20} /> : 
                    <ChevronDown className="text-theme-teal" size={20} />
                  }
                </CollapsibleTrigger>
                <CollapsibleContent className="p-6 bg-white">
                  <p className="text-gray-700">
                    L'<strong>orientamento teorico</strong> che guida ormai da alcuni anni il mio lavoro di psicologa...
                  </p>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible 
                open={openSection4} 
                onOpenChange={setOpenSection4}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full p-6 bg-theme-cream hover:bg-theme-cream/80 transition-colors">
                  <div className="flex items-center">
                    <BookOpen className="mr-3 text-theme-teal" size={20} />
                    <h3 className="text-xl font-serif font-medium text-theme-teal text-left">
                      Alcuni spunti di <strong>Lettura</strong>
                    </h3>
                  </div>
                  {openSection4 ? 
                    <ChevronUp className="text-theme-teal" size={20} /> : 
                    <ChevronDown className="text-theme-teal" size={20} />
                  }
                </CollapsibleTrigger>
                <CollapsibleContent className="p-6 bg-white">
                  <p className="text-gray-700">
                    Per chi ha <strong>voglia</strong> e <strong>tempo</strong> di leggere...
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-theme-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-medium text-theme-teal mb-6">
              Vuoi scoprire di più sui miei servizi?
            </h2>
            <p className="text-gray-700 mb-8">
              Esplora i servizi che offro e scopri come posso aiutarti nel tuo <strong>percorso di benessere</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-theme-teal hover:bg-theme-sage text-white"
              >
                <Link to="/servizi">
                  Scopri i servizi
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-theme-mauve text-theme-mauve hover:bg-theme-mauve hover:text-white"
              >
                <Link to="/contatti">
                  Contattami
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComeLavoro;
