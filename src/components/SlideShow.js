import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Autoplay]);

// Autoplay.params.autoplay.delay = 100

function SlideShow() {
  return (
    <section className="w-full mb-10">
      <div className="container mx-auto">
        <Swiper navigation pagination autoplay loop={true} slidesPerView={1} className="shadow-lg rounded-box">
          <SwiperSlide>
            <img src="/images/slide1.jpg" className="object-cover h-56 sm:h-64 md:h-88 w-full" alt="SomeThing" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/slide2.jpg" className="object-cover h-56 sm:h-64 md:h-88 w-full" alt="SomeThing" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/slide3.jpg" className="object-cover h-56 sm:h-64 md:h-88 w-full" alt="SomeThing" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default SlideShow;
