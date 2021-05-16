import React from "react";

const FollowItem = (props) => {
  return (
    <div className="follow-item d-flex">
      <img src={props.img} height="50" width="50" alt="" />
      <div className="content ml-2">
        <h6 className="name">
          {props.name}
          <p className="mt-1">{props.content}</p>
        </h6>
      </div>
      <div className="btn">Follow</div>
    </div>
  );
};

export default FollowItem;
