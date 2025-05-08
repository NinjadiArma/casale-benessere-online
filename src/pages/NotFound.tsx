
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-theme-cream px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold font-serif text-theme-teal mb-6">404</h1>
        <p className="text-2xl font-serif text-gray-700 mb-6">Pagina non trovata</p>
        <p className="text-lg text-gray-600 mb-8">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Button asChild className="bg-theme-teal hover:bg-theme-sage text-white">
          <Link to="/">Torna alla Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
