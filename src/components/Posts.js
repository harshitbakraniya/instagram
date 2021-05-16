import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import Post from "./Post";

const Posts = (props) => {
  return (
    <div className="posts" id="posts">
      <div className="all-posts">
        <div className="stories pt-2">
          <Swiper
            spaceBetween={0}
            slidesPerView={7}
            breakpoints={{
              // when window width is >= 640px
              300: {
                width: 400,
                slidesPerView: 4,
              },
            }}
          >
            {props.value.map((data) => {
              return (
                <SwiperSlide className="slide" key={data.id}>
                  <img src={data.img} className={data.classname} alt="" />
                  <h6>{data.name}</h6>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {props.post.map((data) => {
          return (
            <Post
              id={data.id}
              src={data.img}
              name={data.name}
              likes={data.likes}
              comments={data.comments}
              heart={data.heartIcon}
              comment={data.commentIcon}
              share={data.shareIcon}
              save={data.saveIcon}
              more={data.moreIcon}
            />
          );
        })}
        {/* <Post src={profile1} name="David Bromen" likes="1250" comments="190" />
          <Post src={profile2} name="David Bromen" likes="2300" comments="400" />
          <Post src={profile3} name="David Bromen" likes="300" comments="250" /> */}
      </div>
    </div>
  );
};

export default Posts;
