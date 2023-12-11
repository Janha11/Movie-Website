import React, { useState, useEffect } from 'react';
import Card from './Card';
import Slides from './Slides';

function Schedule({ moviedetails1 }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Run only once when the component mounts



  return (
    <section id='schedule' className='schedule'>
      <div className="container-fluid">
        <div className="row">
          <h4 className='section-title'>New Releases</h4>
        </div>

        <div className='row mt-5'>
          {isMobile ?
            <Slides key="slides" data={moviedetails1} /> :
            moviedetails1.map(movieData => <Card key={movieData.id} data={movieData} />)
          }
        </div>
      </div>
    </section>
  );
}

export default Schedule;
