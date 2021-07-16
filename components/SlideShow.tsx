import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import useExternalData from "../hooks/useExternalData";

SwiperCore.use([Navigation, Autoplay]);
// Autoplay.params.autoplay.delay = 100

function SlideShow() {
  const sliderData = useExternalData("/.netlify/functions/slides") || [];

  return (
    <section className="w-full mb-10">
      <div className="container mx-auto">
        <Swiper navigation pagination loop={true} slidesPerView={1} className="shadow-lg rounded-xl">
          {sliderData.length === 0 && (
            <SwiperSlide className=" h-56 sm:h-64 md:h-92 w-full">
              <div className="animate-pulse">
                <Image layout="fill" objectFit="cover" src="/images/others/slider-loading.png" alt="Loading" />
              </div>
            </SwiperSlide>
          )}
          {sliderData.length !== 0 &&
            sliderData.map((item) => (
              <SwiperSlide key={item.id} className="h-56 sm:h-64 md:h-92 w-full">
                <Image layout="fill" objectFit="cover" src={item.picture} alt={item.pictureAlt} key={item.id} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}

export default SlideShow;