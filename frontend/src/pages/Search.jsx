import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import './Search.css';

const PROFILES = [
  { id: 1, name: 'Priya', age: 24, city: 'Ranchi', bio: 'Available for premium escort services 24/7', profile_picture: 'https://randomuser.me/api/portraits/women/1.jpg', phone: '+91 9202695501' },
  { id: 2, name: 'Anjali', age: 26, city: 'Ranchi', bio: 'Professional escort service in Ranchi', profile_picture: 'https://randomuser.me/api/portraits/women/2.jpg', phone: '+91 9202695501' },
  { id: 3, name: 'Neha', age: 23, city: 'Ranchi', bio: 'VIP escort services available', profile_picture: 'https://randomuser.me/api/portraits/women/3.jpg', phone: '+91 9202695501' },
  { id: 4, name: 'Riya', age: 25, city: 'Ranchi', bio: 'Premium companion services', profile_picture: 'https://randomuser.me/api/portraits/women/4.jpg', phone: '+91 9202695501' },
  { id: 5, name: 'Simran', age: 27, city: 'Ranchi', bio: 'Elite escort services in Ranchi', profile_picture: 'https://randomuser.me/api/portraits/women/5.jpg', phone: '+91 9202695501' }
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const [profiles, setProfiles] = useState([]);
  const [filters, setFilters] = useState({
    query: searchParams.get('q') || '',
    minAge: '',
    maxAge: '',
    city: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    searchProfiles();
  }, []);

  const searchProfiles = async () => {
    try {
      const params = new URLSearchParams();
      Object.keys(filters).forEach(key => {
        if (filters[key]) params.append(key, filters[key]);
      });

      const response = await axios.get(`/api/profile/search/users?${params}`, {
        headers: {}
      });
      setProfiles(response.data);
    } catch (error) {
      console.error('Error searching profiles:', error);
      setProfiles(PROFILES);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchProfiles();
  };

  return (
    <div className="search-page">
      <Navbar />
      
      <div className="container">
        <div className="search-container">
          <div className="search-sidebar card">
            <h3>Filters</h3>
            <form onSubmit={handleSearch}>
              <div className="form-group">
                <label>Search</label>
                <input
                  type="text"
                  name="query"
                  placeholder="Name or city..."
                  value={filters.query}
                  onChange={handleFilterChange}
                />
              </div>

              <div className="form-group">
                <label>Min Age</label>
                <input
                  type="number"
                  name="minAge"
                  value={filters.minAge}
                  onChange={handleFilterChange}
                  min="18"
                />
              </div>

              <div className="form-group">
                <label>Max Age</label>
                <input
                  type="number"
                  name="maxAge"
                  value={filters.maxAge}
                  onChange={handleFilterChange}
                  min="18"
                />
              </div>

              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={filters.city}
                  onChange={handleFilterChange}
                />
              </div>

              <button type="submit" className="btn btn-primary full-width">
                Apply Filters
              </button>
            </form>
          </div>

          <div className="search-results">
            <h2>Search Results ({profiles.length})</h2>
            <div className="profiles-grid">
              {profiles.map((profile) => (
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Search;
