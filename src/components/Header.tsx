
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h2 className="text-theme-teal font-serif text-2xl font-medium">Virginia Casale</h2>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-theme-teal font-medium transition-colors">
              Home
            </Link>
            <Link to="/chi-sono" className="text-gray-700 hover:text-theme-teal font-medium transition-colors">
              Chi Sono
            </Link>
            <Link to="/servizi" className="text-gray-700 hover:text-theme-teal font-medium transition-colors">
              Servizi
            </Link>
            <Link to="/contatti" className="text-gray-700 hover:text-theme-teal font-medium transition-colors">
              Contatti
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-theme-teal">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 space-y-3">
            <Link 
              to="/"
              className="block text-gray-700 hover:text-theme-teal font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/chi-sono"
              className="block text-gray-700 hover:text-theme-teal font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Chi Sono
            </Link>
            <Link 
              to="/servizi"
              className="block text-gray-700 hover:text-theme-teal font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Servizi
            </Link>
            <Link 
              to="/contatti"
              className="block text-gray-700 hover:text-theme-teal font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contatti
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
