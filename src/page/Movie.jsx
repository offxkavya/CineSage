import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchFilterBar from '../components/SearchFilterBar';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';

const API_KEY = '908e9ed7ae8063ffd7401fe6393aa2df';

const Movie = () => {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('');
  const [language, setLanguage] = useState('');
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch genres
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(data => setGenres(data.genres || []));
  }, []);

  // Fetch languages
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/configuration/languages?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setLanguages(data || []));
  }, []);

  // Fetch movies
  const fetchMovies = (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
    if (genre) url += `&with_genres=${genre}`;
    if (language) url += `&with_original_language=${language}`;
    if (search) url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(search)}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results || []);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <SearchFilterBar
        search={search}
        onSearchChange={setSearch}
        genres={genres}
        genre={genre}
        onGenreChange={setGenre}
        languages={languages}
        language={language}
        onLanguageChange={setLanguage}
        onSubmit={fetchMovies}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', background: 'linear-gradient(135deg, #23233a 0%, #181829 100%)', minHeight: 400, padding: '2.2rem 0 1.5rem 0', borderRadius: '0 0 18px 18px', boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}>
        {loading ? <p style={{ color: '#ffe082' }}>Loading movies...</p> : movies.length === 0 ? <p style={{ color: '#ffe082' }}>No movies found.</p> : movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} onClick={() => navigate(`/movie/${movie.id}`)} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Movie; 