import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Über uns', path: '/about' },
  { label: 'Kundenerfolge', path: '/success' },
  { label: 'Gratis', path: '/free' },
  { label: 'Blog', path: '/blog' }
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">ClickRakete</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-colors duration-200
                  ${location.pathname === item.path
                    ? 'text-orange-500'
                    : 'text-gray-600 hover:text-orange-500'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}