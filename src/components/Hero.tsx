
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';
import { content } from '@/content';

const Hero = () => {
  return (
    <section className="relative text-center py-4 md:py-8 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10 transform rotate-180"
          src="/videos/hero-video.mp4"
        />
        <div className="absolute inset-0 bg-black/60 -z-10"></div>
        <div className="container mx-auto px-6 z-10">
           

            <h2 className="text-4xl md:text-6xl font-bold font-grotesk text-white max-w-4xl mx-auto leading-tight">
                {content.hero.title}
            </h2>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mt-6">
                {content.hero.subtitle}
            </p>
            <div className="flex justify-center items-center space-x-4 mt-10">
               

                {/* Restoring START button with description */}
                <div className="flex flex-col items-center">
                    <a href={content.hero.startCta.href} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-pixel px-8 py-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                        {content.hero.startCta.text}
                    </a>
                    <p className="text-sm text-white mt-2">{content.hero.startCta.description}</p>
                </div>

              
            </div>
              
        </div>
    </section>
  );
};

export default Hero;
