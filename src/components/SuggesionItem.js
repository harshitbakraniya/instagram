import React from "react";

const SuggesionItem = (props) => {
  return (
    <div className="suggesion-item d-flex">
      <img src={props.img} height="50" width="50" alt=".." />
      <div className="content ml-2 mt-1">
        <h6 className="one">{props.name}</h6>
        <p className="sec">{props.nickname}</p>
      </div>
      <div className="btn ml-auto">Follow</div>
    </div>
  );
};

export default SuggesionItem;
