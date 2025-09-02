import React from "react";

const services = [
  {
    title: "Facial",
    img: "https://via.placeholder.com/200",
    desc: "Glow & refresh",
  },
  {
    title: "Makeup",
    img: "https://via.placeholder.com/200",
    desc: "Special occasions",
  },
  {
    title: "Hair Styling",
    img: "https://via.placeholder.com/200",
    desc: "Trendy styles",
  },
  {
    title: "Spa Therapy",
    img: "https://via.placeholder.com/200",
    desc: "Relax & unwind",
  },
];

const Main = () => {
  return (
    <section className="py-16 bg-pink-50" id="services">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
            >
              <img src={s.img} alt={s.title} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-pink-600">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
