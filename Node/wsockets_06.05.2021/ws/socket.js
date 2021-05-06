const wsServer = (http) => {

  const io = require('socket.io')(http);

  io.on('connection', (socket) => {
    socket.on('message', (msg) => {
      io.emit('message-back', `${msg}1`);
      setTimeout(() => {
        socket.emit('message-back', `${msg}2`)  
        }, 1000);
    });

    socket.on('disconnect', () => {
      console.log(`Client with id ${socket.id} disconnected`)
    })
  });
}


module.exports = wsServer;