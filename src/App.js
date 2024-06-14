import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CookieConsent from './components/common/CookieConsent';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Flowers from './components/sections/Flowers';
import Contact from './components/sections/Contact';
import './i18n/i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/flowers" element={<Flowers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Suspense>
        <Footer /> {/* Upewnij się, że stopka jest tutaj tylko raz */}
        <CookieConsent />
      </div>
    </Router>
  );
};

export default App;
