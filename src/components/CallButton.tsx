import React from 'react';
import { Phone } from 'lucide-react'; // Assuming you're using lucide-react for icons

interface CallButtonProps {
  phoneNumber: string;
}

const CallButton: React.FC<CallButtonProps> = ({ phoneNumber }) => {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center transition-colors duration-300 ease-in-out z-50"
      aria-label={`Bel ons op ${phoneNumber}`}
      target="_blank" // Opens in a new tab, though for tel: it might open the dialer directly
      rel="noopener noreferrer"
    >
      <Phone className="h-6 w-6 mr-2" />
      <span>Bel Nu: {phoneNumber}</span>
    </a>
  );
};

export default CallButton;

