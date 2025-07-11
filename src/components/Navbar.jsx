import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
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
    </div>
  </nav>
);

export default Navbar;