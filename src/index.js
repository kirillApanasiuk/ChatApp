require("dotenv").config();
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(publicDirectoryPath));

io.on("connection", (socket) => {
  socket.emit("message", "Welcome to chat App!");
  socket.on("sendMessage", (message) => {
    io.emit("message", message);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server is up on port ${process.env.PORT}`);
});
