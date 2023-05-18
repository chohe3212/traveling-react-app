import React, { useState } from 'react';
import './Visual.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';


const Visual = () => {

    return (
      <div className='visual'>
        <Swiper className='swiper-container'
          modules={[Navigation, Pagination]}
          autoplay={true}
          loop = {true}
          slidesPerView={1}
          navigation
          pagination = {{clickable : true}}
          scrollbar = {{draggable : true}}>
          <SwiperSlide className='swiper-slide'>
          <section className ="visual1"  >
              <div className="text1">
                반갑습니다.
              </div>
              <div className="text2">
                당신의 여행을 돕는 Traveling입니다.
              </div>
          </section>
        </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
          <section className ="visual2">
              <div className="text1" >
                반갑습니다.
              </div>
              <div className="text2">
                당신의 여행을 돕는 Traveling입니다.
              </div>
          </section>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
          <section className ="visual3"  >
              <div className="text1">
                반갑습니다.
              </div>
              <div className="text2">
                당신의 여행을 돕는 Traveling입니다.
              </div>
          </section>
          </SwiperSlide>
        </Swiper>
      </div>
    )
}

export default Visual