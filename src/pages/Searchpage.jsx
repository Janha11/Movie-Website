import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Card from '../components/Card';
import './searchPage.css';

function Searchpage() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const apiKey = '95720290449bda3516db59a891a04122'; // Replace with your actual TMDB API key
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchValue}&include_adult=false&language=en-US&page=1`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    // Fetch search results only if there's a search value
    if (searchValue) {
      fetchSearchResults();
    } else {
      setSearchResults([]); // Clear results if search value is empty
    }
  }, [searchValue]);

  return (
    <div className="container mt-4">
      <input
        type="text"
        placeholder="Movie Tv-Show"
        onChange={handleChange}
        className="form-control form-control-lg"
      />

      <div className="row justify-content-center mt-4">
        {searchResults.map((result) => (
          <Card key={result.id} data={result} />
        ))}
      </div>
    </div>
  );
}

export default Searchpage;
