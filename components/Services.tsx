"use client"

import React from "react"
import { motion } from "framer-motion"

const services = [
  "Solar and Inverter Systems",
  "Solar Street Lights and Flood Lights",
  "Solar Panels",
  "Inverters",
  "Lithum Batteries",
  "Cctv Survelliance Camera's",
  "Intercom",
  "Electric Fence",
  "Automatic Gate Opener",
  "Smart Door Locks",
  "Electrical Installation",
  "Renewable Energy Academy"
]

const itemVariant = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

const ServicesPage = () => {
  return (
    <div id="services" className="bg-white min-h-screen">

      {/* HEADER */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            We build modern, scalable, and user-focused digital products
            designed to grow with your business.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-stretch">

            {/* LEFT — IMAGES */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <div className="mb-6">
                <img
                  src="/images/top (1).png"
                  alt="Service image"
                  className="w-full rounded-xl shadow-xl"
                />
              </div>

              <div className="flex gap-6">
                <img
                  src="/images/right.png"
                  alt="Service image"
                  className="w-1/2 rounded-xl shadow-xl"
                />
                <img
                  src="/images/left.png"
                  alt="Service image"
                  className="w-1/2 rounded-xl shadow-xl"
                />
              </div>
            </motion.div>

            {/* RIGHT — TEXT */}
            <div className="w-full lg:w-1/2 flex items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Sales, Procurement And Installation of
                </h2>

                <ul className="space-y-4">
                  {services.map((service, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-gray-700 text-lg"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
