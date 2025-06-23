import React from 'react';

function MovieCard({ movie }) {
  return (
    <div style={{
  backgroundColor: '#ffffff10',
  borderRadius: '10px',
  padding: '1rem',
  marginTop: '1rem',
  display: 'flex',
  gap: '1.5rem',
  color: '#fff',
  backdropFilter: 'blur(5px)'
}}>

  <img src={movie.Poster} alt={movie.Title} style={{ height: '300px', borderRadius: '8px' }} />
  <div>
    <h2 style={{ color: '#ffcc00' }}>{movie.Title} ({movie.Year})</h2>

    <p><strong>Genre:</strong> {movie.Genre}</p>
    <p><strong>Plot:</strong> {movie.Plot}</p>
    <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
  </div>
</div>

  );
}

export default MovieCard;
