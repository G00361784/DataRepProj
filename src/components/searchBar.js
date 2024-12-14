import React from 'react';

function SearchBar({ searchTerm, handleSearch }) {
  // Render an input field for searching
   return (
    <input
      type="text"
      placeholder="Search employees..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}

export default SearchBar;