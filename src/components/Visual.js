import React, { useState } from 'react';
import './Visual.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';

const Visual = () => {

    return (
      <div>
        <Swiper
          modules={[Navigation, Pagination]}

          slidesPerView={1}
          navigation
          pagination = {{clickable : true}}
          scrollbar = {{draggable : true}}>
          <SwiperSlide>
          <section className ="visual"  >
            <div className="inner" >
              <div className="text1">
                반갑습니다.
              </div>
              <div className="text2">
                당신의 여행을 돕는 Traveling입니다.
              </div>
            </div>
          </section>
        </SwiperSlide>
          <SwiperSlide>
          <section className ="visual"  >
            <div className="inner" >
              <div className="text1" >
                반갑습니다.
              </div>
              <div className="text2">
                당신의 여행을 돕는 Traveling입니다.
              </div>
            </div>
          </section>
          </SwiperSlide>
          <SwiperSlide>
          <section className ="visual"  >
            <div className="inner" >
              <div className="text1">
                반갑습니다.
              </div>
              <div className="text2">
                당신의 여행을 돕는 Traveling입니다.
              </div>
            </div>
          </section>
          </SwiperSlide>
        </Swiper>
      </div>
    )
}
export default Visual