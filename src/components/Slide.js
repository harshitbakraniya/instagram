import React, { useState } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { RiShareCircleFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

const Slide = (props) => {
  let [count, setCount] = useState(props.like);
  let [stop, setStop] = useState(true);
  let [icon, setIcon] = useState(<AiOutlineHeart />);

  let like = () => {
    if (stop) {
      setCount(count + 1);
      setIcon(<AiFillHeart />);
      document.getElementById(props.id).style.color = "rgb(235,7,96)";
    }
    setStop(false);
  };
  return (
    <>
      <video autoPlay muted loop onDoubleClick={like}>
        <source src={props.video}></source>
      </video>
      <div className="overlay" keys={props.id}>
        <div className="profile-detail">
          <img src={props.img} height="50" width="50" alt="" />
          <h6 className="mr-2">{props.name} -</h6>
          <a href="#" className="">
            Follow
          </a>
        </div>
        <p>{props.desc}</p>
        <div className="icons d-flex flex-column">
          <i className="icon">
            <i id={props.id} onClick={like}>
              {icon}
            </i>
            <h6>{count}</h6>
          </i>
          <i>
            <BiMessageRounded />
            <h6>{props.comment}</h6>
          </i>
          <i>
            <RiShareCircleFill />
          </i>
          <i>
            <BsThreeDotsVertical className="mt-4" />
          </i>
        </div>
      </div>
    </>
  );
};

export default Slide;
