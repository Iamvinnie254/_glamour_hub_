import React from "react";
import Navbar from "../../../components/Navbar/Index/Main";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer/Index/Main";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
