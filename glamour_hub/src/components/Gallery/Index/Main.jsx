import React from "react";

const images = [
  "https://via.placeholder.com/300x300",
  "https://via.placeholder.com/300x300",
  "https://via.placeholder.com/300x300",
  "https://via.placeholder.com/300x300",
];

const Main = () => {
  return (
    <section className="py-16 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Salon work"
              className="rounded-lg shadow"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
