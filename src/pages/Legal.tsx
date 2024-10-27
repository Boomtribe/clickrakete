import React from 'react';
import { useParams } from 'react-router-dom';

const legalContent = {
  impressum: {
    title: 'Impressum',
    content: `
      ClickRakete GmbH
      Raketenstraße 1
      12345 Berlin
      
      Vertreten durch:
      Max Mustermann
      
      Kontakt:
      Telefon: +49 (0) 123 456789
      E-Mail: info@clickrakete.de
      
      Registereintrag:
      Eingetragen im Handelsregister.
      Registergericht: Amtsgericht Berlin
      Registernummer: HRB 123456
      
      Umsatzsteuer-ID:
      Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
      DE 123456789
    `
  },
  datenschutz: {
    title: 'Datenschutzerklärung',
    content: `
      1. Datenschutz auf einen Blick
      
      Allgemeine Hinweise
      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
      
      2. Allgemeine Informationen und Pflichtinformationen
      
      Datenschutz
      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
      
      3. Datenerfassung auf unserer Website
      
      Cookies
      Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
    `
  },
  kontakt: {
    title: 'Kontakt',
    content: `
      Wir freuen uns über Ihre Kontaktaufnahme!
      
      ClickRakete GmbH
      Raketenstraße 1
      12345 Berlin
      
      Tel: +49 (0) 123 456789
      E-Mail: info@clickrakete.de
      
      Öffnungszeiten:
      Montag - Freitag: 9:00 - 18:00 Uhr
    `
  }
};

export default function Legal() {
  const { page } = useParams<{ page: keyof typeof legalContent }>();
  const content = page ? legalContent[page] : null;

  if (!content) {
    return <div>Seite nicht gefunden</div>;
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {content.title}
          </h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="prose max-w-none">
              {content.content.split('\n').map((line, index) => (
                <p key={index} className="mb-4">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}