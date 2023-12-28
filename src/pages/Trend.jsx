import React, { useEffect, useState } from 'react';
import './trend.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import TrendCard from '../components/TrendCard';

function Trend({slider}) {
   

    return (
        <section className='trend'>
            <div className="container-fluid">
                <div className='row'>
                    <h4 className='section-title'>Now Playing </h4>
                </div>
                <div className="row">
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: 6,
                                spaceBetween: 30,
                            },
                        }}
                        spaceBetween={30}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className='trendSwiper'
                    >
                        {slider &&
                            slider.length > 0 &&
                            slider.map((slide) => (
                                <SwiperSlide key={slide.id}>
                                    <TrendCard slide={slide} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Trend;
