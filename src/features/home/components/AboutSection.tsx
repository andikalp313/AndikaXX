"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="flex flex-col items-center gap-10 px-8 py-14 md:py-40 lg:px-24 w-full text-white">
      <div className="flex flex-col items-center gap-12 w-full max-w-[1280px]">
        {/* Section Container */}
        <div className="flex flex-col lg:flex-row items-center gap-20 w-full">
          {/* Animated Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.08, rotate: 3 }}
            className="w-full lg:w-[600px] h-[300px] md:h-[450px] lg:h-[550px] bg-[url('/images/aboutrobotic.jpg')] bg-cover bg-center rounded-[35px] lg:rounded-[50px] shadow-2xl shadow-cyan-500/30 transform transition-transform"
          />

          {/* Textual Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex flex-col items-start gap-8 w-full lg:w-[600px] text-center lg:text-left"
          >
            {/* Title with Interactive Hover */}
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ color: "#00FFFF", scale: 1.02 }}
              className="text-cyan-300 font-plusJakartaSans text-3xl md:text-5xl font-bold leading-tight"
            >
              Transforming Industries through Intelligent Robotics.
            </motion.h2>

            {/* Descriptive Paragraph with Subtle Interaction */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ scale: 1.03, color: "#D1D5DB" }}
              className="text-gray-400 font-plusJakartaSans text-lg md:text-xl font-medium leading-relaxed"
            >
              At AndikaX, we merge cutting-edge robotics with intelligent AI to
              reshape workspaces. Our tech-forward robots offer advanced
              automation, precision, and reliability tailored for diverse
              industries. From logistics automation to fine-tuned manufacturing,
              each robot embodies state-of-the-art engineering to meet
              challenges and boost operational efficiency in a rapidly evolving
              world.
            </motion.p>

            {/* Call to Action Button with Animated Hover */}
            <motion.a
              href="/about-us"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#00CCCC",
                color: "#ffffff",
                transition: { duration: 0.3 },
              }}
              className="mt-6 px-8 py-3 bg-cyan-700 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 cursor-pointer"
            >
              Discover More
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
