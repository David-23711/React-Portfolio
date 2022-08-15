import React from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Hoc from '../../img/hoc.png';
import Musicapp from '../../img/musicapp.png';
import SideBar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';

import Manga from '../../img/manga.png';
import Ps5 from '../../img/ps5.png';
import Series from '../../img/series.png';
import GameShop from '../../img/gameshop.png';
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
          <img src={Manga} alt='sidebar' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Series} alt='ecommerce' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GameShop} alt='musicapp' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ps5} alt='hoc' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
