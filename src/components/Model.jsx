import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Model.css';

function Model() {
  const { id } = useParams();
  console.log(id)
  const [tvShowDetails, setTvShowDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTvShowDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=95720290449bda3516db59a891a04122`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error('TV show details not found');
        }

        setTvShowDetails(data);
      } catch (firstError) {
        // If the TV show request fails, try fetching movie details
        try {
          const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=95720290449bda3516db59a891a04122`);
          const movieData = await movieResponse.json();

          if (!movieResponse.ok) {
            throw new Error('Movie details not found');
          }

          setTvShowDetails(movieData);
        } catch (secondError) {
          setError('Error fetching TV show or movie details');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchTvShowDetails();
  }, [id]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
console.log( tvShowDetails)

  return (
    <div className='container-fluid banner'>
      <img src={`https://image.tmdb.org/t/p/original/${tvShowDetails.backdrop_path}`} alt='' className='bgImg active' />
      <div className='row justify-content-center align-items-center'>
        <div className="col-lg-4 mt-5">
          <img src={`https://image.tmdb.org/t/p/original/${tvShowDetails.poster_path}`} alt='' className='img-fluid' />
        </div>
        <div className='col-lg-6'>
          {tvShowDetails && (
            <div>
              <h2 className='fw-bold f-3 text-white'>{tvShowDetails.name}</h2>
              {tvShowDetails.genres && tvShowDetails.genres.length > 0 && (
                <p className='f-5 text-white'><strong>Genres:</strong> {tvShowDetails.genres.map(genre => genre.name).join(', ')}</p>
              )}
              <p className='f-5 text-white'><strong>Overview:</strong> {tvShowDetails.overview}</p>
              <p className='f-5 text-white'><strong>First Air Date:</strong> {tvShowDetails.first_air_date}</p>
              <p className='f-5 text-white'><strong>Status:</strong> {tvShowDetails.status}</p>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Model;
