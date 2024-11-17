"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 shadow-md w-full sticky top-0 z-50 border-b border-gray-700">
      <div className="flex py-3 px-6 md:px-24 justify-between items-center">
        {/* Logo and Brand Name */}
        <Link href="/" passHref className="flex items-center gap-3">
          <div className="w-10 animate-bounce h-10 bg-[url('/images/logoroboic.webp')] bg-center bg-cover rounded-full border border-cyan-500 shadow-lg"></div>
          <span className="text-cyan-400 font-semibold text-lg tracking-wider">
            AndikaX
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            passHref
            className="text-gray-300 hover:text-cyan-500 transition duration-300 transform hover:scale-110"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            passHref
            className="text-gray-300 hover:text-cyan-400 transition duration-300 transform hover:scale-110"
          >
            About
          </Link>
          <Link
            href="/service-page"
            passHref
            className="text-gray-300 hover:text-cyan-400 transition duration-300 transform hover:scale-110"
          >
            Product
          </Link>
          <Link
            href="/our-team"
            passHref
            className="text-gray-300 hover:text-cyan-400 transition duration-300 transform hover:scale-110"
          >
            Our Team
          </Link>
        </nav>

        {/* Contact Us Button for Desktop */}
        <div className="hidden md:flex">
          <Link href="/contact" passHref>
            <button className="py-2 px-5 text-gray-900 font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-600 transition duration-300 transform hover:scale-105 shadow-lg">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-cyan-400 hover:text-cyan-500 transition duration-300"
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 bg-gray-800 border-t border-gray-700">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <Link
              href="/"
              passHref
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-cyan-400 hover:text-cyan-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              passHref
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/service-page"
              passHref
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Product
            </Link>
            <Link
              href="/our-team"
              passHref
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Our Team
            </Link>
            <Link
              href="/contact"
              passHref
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
