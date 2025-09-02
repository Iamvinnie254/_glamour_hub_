import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../src/pages/Layout/Index/Main";
import Home from "../src/pages/Home/Index/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
