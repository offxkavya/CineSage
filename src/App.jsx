import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import Movie from './page/Movie';
import MovieDescription from './page/MovieDescription';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movie/:id" element={<MovieDescription />} />
      </Routes>
    </Router>
  );
}

export default App;