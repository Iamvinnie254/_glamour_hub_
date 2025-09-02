import React from "react";
import { motion } from "framer-motion";
import About from "../../../assets/About/about.png";
import { FaCheckCircle, FaInstagram } from "react-icons/fa";

const Main = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            At our beauty shop, we believe in enhancing your natural beauty with
            luxury treatments. Our team of professionals is dedicated to giving
            you the best salon experience.
          </p>
          <div className="mt-6 space-y-3 text-gray-600 font-serif">
            <p className="flex gap-2 items-center"><FaCheckCircle size={20} /> Enjoy exclusive deals & offers</p>
            <p className="flex gap-2 items-center"><FaCheckCircle size={20} /> Meet our experienced experts to turn you into a beauty</p>
            <p className="flex gap-2 items-center"><FaCheckCircle size={20} /> Experience one of a kind ambience and world-class customer service</p>
            
          </div>
        </motion.div>

        <motion.img
          src={About}
          alt="About"
          className="rounded-lg shadow-lg w-[300px] md:w-[400px] mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default Main;
