import React from 'react';
import LeadGeneration from '../components/LeadGeneration';
import { Users, Target, Rocket } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Über ClickRakete
            </h1>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                ClickRakete ist mehr als nur eine Marketing-Agentur. Wir sind Ihr strategischer Partner 
                für digitales Wachstum und Personalentwicklung. Mit unserem ganzheitlichen Ansatz 
                unterstützen wir B2B-Unternehmen dabei, ihr volles Potenzial zu entfalten.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Unser Team</h3>
                  <p className="text-gray-600">
                    Experten mit langjähriger Erfahrung in Digital Marketing und Recruiting.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Unsere Mission</h3>
                  <p className="text-gray-600">
                    Digitale Transformation und Wachstum für unsere Kunden ermöglichen.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <Rocket className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Unsere Vision</h3>
                  <p className="text-gray-600">
                    Der führende Partner für digitalen Erfolg im B2B-Bereich werden.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Unsere Geschichte</h2>
              <p className="text-gray-600 mb-6">
                Gegründet aus der Vision heraus, B2B-Unternehmen bei ihrer digitalen Transformation 
                zu unterstützen, hat sich ClickRakete kontinuierlich weiterentwickelt. Heute 
                verbinden wir erfolgreich Online-Marketing-Expertise mit professioneller 
                Personalvermittlung.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Unsere Werte</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Transparenz in allen Prozessen</li>
                <li>Innovative Lösungsansätze</li>
                <li>Nachhaltiges Wachstum</li>
                <li>Partnerschaftliche Zusammenarbeit</li>
                <li>Kontinuierliche Weiterbildung</li>
              </ul>
              
              <div className="mt-8">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Kontaktieren Sie uns
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <LeadGeneration />
          </div>
        </div>
      </div>
    </div>
  );
}