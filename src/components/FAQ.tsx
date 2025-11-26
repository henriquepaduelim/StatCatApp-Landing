
'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: 'Is StatCat designed for a specific level of football?',
    answer: 'StatCat is built for all levels of amateur football, from youth leagues to elite development academies. Its flexible features can be adapted to any club size or complexity.'
  },
  {
    question: 'How does athlete onboarding work?',
    answer: 'You invite athletes (or their guardians) via email. They are directed to a secure, club-branded portal to fill out forms, upload necessary documents (like proof of age or medical forms), and sign waivers electronically.'
  },
  {
    question: 'Can we customize the combine metrics we track?',
    answer: 'Yes. While we provide templates for standard football combines, you have the flexibility to add, remove, or create custom metrics to fit your specific testing protocol.'
  },
  {
    question: 'Is our data secure?',
    answer: 'Absolutely. We use industry-standard encryption for all data in transit and at rest. Our platform includes role-based access control to ensure that only authorized personnel can view sensitive information.'
  }
];

const FaqItem = ({ item, isOpen, onClick }: { item: any, isOpen: boolean, onClick: () => void }) => {
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
            Frequently Asked Questions
          </h2>
        </div>
        <div>
          {faqData.map((item, index) => (
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
