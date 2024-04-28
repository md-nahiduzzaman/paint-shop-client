import "./Banner.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="slide slide1">
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">
                  Explore Painting and Drawing Masterpieces!
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">
                  Dive into the World of Painting and Drawing!
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">
                  Elevate Your Space with Stunning Artworks
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
