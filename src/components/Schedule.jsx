import React, { useState, useEffect } from 'react';
import Card from './Card';
import Slides from './Slides';

function Schedule() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [moviedata, setmovieData] = useState([]);

  const getMovie = () => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=95720290449bda3516db59a891a04122')
      .then(res => res.json())
      .then(data => {
        setmovieData(data.results);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getMovie();
  }, []); // Run only once when the component mounts

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Run only once when the component mounts

  return (
    <section id='schedule' className='schedule'>
      <div className="container-fluid">
        <div className="row">
          <h4 className='section-title'>New Releases</h4>
        </div>
       
        <div className='row mt-5'>
          {isMobile ?
            <Slides key="slides" data={moviedata} /> :
            moviedata.map(movieData => <Card key={movieData.id} data={movieData} />)
          }
        </div>
      </div>
    </section>
  );
}

export default Schedule;
