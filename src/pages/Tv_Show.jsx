// TVShows.jsx
import React,{useState,useEffect} from 'react';
import Header from './Header';
import Banner from './Banner';
import '../components/main.css'
import Schedule from '../components/Schedule';

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
    }, []); // Run only once when the component mounts
  
  


  return (
    <div>
    <Header />
    <Banner  movieDetails={movieDetails}/>
    <main><Schedule moviedetails1={moviedata1}/></main>
    </div>
  );
}

export default Tv_Show;
