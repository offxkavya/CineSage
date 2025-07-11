import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #23233a 0%, #181829 100%)' }}>
      <form onSubmit={handleSubmit} style={{ background: '#23233a', padding: '2.2rem 2.7rem', borderRadius: '14px', boxShadow: '0 4px 32px rgba(0,0,0,0.18)', display: 'flex', flexDirection: 'column', gap: '1.3rem', minWidth: 340 }}>
        <h2 style={{ textAlign: 'center', color: '#ffe082', marginBottom: '1rem', letterSpacing: 1 }}>Login to CineSage</h2>
        <input type="text" placeholder="Username" required style={{ padding: '0.8rem', borderRadius: '7px', border: '1px solid #333', fontSize: '1rem', background: '#181829', color: '#f3f3f3' }} />
        <input type="password" placeholder="Password" required style={{ padding: '0.8rem', borderRadius: '7px', border: '1px solid #333', fontSize: '1rem', background: '#181829', color: '#f3f3f3' }} />
        <button type="submit" style={{ padding: '0.8rem', borderRadius: '7px', background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.08rem', border: 'none', cursor: 'pointer', marginTop: '0.5rem', letterSpacing: 1 }}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm; 