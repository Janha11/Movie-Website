import React from 'react';
import './movieSwiper.css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


import { Autoplay, EffectCoverflow ,Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function MovieSwiper({ slides,slideChange }) {
   
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={false}
    modules={[EffectCoverflow, Pagination]}
    className="movieSwiper"
  >
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <img src={`https://image.tmdb.org/t/p/original/${slide.poster_path}`} onClick={() => slideChange(slide.id)} alt="CoverImage" />
          {console.log(slide.poster_path) }
          
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSwiper;
