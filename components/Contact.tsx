"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "2347067579674"; // <-- ADD YOUR NUMBER (no +)

const ContactPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello, my name is ${name}. ${message}`
  )}`;

  return (
    <div  id="contact" className="bg-white min-h-screen">
      {/* HEADER */}
      <section className="pt-32 pb-20 bg-orange-50/40">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Contact <span className="text-orange-500">Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-gray-600 text-lg"
          >
            Let’s talk about your project or idea.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* LEFT — INFO + MAP */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 space-y-10"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h2>

                <div className="space-y-4 text-gray-700">
                  <p><strong>Email:</strong> hello@kingrubytech</p>
                  <p><strong>Phone:</strong> +2347067579674</p>
                  <p><strong>Location:</strong> Nigeria</p>
                </div>
              </div>

              {/* GOOGLE MAP */}
              <div className="w-full h-72 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=Nigeria&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* RIGHT — WHATSAPP FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 bg-white shadow-xl rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                {/* WHATSAPP BUTTON */}
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg shadow-lg transition-all"
                >
                  <span>Send via WhatsApp</span>
                  <span>→</span>
                </motion.a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
