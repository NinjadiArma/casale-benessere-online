
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-theme-teal text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium font-serif mb-4">Virginia Casale</h3>
            <p className="mb-2">Psicologa e psicoterapeuta ad orientamento analitico</p>
            <p className="italic">Un approccio umano per accompagnarti nel tuo percorso di benessere</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium font-serif mb-4">Sedi e Contatti</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Torino, Pinerolo, Candiolo</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <p>+39 XXX XXX XXXX</p>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <p>virginia.casale@esempio.it</p>
              </li>
              <li className="flex items-center">
                <Clock size={20} className="mr-2 flex-shrink-0" />
                <p>Su appuntamento</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium font-serif mb-4">Collegamenti Rapidi</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/chi-sono" className="hover:underline">Chi Sono</Link>
              </li>
              <li>
                <Link to="/servizi" className="hover:underline">Servizi</Link>
              </li>
              <li>
                <Link to="/come-lavoro" className="hover:underline">Come Lavoro</Link>
              </li>
              <li>
                <Link to="/contatti" className="hover:underline">Contatti</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/30 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} - Dr.ssa Virginia Casale - Tutti i diritti riservati</p>
          <p className="mt-1">P.IVA: XXXXXXXXXX - Iscrizione all'Albo degli Psicologi N° XXXX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
