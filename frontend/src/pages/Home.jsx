import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import './Home.css';
import heroVideo from '../assets/heroine.mp4';
import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';
import img4 from '../assets/images/img4.jpeg';
import img5 from '../assets/images/img5.jpeg';

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
      // Show mock data with real images
      setFeaturedProfiles([
        { id: 1, name: 'Priya', age: 24, city: 'Ranchi', bio: 'Available for premium escort services 24/7', profile_picture: img1, phone: '+91 9202695501' },
        { id: 2, name: 'Anjali', age: 26, city: 'Ranchi', bio: 'Professional escort service in Ranchi', profile_picture: img2, phone: '+91 9202695501' },
        { id: 3, name: 'Neha', age: 23, city: 'Ranchi', bio: 'VIP escort services available', profile_picture: img3, phone: '+91 9202695501' },
        { id: 4, name: 'Riya', age: 25, city: 'Ranchi', bio: 'Premium companion services', profile_picture: img4, phone: '+91 9202695501' },
        { id: 5, name: 'Simran', age: 27, city: 'Ranchi', bio: 'Elite escort services in Ranchi', profile_picture: img5, phone: '+91 9202695501' }
      ]);
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
          <h1 className="hero-title">Ranchi Escorts - Premium Call Girls</h1>
          <p className="hero-subtitle">Best escort services in Ranchi | Available 24/7 | VIP Companions</p>
          
          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="Search Ranchi escorts by name, age, or area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Ranchi Escorts</h2>
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
                  {profile.phone && (
                    <div className="contact-buttons">
                      <a href={`tel:${profile.phone}`} className="contact-btn call-btn">
                        📞 Call Now
                      </a>
                      <a href={`https://wa.me/919202695501`} target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp-btn">
                        💬 WhatsApp
                      </a>
                    </div>
                  )}
                  <button 
                    onClick={() => navigate(`/profile/${profile.id}`)}
                    className="btn btn-primary view-profile-btn"
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
