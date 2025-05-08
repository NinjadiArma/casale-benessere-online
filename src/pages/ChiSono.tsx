
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const ChiSono = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-theme-cream py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-theme-teal mb-6 text-center">
            Chi Sono
          </h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Psicologa e psicoterapeuta ad orientamento analitico con oltre 20 anni di esperienza professionale
            </p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/lovable-uploads/072369a7-7f15-425f-b283-8a9468b221c0.png" 
                alt="Virginia Casale" 
                className="rounded-lg shadow-xl content-image mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-medium text-theme-teal mb-6">Virginia Casale</h2>
              <p className="text-gray-700 mb-4">
                Sono Virginia Casale, psicologa e psicoterapeuta con formazione psicoanalitica, con sede a Torino, Pinerolo e Candiolo.
                Da oltre 20 anni accompagno adulti, adolescenti, bambini e coppie in percorsi di crescita personale e benessere psicologico.
              </p>
              <p className="text-gray-700 mb-4">
                Il mio approccio clinico è profondamente radicato nell'ascolto, nell'empatia e nel rispetto della storia personale 
                di ciascun individuo. Ogni persona che incontro nel mio studio porta con sé un bagaglio unico di esperienze, 
                e il mio obiettivo è creare uno spazio sicuro in cui queste possano emergere ed essere elaborate.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-medium text-theme-teal mb-6">Il mio percorso</h3>
            <p className="text-gray-700 mb-4">
              La mia formazione professionale è arricchita da esperienze in diversi contesti clinici: ho lavorato in carceri, strutture 
              psichiatriche, scuole e centri per anziani, affrontando problematiche complesse e sviluppando un approccio terapeutico 
              flessibile e personalizzato.
            </p>
            <p className="text-gray-700 mb-4">
              Oltre all'attività clinica, ho esperienza nell'insegnamento in ambito aziendale e scolastico, e offro supervisione 
              professionale a operatori sanitari e sociali a rischio di burnout.
            </p>
            <p className="text-gray-700 mb-8">
              Credo fermamente nel valore della formazione continua e dell'aggiornamento professionale, per questo partecipo regolarmente 
              a corsi di perfezionamento e congressi, al fine di offrire ai miei pazienti interventi basati sulle più recenti evidenze 
              scientifiche.
            </p>

            <h3 className="text-2xl font-serif font-medium text-theme-teal mb-6">Le mie aree di specializzazione</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
              <li>Disturbi d'ansia e attacchi di panico</li>
              <li>Depressione e disturbi dell'umore</li>
              <li>Disturbi legati all'uso di sostanze</li>
              <li>Difficoltà sessuali</li>
              <li>Elaborazione del lutto</li>
              <li>Trauma</li>
              <li>Problematiche relazionali</li>
              <li>Supporto alla genitorialità</li>
              <li>Disturbi del comportamento alimentare</li>
            </ul>

            <h3 className="text-2xl font-serif font-medium text-theme-teal mb-6">Formazione e titoli</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
              <li>Laurea in Psicologia - Università degli Studi di Torino</li>
              <li>Specializzazione in Psicoterapia ad orientamento analitico</li>
              <li>Iscrizione all'Albo degli Psicologi del Piemonte n° XXXX</li>
              <li>Master in Psicologia Clinica</li>
              <li>Formazione specifica in Musicoterapia</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section 
        className="py-20 bg-theme-mauve text-white relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(155, 126, 157, 0.9), rgba(155, 126, 157, 0.9)), url('/lovable-uploads/f049ad1b-fea6-42ae-9a3c-92e2650b86ec.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl italic font-serif mb-6">
              "La terapia è un viaggio che facciamo insieme. Io non ho tutte le risposte, 
              ma posso aiutarti a trovare le tue."
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
              Vuoi conoscere meglio i miei servizi?
            </h2>
            <p className="text-gray-700 mb-8">
              Scopri tutti i servizi che offro e come posso aiutarti nel tuo percorso di benessere psicologico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-theme-teal hover:bg-theme-sage text-white"
              >
                <Link to="/servizi">
                  Scopri i miei servizi
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

export default ChiSono;
