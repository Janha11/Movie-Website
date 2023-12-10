// TVShows.jsx
import React,{useState,useEffect} from 'react';
import Header from './Header';
import Banner from './Banner';
import Main from '../components/Main';

function Tv_Show() {
  const [movieDetails, setMovieDetails] = useState([]);
    const getMovie = () => {
        fetch('https://api.themoviedb.org/3/trending/tv/week?language=en-US&api_key=95720290449bda3516db59a891a04122')
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
  );
}

export default Tv_Show;
