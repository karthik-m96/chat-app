import React from "react";
import logo from "../assets/k1.png";
import avatar from "../assets/gallery.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <img src={logo} alt="logo" />
        <span className="appName">K Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" />
          <label htmlFor="file" className="fileLabel">
            <img style={{ width: "30px" }} src={avatar} alt="avatar" />
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
