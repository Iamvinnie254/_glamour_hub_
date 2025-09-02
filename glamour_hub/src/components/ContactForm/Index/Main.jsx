import React from "react";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6" id="contact">
        <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg w-full"
          />
          <textarea
            placeholder="Your Message"
            className="border p-3 rounded-lg w-full md:col-span-2"
          ></textarea>
          <button className="bg-red-600 px-6 py-3 rounded-lg text-white hover:bg-red-700 transition md:col-span-2">
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Main;
