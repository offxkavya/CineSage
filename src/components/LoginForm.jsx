import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const LoginForm = ({ onClose }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setLoading(false);
      if (onClose) onClose();
      navigate('/dashboard');
    } catch (err) {
      setLoading(false);
      setError(isSignUp ? 'Sign up failed. Email may already be in use.' : 'Invalid email or password.');
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setLoading(false);
      if (onClose) onClose();
      navigate('/dashboard');
    } catch (err) {
      setLoading(false);
      setError('Google sign-in failed.');
    }
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(24,24,41,0.95)', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 2000 }}>
      <form onSubmit={handleSubmit} style={{ background: '#23233a', padding: '2.2rem 2.7rem', borderRadius: '14px', boxShadow: '0 4px 32px rgba(0,0,0,0.18)', display: 'flex', flexDirection: 'column', gap: '1.3rem', minWidth: 340, position: 'relative' }}>
        {onClose && (
          <button type="button" onClick={onClose} style={{ position: 'absolute', top: 10, right: 10, background: 'none', border: 'none', color: '#ffe082', fontSize: 24, cursor: 'pointer' }}>&times;</button>
        )}
        <h2 style={{ textAlign: 'center', color: '#ffe082', marginBottom: '1rem', letterSpacing: 1 }}>{isSignUp ? 'Sign Up for CineSage' : 'Login to CineSage'}</h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ padding: '0.8rem', borderRadius: '7px', border: '1px solid #333', fontSize: '1rem', background: '#181829', color: '#f3f3f3' }} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ padding: '0.8rem', borderRadius: '7px', border: '1px solid #333', fontSize: '1rem', background: '#181829', color: '#f3f3f3' }} />
        {error && <div style={{ color: 'red', textAlign: 'center', fontSize: '0.98rem' }}>{error}</div>}
        <button type="submit" disabled={loading} style={{ padding: '0.8rem', borderRadius: '7px', background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', color: '#fff', fontWeight: 'bold', fontSize: '1.08rem', border: 'none', cursor: 'pointer', marginTop: '0.5rem', letterSpacing: 1 }}>{loading ? (isSignUp ? 'Signing Up...' : 'Logging In...') : (isSignUp ? 'Sign Up' : 'Login')}</button>
        <button type="button" onClick={handleGoogleLogin} disabled={loading} style={{ padding: '0.8rem', borderRadius: '7px', background: '#fff', color: '#23233a', fontWeight: 'bold', fontSize: '1.08rem', border: 'none', cursor: 'pointer', marginTop: '0.5rem', letterSpacing: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" style={{ width: 22, height: 22, borderRadius: '50%' }} />
          {loading ? 'Please wait...' : 'Continue with Google'}
        </button>
        <div style={{ textAlign: 'center', marginTop: 8 }}>
          {isSignUp ? (
            <span style={{ color: '#bbb' }}>Already have an account?{' '}
              <button type="button" onClick={() => setIsSignUp(false)} style={{ color: '#ffe082', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Login</button>
            </span>
          ) : (
            <span style={{ color: '#bbb' }}>Don’t have an account?{' '}
              <button type="button" onClick={() => setIsSignUp(true)} style={{ color: '#ffe082', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Sign Up</button>
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm; 