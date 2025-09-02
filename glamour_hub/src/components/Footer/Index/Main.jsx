import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Main = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8" id="footer">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white">
            Glamour<span className="text-red-300">Hub</span>
          </h3>
          <p className="mt-2 text-gray-400">Luxury salon & spa treatments.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#services" className="hover:text-pink-500">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-pink-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-pink-500">
              <FaFacebook />
            </a>
            <a href="/" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="/" className="hover:text-pink-500">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        © {new Date().getFullYear()} Beauty Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Main;
