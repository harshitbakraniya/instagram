import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { BsArrowLeft, BsCameraVideo, BsMic } from "react-icons/bs";
import { BiImageAlt } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import overImg from "../assets/images/photo-2.jpg";

const Chat = (props) => {
  const openMsg = () => {
    document.getElementById(props.idOfMsg).style.marginLeft = "-200%";
  };
  return (
    <div className="chatBox" id={props.id}>
      <div className="topbar d-flex">
        <i className="leftarrow" id="leftarrow2" onClick={openMsg}>
          <BsArrowLeft />
        </i>
        <img src={props.img} height="40" width="40" alt=".." />
        <label className="nameLabel">{props.name}</label>
        <div className="call ml-auto">
          <i>
            <IoCallOutline />
          </i>
          <i>
            <BsCameraVideo />
          </i>
        </div>
      </div>
      <div className="middleChat">
        <div className="chat">
          <div className="left d-flex">
            <img src={props.img} height="30" width="30" alt=".." />
            <label className="left-label">hello</label>
          </div>
          <div className="right d-flex">
            <label className="left-label">How are you?</label>
            <img src={overImg} height="30" width="30" alt=".." />
          </div>
          <div className="left d-flex">
            <img src={props.img} height="30" width="30" alt=".." />
            <label className="left-label">I am fine</label>
          </div>
          <div className="right d-flex">
            <label className="left-label">Good</label>
            <img src={overImg} height="30" width="30" alt=".." />
          </div>
        </div>
      </div>
      <div className="bottombar">
        <i className="camera">
          <AiOutlineCamera />
        </i>
        <input
          type="text"
          class="form-control "
          placeholder="Message.."
          // aria-label="Search"
          // aria-describedby="search-addon"
        />
        <i className="mic">
          <BsMic />
        </i>
        <i className="img">
          <BiImageAlt />
        </i>
      </div>
    </div>
  );
};

export default Chat;
