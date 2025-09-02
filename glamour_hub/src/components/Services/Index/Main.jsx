import React from "react";
import { motion } from "framer-motion";
import Facial from "../../../assets/Services/facial.png";
import Makeup from "../../../assets/Services/makeup.png";
import Hair from "../../../assets/Services/hair_styling.png";
import Spa from "../../../assets/Services/spa.png";

const services = [
  {
    title: "Facial",
    img: Facial,
    desc: "Glow & refresh",
  },
  {
    title: "Makeup",
    img: Makeup,
    desc: "Special occasions",
  },
  {
    title: "Hair Styling",
    img:Hair,
    desc: "Trendy styles",
  },
  {
    title: "Spa Therapy",
    img: Spa,
    desc: "Relax & unwind",
  },
];

const Main = () => {
  return (
    <section className="py-16 bg-pink-50" id="services">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={s.img} alt={s.title} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-pink-600">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
