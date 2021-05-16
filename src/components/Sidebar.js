import React from "react";
import { NavLink } from "react-router-dom";
import profile from "../assets/images/photo-2.jpg";
import { BsArrowLeft } from "react-icons/bs";

const Sidebar = (props) => {
  const closeSidebar = () => {
    if (window.screen.width < 1100) {
      document.getElementById(props.mainId).style.marginLeft = "-100%";
    }
  };
  return (
    <div className="sidebar" id="sidebar">
      <div className="container">
        <i className="arrowLeft" onClick={closeSidebar}>
          <BsArrowLeft />
        </i>
        <div className="profile-details">
          <img src={profile} height="90" width="90" alt="" />
          <div className="content">
            <h6>Jani Dean</h6>
            <p>Hello,How are you?</p>
          </div>
          <div className="follows d-flex">
            <div className="total-post">
              <p>50</p>
              <p>posts</p>
            </div>
            <div className="followers">
              <p>1k</p>
              <p>followers</p>
            </div>
            <div className="following">
              <p>1k</p>
              <p>following</p>
            </div>
          </div>
        </div>
        <div className="nav d-flex flex-column">
          {props.value.map((data) => {
            return (
              <NavLink
                className="item nav-link"
                key={data.id}
                to={data.path}
                activeClassName="active"
                exact
                onClick={closeSidebar}
              >
                <i>{data.icon}</i>
                {data.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
