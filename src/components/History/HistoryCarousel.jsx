import React, { useEffect } from "react";
// import Swiper core and required modules
import { Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HistoryCarousel = () => {
  return (
    <div className="bg-[url('/src/assets/carousel-bg.png')] bg-no-repeat py-4">
      <div className="px-4 mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
        <Swiper
          modules={[Autoplay, Pagination, Scrollbar, A11y]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          centeredSlides={false}
          centerInsufficientSlides={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            375: {
              slidesPerView: 1,
            },
            425: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          // slidesPerView={4}
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src="/src/assets/carousel-1.png" alt="carousel-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/carousel-2.png" alt="carousel-2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/carousel-1.png" alt="carousel-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/carousel-2.png" alt="carousel-2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/carousel-1.png" alt="carousel-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/carousel-2.png" alt="carousel-2" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HistoryCarousel;
