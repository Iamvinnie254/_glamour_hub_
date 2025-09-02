import React from "react";

const Main = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            At our beauty shop, we believe in enhancing your natural beauty with
            luxury treatments. Our team of professionals is dedicated to giving
            you the best salon experience.
          </p>
        </div>
        <img
          src="https://via.placeholder.com/500x400"
          alt="About"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Main;
