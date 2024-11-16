import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-cyan-300 py-12 relative overflow-hidden">
      {/* Robotic Grid Background */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-10"
        style={{ backgroundImage: "url('/images/grid-pattern.png')" }}
      ></div>

      <div className="flex justify-center space-x-6 mb-6 z-10 relative">
        {/* Social Media Icons with Robotic Style Animations */}
        <FaTwitter
          size={32}
          className="text-cyan-300 hover:text-cyan-500 cursor-pointer transition-transform transform hover:scale-110 hover:rotate-6 duration-300"
        />
        <FaFacebook
          size={32}
          className="text-cyan-300 hover:text-cyan-500 cursor-pointer transition-transform transform hover:scale-110 hover:rotate-6 duration-300"
        />
        <FaInstagram
          size={32}
          className="text-cyan-300 hover:text-cyan-500 cursor-pointer transition-transform transform hover:scale-110 hover:rotate-6 duration-300"
        />
      </div>

      <p className="text-center text-sm mb-4 max-w-lg mx-auto px-4 text-gray-400 leading-relaxed z-10 relative">
        Thank you for exploring the future with us. Stay updated on our latest
        innovations by connecting with us on social media.
      </p>

      {/* Futuristic Company Name */}
      <h2 className="text-center text-3xl font-bold tracking-widest mb-4 text-cyan-300 z-10 relative animate-pulse">
        AndikaX
      </h2>

      <p className="text-center text-xs text-gray-500 mt-2 z-10 relative">
        &copy; {new Date().getFullYear()} AndikaX. All rights reserved.
      </p>

      {/* Neon Glow Effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent to-cyan-500 opacity-10 rounded-full blur-3xl"
        style={{ transform: "rotate(45deg)", zIndex: -1 }}
      ></div>
    </footer>
  );
}
