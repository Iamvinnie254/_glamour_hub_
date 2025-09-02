import React from "react";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <motion.section
      className="py-16 bg-gray-100 flex justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}

    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl" id="book">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Book an Appointment
        </h2>
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
          <input type="date" className="border p-3 rounded-lg w-full" />
          <input type="time" className="border p-3 rounded-lg w-full" />
          <textarea
            placeholder="Additional Notes"
            className="border p-3 rounded-lg w-full md:col-span-2"
          ></textarea>
          <button className="bg-red-600 px-6 py-3 rounded-lg text-white hover:bg-red-700 transition md:col-span-2">
            Submit
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Main;
