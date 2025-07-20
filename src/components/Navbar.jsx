import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Navbar = () => {
  const [user, setUser] = useState(auth.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsubscribe();
  }, []);

  return (
    <nav style={{
      padding: '1rem 2rem',
      background: 'linear-gradient(90deg, #23233a 0%, #181829 100%)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.7rem', letterSpacing: 1, color: '#ffe082' }}>
        CineSage
      </div>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({
            color: isActive ? '#ffe082' : '#f3f3f3',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '1.1rem',
            transition: 'color 0.2s'
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          style={({ isActive }) => ({
            color: isActive ? '#ffe082' : '#f3f3f3',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '1.1rem',
            transition: 'color 0.2s'
          })}
        >
          Movies
        </NavLink>
        {!user && (
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#ffe082' : '#f3f3f3',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '1.1rem',
              transition: 'color 0.2s'
            })}
          >
            Login
          </NavLink>
        )}
        <div
          style={{ marginLeft: 16, cursor: 'pointer' }}
          onClick={() => navigate('/profile')}
          role="button"
          aria-label="Go to profile"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="18" fill="#ffe082" />
            <path
              d="M18 19c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.33 0-10 1.667-10 5v2h20v-2c0-3.333-6.67-5-10-5z"
              fill="#23233a"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;