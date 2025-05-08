
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Book, Flower, HeartPulse, GraduationCap } from 'lucide-react';

const Servizi = () => {
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
              Percorsi personalizzati per il benessere psicologico di individui, coppie e gruppi
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
                  <h3 className="font-serif font-medium text-theme-teal text-xl">Terapia Individuale</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Percorsi personalizzati per adulti, adolescenti e bambini, volti ad affrontare diverse problematiche:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
                  <li>Disturbi d'ansia e attacchi di panico</li>
                  <li>Depressione e disturbi dell'umore</li>
                  <li>Disturbi legati all'uso di sostanze</li>
                  <li>Difficoltà sessuali</li>
                  <li>Elaborazione del lutto</li>
                  <li>Trauma</li>
                  <li>Bassa autostima</li>
                  <li>Disturbi del comportamento alimentare</li>
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
                  Supporto per coppie che affrontano diverse problematiche relazionali:
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
                  <Flower className="h-10 w-10 text-theme-sage mr-4" />
                  <h3 className="font-serif font-medium text-theme-teal text-xl">Terapia a Domicilio</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Servizio dedicato a pazienti con difficoltà di spostamento:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
                  <li>Anziani con limitata mobilità</li>
                  <li>Persone con disabilità</li>
                  <li>Pazienti in fase di convalescenza</li>
                  <li>Persone con disturbi d'ansia grave che impediscono l'uscita da casa</li>
                </ul>
                <p className="text-gray-700 italic mb-4">
                  Il servizio è disponibile in aree selezionate nelle zone di Torino, Pinerolo e Candiolo.
                  Contattami per verificare la disponibilità nella tua zona.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <HeartPulse className="h-10 w-10 text-theme-dusty-rose mr-4" />
                  <h3 className="font-serif font-medium text-theme-teal text-xl">Terapia di Gruppo</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Gruppi terapeutici dedicati a caregivers di persone con disabilità o malattie croniche:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
                  <li>Condivisione di esperienze e strategie di coping</li>
                  <li>Gestione dello stress e prevenzione del burnout</li>
                  <li>Supporto emotivo e riduzione del senso di isolamento</li>
                  <li>Equilibrio tra cura dell'altro e cura di sé</li>
                </ul>
                <p className="text-gray-700 italic mb-4">
                  I gruppi sono composti da 6-8 persone e si incontrano ogni due settimane, 
                  con sessioni di 90 minuti.
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
                    <Book className="h-10 w-10 text-theme-mauve mr-4" />
                    <h3 className="font-serif font-medium text-theme-teal text-xl">Gruppi di Musicoterapia</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    In collaborazione con un musicoterapeuta qualificato, conduco gruppi di musicoterapia per:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                    <li>Facilitare l'espressione emotiva</li>
                    <li>Ridurre stress e ansia</li>
                    <li>Migliorare la socializzazione</li>
                    <li>Sostenere il benessere psicologico</li>
                  </ul>
                  <p className="text-gray-700 italic">
                    Non è necessaria alcuna competenza musicale per partecipare.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <GraduationCap className="h-10 w-10 text-theme-sage mr-4" />
                    <h3 className="font-serif font-medium text-theme-teal text-xl">Supervisione Professionale</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Supervisione per operatori sanitari e sociali a rischio di burnout:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                    <li>Individuali o di gruppo</li>
                    <li>Prevenzione e gestione del burnout professionale</li>
                    <li>Miglioramento delle competenze relazionali</li>
                    <li>Sviluppo di strategie di coping efficaci</li>
                  </ul>
                  <p className="text-gray-700 italic">
                    Disponibile anche per istituzioni e organizzazioni.
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
