import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="home">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-pink-100 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-pink-600">
              Glamour<span className="text-red-300">Hub</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-pink-600 transition"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-pink-600 transition"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-pink-600 transition"
              >
                Gallery
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-pink-600 transition"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-pink-600 transition"
              >
                Contact
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-pink-600 focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden bg-pink-50 overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            <a
              href="#home"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              Services
            </a>
            <a
              href="#shop"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              Gallery
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-pink-600 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Main;
