"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutPageComp() {
  return (
    <div className="flex flex-col items-center gap-10 px-8 py-14 lg:px-24 w-full text-white">
      <div className="flex flex-col items-center gap-12 w-full max-w-[1280px]">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-cyan-300 font-plusJakartaSans text-4xl md:text-6xl font-bold leading-snug">
            Welcome to AndikaX
          </h1>
          <p className="mt-4 text-gray-400 font-plusJakartaSans text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Pioneering the Future of Robotics and AI Innovation
          </p>
        </motion.div>

        {/* Core Section with Visual and Description */}
        <div className="flex flex-col lg:flex-row items-center gap-20 w-full mt-10">
          {/* Image Section with Overlay Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="relative w-full lg:w-[600px] h-[350px] md:h-[500px] lg:h-[600px] bg-[url('/images/aboutrobotic.jpg')] bg-cover bg-center rounded-[30px] shadow-2xl shadow-cyan-500/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6 lg:p-12">
              <h2 className="text-2xl md:text-4xl font-bold">
                Intelligent Robotics
              </h2>
              <p className="mt-2 text-gray-300 text-lg md:text-xl">
                Creating Smart Solutions for Every Industry
              </p>
            </div>
          </motion.div>

          {/* Text Section with Detailed Description */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex flex-col items-start gap-8 w-full lg:w-[600px] text-left"
          >
            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-cyan-300 font-plusJakartaSans text-2xl md:text-4xl font-bold leading-tight"
            >
              Shaping Tomorrow's Technology, Today.
            </motion.h3>

            {/* Paragraphs with Detail */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-gray-400 font-plusJakartaSans text-lg md:text-xl leading-relaxed"
            >
              At AndikaX, we specialize in delivering intelligent robotic
              solutions that redefine industry standards. Our innovations span
              various sectors, from logistics to healthcare, each tailored to
              enhance productivity, accuracy, and adaptability.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.8 }}
              className="text-gray-400 font-plusJakartaSans text-lg md:text-xl leading-relaxed"
            >
              With a dedicated team of engineers and researchers, AndikaX
              remains at the cutting edge of robotics and AI, constantly
              exploring new technologies to drive efficiency and sustainable
              growth. Our vision is to build a connected world where intelligent
              robots empower human potential.
            </motion.p>
          </motion.div>
        </div>

        {/* Vision & Values Section */}
        <div className="flex flex-col lg:flex-row items-start gap-10 w-full mt-14">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="w-full lg:w-1/2 bg-cyan-800 p-8 rounded-[25px] shadow-lg shadow-cyan-500/20"
          >
            <h4 className="text-xl md:text-2xl font-bold text-cyan-300">
              Our Vision
            </h4>
            <p className="mt-4 text-gray-200 text-lg leading-relaxed">
              To revolutionize industries by making smart automation accessible
              and sustainable for all, driving forward a future where AI and
              robotics are key partners in human success.
            </p>
          </motion.div>

          {/* Values Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            className="w-full lg:w-1/2 bg-cyan-800 p-8 rounded-[25px] shadow-lg shadow-cyan-500/20"
          >
            <h4 className="text-xl md:text-2xl font-bold text-cyan-300">
              Our Values
            </h4>
            <ul className="mt-4 text-gray-200 text-lg leading-relaxed list-disc list-inside">
              <li>Innovation at Every Step</li>
              <li>Commitment to Quality and Precision</li>
              <li>Empowering Sustainability</li>
              <li>Building Stronger, Smarter Workspaces</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
