import { GrNext } from "react-icons/gr";
import { useSwiper } from "swiper/react";

function SwiperNavButton() {
  const swiper = useSwiper();
  return (
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 flex flex-col space-y-2">
      <button
        className="bg-gradient-to-r from-transparent to-[#111111] px-3 py-3 rounded-md"
        onClick={() => swiper.slideNext()}
      >
        <GrNext className="opacity-70 text-2xl ml-6" />
      </button>
    </div>
  );
}

export default SwiperNavButton;
