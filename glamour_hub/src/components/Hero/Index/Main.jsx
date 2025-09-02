import React from "react";

const Main = () => {
  return (
    <section
      className="relative bg-pink-100 h-[80vh] flex items-center"
      id="home"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Enhancing Natural Beauty
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Experience luxury treatments designed just for you.
          </p>
          <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700 transition">
            Book Appointment
          </button>
        </div>
        <div className="flex-1 mt-8 md:mt-0">
          <img
            src="https://via.placeholder.com/500x600"
            alt="Beauty"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
