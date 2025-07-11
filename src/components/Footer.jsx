import React from 'react';

const Footer = () => (
  <footer style={{ padding: '1rem', background: '#23233a', color: '#bbb', textAlign: 'center', borderTop: '1px solid #282846', marginTop: '2rem', fontSize: '0.98rem' }}>
    <small>&copy; {new Date().getFullYear()} CineSage. All rights reserved.</small>
  </footer>
);

export default Footer; 