import React from 'react';
import './trendCard.css';

function TrendCard({ slide }) {
    console.log(slide);
    return (
        <div className='trend-card'>
            <img className='img-fluid' src={`https://image.tmdb.org/t/p/original/${slide.poster_path}`} alt={slide.title} />
        </div>
    );
}

export default TrendCard;
