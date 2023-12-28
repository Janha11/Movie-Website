// TVShows.jsx
import React,{useState,useEffect} from 'react';
import Header from './Header';
import Banner from './Banner';
import '../components/main.css'
import Schedule from '../components/Schedule';
import Trend from './Trend';
import Footer from './Footer';
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
      fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=95720290449bda3516db59a891a04122')
        .then(res => res.json())
        .then(data => {
          setmovieData(data.results);
        })
        .catch(err => console.log(err));
    };
  
    useEffect(() => {
      getMovie1();
    }, []); 

    const [slider, setSlides] = useState([]);
    const fetchData = () => {
      fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&api_key=95720290449bda3516db59a891a04122')
          .then(response => response.json())
          .then(data => setSlides(data.results))  // Extract the movies array from the API response
          .catch(err => console.error(err));
  }
useEffect=(()=>{
  fetchData()
},[])
  


  return (
    <div>
    <Header />
    <Banner  movieDetails={movieDetails}/>
    <main><Schedule moviedetails1={moviedata1}/></main>
    <Trend slider={slider}/>
    <Footer/>
    </div>
  );
}

export default Tv_Show;
