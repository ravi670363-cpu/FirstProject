import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import './Home.css';

// Video loaded from public folder
const heroVideo = '/heroine.mp4';

const PROFILES = [
  { id: 1, name: 'Priya', age: 24, city: 'Ranchi', bio: 'Available for premium escort services 24/7', profile_picture: 'https://randomuser.me/api/portraits/women/1.jpg', phone: '+91 9202695501' },
  { id: 2, name: 'Anjali', age: 26, city: 'Ranchi', bio: 'Professional escort service in Ranchi', profile_picture: 'https://randomuser.me/api/portraits/women/2.jpg', phone: '+91 9202695501' },
  { id: 3, name: 'Neha', age: 23, city: 'Ranchi', bio: 'VIP escort services available', profile_picture: 'https://randomuser.me/api/portraits/women/3.jpg', phone: '+91 9202695501' },
  { id: 4, name: 'Riya', age: 25, city: 'Ranchi', bio: 'Premium companion services', profile_picture: 'https://randomuser.me/api/portraits/women/4.jpg', phone: '+91 9202695501' },
  { id: 5, name: 'Simran', age: 27, city: 'Ranchi', bio: 'Elite escort services in Ranchi', profile_picture: 'https://randomuser.me/api/portraits/women/5.jpg', phone: '+91 9202695501' }
];

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
      setFeaturedProfiles(PROFILES);
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
          
          <div className="hero-contact-buttons">
            <a href="tel:+919202695501" className="hero-contact-btn call-btn">
              📞 Call Now: 9202695501
            </a>
            <a href="https://wa.me/919202695501" target="_blank" rel="noopener noreferrer" className="hero-contact-btn whatsapp-btn">
              💬 WhatsApp Now
            </a>
          </div>
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

      <section className="seo-section">
        <div className="container">
          <h2>Ranchi Escorts - Premium Call Girls Service</h2>
          <p>Welcome to <strong>CallAnytime</strong>, the most trusted <strong>Ranchi escort service</strong>. We provide premium <strong>Ranchi call girls</strong> available 24/7 for your companionship needs. Our verified profiles ensure you get the best experience with top-rated <strong>escorts in Ranchi</strong>.</p>

          <div className="seo-grid">
            <div className="seo-card">
              <h3>🌟 Ranchi Call Girls</h3>
              <p>Find beautiful and verified <strong>call girls in Ranchi</strong>. All profiles are real with genuine photos. Book instantly by calling <strong>9202695501</strong>.</p>
            </div>
            <div className="seo-card">
              <h3>💎 VIP Escort Service Ranchi</h3>
              <p>Premium <strong>VIP escort services in Ranchi</strong> for elite clients. Discreet, professional, and available round the clock for your pleasure.</p>
            </div>
            <div className="seo-card">
              <h3>📞 24/7 Available</h3>
              <p>Our <strong>Ranchi escorts</strong> are available anytime day or night. Call or WhatsApp <strong>9202695501</strong> for instant booking and service.</p>
            </div>
            <div className="seo-card">
              <h3>✅ Verified Profiles</h3>
              <p>All <strong>Ranchi call girl</strong> profiles are 100% verified with real photos. Safe, secure, and trusted <strong>escort service in Ranchi</strong>.</p>
            </div>
          </div>

          <div className="faq-section">
            <h2>Frequently Asked Questions - Ranchi Escorts</h2>
            <div className="faq-item">
              <h3>How to contact Ranchi escorts?</h3>
              <p>Call or WhatsApp us at <strong>9202695501</strong> for instant booking of Ranchi escorts. Available 24/7.</p>
            </div>
            <div className="faq-item">
              <h3>Are Ranchi call girls available 24/7?</h3>
              <p>Yes, our Ranchi escort services are available 24 hours a day, 7 days a week including holidays.</p>
            </div>
            <div className="faq-item">
              <h3>What areas in Ranchi do you serve?</h3>
              <p>We provide escort services across all areas of Ranchi including Doranda, Kanke, Lalpur, Harmu, Ratu Road, and all major hotels.</p>
            </div>
            <div className="faq-item">
              <h3>Are the escort profiles real?</h3>
              <p>Yes, all profiles on CallAnytime are 100% real and verified with genuine photos of Ranchi escorts.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
