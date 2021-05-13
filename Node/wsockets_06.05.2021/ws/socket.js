const wsServer = http => {

  const io = require('socket.io')(http);

  const clients = [];
  const values = [];

  io.on('connection', socket => {
    clients.push(socket.id);
    console.log(socket.id);
    if (socket.id !== clients[0]) {
      socket.emit('slider', '<input type="range" min="0" max="100" value="50" class="slider">');
    
      socket.on('message', (socketID, msg) => {
        socket.emit('message-back', socketID, msg);
        values[clients.indexOf(socketID)] = msg;
  
        socket.to(clients[0]).emit('message-to-main-browser', socketID, msg);
      })
    }   

    socket.on('disconnect', () => {
      console.log(`Client with id ${socket.id} disconnected`);
      socket.to(clients[0]).emit('clear', socket.id);
      clients.splice(clients.indexOf(`${socket.id}`), 1);
      socket.to(clients[0]).emit('clear', clients[0]);
    })
  })
}


module.exports = wsServer;