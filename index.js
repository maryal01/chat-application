var express = require('express');
var app = express();
var socket = require('socket.io');
var server = app.listen(8000, () => {console.log("Listening on port number 8000");});

app.use(express.static('public'));


//Socket setup and pass server

var io = socket(server);
io.on('connection', (socket) => {
	console.log('made socket connection', socket.id)
	
	//Handle the chat event
	socket.on('chat', (data)=>{
		io.sockets.emit('chat', data);
	    });
	socket.on('typing', (data)=>{
		socket.broadcast.emit('typing', data);
	    });
    });




