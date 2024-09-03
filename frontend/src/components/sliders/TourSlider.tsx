import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ReactNode } from "react";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export default function TourSlider({ settings, children }: SliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      loop={true}
      centeredSlides={false}
      {...settings}
    >
      {children}
    </Swiper>
  );
}
