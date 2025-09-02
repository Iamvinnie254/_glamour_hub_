import React from "react";

const Main = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600">
              "Amazing service! I feel refreshed every time."
            </p>
            <h4 className="mt-4 font-bold text-pink-600">Jane Harry</h4>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600">
              "The staff is so friendly and professional."
            </p>
            <h4 className="mt-4 font-bold text-pink-600">Mary Ann</h4>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600">
              "Best beauty shop in town, highly recommend!"
            </p>
            <h4 className="mt-4 font-bold text-pink-600">Sarah K.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
