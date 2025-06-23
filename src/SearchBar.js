import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [title, setTitle] = useState('');

  const handleSearch = () => {
    if (title.trim()) {
      onSearch(title.trim());
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter movie title..."
        style={{ padding: '0.5rem', width: '300px' }}
      />
      <button
  onClick={handleSearch}
  style={{
    padding: '0.7rem 1.5rem',
    marginLeft: '1rem',
    backgroundColor: '#e50914',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  }}
>
  Search
</button>

    </div>
  );
}

export default SearchBar;
