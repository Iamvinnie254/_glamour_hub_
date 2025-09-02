import React from "react";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <section className="relative bg-pink-100 h-[80vh] flex items-center" id="home">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Enhancing Natural Beauty
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Experience luxury treatments designed just for you.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700 transition"
          >
            Book Appointment
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://via.placeholder.com/500x600"
            alt="Beauty"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
