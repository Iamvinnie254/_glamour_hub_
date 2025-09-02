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
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Form */}
          <form className="flex-1 grid grid-cols-1 gap-6">
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
              className="border p-3 rounded-lg w-full h-32"
            ></textarea>
            <button className="bg-red-600 px-6 py-3 rounded-lg text-white hover:bg-red-700 transition">
              Send Message
            </button>
          </form>

          {/* Embedded Map */}
          <div className="flex-1 h-80 md:h-auto">
            <iframe
              title="Nairobi County Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.32370673757!2d36.8219461!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1731b8f3d5cd%3A0x4b3e13a1f8d2c8b1!2sNairobi%20County%2C%20Kenya!5e0!3m2!1sen!2ske!4v1693566000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Main;
