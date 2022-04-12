import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import c1 from '../assets/cimages/c1.jpg';
import c2 from '../assets/cimages/c2.jpg';

function BannerSlider() {
  return (
    <div style={{ marginLeft: "18vw", marginRight: "18vw", marginTop: "12vh" }}>
      <Swiper
        spaceBetween={80}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 1000 }}
      >
        <SwiperSlide><img src={c2} style={{ height: "300px" }} /></SwiperSlide>
        <SwiperSlide><img src={c1} style={{ height: "300px" }} /></SwiperSlide>
        <SwiperSlide><img src={c2} style={{ height: "300px" }} /></SwiperSlide>
        <SwiperSlide><img src={c1} style={{ height: "300px" }} /></SwiperSlide>
      </Swiper>
      <div style={{marginLeft:"10vw", marginTop: "30px" }}>
        <span class="ui huge brown text">Some
          <span class="ui  yellow text"> Glimpses </span> of Our Events
        </span>
      </div>
    </div >
  )
};

export default BannerSlider;