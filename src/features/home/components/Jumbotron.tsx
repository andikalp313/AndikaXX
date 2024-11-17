"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Subkomponen untuk Heading Utama
function Heading() {
  return (
    <motion.span
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-[36px] md:text-[48px] lg:text-[64px] font-semibold leading-tight lg:leading-normal font-plusJakartaSans w-full lg:w-[715px] text-center lg:text-left text-cyan-400"
    >
      Innovate Your World with Our Robots.
    </motion.span>
  );
}

// Subkomponen untuk Value Proposition
function ValueProposition() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="flex flex-col items-start gap-2 w-full lg:w-[495px] text-center lg:text-left"
    >
      <span className="text-[20px] md:text-[24px] font-semibold font-plusJakartaSans">
        Premium Imported Robotics
      </span>
      <span className="text-gray-400 text-[18px] md:text-[20px] font-medium leading-[1.5] font-plusJakartaSans">
        Explore a world of advanced robotic solutions designed to revolutionize
        daily tasks, enhance precision, and bring futuristic efficiency to your
        operations.
      </span>
    </motion.div>
  );
}

// Subkomponen untuk Background Image Section
function BackgroundImageSection() {
  return (
    <div
      className="flex h-[300px] md:h-[400px] lg:h-[557px] lg:px-10 w-full items-center rounded-[30px] lg:rounded-[54px] bg-cover bg-center overflow-hidden bg-blend-lighten relative transition-all duration-300 transform hover:scale-105"
      style={{
        backgroundImage: "url('/images/jumbotron.webp')",
        backgroundColor: "#1a1a1a",
      }}
    >
      <Link href={"/service-page"}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-2.5 px-6 py-4 bg-cyan-900 bg-opacity-75 rounded-full shadow-lg hover:bg-cyan-700 transition-colors duration-200"
        >
          <span className="text-cyan-100 text-[20px] md:text-[24px] font-semibold cursor-pointer font-plusJakartaSans animate-pulse">
            Explore Our Products
          </span>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center p-2.5 gap-3.5 rounded-full bg-cyan-600 hover:bg-cyan-400 transition-colors duration-200 overflow-hidden h-[50px] w-[50px] cursor-pointer"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
            >
              <path
                d="M28.1168 11.0684C28.1493 10.6853 28.0284 10.3049 27.7805 10.0109C27.5327 9.717 27.1783 9.53351 26.7952 9.50084L15.2367 8.51694C15.0452 8.49728 14.8516 8.51596 14.6674 8.57189C14.4832 8.62782 14.3119 8.71988 14.1636 8.8427C14.0154 8.96553 13.893 9.11665 13.8038 9.28726C13.7145 9.45786 13.6602 9.64453 13.6438 9.83637C13.6275 10.0282 13.6495 10.2214 13.7087 10.4046C13.7678 10.5879 13.8628 10.7575 13.9882 10.9036C14.1136 11.0497 14.2668 11.1694 14.4389 11.2557C14.6111 11.3419 14.7987 11.3931 14.9907 11.4061L23.0615 12.0931L8.38063 24.4706C8.08662 24.7185 7.90312 25.073 7.8705 25.4562C7.83789 25.8394 7.95882 26.2198 8.20671 26.5138C8.45459 26.8078 8.80912 26.9913 9.19229 27.0239C9.57547 27.0566 9.95592 26.9356 10.2499 26.6877L24.9308 14.3102L24.2438 22.3809C24.2181 22.7603 24.3425 23.1345 24.59 23.423C24.8376 23.7116 25.1886 23.8913 25.5675 23.9236C25.9463 23.9558 26.3226 23.838 26.6154 23.5954C26.9082 23.3529 27.094 23.0051 27.1329 22.6269L28.1168 11.0684Z"
                fill="white"
              />
            </svg>
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}

// Komponen Utama HeroSection
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-6 p-6 lg:px-20 w-full text-white">
      <div className="flex flex-col items-center gap-12 w-full max-w-[1280px]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 w-full">
          <Heading />
          <ValueProposition />
        </div>
        <BackgroundImageSection />
      </div>
    </div>
  );
}
