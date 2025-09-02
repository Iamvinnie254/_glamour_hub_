import React from "react";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <motion.footer
      className="bg-black text-white py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left" id="footer">
        <div>
          <h3 className="font-bold text-lg mb-4">
            {" "}
            Glamour<span className="text-red-300">Hub</span>
          </h3>
          <p>Enhancing beauty & confidence since 2023.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul>
            <li className="hover:text-red-400 cursor-pointer">Home</li>
            <li className="hover:text-red-400 cursor-pointer">Services</li>
            <li className="hover:text-red-400 cursor-pointer">About</li>
            <li className="hover:text-red-400 cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <p>Instagram | Facebook | Twitter</p>
        </div>
      </div>
      <div className="text-center mt-6 text-sm">
        &copy; 2025 GlamourHub. All Rights Reserved.
      </div>
    </motion.footer>
  );
};

export default Main;
