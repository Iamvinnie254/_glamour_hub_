import React from "react";
import Hero from "../../../components/Hero/Index/Main";
import Booking from "../../../components/Book/Index/Main";
import Services from "../../../components/Services/Index/Main";
import About from "../../../components/About/Index/Main";
import Contact from "../../../components/ContactForm/Index/Main";
import Testimonials from "../../../components/Testimonials/Index/Main";
import Gallery from "../../../components/Gallery/Index/Main";

const Main = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Booking />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Main;
