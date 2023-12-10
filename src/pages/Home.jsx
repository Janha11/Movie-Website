import React, { useState, useEffect } from 'react'
import Banner from './Banner';
import Header from './Header';
import Main from '../components/Main'

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

    return (
        <div>
            <Header />
            <Banner  movieDetails={movieDetails}/>
            <Main />
        </div>
    )
}

export default Home
