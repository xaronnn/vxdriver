const { Server } = require("socket.io"),
    server = new Server(8000);

server.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);

    socket.on("disconnect", () => {
        console.info(`Client gone [id=${socket.id}]`);
    });
});