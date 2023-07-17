import React from "react";
import Add from "../assets/add.png";
import Option from "../assets/option.png";
import Cam from "../assets/cam.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="cam" />
          <img src={Add} alt="add" />
          <img src={Option} alt="option" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
