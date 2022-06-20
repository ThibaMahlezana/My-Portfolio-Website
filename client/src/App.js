import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
