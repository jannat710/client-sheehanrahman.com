"use client";

import ActionButton from "@/partials/elements/ActionButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperNavButton from "./components/SwiperNavButton";

import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function SwiperSlider({ buttons, slidesPerView = 15 }) {
  return (
    <div className="relative pt-10 pb-14">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        className="w-full"
      >
        <div className="flex space-x-2">
          {buttons.map((text) => (
            <SwiperSlide key={text}>
              <ActionButton text={text} />
            </SwiperSlide>
          ))}
        </div>
        <SwiperNavButton />
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
