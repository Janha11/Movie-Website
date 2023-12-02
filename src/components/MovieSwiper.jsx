import React from 'react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import './movieSwiper.css';

function MovieSwiper({ slides }) {
   
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 50,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={{ Autoplay, EffectCoverflow }}
      className="movieSwiper"
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <img src={`https://image.tmdb.org/t/p/original/${slide.poster_path}`} alt="CoverImage" />
          {console.log(slide.poster_path)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSwiper;
