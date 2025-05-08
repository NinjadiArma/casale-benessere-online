
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
              Psicologa e psicoterapeuta ad orientamento <strong>analitico</strong> con oltre <strong>20 anni di esperienza</strong> professionale
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
                Sono Virginia Casale, <strong>psicologa e psicoterapeuta</strong> con formazione <strong>psicoanalitica</strong>, con sede a <strong>Torino, Pinerolo e Candiolo</strong>.
                Da oltre <strong>20 anni</strong> accompagno <strong>adulti, adolescenti, bambini e coppie</strong> in percorsi di crescita personale e <strong>benessere psicologico</strong>.
              </p>
              <p className="text-gray-700 mb-4">
                Il mio approccio clinico è profondamente radicato nell'<strong>ascolto</strong>, nell'<strong>empatia</strong> e nel <strong>rispetto</strong> della storia personale 
                di ciascun individuo. Ogni persona che incontro nel mio studio porta con sé un bagaglio unico di esperienze, 
                e il mio obiettivo è creare uno <strong>spazio sicuro</strong> in cui queste possano emergere ed essere elaborate.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-medium text-theme-teal mb-6">Il mio percorso formativo</h3>
            <p className="text-gray-700 mb-4">
              Dopo essermi diplomata presso il liceo classico S.Giuseppe di Rivoli, ho conseguito la <strong>laurea</strong> presso la facoltà di <strong>Psicologia a Torino</strong> nel 1999.
            </p>
            <p className="text-gray-700 mb-4">
              Mi sono poi <strong>specializzata</strong> in psicoterapia ad <strong>indirizzo psicoanalitico</strong> presso l'<strong>Istituto Freudiano di Roma</strong>.
            </p>
            
            <h3 className="text-2xl font-serif font-medium text-theme-teal mb-6 mt-8">Esperienze di volontariato</h3>
            <p className="text-gray-700 mb-4">
              Durante il periodo universitario mi sono occupata di colloqui di <strong>sostegno</strong> per soggetti detenuti presso la casa circondariale delle Vallette di Torino e ho fatto parte dei Gruppi di volontariato Vincenziano di Torino dove offrivo aiuto a persone senza fissa dimora, sole, con problemi psichici.
            </p>
            <p className="text-gray-700 mb-4">
              Sono state entrambe esperienze per me estremamente <strong>ricche</strong> ed <strong>importanti</strong> dal punto di vista umano e relazionale.
            </p>
            <p className="text-gray-700 mb-4">
              Sono state soprattutto due esperienze che mi hanno portato a riflettere sul grande valore dell'<strong>ascolto dell'altro</strong>, del <strong>rispetto per la persona</strong> e che mi hanno fortemente avvicinato alla <strong>sofferenza</strong>, alla <strong>solitudine</strong>, al <strong>disagio mentale</strong>.
            </p>

            <h3 className="text-2xl font-serif font-medium text-theme-teal mb-6 mt-8">Esperienza professionale</h3>
            <p className="text-gray-700 mb-4">
              Dopo la laurea ho lavorato nell'ambito delle <strong>tossicodipendenze</strong>: sono stata operatrice in un centro residenziale per tossicodipendenti di Leinì per la Coop. Animazione Valdocco.
              Esperienza per me molto forte, impegnativa e dal valore umano ineguagliabile.
            </p>
            <p className="text-gray-700 mb-4">
              Ho lavorato ad Orbassano in un centro diurno per utenti tossicodipendenti.
            </p>
            <p className="text-gray-700 mb-4">
              Ho maturato esperienza in ambito <strong>psichiatrico</strong> presso un centro diurno di Rivalta.
            </p>
            <p className="text-gray-700 mb-4">
              Ho svolto negli anni successivi attività di sostegno e supporto a soggetti con <strong>handicap fisico, intellettivo e psichico</strong> presso alcune scuole elementari, medie e istituti superiori del Comune di Torino.
            </p>

            <div className="my-10 flex justify-center">
              <img 
                src="/lovable-uploads/53a5b39c-687f-4ed9-ad8c-dda8cc3de173.png" 
                alt="Dipinto di Donna che odora Rose" 
                className="rounded-lg shadow-md max-w-full md:max-w-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center italic">Dipinto di Donna che odora Rose</p>
            </div>

            <p className="text-gray-700 mb-4">
              Per diversi anni, oltre all'attività di psicologa-psicoterapeuta in Torino, Pinerolo, Candiolo, ho svolto anche attività di <strong>docenza</strong> presso alcuni enti formativi di Torino e Milano.
            </p>
            <p className="text-gray-700 mb-4">
              Mi sono occupata di <strong>formazione</strong> in ambito psicologico per operatori sanitari e per soggetti con disabilità di vario genere.
            </p>
            <p className="text-gray-700 mb-4">
              Per alcune aziende (Giordano Vini, Eataly) ho svolto attività di docenza sulla <strong>comunicazione/relazione</strong> con il cliente per operatori call-center e per addetti ai servizi enogastronomici.
            </p>
            <p className="text-gray-700 mb-4">
              Mi sono occupata di <strong>orientamento</strong> per neolaureati in cerca di prima occupazione.
            </p>
            <p className="text-gray-700 mb-4">
              Per un Ente formativo di Torino (ENGIM) ho svolto per anni attività di <strong>sostegno psicologico</strong> per genitori di ragazzi in fascia adolescenziale (14-18 anni): sostegno individuale e gruppi di incontro.
            </p>
            <p className="text-gray-700 mb-4">
              Ho lavorato anche come coordinatrice stage e orientatrice per l'Ente formativo Casa di Carità Arti e Mestieri di Torino.
            </p>
            <p className="text-gray-700 mb-4">
              Per alcuni anni ho svolto l'attività di psicologa presso alcune strutture per <strong>anziani</strong> (Vinovo, Piobesi Torinese, Grana (AT) e Rocchetta Tanaro) dove mi sono occupata di sostegno agli ospiti, ai loro familiari e al personale.
            </p>
            <p className="text-gray-700 mb-8">
              In ambito clinico/privato mi occupo di <strong>bambini, adolescenti, adulti</strong> e di <strong>terapia di coppia</strong>: tratto il <strong>disagio mentale</strong>, <strong>depressioni</strong>, <strong>ansie</strong>, disturbi legati a uso di <strong>sostanze</strong>, difficoltà nella sfera <strong>sessuale</strong>, difficoltà legate a <strong>separazioni</strong>, <strong>lutti</strong>.
            </p>

            <h3 className="text-2xl font-serif font-medium text-theme-teal mb-6">Le mie aree di specializzazione</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
              <li><strong>Disturbi d'ansia</strong> e attacchi di panico</li>
              <li><strong>Depressione</strong> e disturbi dell'umore</li>
              <li>Disturbi legati all'uso di <strong>sostanze</strong></li>
              <li>Difficoltà <strong>sessuali</strong></li>
              <li>Elaborazione del <strong>lutto</strong></li>
              <li><strong>Trauma</strong></li>
              <li>Problematiche <strong>relazionali</strong></li>
              <li>Supporto alla <strong>genitorialità</strong></li>
              <li>Disturbi del <strong>comportamento alimentare</strong></li>
            </ul>

            <h3 className="text-2xl font-serif font-medium text-theme-teal mb-6">Formazione e titoli</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
              <li><strong>Laurea in Psicologia</strong> - Università degli Studi di Torino (1999)</li>
              <li><strong>Specializzazione in Psicoterapia</strong> ad orientamento psicoanalitico - Istituto Freudiano di Roma</li>
              <li>Iscrizione all'<strong>Albo degli Psicologi</strong> del Piemonte n° XXXX</li>
              <li>Formazione specifica in <strong>Musicoterapia</strong></li>
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
              "La terapia è un <strong>viaggio</strong> che facciamo insieme. Io non ho tutte le risposte, 
              ma posso aiutarti a trovare le <strong>tue</strong>."
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
              Scopri tutti i servizi che offro e come posso aiutarti nel tuo percorso di <strong>benessere psicologico</strong>.
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
              <Button 
                asChild
                variant="outline" 
                className="border-theme-teal text-theme-teal hover:bg-theme-teal hover:text-white"
              >
                <Link to="/come-lavoro">
                  Come Lavoro
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
