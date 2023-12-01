import React, { useState, useEffect } from 'react';
import './banner.css'
import MovieContent from '../components/MovieContent';
import MovieDate from '../components/MovieDate';



function Banner() {
    //   const [movieDetails, setMovieDetails] = useState([]);

    //   const getMovie = () => {
    //     fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=95720290449bda3516db59a891a04122')
    //       .then(res => res.json())
    //       .then(data => {
    //         console.log(data);
    //         setMovieDetails(data);
    //       })
    //       .catch(err => console.log(err));
    //   };

    //   useEffect(() => {
    //     getMovie();
    //   }, []);

    return (
        <div className='banner'>

            <div className='movie'>
                <img src='https://image.tmdb.org/t/p/original/xgGGinKRL8xeRkaAR9RMbtyk60y.jpg' alt='' className='bgImg active' />
                <div className='Container-fluid'>

                    <div className='row'>

                        <div className="col-lg-6 col-md-12">

                            <MovieContent />

                        </div>
                        <div className="col-lg-6 col-md-12">

                            <MovieDate />

                            <div className="trailer active d-flex align-item-center justify-content-center">
                                < a href='#' className='plyBtn'><ion-icon name="play-circle-outline"></ion-icon></a>
                                <p>Watch Trailer</p>
                            </div>

                        </div>


                    </div>

                </div>
            </div>

        </div>
    );
}

export default Banner;
