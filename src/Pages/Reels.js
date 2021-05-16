import React, { useState } from "react";
import Video1 from "../assets/videos/Janmashtami.mp4";
import Video2 from "../assets/videos/Ganesha Chaturthi.mp4";
import profile1 from "../assets/images/photo-1.jpg";
import profile2 from "../assets/images/photo-5.jpg";
import profile3 from "../assets/images/photo-3.jpg";
import profile4 from "../assets/images/photo-7.jpg";
import Slide from "../components/Slide";
// Import Swiper React components
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.scss";
// Import Swiper styles
import "swiper/swiper.scss";
import { BiLike } from "react-icons/bi";
SwiperCore.use([Navigation]);
const Reels = (props) => {
  return (
    <div className="reels">
      <div className="container-fluid">
        <Swiper
          //   navigation
          spaceBetween={0}
          slidesPerView={1}
          direction={"vertical"}
          className="slider"
        >
          <SwiperSlide className="slide">
            <Slide
              id={1}
              video={Video1}
              img={profile1}
              like={200}
              comment="10"
              name="harshit gajjar"
              desc="I love it.. #love #gujarati #insta #india"
            />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Slide
              id={2}
              video={Video2}
              img={profile2}
              like={400}
              comment="20"
              name="harsh gohel"
              desc="Very Nice......... #love #gujarati #insta #india"
            />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Slide
              id={3}
              video={Video1}
              img={profile3}
              like={880}
              comment="45"
              name="vatsal dendpara"
              desc="Cool .... #love #insta #gujarati"
            />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <Slide
              id={4}
              video={Video2}
              img={profile4}
              like={110}
              comment="24"
              name="nitant joshi"
              desc=".......... #ganpati #love #fav"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reels;
