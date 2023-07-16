import React from "react";
import logo from "../assets/k1.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" style={{ width: "30px" }} className="logo" />
      <div className="user">
        <img
          src="https://images.pexels.com/photos/6640696/pexels-photo-6640696.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
