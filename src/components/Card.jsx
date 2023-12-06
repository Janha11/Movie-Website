import React from 'react'
import'./card.css'

function Card({ key, data }) {
    return (
      <div className='col-lg-2 col-md-4 col-sm-6' key={key}>
        <div className="movie-card">
          <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt='' className='img-fluid' />
          <p>{data.original_title}</p>
          <div className="content">
            <h4>{data.original_title}</h4>
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
