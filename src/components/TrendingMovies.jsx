import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const API_KEY = '908e9ed7ae8063ffd7401fe6393aa2df';
const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(TRENDING_URL)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results || []);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: 'center', color: '#ffe082' }}>Loading trending movies...</p>;

  return (
    <section style={{ padding: '2.2rem 0 1.5rem 0', background: 'linear-gradient(135deg, #23233a 0%, #181829 100%)', borderRadius: '0 0 18px 18px', boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}>
      <h3 style={{ textAlign: 'center', color: '#ffe082', marginBottom: '1.5rem', fontSize: '2rem', letterSpacing: 1 }}>Trending Movies</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default TrendingMovies; 