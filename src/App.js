import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import './index.css'; // Keep this for layout styling

function App() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const API_KEY = 'b886fba9'; // Replace with your OMDB API key

  const fetchMovie = async (title) => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`);
      const data = await res.json();
      if (data.Response === 'False') {
        setError(data.Error);
        setMovie(null);
      } else {
        setMovie(data);
        setError('');
      }
    } catch (err) {
      setError('Something went wrong.');
      setMovie(null);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/Moviebackground.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="app-container">
        <h1 className="main-title">🎬 SRT CineLite</h1>
        <SearchBar onSearch={fetchMovie} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {movie && <MovieCard movie={movie} />}
      </div>
    </div>
  );
}

export default App;
