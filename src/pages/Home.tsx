import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import LeadGeneration from '../components/LeadGeneration';

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Ihr Partner für digitales Wachstum
            </h1>
            
            <VideoPlayer
              thumbnailUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              videoUrl="https://www.youtube.com/embed/your-video-id"
            />
            
            <div className="mt-8 prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">
                Warum ClickRakete?
              </h2>
              <p className="text-gray-600 mb-4">
                ClickRakete ist Ihr Experte für digitales Marketing und Personalvermittlung im B2B-Bereich. 
                Wir kombinieren jahrelange Erfahrung mit innovativen Strategien, um Ihr Unternehmen auf 
                das nächste Level zu bringen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Webseitenentwicklung</h3>
                  <p className="text-gray-600">
                    Professionelle und conversion-optimierte Webseiten, die Ihre Zielgruppe überzeugen.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">SEO-Optimierung</h3>
                  <p className="text-gray-600">
                    Verbesserte Sichtbarkeit in Suchmaschinen durch moderne SEO-Strategien.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Social Media</h3>
                  <p className="text-gray-600">
                    Zielgerichtetes Social Media Marketing für mehr Reichweite und Engagement.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Personalvermittlung</h3>
                  <p className="text-gray-600">
                    Finden Sie die besten Talente für Ihr Unternehmen mit unserem Experten-Netzwerk.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <LeadGeneration />
          </div>
        </div>
      </div>
    </div>
  );
}