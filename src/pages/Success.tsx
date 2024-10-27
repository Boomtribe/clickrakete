import React from 'react';
import { testimonials } from '../data/testimonials';
import LeadGeneration from '../components/LeadGeneration';

export default function Success() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Erfolgsgeschichten unserer Kunden
            </h1>
            
            <p className="text-lg text-gray-600 mb-12">
              Entdecken Sie, wie wir unseren Kunden geholfen haben, ihre Ziele zu erreichen und ihr 
              Business auf das nächste Level zu bringen.
            </p>
            
            <div className="space-y-12">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-600 italic mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Herausforderung</h4>
                      <p className="text-sm text-gray-600">{testimonial.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-2">Lösung</h4>
                      <p className="text-sm text-gray-600">{testimonial.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Ergebnis</h4>
                      <p className="text-sm text-gray-600">{testimonial.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Werden Sie unser nächster Erfolgsfall
              </button>
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