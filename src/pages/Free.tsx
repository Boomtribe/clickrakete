import React from 'react';
import LeadGeneration from '../components/LeadGeneration';
import { CheckCircle } from 'lucide-react';

export default function Free() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Kostenloser Marketing-Guide für B2B-Unternehmen
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Laden Sie unseren umfassenden Guide herunter und erfahren Sie, wie Sie Ihre 
              Online-Marketing-Strategie optimieren können.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Was Sie lernen werden</h2>
                <ul className="space-y-3">
                  {[
                    'SEO-Grundlagen für B2B',
                    'Content-Marketing-Strategien',
                    'Lead-Generierung',
                    'Social Media im B2B-Bereich',
                    'Analytics und Tracking'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Ihre Vorteile</h2>
                <ul className="space-y-3">
                  {[
                    'Sofort umsetzbare Tipps',
                    'Praxiserprobte Strategien',
                    'Aktuelle Best Practices',
                    'Checklisten und Templates',
                    'Experteneinblicke'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">Bonus-Inhalte</h2>
              <p className="text-gray-600 mb-4">
                Zusätzlich zum Guide erhalten Sie:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span>SEO-Audit-Checkliste</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span>Content-Kalender-Template</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span>Google Analytics Tracking-Guide</span>
                </li>
              </ul>
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