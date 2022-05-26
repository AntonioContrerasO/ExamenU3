const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

var X = 0;
var Y = 0;
var conexiones = [];

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log(socket.id);
  if (conexiones.includes(socket.id)==false) {
    io.emit("position",[X,Y])
  }

  socket.on('chat message', (msg) => {
    console.log(msg);
    io.emit('chat message', msg);
  });

  socket.on('position', (msg) => {
    X = msg[0];
    Y = msg[1];
  });
  conexiones.push(socket.id);
});

server.listen(5001, () => {
  console.log('listening on *:5001');
});
