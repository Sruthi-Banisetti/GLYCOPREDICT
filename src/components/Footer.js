import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/loginsignup">Login / Signup</Link>
        </div>
        <div className="footer-info">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
        <div className="footer-social ">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <div className="footer-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
            </div>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <div className="footer-logo">
            <img src="https://i.ibb.co/vQbfn5S/Screenshot-2024-12-22-210819.png" alt="Twitter" />
            </div>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <div className="footer-logo">
            <img src="https://i.ibb.co/wNJm6dx/Screenshot-2024-12-22-210700.png" alt="Instagram" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
