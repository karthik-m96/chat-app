import React from 'react';
import logo from "../assets/k1.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <img src={logo} alt="logo" />
        <span className="appName">K Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button type="button">Log in</button>
        </form>
        <p>You do not have an account? Register</p>
      </div>
    </div>
  )
}

export default Login