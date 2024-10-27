import React, { useState } from 'react';
import { Gift } from 'lucide-react';

export default function LeadGeneration() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Email validation
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        throw new Error('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      }
      
      setStatus('success');
      setMessage('Bitte überprüfen Sie Ihren Posteingang für die Bestätigungs-E-Mail.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-2 mb-4">
        <Gift className="h-6 w-6 text-orange-500" />
        <h3 className="text-xl font-bold">Gratis Marketing-Guide</h3>
      </div>
      
      <p className="text-gray-600 mb-6">
        Laden Sie unseren kostenlosen Guide herunter und erfahren Sie, wie Sie Ihre Online-Präsenz optimieren können.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-Mail-Adresse
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="ihre@email.de"
            disabled={status === 'loading'}
          />
        </div>
        
        {message && (
          <p className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
        
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors
            ${status === 'loading'
              ? 'bg-gray-400'
              : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
          {status === 'loading' ? 'Wird verarbeitet...' : 'Jetzt anfordern'}
        </button>
        
        <p className="text-xs text-gray-500 text-center">
          100% kostenlos und jederzeit kündbar
        </p>
      </form>
    </div>
  );
}