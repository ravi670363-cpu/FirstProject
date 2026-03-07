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
            🌟 Escort in Ranchi Available 🌟 Premium Services 🌟 24/7 Available 🌟 Escort in Ranchi Available 🌟 Premium Services 🌟 24/7 Available 🌟
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
