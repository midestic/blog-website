"use client";

import { Autoplay, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";

export default function Sponsors() {
  return (
    <Swiper
      modules={[Autoplay, Grid]}
      slidesPerView={3}
      grid={{ rows: 2 }}
      spaceBetween={150}
      loop
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      allowTouchMove={false}
      breakpoints={{
        320: { slidesPerView: 1, grid: { rows: 1 } },
        768: { slidesPerView: 2, grid: { rows: 1 } },
        1024: { slidesPerView: 3, grid: { rows: 1 } },
      }}
      className="w-full"
    >
      {[
        "/icons/marshal.svg",
        "/icons/tesla.svg",
        "/icons/kitkat.svg",
        "/icons/boss.svg",
      ].map((item, index) => (
        <SwiperSlide key={index}>
          <div className="h-[200px] w-full overflow-hidden">
            <img
              src={item}
              alt={`slide-${index}`}
              className="h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
