import React from "react";
import { IoPersonSharp } from "react-icons/io5";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className="form-control"
      />
    </>
  );
};

export default Input;
