"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import QuotationModal from "@/components/QuotationModal"

// Add this import if QuotationModal is in the same directory
// import QuotationModal from "./QuotationModal"

const services = [
  {
    title: "Solar and Inverter Systems",
    desc: "Complete solar power solutions for homes and businesses"
  },
  {
    title: "Solar Street Lights and Flood Lights",
    desc: "Energy-efficient outdoor lighting solutions"
  },
  {
    title: "Solar Panels",
    desc: "High-quality photovoltaic panels for optimal energy generation"
  },
  {
    title: "Inverters",
    desc: "Reliable power conversion systems for seamless energy supply"
  },
  {
    title: "Lithium Batteries",
    desc: "Advanced energy storage with long lifespan and efficiency"
  },
  {
    title: "CCTV Surveillance Cameras",
    desc: "24/7 security monitoring with smart detection features"
  },
  {
    title: "Intercom Systems",
    desc: "Modern communication solutions for homes and offices"
  },
  {
    title: "Electric Fence",
    desc: "Perimeter security with advanced safety features"
  },
  {
    title: "Automatic Gate Openers",
    desc: "Convenient and secure access control systems"
  },
  {
    title: "Smart Door Locks",
    desc: "Keyless entry with biometric and remote access"
  },
  {
    title: "Electrical Installation",
    desc: "Professional wiring and electrical system setup"
  },
  {
    title: "Renewable Energy Academy",
    desc: "Comprehensive training in solar technology and installation"
  }
]

const ServicesPage = () => {
  // FIXED: Explicitly define the type as number[]
  const [visibleServices, setVisibleServices] = useState<number[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<{name: string} | null>(null)

  // Initialize AOS if not already
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AOS = require('aos')
      AOS.init({
        duration: 800,
        once: true,
        offset: 100
      })
    }
  }, [])

  // For staggered text reveal - FIXED type
  useEffect(() => {
    const timers = services.map((_, i) => 
      setTimeout(() => {
        setVisibleServices(prev => [...prev, i]) // Now i is number, matches number[]
      }, i * 100)
    )
    
    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  // FIXED: Open quotation modal
  const openQuotationModal = () => {
    setSelectedProduct({ name: "General Service Inquiry" })
    setModalOpen(true)
  }

  // Open modal for specific service
  const openServiceModal = (serviceName: string) => {
    setSelectedProduct({ name: serviceName })
    setModalOpen(true)
  }

  return (
    <div id="services" className="bg-gradient-to-b from-white to-blue-50 py-12 md:py-20">

      {/* HEADER */}
      <section className="pb-10 md:pb-16">
        <div className="container mx-auto px-4 max-w-3xl text-center" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="100">
            Comprehensive energy solutions and smart technology installations 
            for modern Nigerian homes and businesses.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">

            {/* LEFT — IMAGES (FIXED HEIGHT TO MATCH TEXT) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              {/* Main Image - Made taller to match text column */}
              <div className="mb-6 overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                <img
                  src="/images/redo (6).jpg"
                  alt="Solar Installation"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                />
              </div>

              {/* Side Images - Stacked vertically to use space */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-[1.03]">
                  <img
                    src="/images/right.png"
                    alt="Solar Panel"
                    className="w-full h-40 md:h-48 lg:h-56 object-cover"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-[1.03]">
                  <img
                    src="/images/left.png"
                    alt="Tech Installation"
                    className="w-full h-40 md:h-48 lg:h-56 object-cover"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT — SERVICES LIST */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl" data-aos="fade-left" data-aos-delay="200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 pb-4 border-b border-blue-100">
                  Sales, Procurement & Installation
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                  {services.map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: visibleServices.includes(i) ? 1 : 0,
                        y: visibleServices.includes(i) ? 0 : 20
                      }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="group"
                      onClick={() => openServiceModal(service.title)}
                    >
                      <div 
                        className="bg-gradient-to-r from-white to-blue-50 p-4 md:p-5 rounded-xl border border-blue-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                        data-aos="fade-up"
                        data-aos-delay={100 + (i * 50)}
                      >
                        {/* Icon */}
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white font-bold text-lg">
                              {i + 1}
                            </span>
                          </div>
                          <h3 className="font-bold text-gray-800 text-base md:text-lg group-hover:text-orange-500 transition-colors duration-300">
                            {service.title}
                          </h3>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-600 text-sm md:text-base ml-13">
                          {service.desc}
                        </p>
                        
                        {/* Hover Indicator */}
                        <div className="mt-3 h-1 w-0 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats/CTA Section */}
                <div className="mt-8 md:mt-10 pt-6 border-t border-blue-100" data-aos="fade-up" data-aos-delay="500">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-center sm:text-left">
                      <p className="text-gray-600 text-sm md:text-base">
                        <span className="text-2xl md:text-3xl font-bold text-orange-500">12+</span>
                        <br />
                        Comprehensive Services
                      </p>
                    </div>
                    <button 
                      onClick={openQuotationModal}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                      Get a Free Quote
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Additional Info */}
                  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm md:text-base">
                      💡 <span className="font-semibold">Need help choosing?</span> Click on any service to get a specific quote, or use the button for general inquiries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUOTATION MODAL - Add this at the end */}
      {/* Remove the comments and uncomment if QuotationModal is in same file */}
      {
      <QuotationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={selectedProduct?.name || ""}
      />
      }
    </div>
  )
}

export default ServicesPage