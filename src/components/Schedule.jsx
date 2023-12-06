import React, { useState,useEffect } from 'react'
import Card from './Card';
function Schedule() {  
    const [moviedata,setmovieData]=useState([])
    const getMovie = () => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=95720290449bda3516db59a891a04122')
          .then(res => res.json())
          .then(data => {
            setmovieData(data.results);
            console(moviedata)
            
          })
          .catch(err => console.log(err));
      };
    
      useEffect(() => {
        getMovie();
      }, []);
    

  return (
  

    <section id ='schedule' className='schedule'>
        <div className="container-fluid">
            <div className="row">
                <h4 className='section-title'>New Releases</h4>
            </div>
            <div className='row'>
                <div className='fileter'>
                    <p>Filter</p>
                </div>
            </div>
            <div className='row mt-5'>
                {moviedata.map(moviedata=> <Card key={moviedata._id} data={moviedata}/>)}

            </div>

        </div>
    </section>
  )
}

export default Schedule
