let express = require("express");
let http = require("http");
let socket = require("socket.io");

let app = express();
app.use(express.static("public"));

// Create Server
let port = process.env.PORT || 3000;
let server = http.createServer(app).listen(port, function() {
  console.log("Listening on port " + port + "...");
});

// Create Socket
let io = socket(server);

io.sockets.on("connection", newConnection);

function newConnection(socket) {
  console.log("New connection " + socket.id);

  socket.on("data", dataMessage);

  function dataMessage(data) {
    socket.broadcast.emit("data", data);
  }
}
