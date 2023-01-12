import Flotte from "@pages/Flotte";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flotte" element={<Flotte />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
