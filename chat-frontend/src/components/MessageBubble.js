import React from "react";

function MessageBubble({ message, currentUser }) {
  const isMe = message.sender === currentUser;

  return (
    <div style={{
      display: "flex",
      justifyContent: isMe ? "flex-end" : "flex-start",
      margin: "10px 0"
    }}>
      <div style={{
        padding: "10px",
        borderRadius: "10px",
        background: isMe ? "#2563eb" : "#e5e7eb",
        color: isMe ? "white" : "black",
        maxWidth: "60%"
      }}>
        <b>{message.sender}</b>: {message.content}
      </div>
    </div>
  );
}

export default MessageBubble;