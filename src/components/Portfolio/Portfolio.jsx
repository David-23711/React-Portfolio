import React from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Hoc from '../../img/hoc.png';
import Musicapp from '../../img/musicapp.png';
import SideBar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
const Portfolio = () => {
  return (
    <div className='portfolio' id='Portfolio'>
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={SideBar} alt='sidebar' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt='ecommerce' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Musicapp} alt='musicapp' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt='hoc' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
