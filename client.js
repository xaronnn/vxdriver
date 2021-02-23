const io = require("socket.io-client"),
    socket = io.connect("http://localhost:8000");

socket.on("test", (msg) => {
    console.log(msg)
});