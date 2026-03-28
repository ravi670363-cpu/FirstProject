import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

const profiles = [
  { id: 1, name: 'Priya', age: 24, city: 'Ranchi', bio: 'VIP escort in Ranchi - Premium services', profile_picture: 'https://randomuser.me/api/portraits/women/6.jpg' },
  { id: 2, name: 'Anjali', age: 26, city: 'Ranchi', bio: 'High class VIP escort Ranchi', profile_picture: 'https://randomuser.me/api/portraits/women/7.jpg' },
  { id: 3, name: 'Neha', age: 23, city: 'Ranchi', bio: 'Elite VIP escort service Ranchi', profile_picture: 'https://randomuser.me/api/portraits/women/8.jpg' },
  { id: 4, name: 'Riya', age: 25, city: 'Ranchi', bio: 'Model VIP escort in Ranchi', profile_picture: 'https://randomuser.me/api/portraits/women/9.jpg' },
  { id: 5, name: 'Simran', age: 27, city: 'Ranchi', bio: 'Premium VIP escort Ranchi', profile_picture: 'https://randomuser.me/api/portraits/women/10.jpg' },
];

const VIPEscortsRanchi = () => {
  return (
    <div className="home">
      <Navbar />
      <div style={{ background: '#0f0f1e', padding: '60px 0' }}>
        <div className="container">
          <h1 style={{ color: '#ff6b9d', fontSize: '42px', textAlign: 'center', marginBottom: '20px' }}>
            VIP Escorts Ranchi - Premium Escort Service
          </h1>
          <p style={{ color: 'white', textAlign: 'center', fontSize: '18px', marginBottom: '40px' }}>
            Elite VIP escort services in Ranchi. Call: <a href="tel:+919202695501" style={{ color: '#ff6b9d' }}>9202695501</a>
          </p>
          <div className="profiles-grid">
            {profiles.map((profile) => (
              <div key={profile.id} className="profile-card card">
                <div className="profile-image">
                  <img src={profile.profile_picture} alt={`VIP escort ${profile.name} Ranchi`} />
                </div>
                <div className="profile-info">
                  <h2>{profile.name}, {profile.age}</h2>
                  <p className="location">📍 {profile.city}</p>
                  <p className="bio">{profile.bio}</p>
                  <div className="contact-buttons">
                    <a href="tel:+919202695501" className="contact-btn call-btn">📞 Call Now</a>
                    <a href="https://wa.me/919202695501" target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp-btn">💬 WhatsApp</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '60px', color: 'white', lineHeight: '1.8' }}>
            <h2 style={{ color: '#ff6b9d', marginBottom: '20px' }}>VIP Escort Service in Ranchi</h2>
            <p>Experience the finest <strong style={{ color: '#ff6b9d' }}>VIP escort service in Ranchi</strong>. Our premium escorts are handpicked for their beauty and professionalism. Available 24/7.</p>
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <a href="tel:+919202695501" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: '50px', background: 'linear-gradient(135deg, #ff6b9d, #c06c84)', color: 'white', textDecoration: 'none', fontWeight: '700', fontSize: '18px' }}>
                📞 Book VIP Escort: 9202695501
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VIPEscortsRanchi;
