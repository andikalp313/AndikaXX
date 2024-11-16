"use client";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    if (typeof window !== "undefined") {
      const email = "andikaluhurpambudi@gmail.com";
      const subject = `Pesan dari ${name}`;
      const body = `Halo, nama saya ${name}. ${message}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    }
  };

  const sendWhatsApp = () => {
    if (typeof window !== "undefined") {
      const phone = "+6282178342897";
      const text = `Halo, nama saya ${name}. ${message}`;
      window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
        "_blank"
      );
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 h-screen">
      {/* Particles Effect */}
      <Particles
        options={{
          background: { color: { value: "#000000" } },
          particles: {
            color: { value: "#00FFFF" },
            links: { enable: true, color: "#00FFFF", distance: 150 },
            move: { enable: true, speed: 2 },
            number: { value: 50 },
            size: { value: 3 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h1 className="text-cyan-300 font-plusJakartaSans text-4xl md:text-6xl font-bold leading-snug">
            Get in Touch
          </h1>
          <p className="mt-4 text-gray-400 font-plusJakartaSans text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We'd love to hear from you! Feel free to reach out via email or
            WhatsApp.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            className="space-y-6 text-gray-300"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-cyan-400 hover:text-yellow-500 transition duration-300">
              Contact Information
            </h2>
            <p className="text-gray-400">
              <FaMapMarkerAlt className="inline-block mr-2 text-cyan-400" />
              Weru, Sukoharjo, Jawa Tengah, Indonesia
            </p>
            <p>
              <FaPhoneAlt className="inline-block mr-2 text-cyan-400" />
              <span>+62 8217 8342 897</span>
            </p>
            <p>
              <FaEnvelope className="inline-block mr-2 text-cyan-400" />
              <a
                href="mailto:andikaluhurpambudi@gmail.com"
                className="hover:underline"
              >
                andikaluhurpambudi@gmail.com
              </a>
            </p>
            <p>
              <FaGlobe className="inline-block mr-2 text-cyan-400" />
              <a href="http://www.andikalp.com" className="hover:underline">
                www.andikalp.com
              </a>
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md bg-gray-800 p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-md bg-gray-800 p-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 h-32"
            ></textarea>
            <div className="flex space-x-4">
              <motion.button
                onClick={sendEmail}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center w-full rounded-md bg-cyan-500 p-3 text-white hover:bg-cyan-600 transition"
              >
                <FaEnvelope className="mr-2" />
                Send Email
              </motion.button>
              <motion.button
                onClick={sendWhatsApp}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center w-full rounded-md bg-green-500 p-3 text-white hover:bg-green-600 transition"
              >
                <FaWhatsapp className="mr-2" />
                Send WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
