import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <div className="announcement-banner">
        <div className="announcement-content">
          <span className="announcement-text">
            💕 Ranchi Escorts 💕 Ranchi Call Girls 💕 Escort in Ranchi Available 24/7 💕 Premium VIP Services 💕 Call Now 💕 Ranchi Escorts 💕 Ranchi Call Girls 💕
          </span>
        </div>
      </div>
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo">
              <span className="logo-icon">📞</span>
              <span className="logo-text">CallAnytime</span>
            </Link>
            
            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/search" className="nav-link">Search</Link>
              <a href="tel:+919202695501" className="call-now-btn">
                📞 Call: 9202695501
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
