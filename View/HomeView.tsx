"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Services from "@/components/Services"
import AboutPage from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import AOS from "aos"
import "aos/dist/aos.css"

const HomeView = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  
  // Images for desktop slideshow
  const desktopImages = [
    "/images/hero.png",
    "/images/redo (1).jpg",  // Add your second image
    "/images/redo (2).jpg"   // Add your third image
  ]
  
  // Text phrases for mobile (appear one by one)
  const mobileTexts = [
    "Powering the",
    "New Generation",
    "With Innovation"
  ]

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true
    })
  }, [])

  // Desktop image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % desktopImages.length)
    }, 3000) // Change image every 3 seconds
    
    return () => clearInterval(interval)
  }, [desktopImages.length])

  // Mobile text typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % mobileTexts.length)
    }, 2000) // Change text every 2 seconds
    
    return () => clearInterval(interval)
  }, [mobileTexts.length])

  return (
    <div className="bg-white min-h-screen">
      <Navbar/>
      
      {/* HERO SECTION */}
      <section className="pb-8 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">

            {/* LEFT TEXT SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="w-full lg:w-1/2 text-center lg:text-left pt-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h1 className="text-[1.8rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.8rem] font-extrabold leading-tight text-gray-900">
                <span className="text-orange-500">King Ruby Tech</span>
                
                {/* DESKTOP TEXT (always visible) */}
                <div className="hidden lg:block">
                  <br />
                  Powering the
                  <br />
                  New Generation
                </div>
                
                {/* MOBILE TEXT (changes one by one) */}
                <div className="lg:hidden min-h-[4rem] flex items-center justify-center">
                  <motion.div
                    key={currentTextIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold">
                      {mobileTexts[currentTextIndex]}
                    </div>
                  </motion.div>
                </div>
              </h1>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-4 md:mt-5 inline-flex items-center gap-2
                  bg-orange-500 hover:bg-orange-600
                  text-white font-bold px-5 py-2 md:px-7 md:py-2.5 rounded-lg
                  shadow transition-all duration-300 text-sm md:text-base"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Get to Know Us →
              </motion.button>
            </motion.div>

            {/* RIGHT IMAGE SECTION (DESKTOP ONLY - Slideshow) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hidden lg:flex w-full lg:w-1/2 justify-end"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="relative w-full max-w-md h-[400px] overflow-hidden rounded-lg">
                {desktopImages.map((img, index) => (
                  <motion.img
                    key={img}
                    src={img}
                    alt={`King Ruby Tech ${index + 1}`}
                    className="absolute w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: currentImageIndex === index ? 1 : 0,
                      scale: currentImageIndex === index ? 1 : 1.05
                    }}
                    transition={{
                      opacity: { duration: 0.8 },
                      scale: { duration: 0.8 }
                    }}
                    style={{
                      zIndex: currentImageIndex === index ? 10 : 1
                    }}
                  />
                ))}
                
                {/* Image navigation dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                  {desktopImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImageIndex === index 
                          ? 'bg-orange-500 w-4' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* OTHER SECTIONS WITH AOS */}
      <div data-aos="fade-up">
        <AboutPage />
      </div>
      
      <div data-aos="fade-up" data-aos-delay="100">
        <Services />
      </div>
      
      <div data-aos="fade-up" data-aos-delay="200">
        <Contact />
      </div>
      
      <Footer />

    </div>
  )
}

export default HomeView