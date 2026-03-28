import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Search from './pages/Search';
import RanchiCallGirls from './pages/RanchiCallGirls';
import VIPEscortsRanchi from './pages/VIPEscortsRanchi';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/ranchi-call-girls" element={<RanchiCallGirls />} />
          <Route path="/vip-escorts-ranchi" element={<VIPEscortsRanchi />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
