
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Book, Flower, HeartPulse, GraduationCap, Home, Briefcase, Headphones, Clock } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from 'react';

const Servizi = () => {
  const [isOpenDomicilio, setIsOpenDomicilio] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-theme-cream py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-theme-teal mb-6 text-center">
            Servizi
          </h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              In base ai disagi, alle difficoltà, alle esigenze che il paziente porta, possiamo concordare insieme il servizio più adatto.
            </p>
          </div>
        </div>
      </section>

      {/* Servizi Principali */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-medium text-theme-teal mb-6 text-center">I miei servizi</h2>
            <p className="text-gray-700 mb-4 text-center">
              Offro diversi servizi terapeutici, studiati per rispondere alle esigenze specifiche di ogni paziente.
              Tutti i percorsi iniziano con un primo colloquio conoscitivo, per comprendere le tue necessità
              e definire insieme il percorso più adatto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Heart className="h-10 w-10 text-theme-dusty-rose mr-4" />
                  <h3 className="font-serif font-medium text-theme-teal text-xl">Psicoterapia Individuale</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Percorsi personalizzati per bambini, adolescenti e adulti, volti ad affrontare diverse problematiche:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
                  <li>Disturbi alimentari</li>
                  <li>Dipendenze da sostanze</li>
                  <li>Disturbi sessuali</li>
                  <li>Ansia e attacchi di panico</li>
                  <li>Depressione</li>
                  <li>Difficoltà scolastiche</li>
                  <li>Elaborazione di un grave lutto</li>
                  <li>Traumi post-separazione/divorzio</li>
                </ul>
                <p className="text-gray-700 italic mb-4">
                  Le sedute hanno una durata di 50 minuti, con frequenza settimanale o quindicinale, 
                  in base alle necessità.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-10 w-10 text-theme-mauve mr-4" />
                  <h3 className="font-serif font-medium text-theme-teal text-xl">Terapia di Coppia</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Supporto per coppie che attraversano un momento di crisi e non riescono più a vivere una relazione appagante e serena:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
                  <li>Difficoltà comunicative</li>
                  <li>Conflitti ricorrenti</li>
                  <li>Problematiche sessuali</li>
                  <li>Crisi di coppia</li>
                  <li>Gestione di transizioni di vita (nascita di un figlio, pensionamento, ecc.)</li>
                  <li>Elaborazione di un tradimento</li>
                  <li>Accompagnamento alla separazione consapevole</li>
                </ul>
                <p className="text-gray-700 italic mb-4">
                  Le sedute hanno una durata di 60-75 minuti, con frequenza settimanale o quindicinale.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Home className="h-10 w-10 text-theme-sage mr-4" />
                  <h3 className="font-serif font-medium text-theme-teal text-xl">Psicoterapia a Domicilio</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Servizio dedicato a soggetti lungodegenti o persone con difficoltà a spostarsi da casa per motivi di salute o psicologici:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
                  <li>Anziani con limitata mobilità</li>
                  <li>Persone con disabilità</li>
                  <li>Pazienti in fase di convalescenza</li>
                  <li>Persone con disturbi d'ansia grave che impediscono l'uscita da casa</li>
                </ul>
                
                <Collapsible open={isOpenDomicilio} onOpenChange={setIsOpenDomicilio} className="border-t pt-4 mt-4">
                  <CollapsibleTrigger className="flex items-center text-theme-teal hover:underline font-medium">
                    {isOpenDomicilio ? "Mostra meno" : "Maggiori informazioni sul servizio a domicilio"}
                    <span className="ml-2">{isOpenDomicilio ? "↑" : "↓"}</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4">
                    <h4 className="font-medium text-theme-teal mb-2">Destinatari del servizio:</h4>
                    <p className="text-gray-700 mb-4">
                      Questo servizio di psicologia a domicilio è destinato soprattutto ad anziani soli, malati, non autosufficienti, che desiderano avere un sostegno, un aiuto dal punto di vista psicologico.
                    </p>
                    <p className="text-gray-700">
                      È destinato anche alle loro famiglie, che spesso si sentono abbandonate, impotenti, sofferenti.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
                <p className="text-gray-700 italic mt-4">
                  Il servizio è disponibile in aree selezionate nelle zone di Torino, Pinerolo e Candiolo.
                  Contattami per verificare la disponibilità nella tua zona.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-10 w-10 text-theme-dusty-rose mr-4" />
                  <h3 className="font-serif font-medium text-theme-teal text-xl">Supervisione Professionale</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Supervisione individuale e di gruppo per operatori nel campo del sociale a rischio di sindrome del burn-out (esaurimento psico-fisico):
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
                  <li>Prevenzione e gestione del burnout professionale</li>
                  <li>Miglioramento delle competenze relazionali</li>
                  <li>Sviluppo di strategie di coping efficaci</li>
                  <li>Supporto emotivo per operatori sanitari e sociali</li>
                </ul>
                <p className="text-gray-700 italic mb-4">
                  Disponibile anche per istituzioni e organizzazioni.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-medium text-theme-teal mb-6 text-center">Servizi Specializzati</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Headphones className="h-10 w-10 text-theme-mauve mr-4" />
                    <h3 className="font-serif font-medium text-theme-teal text-xl">Gruppi di Musicoterapia</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Gruppi terapeutici condotti in collaborazione con la dott.ssa Mancino Isabella, medico e musicoterapeuta:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                    <li>Con l'aiuto della musica e della parola ogni partecipante può trovare lo spazio per portare le proprie difficoltà, personali o lavorative</li>
                    <li>Facilitare l'espressione emotiva</li>
                    <li>Ridurre stress e ansia</li>
                    <li>Migliorare la socializzazione</li>
                  </ul>
                  <p className="text-gray-700 italic">
                    Non è necessaria alcuna competenza musicale per partecipare.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <HeartPulse className="h-10 w-10 text-theme-sage mr-4" />
                    <h3 className="font-serif font-medium text-theme-teal text-xl">Sostegno per Familiari</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Sostegno/Psicoterapia individuale e di gruppo per:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                    <li>Familiari di persone anziane, malate, oncologiche</li>
                    <li>Familiari che si trovano ad affrontare un lutto</li>
                    <li>Familiari di soggetti con handicap lieve, medio o grave</li>
                    <li>Caregivers che necessitano di supporto emotivo e strategie di gestione</li>
                  </ul>
                  <p className="text-gray-700 italic">
                    I gruppi offrono uno spazio di condivisione e apprendimento di strumenti adeguati per affrontare queste situazioni complesse.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-medium text-theme-teal mb-6 text-center">Il Percorso Terapeutico</h3>
            
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <ol className="space-y-6">
                <li className="flex">
                  <div className="bg-theme-teal text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-serif font-medium text-theme-teal mb-2">Primo colloquio</h4>
                    <p className="text-gray-700">
                      Un incontro conoscitivo per comprendere le tue esigenze, stabilire un'alleanza terapeutica 
                      e definire insieme gli obiettivi del percorso.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-theme-teal text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-serif font-medium text-theme-teal mb-2">Valutazione e pianificazione</h4>
                    <p className="text-gray-700">
                      Definizione del percorso più adatto alle tue esigenze, stabilendo modalità, frequenza e durata degli incontri.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-theme-teal text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-serif font-medium text-theme-teal mb-2">Percorso terapeutico</h4>
                    <p className="text-gray-700">
                      Sviluppo del percorso concordato, con periodiche verifiche dei progressi e adattamenti 
                      in base all'evoluzione delle tue esigenze.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-theme-teal text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-serif font-medium text-theme-teal mb-2">Conclusione</h4>
                    <p className="text-gray-700">
                      Graduale autonomia e conclusione del percorso quando gli obiettivi sono raggiunti, 
                      con possibilità di follow-up periodici.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section 
        className="py-20 bg-theme-teal text-white relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(91, 140, 133, 0.9), rgba(91, 140, 133, 0.9)), url('/lovable-uploads/c7a68cfe-4478-4d69-9fb6-9b61b16541fb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl italic font-serif mb-6">
              "Ogni percorso terapeutico è unico come unica è la persona che lo intraprende. 
              Il mio compito è accompagnarti con rispetto in questo viaggio."
            </blockquote>
            <cite className="text-lg">— Virginia Casale</cite>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-medium text-theme-teal mb-6">
              Hai domande sui miei servizi?
            </h2>
            <p className="text-gray-700 mb-8">
              Contattami per un primo colloquio conoscitivo o per ricevere maggiori informazioni 
              sui servizi offerti e sulle modalità di svolgimento.
            </p>
            <Button 
              asChild
              className="bg-theme-teal hover:bg-theme-sage text-white"
            >
              <Link to="/contatti">
                Contattami
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servizi;

