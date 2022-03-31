import React, { useState } from "react";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper.scss";
import "./CarouselHome.scss";
export default function CarouselHome() {
  const [input, setInput] = useState("");
  const { Search } = Input;
  SwiperCore.use([Autoplay, EffectFade]);
  const onSearch = (value) => console.log(value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };
  return (
    <div>
      <div className="swiper">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="bg1"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg2"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg3"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg4"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg5"></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="responsiveContent"></div>
      <div className="contentMain ">
        <p className="text-white font-medium ">
          Find the perfect <i>freelance</i> services for your business
        </p>
        <form
          className="search flex"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="search"
            placeholder='Try "building mobile app"'
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
