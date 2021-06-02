import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";
import Input from "../components/Input";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
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
  const [login, setLogin] = useState(true);
  let [count, setCount] = useState(true);

  const handleTextChange = () => {
    if (count) {
      document.getElementById("login").innerHTML = "Have an account?";
      document.getElementById("forget").innerHTML = "";
      document.getElementById("loginButton").innerHTML = "Sign up";
      setLogin(false);
      setCount(false);
    } else {
      document.getElementById("login").innerHTML = "Don't have an account ?";
      document.getElementById("forget").innerHTML = "forgot password ?";
      document.getElementById("loginButton").innerHTML = "Log In";
      setLogin(true);
      setCount(true);
    }
  };
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
        {(() => {
          if (login) {
            return (
              <>
                <Input type="email" name="email" placeholder="Email-id" />
                <Input type="password" name="password" placeholder="Password" />
              </>
            );
          } else {
            return (
              <>
                <Input
                  type="text"
                  name="mobileAndEmail"
                  placeholder="Mobile Number or Email"
                />
                <Input type="text" name="name" placeholder="Full Name" />
                <Input type="text" name="username" placeholder="Username" />
                <Input type="password" name="password" placeholder="Password" />
              </>
            );
          }
        })()}
        <div className="links d-flex">
          <a
            id
            className="text-left"
            to="/register"
            id="login"
            onClick={handleTextChange}
          >
            Don't have an account ?
          </a>
          <a className="ml-auto" to="/login" id="forget">
            Forgot password ?
          </a>
        </div>
        <div className="buttons">
          <div className="btn login" id="loginButton">
            Log In
          </div>
          <div className="btn facebook">
            <i className="mr-2">
              <FaFacebookF />
            </i>
            Log in with Facebook
          </div>
        </div>
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
