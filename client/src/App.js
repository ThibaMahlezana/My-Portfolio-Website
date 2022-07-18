import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';
import Footer from './components/Footer';

function Root(){
  return(
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Root />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="projectDetails" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
