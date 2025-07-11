import React from 'react';

const MovieCard = ({ movie, onClick }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div
      onClick={onClick}
      style={{
        width: 180,
        margin: '1rem',
        background: 'linear-gradient(135deg, #23233a 0%, #181829 100%)',
        borderRadius: 12,
        boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
        overflow: 'hidden',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.15s, border 0.15s',
        border: '2px solid #23233a',
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'scale(1.04)';
        e.currentTarget.style.border = '2px solid #ffe082';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.border = '2px solid #23233a';
      }}
    >
      <img src={posterUrl} alt={movie.title} style={{ width: '100%', height: 270, objectFit: 'cover', background: '#181829' }} />
      <div style={{ padding: '0.7rem' }}>
        <h4 style={{ margin: '0.5rem 0', fontSize: '1.08rem', color: '#ffe082', fontWeight: 600 }}>{movie.title}</h4>
        <p style={{ color: '#bbb', fontSize: '0.97rem' }}>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;