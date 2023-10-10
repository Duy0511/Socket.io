const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io");

const io = new Server(server)
// tại vì nó tạo một server mới vào 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('send-chat', (data) =>
        io.emit('user', data)
    )
    
  });
// khi có người dùng kết nối vào thì sẽ in ra cái này

server.listen(3000, () => {
    console.log('listening on *:3000');
  });

  // nó thay thế app.listen bằng server
