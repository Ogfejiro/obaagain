"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* TOP */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-extrabold text-white">
              King<span className="text-orange-500">Ruby</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              We build modern digital products, websites, and business solutions
              that help brands grow online.
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-500">About Us</Link></li>
              <li><Link href="/products" className="hover:text-orange-500">Products</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
            </ul>
          </motion.div>

          

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Email: hello@kingrubytech</li>
              <li>Phone: +2347067579674</li>
              <li>Location: Nigeria</li>
            </ul>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} KingRuby Tech. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-orange-500">Privacy</Link>
            <Link href="#" className="hover:text-orange-500">Terms</Link>
            <Link href="#" className="hover:text-orange-500">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
