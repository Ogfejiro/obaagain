"use client"

import React from "react"
import { motion } from "framer-motion"
import Services from "@/components/Services"
import AboutPage from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const HomeView = () => {
  return (
    <div className="bg-white min-h-screen">
               <Navbar/>
      {/* HERO SECTION - No top padding */}
      <section className="pb-8 md:pb-12"> {/* Removed pt-* completely */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">

            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="w-full lg:w-1/2 text-center lg:text-left pt-4" /* Small top padding inside */
            >
              <h1 className="text-[1.8rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.8rem] font-extrabold leading-tight text-gray-900">
                <span className="text-orange-500">King Ruby Tech</span>
                <br />
                Powering the
                <br />
                New Generation
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
              >
                Get to Know Us →
              </motion.button>
            </motion.div>

            {/* RIGHT IMAGE (DESKTOP ONLY) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hidden lg:flex w-full lg:w-1/2 justify-end"
            >
              <motion.img
                src="/images/hero.png"
                alt="King Ruby Tech"
                className="w-full max-w-md h-auto"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <AboutPage />
      <Services />
      <Contact />
      <Footer />

    </div>
  )
}

export default HomeView