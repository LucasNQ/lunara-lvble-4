import React from 'react';
import OptimizedImage from './OptimizedImage';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative gradient-bg overflow-hidden md:min-h-[50vh] lg:min-h-[60vh] flex items-center">
      {/* Background Pattern - Optimized for performance */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-2 sm:left-4 md:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-2 sm:right-4 md:right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{
          animationDelay: '2s'
        }}></div>
        <div className="absolute -bottom-32 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{
          animationDelay: '4s'
        }}></div>
      </div>

      <div className="w-full relative z-10 h-full">
        <div className="w-full fade-in h-[130vw] md:h-full">
          <OptimizedImage 
            src="/lovable-uploads/55505b55-7b7f-4725-a602-48eec7ae7b42.png" 
            alt="Mulher com cabelo liso e saudável usando produtos Lunara" 
            className="w-full h-full object-cover" 
            width={1200} 
            height={1600} 
            priority={true} 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;