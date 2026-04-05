# 💬 Real-Time Chat Application (Spring Boot + React + MongoDB)

## 🚀 Overview

This project is a **real-time chat application** built using:

- **Frontend:** React.js
- **Backend:** Spring Boot (Java)
- **Database:** MongoDB
- **Communication:** WebSockets (STOMP + SockJS)

The application allows multiple users to connect to a chat room and exchange messages instantly in real-time.

---

## 🌐 What is Real-Time Communication?

Real-time communication means messages are sent and received instantly without refreshing the page.

This project uses:

- **WebSockets** → Enables full-duplex communication between client and server
- **STOMP Protocol** → Messaging protocol over WebSocket
- **SockJS** → Fallback support for browsers

---

## 🎯 Project Features

✅ Real-time messaging  
✅ Multiple users support  
✅ Chat rooms (room-based messaging)  
✅ Messages stored in MongoDB  
✅ WebSocket-based communication  
✅ Modern React UI  

---

## 🏗️ Project Architecture
Frontend (React) 
↓
WebSocket (STOMP + SockJS)
↓
Backend (Spring Boot)
↓
MongoDB Database

---

## 📁 Folder Structure

### Backend (Spring Boot)
chatapp/
├── src/main/java/com/chatapp/
│    ├── config/ → WebSocket configuration
│    ├── controller/ → Chat controllers 
│    ├── model/ → Message entity
│    ├── repository/ → MongoDB repository
│
├── resources/
│    ├── application.properties

---

### Frontend (React)
chat-frontend/
├── src/ 
│    ├── components/ 
│    │    ├── ChatRoom.js
│    │    ├── Sidebar.js
│    │    └── MessageBubble.js
│    ├── App.js 
│    └── index.js

---

## ⚙️ Technologies Used

| Technology | Purpose |
|----------|--------|
| React.js | Frontend UI |
| Spring Boot | Backend REST + WebSocket |
| MongoDB | Database |
| STOMP | Messaging protocol |
| SockJS | WebSocket fallback |
| Maven | Dependency management |

---

## 📦 Dependencies

### Backend Dependencies (pom.xml)

- Spring Boot Starter Web
- Spring Boot Starter WebSocket
- Spring Boot Starter Data MongoDB
- Lombok (optional)

---

### Frontend Dependencies

```bash
npm install sockjs-client @stomp/stompjs axios
🛠️ Setup & Installation
🔹 Step 1: Clone Repository
Bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
🔹 Step 2: Start MongoDB
Bash
"C:\Program Files\MongoDB\Server\8.2\bin\mongod.exe"
👉 MongoDB runs on:

mongodb://localhost:27017
🔹 Step 3: Run Backend (Spring Boot)
Bash
cd chatapp
mvn clean install
mvn spring-boot:run
👉 Backend runs on:

http://localhost:8080
🔹 Step 4: Run Frontend (React)
Bash
cd chat-frontend
npm install
npm start
👉 Frontend runs on:

http://localhost:3000
🧪 How to Test the Application
Open browser:

http://localhost:3000
Open two tabs
Enter usernames:
Tab 1 → User A
Tab 2 → User B
Click Connect
Send messages
✅ Expected Output
Messages appear instantly in both tabs
No page refresh required
Messages saved in MongoDB
🔗 API Endpoints
Endpoint
Description
/ws
WebSocket endpoint
/app/sendMessage
Send message
/topic/{chatId}
Receive messages
/api/messages/{chatId}
Get chat history
⚠️ Common Issues & Fixes
❌ Error: mongod not recognized
✔ Add MongoDB to PATH or run using full path
❌ Error: Can't resolve 'net'
✔ Use:
Bash
npm install @stomp/stompjs
❌ Whitelabel Error Page
✔ No controller mapped for / ✔ Use React frontend instead of backend URL
📌 Future Enhancements
🔐 User Authentication (JWT)
🟢 Online/Offline status
📩 Private messaging
🖼️ Media sharing
📱 Mobile responsive UI
🤝 Contribution
Contributions are welcome!
Fork the repo
Create new branch
Make changes
Submit PR
📜 License
This project is open-source and free to use.
👨‍💻 Author
Sampoorn Trivedi
⭐ Support
If you like this project:
👉 Star ⭐ the repository
👉 Share with others
