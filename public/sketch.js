let socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  socket = io();
  socket.on("data", incomingData);
}

function draw() {
}

function incomingData(data) {
  fill(255);
  circle(data.x, data.y, 20);
}

function mouseDragged() {
  fill(255, 0, 0);
  circle(mouseX, mouseY, 20);
  
  let data = {
    x: mouseX,
    y: mouseY
  };
  socket.emit("data", data);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
