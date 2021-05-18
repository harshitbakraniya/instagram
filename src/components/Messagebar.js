import React from "react";
import List from "./List";
import { Link } from "react-router-dom";
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
          <Link to="/instagram" onClick={closeMessagebar}>
            <i className="arrowLeft" id="arrowLeft">
              <BsArrowLeft />
            </i>
          </Link>
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
      <List itemData={props.value} idofMessageBar={props.mainId} />
    </div>
  );
};

export default Messagebar;
