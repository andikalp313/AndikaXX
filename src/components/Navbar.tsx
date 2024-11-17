"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 shadow-md w-full sticky top-0 z-50 border-b border-gray-700">
      <div className="flex py-3 px-6 md:px-24 justify-between items-center">
        {/* Logo and Brand Name */}
        <Link href={"/"}>
          <div className="flex items-center gap-3">
            <div className="w-10 animate-bounce h-10 bg-[url('/images/logoroboic.webp')] bg-center bg-cover rounded-full border border-cyan-500 shadow-lg"></div>
            <span className="text-cyan-400 font-semibold text-lg tracking-wider ">
              AndikaX
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            onClick={() => router.push("/")}
            className="text-gray-300 hover:text-cyan-500 transition duration-300 transform hover:scale-110 cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={() => router.push("/about-us")}
            className="text-gray-300 hover:text-cyan-400 transition duration-300 transform hover:scale-110 cursor-pointer"
          >
            About
          </a>

          <a
            onClick={() => router.push("/service-page")}
            className="text-gray-300 hover:text-cyan-400 transition duration-300 transform hover:scale-110 cursor-pointer"
          >
            Product
          </a>
          <a
            onClick={() => router.push("/our-team")}
            className="text-gray-300 hover:text-cyan-400 transition duration-300 transform hover:scale-110 cursor-pointer"
          >
            Our Team
          </a>
        </nav>

        {/* Contact Us Button for Desktop */}
        <div onClick={() => router.push("/contact")} className="hidden md:flex">
          <button className="py-2 px-5 text-gray-900 font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-600 transition duration-300 transform hover:scale-105 shadow-lg">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-cyan-400 hover:text-cyan-500 transition duration-300"
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
            <a
              onClick={() => {
                router.push("/");
                setIsMobileMenuOpen(false);
              }}
              className="text-cyan-400 hover:text-cyan-500 transition duration-300"
            >
              Home
            </a>
            <a
              onClick={() => {
                router.push("/about-us");
                setIsMobileMenuOpen(false);
              }}
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              About
            </a>
            <a
              onClick={() => {
                router.push("/service-page");
                setIsMobileMenuOpen(false);
              }}
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Product
            </a>
            <a
              onClick={() => {
                router.push("/our-team");
                setIsMobileMenuOpen(false);
              }}
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Our Team
            </a>
            <a
              onClick={() => {
                router.push("/contact");
                setIsMobileMenuOpen(false);
              }}
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
