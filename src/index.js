import express from 'express'
import {Server as SocketServer} from 'socket.io'
import http from 'http'

const app = express()
const httpServer= http.createServer(app)

const io = new SocketServer(httpServer)

app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
  console.log("nueva conexion", socket.id);
})

// app.get('/', (req, res) => {
//   res.send("hello world")
// })

httpServer.listen(3000,() => {
  console.log("SErver en el puerto 3000");
})
