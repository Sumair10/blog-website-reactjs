import React from "react";
import "../index.css";

function Button() {
  const handleClick = (e) => {
    console.log("hello", e);
  };
  const handleClickAgain = (name) => {
    console.log("hello ", name);
  };

  return (
    <div>
      <button className="btns" onClick={handleClick}>
        Signup
      </button>
      <button
        className="btns"
        onClick={() => {
          handleClickAgain("sumair");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Button;
