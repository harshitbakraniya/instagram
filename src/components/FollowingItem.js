import React from "react";

const FollowingItem = (props) => {
  return (
    <div className="following-item d-flex">
      <img src={props.img} height="50" width="50" alt="" />
      <div className="content ml-2">
        <p className="one mb-4">{props.name}</p>
        <p className="sec">{props.content}</p>
      </div>
    </div>
  );
};

export default FollowingItem;
