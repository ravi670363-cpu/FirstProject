import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>📞 CallAnytime</h3>
            <p>Premium Ranchi Escorts & Call Girls</p>
            <p>Available 24/7 in Ranchi</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: support@callanytime.com</p>
            <p>Phone: +91 9202695501</p>
            <p>Location: Ranchi, Jharkhand</p>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 CallAnytime - Ranchi Escorts | Ranchi Call Girls | Premium Escort Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
