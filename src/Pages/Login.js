import React from "react";
import Logo from "../assets/images/Logo.png";
import { NavLink } from "react-router-dom";
import profile1 from "../assets/images/photo-1.jpg";
import profile2 from "../assets/images/photo-2.jpg";
import profile3 from "../assets/images/photo-3.jpg";
import profile4 from "../assets/images/photo-4.jpg";
import profile5 from "../assets/images/photo-5.jpg";
import profile6 from "../assets/images/photo-6.jpg";
import profile7 from "../assets/images/photo-7.jpg";
import profile8 from "../assets/images/photo-8.jpg";
import profile9 from "../assets/images/photo-9.jpg";

const Login = () => {
  return (
    <div className="login-sec">
      <div className="left">
        <img src={profile1} alt=".." height="70" width="70" className="first" />
        <img src={profile2} alt=".." height="70" width="70" className="two" />
        <img src={profile3} alt=".." height="70" width="70" className="three" />
        <img src={profile4} alt=".." height="70" width="70" className="four" />
        <img src={profile5} alt=".." height="70" width="70" className="five" />
      </div>
      <div className="inner-main text-center">
        <img src={Logo} alt=".." height="100" width="100" />
        <h6 className="logo">Instagram</h6>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email-id"
        />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
        />
        <div className="links d-flex">
          <NavLink className="text-left" to="/register">
            Already user ?
          </NavLink>
          <NavLink className="ml-auto" to="/login">
            Forget password ?
          </NavLink>
        </div>
        <div className="btn">Login</div>
      </div>
      <div className="right">
        <img src={profile5} alt=".." height="70" width="70" className="first" />
        <img src={profile6} alt=".." height="70" width="70" className="two" />
        <img src={profile7} alt=".." height="70" width="70" className="three" />
        <img src={profile8} alt=".." height="70" width="70" className="four" />
        <img src={profile9} alt=".." height="70" width="70" className="five" />
      </div>
    </div>
  );
};

export default Login;
