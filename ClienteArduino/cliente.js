const { parse } = require('path')
const serialPort = require('serialport')
const port = new serialPort('COM8',{baudRate: 9600})
const parser = new serialPort.parsers.Readline()
const { io } = require("socket.io-client");
const socket = io("http://187.250.185.255:5001");

socket.on("connect", () => {
  console.log(socket.connected);
  setTimeout(() => {
    port.pipe(parser)
    parser.on('data', function (data) {
    console.log(data);
    if(data != 0){
        socket.emit('chat message',data);
    }

	});
  } ,1000)
})