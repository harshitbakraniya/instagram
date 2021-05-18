import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  const chatOpen = () => {
    localStorage.clear();
    localStorage.setItem("userName", props.name);
    localStorage.setItem("userImg", props.img);
    // let messageName = localStorage.getItem("userName");
    // let messageImg = localStorage.getItem("userImg");
    // alert(messageName + messageImg);
  };
  return (
    <Link to={"/chat"} style={{ textDecoration: "none" }}>
      <div className="item d-flex" onClick={chatOpen}>
        <img src={props.img} height="50" width="50" alt=".." />
        <div className="content mt-2">
          <p className="title">{props.name}</p>
          <p className="share">Shared Post By Fashion_0007 </p>
        </div>
        <i>{props.icon}</i>
      </div>
    </Link>
  );
};

export default ListItem;
