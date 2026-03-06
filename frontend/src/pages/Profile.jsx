import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, [id]);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`/api/profile/${id}`);
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  if (!profile) return <div>Loading...</div>;

  const isOwnProfile = user && user.id === parseInt(id);

  return (
    <div className="profile-page">
      <Navbar />
      
      <div className="container">
        <div className="profile-container">
          <div className="profile-header card">
            <div className="profile-picture">
              <img 
                src={profile.profile_picture || 'https://via.placeholder.com/400'} 
                alt={profile.name}
              />
            </div>
            
            <div className="profile-details">
              <h1>{profile.name}, {profile.age}</h1>
              <p className="location">📍 {profile.city}</p>
              <p className="email">✉️ {profile.email}</p>
              
              {isOwnProfile && (
                <button 
                  onClick={() => navigate('/profile/edit')}
                  className="btn btn-primary"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          <div className="profile-content">
            <div className="profile-section card">
              <h3>About Me</h3>
              <p>{profile.bio || 'No bio added yet'}</p>
            </div>

            <div className="profile-section card">
              <h3>Interests</h3>
              <div className="tags">
                {profile.interests && profile.interests.length > 0 ? (
                  profile.interests.map((interest, index) => (
                    <span key={index} className="tag">{interest}</span>
                  ))
                ) : (
                  <p>No interests added yet</p>
                )}
              </div>
            </div>

            <div className="profile-section card">
              <h3>Hobbies</h3>
              <div className="tags">
                {profile.hobbies && profile.hobbies.length > 0 ? (
                  profile.hobbies.map((hobby, index) => (
                    <span key={index} className="tag">{hobby}</span>
                  ))
                ) : (
                  <p>No hobbies added yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
