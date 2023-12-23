import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

function Card({ data }) {
  const movieTitle = data.name || data.original_title || data.original_name;
  const backdropPath = data.backdrop_path;

  return (
    <div className='col-lg-2 col-md-4 col-sm-6' key={data.id}>
      <div className="movie-card mt-5">
        {data.backdrop_path && (
          <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt='' className='img-fluid' />
        )}
        <div className='relese-date'>
          <p>Imdb: {data.vote_average ? data.vote_average.toFixed(1) : 'N/A'}</p>
          <p>{data.release_date}</p>
        </div>
        <div className="content">
          <h4>{movieTitle}</h4>
          <div className="card-icon">
            {movieTitle && (
              <Link to={{ pathname: `/movies/${data.id}`, state: { movieData: backdropPath } }}>
                <ion-icon name="information-circle-outline" />
              </Link>
            )}
            <ion-icon name="play-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
