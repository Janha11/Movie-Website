import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';  // Import navigation separately
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore from 'swiper/core'; 
import './slides.css'

// Import SwiperCore instead of named exports

// Import necessary modules from SwiperCore
import { FreeMode, Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Use SwiperCore modules
SwiperCore.use([FreeMode, Navigation, Pagination, Scrollbar]);
export default function MovieSwiper({ data }) {
  return (
    <Swiper
      slidesPerView={3}
     
      freeMode={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      scrollbar={{
        el: '.swiper-scrollbar',
        hide: false,
      }}
    >
      {data.map((movieData, index) => (
        <SwiperSlide key={index}>
          <div className=' movie-card ' >
            {movieData.backdrop_path && (
              <img src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`} alt='' className='img-fluid' />
            )}
            <p>{movieData.original_title}</p>
           
            <div className="content">
              <p>{movieData.original_title}</p>
              <div className="card-icon">
                <ion-icon name="add-outline"></ion-icon>
                <ion-icon name="play-outline"></ion-icon>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
