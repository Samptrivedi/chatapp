import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const ChatRoom = () => {
  const [client, setClient] = useState(null);
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const chatId = "room1";

  // 🔥 CONNECT FUNCTION
  const connect = () => {
    const stompClient = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      reconnectDelay: 5000,
      debug: (str) => console.log(str),
    });

    stompClient.onConnect = () => {
      console.log("Connected to WebSocket");
      setConnected(true);

      // 🔥 SUBSCRIBE TO CHAT ROOM
      stompClient.subscribe(`/topic/${chatId}`, (msg) => {
        const receivedMessage = JSON.parse(msg.body);
        setMessages((prev) => [...prev, receivedMessage]);
      });
    };

    stompClient.activate();
    setClient(stompClient);
  };

  // 🔥 SEND MESSAGE
  const sendMessage = () => {
    if (client && message.trim() !== "") {
      const msgObj = {
        sender: username,
        content: message,
        chatId: chatId,
      };

      client.publish({
        destination: "/app/sendMessage",
        body: JSON.stringify(msgObj),
      });

      setMessage("");
    }
  };

  return (
    <div style={styles.container}>
      <h2>💬 Chat Room</h2>

      {!connected && (
        <div style={styles.connectBox}>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <button onClick={connect} style={styles.button}>
            Connect
          </button>
        </div>
      )}

      {connected && (
        <>
          <div style={styles.chatBox}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  alignSelf:
                    msg.sender === username ? "flex-end" : "flex-start",
                  backgroundColor:
                    msg.sender === username ? "#4CAF50" : "#444",
                }}
              >
                <strong>{msg.sender}</strong>: {msg.content}
              </div>
            ))}
          </div>

          <div style={styles.inputArea}>
            <input
              type="text"
              placeholder="Type message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={styles.input}
            />
            <button onClick={sendMessage} style={styles.button}>
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// 🎨 SIMPLE STYLES
const styles = {
  container: {
    width: "60%",
    margin: "auto",
    textAlign: "center",
    marginTop: "50px",
    color: "white",
  },
  connectBox: {
    marginBottom: "20px",
  },
  chatBox: {
    height: "400px",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    background: "#222",
  },
  message: {
    padding: "10px",
    margin: "5px",
    borderRadius: "10px",
    maxWidth: "60%",
  },
  inputArea: {
    display: "flex",
    justifyContent: "center",
  },
  input: {
    padding: "10px",
    width: "70%",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    cursor: "pointer",
    background: "#007bff",
    color: "white",
    border: "none",
  },
};

export default ChatRoom;