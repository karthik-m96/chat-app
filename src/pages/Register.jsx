import React from "react";
import logo from "../assets/k1.png";

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
          <input type="file" />
          <button type="button">Sign Up</button>
        </form>
        <p>You do not have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
