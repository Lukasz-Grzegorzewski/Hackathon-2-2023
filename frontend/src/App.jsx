import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "@components/navbar/Navbar";
import Footer from "@components/footer/Footer";
import Flotte from "@pages/Flotte";
import Race from "@components/flotte/Race";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flotte" element={<Flotte />} />
        <Route path="/race" element={<Race />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
