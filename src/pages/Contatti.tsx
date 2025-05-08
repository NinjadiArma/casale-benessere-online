
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contatti = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    nome: "",
    email: "",
    telefono: "",
    messaggio: "",
    submitted: false,
    loading: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, loading: true });
    
    // Simuliamo l'invio del messaggio
    setTimeout(() => {
      setFormState({
        nome: "",
        email: "",
        telefono: "",
        messaggio: "",
        submitted: true,
        loading: false,
      });
      
      toast({
        title: "Messaggio inviato!",
        description: "Grazie per avermi contattato. Ti risponderò al più presto.",
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-theme-cream py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-theme-teal mb-6 text-center">
            Contatti
          </h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Per prenotare un appuntamento o richiedere informazioni
            </p>
          </div>
        </div>
      </section>

      {/* Contatti e form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-medium text-theme-teal mb-8">Come contattarmi</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex">
                  <Phone size={24} className="text-theme-teal mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-medium text-gray-800 mb-1">Telefono</h3>
                    <p className="text-gray-700">+39 XXX XXX XXXX</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Lun-Ven: 9:00-19:00 | Sab: 9:00-13:00
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail size={24} className="text-theme-teal mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-medium text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-700">virginia.casale@esempio.it</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Risposta entro 24-48 ore lavorative
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock size={24} className="text-theme-teal mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-medium text-gray-800 mb-1">Orari</h3>
                    <p className="text-gray-700">
                      Ricevo su appuntamento nei seguenti giorni:
                    </p>
                    <ul className="text-gray-700 mt-1">
                      <li>Lunedì - Venerdì: 9:00 - 19:00</li>
                      <li>Sabato: 9:00 - 13:00</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-medium text-theme-teal mb-6">Sedi</h3>
              
              <div className="space-y-8">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin size={24} className="text-theme-teal mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-serif font-medium text-gray-800 mb-1">Torino</h3>
                        <p className="text-gray-700">Via Esempio, 123</p>
                        <p className="text-gray-700">10100 Torino (TO)</p>
                        <p className="text-sm text-gray-500 mt-1">
                          A 5 minuti dalla stazione di Porta Nuova
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin size={24} className="text-theme-teal mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-serif font-medium text-gray-800 mb-1">Pinerolo</h3>
                        <p className="text-gray-700">Via Esempio, 456</p>
                        <p className="text-gray-700">10064 Pinerolo (TO)</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Vicino alla piazza centrale
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin size={24} className="text-theme-teal mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-serif font-medium text-gray-800 mb-1">Candiolo</h3>
                        <p className="text-gray-700">Via Esempio, 789</p>
                        <p className="text-gray-700">10060 Candiolo (TO)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-medium text-theme-teal mb-8">Scrivimi</h2>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome e Cognome*</Label>
                      <Input
                        id="nome"
                        name="nome"
                        placeholder="Il tuo nome e cognome"
                        value={formState.nome}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email*</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="La tua email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Telefono</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        placeholder="Il tuo numero di telefono"
                        value={formState.telefono}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="messaggio">Messaggio*</Label>
                      <Textarea
                        id="messaggio"
                        name="messaggio"
                        placeholder="Scrivi qui il tuo messaggio..."
                        rows={5}
                        value={formState.messaggio}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      <p>* Campi obbligatori</p>
                      <p className="mt-1">
                        I dati saranno trattati nel rispetto della normativa sulla privacy (GDPR).
                      </p>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-theme-teal hover:bg-theme-sage text-white"
                      disabled={formState.loading}
                    >
                      {formState.loading ? "Invio in corso..." : "Invia messaggio"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="font-serif font-medium text-theme-teal mb-3">Informazioni utili</h3>
                <ul className="text-gray-700 space-y-2 list-disc pl-5">
                  <li>La prima consulenza ha un costo di € XX e dura circa 50 minuti</li>
                  <li>È possibile disdire o spostare un appuntamento con 24 ore di preavviso</li>
                  <li>Le sedute possono essere svolte anche online su piattaforme sicure</li>
                  <li>Per la terapia a domicilio è previsto un supplemento in base alla distanza</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-theme-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-medium text-theme-teal mb-6">
              Pronto a iniziare il tuo percorso?
            </h2>
            <p className="text-gray-700 mb-8">
              Il primo passo per il cambiamento è chiedere aiuto. Contattami per un primo 
              colloquio conoscitivo e scopri come posso aiutarti.
            </p>
            <div className="flex justify-center">
              <a href="tel:+39XXXXXXXXXX" className="flex items-center bg-theme-teal hover:bg-theme-sage text-white font-medium py-2 px-6 rounded-md transition-colors">
                <Phone size={20} className="mr-2" />
                Chiama ora
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contatti;
