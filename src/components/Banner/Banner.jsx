import "./Banner.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [typeEffect] = useTypewriter({
    words: ["Painting", "Drawing"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="slide slide1">
            <div className="hero-content text-center text-white">
              <div className="">
                <h1 className="text-5xl font-bold">
                  Explore Our{" "}
                  <span className="text-[#f7d7b1]">{typeEffect}</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
            <div className="hero-content text-center text-white">
              <div className="">
                <h1 className="text-5xl font-bold">
                  Dive into the World of <br />
                  <span className="text-[#f7d7b1]">{typeEffect}</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">
            <div className="hero-content text-center text-white">
              <div className="">
                <h1 className="text-5xl font-bold">
                  Elevate Your Space with Stunning <br />
                  <span className="text-[#f7d7b1]">{typeEffect}</span>
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
