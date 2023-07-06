
import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './Component/Header';
import Projet from './Component/Projet';
import Home from './Component/Home';
import About from './Component/About';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import Testimonial from './Component/Testimonial';



function App() {
  

  return (
    
           
            <Router>
              
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projets" element={<Projet />} />
                  {/* <Route path="/test-param/:id" element={<Projet />} /> */}
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/testimonial" element={<Testimonial />} />
                </Routes>
                <div>
                <Footer className="Footer" />
              </div>
            
            </Router>
         
  );
}

export default App;
