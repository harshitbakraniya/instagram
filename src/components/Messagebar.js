import React from "react";
import List from "./List";
import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

const Messagebar = (props) => {
  const closeMessagebar = () => {
    document.getElementById(props.mainId).style.marginLeft = "-100%";
  };
  return (
    <div className="messagebar">
      <div className="top">
        <div className="title d-flex">
          <i className="arrowLeft" onClick={closeMessagebar}>
            <BsArrowLeft />
          </i>
          <h6 className="">Messages</h6>
        </div>

        <div class="input-group">
          <AiOutlineSearch className="search" />
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>
      </div>
      <List itemData={props.value} />
    </div>
  );
};

export default Messagebar;
