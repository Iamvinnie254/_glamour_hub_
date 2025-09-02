import React from "react";
import { motion } from "framer-motion";
import Gallery1 from "../../../assets/Gallery/image1.png";
import Gallery2 from "../../../assets/Gallery/image2.png";
import Gallery3 from "../../../assets/Gallery/image3.png";
import Gallery4 from "../../../assets/Gallery/image4.png";
import Gallery5 from "../../../assets/Gallery/image5.png";
import Gallery6 from "../../../assets/Gallery/image6.png";
import Gallery7 from "../../../assets/Gallery/image7.png";
import Gallery8 from "../../../assets/Gallery/image8.png";
import Gallery9 from "../../../assets/Gallery/image9.png";

const images = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Gallery9,
];

const Main = () => {
  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="gallery"
    >
      <div className="max-w-6xl mx-auto px-6">
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
