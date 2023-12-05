// Banner.js
import React, { useState, useEffect } from 'react';
import './banner.css';
import MovieContent from '../components/MovieContent';
import MovieSwiper from '../components/MovieSwiper';

function Banner() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getMovie = () => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=95720290449bda3516db59a891a04122')
      .then(res => res.json())
      .then(data => {
        setMovieDetails(data.results);
        setSelectedMovie(data.results[0]); // Set the initial selected movie to the first in the array
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getMovie();
  }, []);

  const handleSlideChange = (selectedSlide) => {
    // Update the selected movie when a slide is clicked
    setSelectedMovie(selectedSlide);
  };

  return (
    <div className='banner'>
      <div className='movie'>
        {selectedMovie && (
          <>
            <img src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`} alt='' className='bgImg active' />
            <div className='Container-fluid'>
              <div className='row'>
                <div className="col-lg-6 col-md-12">
                  <MovieContent movieinfo={selectedMovie} />
                </div>
                <div className="col-lg-6 col-md-12">
                  <MovieSwiper slides={movieDetails} slideChange={handleSlideChange} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Banner;
