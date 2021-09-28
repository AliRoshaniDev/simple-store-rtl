import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import useExternalData from "../hooks/useExternalData";
import { SliderItemType } from "../types/index";

SwiperCore.use([Navigation, Autoplay]);
(Autoplay as any).params.autoplay.delay = 5000;

function SlideShow() {
  const [sliderData, error, loading] = useExternalData<SliderItemType[]>(process.env.NEXT_PUBLIC_BASE_URL + "/slides") || [];

  return (
    <section className="w-full mb-10 2xl:px-12">
      <div className="container mx-auto">
        <Swiper navigation pagination autoplay loop={true} slidesPerView={1} className="shadow-lg rounded-xl">
          {loading && (
            <SwiperSlide className="h-56 sm:h-64 md:h-92 w-full">
              <div className="animate-pulse">
                <div className="h-56 sm:h-64 md:h-92 w-full object-fill bg-mycolor-dark bg-opacity-30"></div>
              </div>
            </SwiperSlide>
          )}
          {sliderData &&
            sliderData.map((item) => (
              <SwiperSlide key={item.id} className="h-56 sm:h-64 md:h-92 w-full">
                <Image layout="fill" objectFit="cover" src={process.env.NEXT_PUBLIC_BASE_URL?.includes("localhost") ? process.env.NEXT_PUBLIC_BASE_URL + picture[0].url : picture[0].url} alt={item.pictureAlt} key={item.id} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}

export default SlideShow;
