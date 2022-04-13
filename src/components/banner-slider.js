import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import c1 from '../assets/cimages/c1.jpg';
import c2 from '../assets/cimages/c2.jpg';

function BannerSlider() {
  return (
    <div>
      <Swiper
        spaceBetween={80}
        slidesPerView={2}
        autoplay={{ delay: 1000 }}
      >
        <SwiperSlide><img src={c2} style={{ height: "300px" }} /></SwiperSlide>
        <SwiperSlide><img src={c1} style={{ height: "300px" }} /></SwiperSlide>
        <SwiperSlide><img src={c2} style={{ height: "300px" }} /></SwiperSlide>
        <SwiperSlide><img src={c1} style={{ height: "300px" }} /></SwiperSlide>
      </Swiper>
    </div >
  )
};

export default BannerSlider;