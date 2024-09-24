import { useState, React } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import About from "./components/About";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

function App() {
  return (
    <>
      <Router>
        <div className="sm:w-full max-w-[1200px] m-auto">
          <Navbar />
          <div className="p-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/page" element={<Page />} />
            </Routes>
          </div>

          
        </div>
      </Router>
    </>
  );
}

export default App;
