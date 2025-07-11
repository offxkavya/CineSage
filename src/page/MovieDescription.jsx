import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const API_KEY = '908e9ed7ae8063ffd7401fe6393aa2df';

const MovieDescription = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Fetch movie details
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`)
      .then(res => res.json())
      .then(data => {
        setMovie(data);
        // Find trailer
        if (data.videos && data.videos.results) {
          const yt = data.videos.results.find(v => v.type === 'Trailer' && v.site === 'YouTube');
          setTrailer(yt ? yt.key : null);
        }
        setLoading(false);
      });
    // Fetch cast
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setCast(data.cast ? data.cast.slice(0, 8) : []));
  }, [id]);

  if (loading || !movie) return <p style={{ textAlign: 'center', margin: '2rem', color: '#ffe082' }}>Loading movie details...</p>;

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 900, margin: '2rem auto', background: 'linear-gradient(135deg, #23233a 0%, #181829 100%)', borderRadius: 16, boxShadow: '0 4px 32px rgba(0,0,0,0.18)', padding: '2.2rem', color: '#f3f3f3' }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'https://via.placeholder.com/300x450?text=No+Image'} alt={movie.title} style={{ borderRadius: 10, width: 220, height: 330, objectFit: 'cover', background: '#181829' }} />
          <div style={{ flex: 1 }}>
            <h2 style={{ color: '#ffe082', marginBottom: 8, fontSize: '2rem', letterSpacing: 1 }}>{movie.title}</h2>
            <p style={{ color: '#bbb', marginBottom: 8 }}>{movie.release_date} | {movie.original_language?.toUpperCase()}</p>
            <p style={{ marginBottom: 16 }}>{movie.overview}</p>
            {trailer && (
              <div style={{ margin: '1rem 0' }}>
                <h4 style={{ color: '#ffe082', marginBottom: 6 }}>Trailer:</h4>
                <iframe width="360" height="215" src={`https://www.youtube.com/embed/${trailer}`} title="Trailer" frameBorder="0" allowFullScreen style={{ borderRadius: 8, background: '#181829' }}></iframe>
              </div>
            )}
          </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#ffe082', marginBottom: 12, fontSize: '1.3rem', letterSpacing: 1 }}>Main Cast</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {cast.length === 0 ? <p>No cast info available.</p> : cast.map(member => (
              <div key={member.cast_id} style={{ width: 120, textAlign: 'center' }}>
                <img src={member.profile_path ? `https://image.tmdb.org/t/p/w185${member.profile_path}` : 'https://via.placeholder.com/120x180?text=No+Image'} alt={member.name} style={{ width: 100, height: 140, objectFit: 'cover', borderRadius: 8, marginBottom: 6, background: '#181829' }} />
                <div style={{ fontWeight: 'bold', fontSize: '0.95rem', color: '#ffe082' }}>{member.name}</div>
                <div style={{ color: '#bbb', fontSize: '0.85rem' }}>{member.character}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDescription; 