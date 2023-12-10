import React from 'react';
import './moviecontentent.css';
import Button from 'react-bootstrap/Button';

function MovieContent({ movieinfo }) {
  // Destructure properties from the movieinfo object
  const { title,  overview, vote_average,first_air_date } = movieinfo;
console.log(movieinfo)
  // Extract year from the release_date
  const year = first_air_date? new Date(first_air_date).getFullYear() : '';

  return (
    <div className="content active">
      <h1 className='movie-title'>{title?title:movieinfo.name}</h1>
      <h4>
        <span>{year}</span>
        <span> Imdb:{vote_average.toFixed(1)}</span>
        
      </h4>
      <p>{overview}</p>
      <div className="button">
        <Button variant="light opacity-50">Info</Button>
      </div>
    </div>
  );
}

export default MovieContent;
