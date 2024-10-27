import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold">ClickRakete</span>
            </div>
            <p className="text-gray-400">
              Ihr Partner für erfolgreiches Online-Marketing und Personalvermittlung.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-orange-500">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-orange-500">Über uns</Link></li>
              <li><Link to="/success" className="text-gray-400 hover:text-orange-500">Kundenerfolge</Link></li>
              <li><Link to="/free" className="text-gray-400 hover:text-orange-500">Gratis</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-orange-500">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><Link to="/impressum" className="text-gray-400 hover:text-orange-500">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-gray-400 hover:text-orange-500">Datenschutz</Link></li>
              <li><Link to="/kontakt" className="text-gray-400 hover:text-orange-500">Kontakt</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@clickrakete.de</li>
              <li>+49 (0) 123 456789</li>
              <li>Raketenstraße 1</li>
              <li>12345 Berlin</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex justify-between items-center">
          <p className="text-gray-400">© {new Date().getFullYear()} ClickRakete. Alle Rechte vorbehalten.</p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}