import React from 'react';

function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type="text"
        value={filterText}
        placeholder="Procurar..."
        onChange={(e) => onFilterTextChange(e.target.value)}
        style={{ padding: '8px', height: '10px', width: '800px', marginBottom: '16px' }}
      />
    </div>
  );
}

export default SearchBar;