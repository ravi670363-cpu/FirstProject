import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import './Home.css';
import heroVideo from '../assets/heroine.mp4';

const Home = () => {
  const [featuredProfiles, setFeaturedProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchFeaturedProfiles();
  }, []);

  const fetchFeaturedProfiles = async () => {
    try {
      const response = await axios.get('/api/profile/featured/profiles');
      setFeaturedProfiles(response.data);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <div className="home">
      <Navbar />
      
      <section className="hero">
        <video 
          className="hero-video-background"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Find Your Perfect Match</h1>
          <p className="hero-subtitle">Connect with amazing people who share your interests</p>
          
          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="Search by name, age, city, or interests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Profiles</h2>
          <div className="profiles-grid">
            {featuredProfiles.map((profile) => (
              <div key={profile.id} className="profile-card card">
                <div className="profile-image">
                  <img 
                    src={profile.profile_picture || 'https://via.placeholder.com/300'} 
                    alt={profile.name}
                  />
                </div>
                <div className="profile-info">
                  <h3>{profile.name}, {profile.age}</h3>
                  <p className="location">📍 {profile.city}</p>
                  <p className="bio">{profile.bio || 'No bio yet'}</p>
                  <button 
                    onClick={() => navigate(`/profile/${profile.id}`)}
                    className="btn btn-primary"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
