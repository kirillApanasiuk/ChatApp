const socket = io();

socket.on("message", (message) => {
  console.log(message);
});

document.querySelector("#message_form").addEventListener("submit", (e) => {
  e.preventDefault();
  const message = document.querySelector("#message_form_input").value;
  socket.emit("sendMessage", message);
});
