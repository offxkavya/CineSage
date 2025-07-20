import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function getRandomAvatar(user) {
  let seed = user?.uid || user?.email || Math.random().toString();
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const avatarNum = Math.abs(hash) % 10 + 1; 

  return `https://randomuser.me/api/portraits/lego/${avatarNum}.jpg`;
}

const Profile = () => {
  const [user, setUser] = useState(null);
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u) {
        setUser(u);
      } else {
        navigate('/'); // Redirect to login if not authenticated
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/');
  };

  if (!user) return null;

  // Always use a random avatar if no photoURL or if the image fails to load
  const avatarUrl = (!user.photoURL || imgError)
    ? getRandomAvatar(user)
    : user.photoURL;

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '90vh', background: 'linear-gradient(135deg, #23233a 0%, #181829 100%)', padding: '2rem 0' }}>
        <div style={{ maxWidth: 400, margin: '3rem auto', background: '#23233a', borderRadius: 16, boxShadow: '0 4px 32px rgba(0,0,0,0.18)', padding: '2.2rem', color: '#f3f3f3', textAlign: 'center', position: 'relative' }}>
          <h1 style={{ color: '#ffe082', marginBottom: 24, fontSize: '2rem', letterSpacing: 1 }}>Profile</h1>
          <img
            src={avatarUrl}
            alt="Profile"
            style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', marginBottom: 16, background: '#181829', border: '3px solid #ffe082' }}
            onError={() => setImgError(true)}
          />
          <h2 style={{ color: '#ffe082', marginBottom: 8 }}>{user.displayName || 'No Name'}</h2>
          <p style={{ color: '#bbb', marginBottom: 24 }}>{user.email}</p>
          <button onClick={handleLogout} style={{ padding: '0.7rem 1.5rem', borderRadius: 8, background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.08rem', border: 'none', cursor: 'pointer', letterSpacing: 1 }}>Logout</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile; 