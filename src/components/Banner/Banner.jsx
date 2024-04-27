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
                  Discover Your Dream Home Today
                </h1>
                <p className="py-6">
                  Explore our extensive listings of exquisite properties in
                  sought-after locations. From cozy cottages to luxurious
                  estates, we have the perfect home waiting for you.
                </p>
                <Link to="/register">
                  <button className="btn rounded bg-[#f7cd1b] border-none hover:bg-[#07b682]">
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">
                  Invest Wisely in Real Estate
                </h1>
                <p className="py-6">
                  Unlock the potential of real estate investment with our expert
                  guidance and personalized advice. Whether you're a seasoned
                  investor or a first-time buyer, we're here to help you make
                  informed decisions and maximize your returns.
                </p>
                <Link to="/register">
                  <button className="btn rounded bg-[#f7cd1b] border-none hover:bg-[#07b682]">
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Experience Luxury Living</h1>
                <p className="py-6">
                  Indulge in the epitome of luxury living with our exclusive
                  collection of high-end properties. From waterfront villas to
                  penthouse suites, immerse yourself in sophistication and
                  elegance at every turn.
                </p>
                <Link to="/register">
                  <button className="btn rounded bg-[#f7cd1b] border-none hover:bg-[#07b682]">
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
