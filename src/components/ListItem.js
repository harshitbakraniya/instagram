import { React, useState } from "react";
import { IoDocumentOutline } from "react-icons/io5";
import Chat from "./Chat";

const ListItem = (props) => {
  const openMsg = () => {
    document.getElementById(props.name).style.right = "0";
  };
  return (
    <>
      <div className="item d-flex" onClick={openMsg}>
        <img src={props.img} height="50" width="50" alt="" />
        <div className="content mt-2">
          <p className="title">{props.name}</p>
          <p className="share">Shared Post By Fashion_0007 </p>
        </div>
        <i>{props.icon}</i>
      </div>
      <Chat id={props.name} img={props.img} name={props.name} />
    </>
  );
};

export default ListItem;
