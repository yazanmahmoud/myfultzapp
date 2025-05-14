// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Brochures from './pages/Brochures';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Events from './pages/Events';
import History from './pages/History';
import './App.css';

function App() {
  return (
    <Router basename='/myfultzapp'>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/brochures" element={<Brochures />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
