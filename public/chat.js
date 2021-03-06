//Create a socket connection after the html page is loaded
var socket = io.connect('http://localhost:8000');

var messae = document.getElementById('message');
var handle = document.getElementById('handle');
var button = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');


message.addEventListener('keypress', () => {
	socket.emit('typing', handle.value);
	});

button.addEventListener('click', () => { socket.emit('chat', {
	message: message.value,
	handle: handle.value
	});
message.value = " "; });




//Listen for events
socket.on('chat', (data) => {
	feedback.innerHTML = "";
	output.innerHTML += "<p><strong>" + data.handle + ":</strong>" + data.message + "</p>";
    });

socket.on("typing", (data) => {
	feedback.innerHTML = "<p><em>" + data + "is typing a message...</em><p>";
})