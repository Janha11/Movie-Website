// Banner.js
import React, { useState, useEffect } from 'react';
import './banner.css';
import MovieContent from '../components/MovieContent';
import MovieSwiper from '../components/MovieSwiper';

function Banner({ movieDetails }) {
  console.log(movieDetails);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Set the initial selected movie to the first in the array when movieDetails changes
    if (movieDetails.length > 0) {
      setSelectedMovie(movieDetails[0]);
    }
  }, [movieDetails]);

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
