"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
};

export default function QuotationModal({ isOpen, onClose, productName }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const whatsappNumber = "2347067579674"; // Add your number here
    const text = `Hi, I want a quotation for ${productName}. Name: ${name}, Email: ${email}, Message: ${message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 max-w-md bg-white rounded-xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Quotation</h2>
            <p className="mb-4 text-gray-700">Product: <span className="font-semibold">{productName}</span></p>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg mt-2 shadow-lg transition-all"
              >
                Send via WhatsApp
              </motion.button>
              <button
                onClick={onClose}
                className="text-gray-500 mt-2 hover:text-gray-900 transition-colors"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
