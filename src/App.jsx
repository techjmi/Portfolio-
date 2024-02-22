
import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'
import About from './components/About';
// import Project from './components/Project';
import Home from './components/Home';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Projects';
// import Project from './components/Project';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
