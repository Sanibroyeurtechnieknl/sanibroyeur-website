import React from 'react';
import { Phone } from 'lucide-react';

interface ProminentCallButtonProps {
  phoneNumber: string;
  className?: string;
}

const ProminentCallButton: React.FC<ProminentCallButtonProps> = ({ phoneNumber, className }) => {
  const telLink = `tel:${phoneNumber.replace(/\s+/g, '')}`;

  return (
    <a
      href={telLink}
      className={`bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition-colors duration-300 ease-in-out ${className}`}
      aria-label={`Bel ons nu op ${phoneNumber}`}
    >
      <Phone className="h-5 w-5 mr-2" />
      <span>Bel: {phoneNumber}</span>
    </a>
  );
};

export default ProminentCallButton;

