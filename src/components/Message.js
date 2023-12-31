import React from "react";
import "./Message.css";

const Message = ({ message, timestamp, user, userImage }) => {
  return (
    <div className="message">
      <img src={userImage} alt="" />
      <div className="message__info">
        <h4>
          <span className="message__timestamp">
            {user} {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;