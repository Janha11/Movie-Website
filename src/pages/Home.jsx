import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Header from './Header';
import Main from '../components/Main';
import Schedule from '../components/Schedule';
import Trend from './Trend';
import Footer from './Footer';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const fetchTrendingMovies = () => {
    fetch('https://api.themoviedb.org/3/trending/all/week?language=en-US&page=1&api_key=95720290449bda3516db59a891a04122')
      .then(res => res.json())
      .then(data => setTrendingMovies(data.results))
      .catch(err => console.log(err));
  };

  const fetchUpcomingMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=95720290449bda3516db59a891a04122')
      .then(res => res.json())
      .then(data => setUpcomingMovies(data.results))
      .catch(err => console.log(err));
  };

  const fetchNowPlayingMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=95720290449bda3516db59a891a04122')
      .then(res => res.json())
      .then(data => setNowPlayingMovies(data.results))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchTrendingMovies();
    fetchUpcomingMovies();
    fetchNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
      <Banner movieDetails={trendingMovies} />
      <Schedule moviedetails1={upcomingMovies} />
      <Trend slider={nowPlayingMovies} />
      <Footer/>
    </div>
  );
};

export default Home;
