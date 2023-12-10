import React from 'react'
import'./card.css'
import { format } from 'date-fns'; 

function Card({ key, data }) {
    return (
      <div className='col-lg-2 col-md-4' key={key}>
        <div className="movie-card">
        {data.backdrop_path && (
          <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt='' className='img-fluid' />
        )}
          <p>{data.original_title}</p>
          <div className='relese-date'>
          <p style={{fontWeight: 200, opacity: 0.7 }}>{data.vote_average.toFixed(1)}</p>
          <p style={{fontWeight: 200, opacity: 0.7 }}>{(data.release_date)}</p>
          </div>
          <div className="content">
            <p>{data.original_title}</p>
            <div className="card-icon">
              <ion-icon name="add-outline"></ion-icon>
              <ion-icon name="play-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
  

export default Card
