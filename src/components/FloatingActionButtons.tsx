import React from 'react';

const FloatingActionButtons = () => {
  const phoneNumber = "+31686460637";
  const whatsAppNumber = "31686460637"; // Format for wa.me link

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition duration-150 ease-in-out"
        aria-label="Bel ons direct"
        title="Bel ons direct"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
        </svg>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsAppNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#1DAE52] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition duration-150 ease-in-out"
        aria-label="Chat met ons op WhatsApp"
        title="Chat met ons op WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.32 20.59C8.77 21.39 10.37 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.04 3.67C16.56 3.67 20.28 7.38 20.28 11.91C20.28 16.44 16.56 20.15 12.04 20.15C10.52 20.15 9.08 19.72 7.84 19L7.54 18.82L4.42 19.65L5.26 16.61L5.06 16.29C4.18 14.93 3.79 13.38 3.79 11.91C3.79 7.38 7.51 3.67 12.04 3.67M17.36 14.93C17.11 14.81 15.88 14.22 15.66 14.13C15.44 14.06 15.27 14.01 15.11 14.26C14.95 14.51 14.47 15.11 14.32 15.28C14.18 15.44 14.03 15.47 13.78 15.34C13.53 15.22 12.78 14.96 11.82 14.1C11.07 13.42 10.56 12.59 10.41 12.34C10.27 12.09 10.39 11.95 10.51 11.83C10.62 11.73 10.76 11.55 10.88 11.41C11.01 11.26 11.06 11.15 11.19 10.92C11.31 10.69 11.24 10.49 11.17 10.37C11.09 10.25 10.62 9.03 10.42 8.53C10.23 8.04 10.03 8.11 9.89 8.1C9.72 8.09 9.56 8.09 9.39 8.09C9.22 8.09 9 8.17 8.81 8.42C8.62 8.67 8.03 9.22 8.03 10.37C8.03 11.53 8.84 12.62 8.96 12.77C9.09 12.92 10.62 15.28 12.92 16.2C13.43 16.42 13.82 16.53 14.12 16.61C14.61 16.74 15.03 16.71 15.36 16.45C15.74 16.16 16.28 15.53 16.43 15.28C16.58 15.03 16.58 14.86 16.51 14.73C16.43 14.61 16.28 14.56 16.06 14.47C15.83 14.38 17.61 15.05 17.36 14.93Z"/>
        </svg>
      </a>
    </div>
  );
};

export default FloatingActionButtons;

