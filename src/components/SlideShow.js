import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import useData from "../hooks/useData";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Autoplay]);

// Autoplay.params.autoplay.delay = 100

function SlideShow({ imgAlt }) {
  const sliderData = useData("http://localhost:3001/slides") || [];

  return (
    <section className="w-full mb-10">
      <div className="container mx-auto">
        <Swiper navigation pagination autoplay loop={true} slidesPerView={1} className="shadow-lg rounded-xl">
          {sliderData.map((item) => (
            <SwiperSlide>
              <img src={item.picture} alt={item.pictureAlt} key={item.id} className="object-cover h-56 sm:h-64 md:h-92 w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default SlideShow;
