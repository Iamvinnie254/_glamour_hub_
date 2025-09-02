import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah K.",
    text: "Amazing service! I feel more confident than ever.",
  },
  {
    name: "Emily R.",
    text: "The facial treatments were absolutely rejuvenating.",
  },
  {
    name: "Sophia L.",
    text: "Lovely staff and professional service. Highly recommend!",
  },
];

const Main = () => {
  return (
    <motion.section
      className="py-20 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center px-6" id="testimonials">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <p className="italic mb-4">"{t.text}"</p>
              <h3 className="font-bold">{t.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Main;
