
'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { content } from '@/content';

const FaqItem = ({ item, isOpen, onClick }: { item: { question: string, answer: string }, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-warm-gray-800">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left py-6">
        <h4 className="text-lg font-semibold text-white">{item.question}</h4>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="text-warm-gray-400" />
      </button>
      {isOpen && (
        <div className="pb-6 pr-8">
          <p className="text-white">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {content.faq.title}
          </h2>
        </div>
        <div>
          {content.faq.items.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
