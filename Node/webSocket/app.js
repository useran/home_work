const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3001;

const randomInt = (min, max) => {
  let value = min + Math.random() * (max + 1 - min);
  return Math.floor(value);
}

//io listener for a client
io.on('connection', socket => {
  socket.on('message', msg => {
    console.log('>>>>>', msg);
  });

  socket.on('disconnect', () => {
    console.log(`Client with id ${socket.id} disconnected`)
  })
});

//io listener for a server
io.on('connection', socket => {
  setInterval(() => {
    socket.emit('server message', "I'm the server")  
    }, randomInt(1000, 10000));

  socket.on('disconnect', () => {
    console.log(`Client with id ${socket.id} disconnected`)
  })
})



app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});