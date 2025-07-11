import React from 'react';

const SearchFilterBar = ({ search, onSearchChange, genres, genre, onGenreChange, languages, language, onLanguageChange, onSubmit }) => (
  <form onSubmit={onSubmit} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', padding: '1.5rem 0', background: '#23233a', borderBottom: '1px solid #282846' }}>
    <input
      type="text"
      placeholder="Search movies..."
      value={search}
      onChange={e => onSearchChange(e.target.value)}
      style={{ padding: '0.7rem', borderRadius: 7, border: '1px solid #333', minWidth: 180, background: '#181829', color: '#f3f3f3', fontSize: '1rem' }}
    />
    <select value={genre} onChange={e => onGenreChange(e.target.value)} style={{ padding: '0.7rem', borderRadius: 7, border: '1px solid #333', background: '#181829', color: '#f3f3f3', fontSize: '1rem' }}>
      <option value="">All Genres</option>
      {genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
    </select>
    <select value={language} onChange={e => onLanguageChange(e.target.value)} style={{ padding: '0.7rem', borderRadius: 7, border: '1px solid #333', background: '#181829', color: '#f3f3f3', fontSize: '1rem' }}>
      <option value="">All Languages</option>
      {languages.map(l => <option key={l.iso_639_1} value={l.iso_639_1}>{l.english_name}</option>)}
    </select>
    <button type="submit" style={{ padding: '0.7rem 1.3rem', borderRadius: 7, background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '1.05rem', cursor: 'pointer', letterSpacing: 1 }}>Search</button>
  </form>
);

export default SearchFilterBar; 