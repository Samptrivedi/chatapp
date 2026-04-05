import React from "react";

function Sidebar({ username }) {
  return (
    <div style={{
      width: "250px",
      background: "#1e293b",
      color: "white",
      padding: "20px"
    }}>
      <h2>💬 ChatApp</h2>
      <p>Logged in as:</p>
      <h3>{username}</h3>
      <hr />
      <p>Room: room1</p>
    </div>
  );
}

export default Sidebar;