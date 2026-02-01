"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import QuotationModal from "@/components/QuotationModal"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openQuote, setOpenQuote] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link href="/" className="text-2xl font-extrabold">
              <span className="text-orange-500">King Ruby</span>{" "}
              <span className="text-gray-900">Tech</span>
            </Link>

            {/* DESKTOP LINKS */}
            <ul className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 font-medium hover:text-orange-500 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* DESKTOP CTA */}
            <button
              onClick={() => setOpenQuote(true)}
              className="hidden lg:block bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-orange-600 transition"
            >
              Get Quotation
            </button>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.aside
              className="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-bold">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl"
                >
                  ✕
                </button>
              </div>

              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-lg font-medium text-gray-800 hover:text-orange-500 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setOpenQuote(true);
                  setIsMenuOpen(false);
                }}
                className="mt-10 w-full bg-orange-500 text-white py-4 rounded-xl font-bold shadow hover:bg-orange-600 transition"
              >
                Get Quotation
              </button>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QUOTATION MODAL */}
    
    </>
  );
};

export default Navbar;
