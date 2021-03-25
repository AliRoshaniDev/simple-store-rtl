import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import useData from "../hooks/useData";

import sliderLoading from "../assets/images/png/slider-loading.png";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Autoplay]);

// Autoplay.params.autoplay.delay = 100

function SlideShow() {
  const sliderData = useData("http://localhost:3001/slides") || [];

  return (
    <section className="w-full mb-10">
      <div className="container mx-auto">
        <Swiper navigation pagination autoplay loop={true} slidesPerView={1} className="shadow-lg rounded-xl">
          {sliderData.length === 0 && (
            <SwiperSlide>
              <div className="animate-pulse">
                <img src={sliderLoading} alt="Loading" className="object-cover h-56 sm:h-64 md:h-92 w-full" />
              </div>
            </SwiperSlide>
          )}
          {sliderData.length !== 0 &&
            sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.picture} alt={item.pictureAlt} key={item.id} className="object-cover h-56 sm:h-64 md:h-92 w-full" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}

export default SlideShow;
