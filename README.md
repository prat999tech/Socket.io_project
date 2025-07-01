# Socket.IO Chat App

A real-time chat application built with **React** (frontend), **Express** (backend), and **Socket.IO** for instant messaging.  
Frontend is bootstrapped with [Vite](https://vitejs.dev/).

---

## Features

- Join chat rooms
- Send and receive messages in real time
- Room-based messaging
- Built with React, Express, and Socket.IO

---

## Project Structure

```
javascript_project/
├── client/   # React frontend (Vite)
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── ...
└── server/   # Express backend
    ├── app.js
    └── ...
```

---

## Getting Started

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd javascript_project
```

### 2. Install dependencies

#### Backend

```sh
cd server
npm install
```

#### Frontend

```sh
cd ../client
npm install
```

---

### 3. Run the app

#### Start the backend server

```sh
cd server
npm run dev
```
The backend runs on [http://localhost:8001](http://localhost:8001).

#### Start the frontend (Vite)

```sh
cd ../client
npm run dev
```
The frontend runs on [http://localhost:5173](http://localhost:5173).

---

## Usage

1. Open [http://localhost:5173](http://localhost:5173) in your browser.
2. Join a room by entering a room name and clicking "join room".
3. Send messages to the room and see real-time updates.

---

## Tech Stack

- **Frontend:** React, Material UI, Vite, Socket.IO Client
- **Backend:** Express, Socket.IO, CORS

---

## License

MIT
