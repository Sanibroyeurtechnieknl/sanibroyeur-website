"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemClientProps {
  question: string;
  answer: string;
}

const FAQItemClient: React.FC<FAQItemClientProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-700 dark:text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItemClient;

