import React from "react";

const Main = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Book Your Appointment
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Phone"
            className="p-3 border rounded-lg"
          />
          <input type="date" className="p-3 border rounded-lg" />
          <textarea
            placeholder="Additional Notes"
            className="p-3 border rounded-lg md:col-span-2"
            rows="4"
          />
          <button className="bg-pink-600 text-white py-3 rounded-lg shadow hover:bg-pink-700 transition md:col-span-2">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Main;
