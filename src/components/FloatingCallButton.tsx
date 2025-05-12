import React from 'react';
import { Phone, MessageSquare } from 'lucide-react'; // Using MessageSquare for WhatsApp
import { siteConfig } from '@/lib/siteConfig';

const BottomContactBar = () => {
  const barStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    backgroundColor: '#2D3748', // Dark background for the bar (Tailwind gray-800)
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px 0',
    zIndex: 1000,
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.2)',
  };

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 500,
    fontSize: '0.9rem',
    gap: '8px',
    flex: 1, // Make buttons take equal space
    margin: '0 5px',
    maxWidth: '200px', // Max width for buttons on larger screens
  };

  const callButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#4A5568', // Tailwind gray-600 for call button
  };

  const whatsappButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#28A745', // Green for WhatsApp button
  };

  const phoneNumber = siteConfig.contactInfo.telefoon;
  const telLink = `tel:${phoneNumber.replace(/\D/g, '')}`;
  // Format for wa.me: country code + number without leading 0 or symbols
  const whatsappNumber = phoneNumber.replace(/[^0-9]/g, ''); // Remove all non-digits
  const whatsappLink = `https://wa.me/${whatsappNumber.startsWith('31') ? whatsappNumber : '31' + whatsappNumber.substring(1)}`; // Assuming NL number, add 31 if not present

  return (
    <div style={barStyle}>
      <a href={telLink} style={callButtonStyle} aria-label={`Bel ons op ${phoneNumber}`}>
        <Phone className="h-5 w-5" />
        <span>Bel Ons</span>
      </a>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={whatsappButtonStyle} aria-label="Stuur ons een WhatsApp bericht">
        <MessageSquare className="h-5 w-5" /> {/* Using MessageSquare as a placeholder for WhatsApp icon */}
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default BottomContactBar;

