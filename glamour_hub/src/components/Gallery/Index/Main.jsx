import React from "react";
import { motion } from "framer-motion";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
];

const Main = () => {
  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6" id="gallery">
        <h2 className="text-4xl font-bold text-center mb-12">Our Gallery</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="rounded-lg shadow-lg hover:scale-105 transition transform"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Main;
