import React from "react";
import Attach from "../assets/attachment.png";
import Image from "../assets/image.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something....." />
      <div className="send">
        <input type="file" style={{ display: "none" }} id="file" />
        <img src={Image} alt="" />
        <label htmlFor="file"></label>
        <img src={Attach} alt="" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
