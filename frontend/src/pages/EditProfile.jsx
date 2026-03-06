import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import './Profile.css';

const EditProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bio: '',
    interests: '',
    hobbies: '',
    location: ''
  });
  const [profilePicture, setProfilePicture] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('/api/profile/me');
      setFormData({
        bio: response.data.bio || '',
        interests: response.data.interests?.join(', ') || '',
        hobbies: response.data.hobbies?.join(', ') || '',
        location: response.data.location || ''
      });
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const updateData = {
        ...formData,
        interests: formData.interests.split(',').map(i => i.trim()).filter(i => i),
        hobbies: formData.hobbies.split(',').map(h => h.trim()).filter(h => h)
      };

      await axios.put('/api/profile/update', updateData);

      if (profilePicture) {
        const formDataFile = new FormData();
        formDataFile.append('profilePicture', profilePicture);
        await axios.post('/api/profile/upload', formDataFile);
      }

      setMessage('Profile updated successfully!');
      setTimeout(() => navigate(`/profile/${user.id}`), 2000);
    } catch (error) {
      setMessage('Error updating profile');
      console.error(error);
    }
  };

  return (
    <div className="profile-page">
      <Navbar />
      
      <div className="container">
        <div className="profile-container">
          <div className="card" style={{ padding: '40px' }}>
            <h2>Edit Profile</h2>
            
            {message && (
              <div style={{ 
                padding: '12px', 
                marginBottom: '20px', 
                borderRadius: '8px',
                background: message.includes('success') ? '#d4edda' : '#f8d7da',
                color: message.includes('success') ? '#155724' : '#721c24'
              }}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Profile Picture</label>
                <input type="file" accept="image/*" onChange={handleFileChange} />
              </div>

              <div className="form-group">
                <label>Bio</label>
                <textarea
                  name="bio"
                  rows="4"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div className="form-group">
                <label>Interests (comma separated)</label>
                <input
                  type="text"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  placeholder="Travel, Music, Reading..."
                />
              </div>

              <div className="form-group">
                <label>Hobbies (comma separated)</label>
                <input
                  type="text"
                  name="hobbies"
                  value={formData.hobbies}
                  onChange={handleChange}
                  placeholder="Cooking, Hiking, Photography..."
                />
              </div>

              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, Country"
                />
              </div>

              <button type="submit" className="btn btn-primary full-width">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EditProfile;
