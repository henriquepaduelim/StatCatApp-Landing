
'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { content } from '@/content';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black font-grotesk">
          {content.header.logo}
        </h1>
        <nav className="hidden md:flex items-center space-x-8">
          {content.header.navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-black hover:text-red-600 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#cta" className="bg-teal text-white font-bold py-2 px-4 rounded-lg hover:bg-teal/90 transition-colors">
            {content.header.cta}
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none" aria-label={isOpen ? "Close menu" : "Open menu"}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-navy pb-4">
          <nav className="flex flex-col items-center space-y-4 ">
            {content.header.navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-black hover:text-teal transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#cta" onClick={() => setIsOpen(false)} className="bg-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-teal/90 transition-colors w-11/12 text-center">
              {content.header.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
