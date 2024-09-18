import { useState , React} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Recipes from './components/Recipes';
import About from './components/About';
import Search from './components/Search';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar/>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />

          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
