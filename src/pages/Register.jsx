import React from "react";
import logo from "../assets/k1.png";
import avatar from "../assets/gallery.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <img src={logo} alt="logo" />
        <span className="appName">K Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" />
          <label htmlFor="file" className="fileLabel">
            <img style={{width:'30px'}} src={avatar} alt="avatar" />
            Add an avatar
          </label>
          <button type="button">Sign Up</button>
        </form>
        <p>You have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
