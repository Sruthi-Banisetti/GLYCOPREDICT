import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      
      <nav className="navbar">
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`} style={{ fontFamily: 'sans-serif', fontStyle: 'italic' }}>
          <Link to="/">Home</Link>
          <Link to="/about">AboutDiabetes</Link>
          <Link to="/health">HealthWellness</Link>
          <Link to="/FoodNutrition">FoodNutrition</Link>
          <Link to="/predict">Prediction</Link>
          
          
          <Link to="/contact-us">Contactus</Link>
          {/* <Link to="/dashboard">Dashboard</Link> */}
          
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
