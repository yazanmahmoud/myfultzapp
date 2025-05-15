import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Brochures from './pages/Brochures';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Events from './pages/Events';
import History from './pages/History';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brochures" element={<Brochures />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
