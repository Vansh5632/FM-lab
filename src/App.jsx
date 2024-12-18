import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "../src/pages/HomePage";
import ExperimentPage from "../src/pages/ExperimentPage";
import CalculatorPage from "../src/pages/CalculatorPage";
import Footer from "../src/components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiments" element={<ExperimentPage />} />
        <Route path="/calculators" element={<CalculatorPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
