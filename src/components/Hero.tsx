
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

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
            <div className="bg-white/10 border border-white/10 rounded-full px-4 py-1 inline-block mb-4">
                <p className="text-white text-sm">
                    <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
                    Built for Canadian Football Clubs
                </p>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold font-grotesk text-white max-w-4xl mx-auto leading-tight">
                The All-In-One Platform to Manage, Train, and Grow Your Club
            </h2>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mt-6">
                StatCat centralizes everything from athlete onboarding and combine data to team calendars and performance reports. Stop chasing paperwork and start building champions.
            </p>
            <div className="flex justify-center items-center space-x-4 mt-10">
                <a href="#cta" className="bg-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-teal/90 transition-transform hover:scale-105">
                    Book a Demo
                </a>
                <a href="https://stats-cat.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-pixel px-8 py-4 rounded-md shadow-lg transform hover:scale-105 transition-transform">
                    START
                </a>
                <a href="#video-tour" className="text-white font-semibold py-3 px-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    See in 2 Min
                </a>
                
            </div>
        </div>
    </section>
  );
};

export default Hero;
