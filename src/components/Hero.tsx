
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { content } from '@/content';

const Hero = () => {
  return (
    <section className="relative text-center py-20 md:py-32 overflow-hidden">
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
            {/* Restoring the trust badge */}
            <div className="bg-teal/10 border border-teal/30 rounded-full px-4 py-1 inline-block mb-4">
                <p className="text-teal text-sm">
                    <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
                    {content.hero.badge}
                </p>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold font-grotesk text-white max-w-4xl mx-auto leading-tight">
                {content.hero.title}
            </h2>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mt-6">
                {content.hero.subtitle}
            </p>
            <div className="flex justify-center items-center space-x-4 mt-10">
                {/* Using content file for CTAs */}
                <a href="#cta" className="bg-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-teal/90 transition-transform hover:scale-105">
                    {content.hero.cta1}
                </a>

                {/* Restoring START button with description */}
                <div className="flex flex-col items-center">
                    <a href={content.hero.startCta.href} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-pixel px-8 py-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                        {content.hero.startCta.text}
                    </a>
                    <p className="text-sm text-white mt-2">{content.hero.startCta.description}</p>
                </div>

                {/* Restoring the "See in 2 Min" button */}
                <a href="#video-tour" className="text-white font-semibold py-3 px-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                   {content.hero.cta2}
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;
