import React from 'react';

function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <div>
      <input
        type="text"
        value={filterText}
        placeholder="Buscar por mensagem ou autor..."
        onChange={(e) => onFilterTextChange(e.target.value)}
        style={{ padding: '8px', width: '300px', marginBottom: '16px' }}
      />
    </div>
  );
}

export default SearchBar;