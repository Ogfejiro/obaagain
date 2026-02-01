"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Image carousel data
  const images = [
    { src: "/images/RKT 2 1.png", alt: "Solar Installation" },
    { src: "/images/redo (7).jpg", alt: "Tech Solutions" },
    { src: "/images/redo (3).jpg", alt: "Our Vision" },
    { src: "/images/redo (4).jpg", alt: "King Ruby Tech" },
    { src: "/images/redo (5).jpg", alt: "Renewable Energy" },
    
  ];

  // Twitter handle
  const handleTwitterClick = () => {
    window.open("https://twitter.com/kingrubytech", "_blank", "noopener,noreferrer");
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="about" className="bg-blue-50 py-8 md:py-12"> {/* Reduced padding */}
      <div className="container mx-auto px-4">
        
        {/* HEADER SECTION - Reduced spacing */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10" data-aos="fade-up"> {/* Reduced margin */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"> {/* Smaller heading */}
            About <span className="text-orange-500">Us</span>
          </h1>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6"> {/* Smaller text */}
            King Ruby Tech is a forward-thinking renewable energy and technology 
            company committed to delivering reliable, affordable, and sustainable 
            power solutions across Nigeria.
          </p>
        </div>

        {/* IMAGE CAROUSEL SECTION - Reduced height */}
        <div className="mb-8 md:mb-10 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          {/* Carousel Container - Much smaller height */}
          <div className="relative h-48 md:h-56 lg:h-64 rounded-xl md:rounded-2xl overflow-hidden shadow-lg"> {/* Reduced height */}
            {/* Moving Images */}
            <motion.div
              className="flex h-full"
              animate={{
                x: `-${currentSlide * 100}%`
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut"
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay for better text visibility */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              ))}
            </motion.div>

            {/* Navigation Dots - Smaller */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-orange-500 w-4' 
                      : 'bg-white/70 hover:bg-white'
                  }`}
                />
              ))}
            </div>

            {/* Manual Navigation Buttons - Smaller */}
            <button
              onClick={() => setCurrentSlide((prev) => prev > 0 ? prev - 1 : images.length - 1)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 rounded-full shadow transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 rounded-full shadow transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* BRIEF DESCRIPTION - Reduced spacing */}
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Empowering Nigeria with Clean Energy
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We combine innovation, expertise, and practical experience to help 
            homes, businesses, and institutions achieve energy independence.
          </p>
        </div>

        {/* BUTTON SECTION - Reduced spacing */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
          <motion.button
            onClick={handleTwitterClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-blue-500 text-white font-semibold rounded-full flex items-center justify-center gap-2 mx-auto hover:bg-blue-600 transition-all duration-300 shadow text-sm md:text-base"
          >
            {/* Twitter SVG icon */}
            <svg className="text-lg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99A12.13 12.13 0 0 1 3.15 5.1a4.29 4.29 0 0 0 1.33 5.72c-.7-.02-1.36-.21-1.94-.53v.05c0 2.01 1.43 3.69 3.32 4.07-.35.1-.72.16-1.1.16-.27 0-.53-.03-.78-.07.53 1.65 2.07 2.85 3.89 2.88A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0 0 24 4.59a8.51 8.51 0 0 1-2.54.7z" />
            </svg>
            Get to Know Us on Twitter
          </motion.button>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;