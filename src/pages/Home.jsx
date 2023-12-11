import React, { useState, useEffect } from 'react'
import Banner from './Banner';
import Header from './Header';
import Main from '../components/Main'
import Schedule from '../components/Schedule';

function Home() {
    const [movieDetails, setMovieDetails] = useState([]);
    const getMovie = () => {
        fetch('https://api.themoviedb.org/3/trending/all/week?language=en-US&page=1&api_key=95720290449bda3516db59a891a04122')
            .then(res => res.json())
            .then(data => {
                setMovieDetails(data.results);
                // Set the initial selected movie to the first in the array
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getMovie();
    }, []);
    const [moviedata1, setmovieData] = useState([]);
    const getMovie1 = () => {
      fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=95720290449bda3516db59a891a04122')
        .then(res => res.json())
        .then(data => {
          setmovieData(data.results);
        })
        .catch(err => console.log(err));
    };
  
    useEffect(() => {
      getMovie1();
    }, []); 

    return (
        <div>
            <Header />
            <Banner  movieDetails={movieDetails}/>
            <Schedule moviedetails1={moviedata1}/>
        </div>
    )
}

export default Home
