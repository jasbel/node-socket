import express from 'express'
import {Server as SocketServer} from 'socket.io'
import http from 'http'
import {v4 as uuid} from 'uuid'

const notes = []

const app = express()
const httpServer= http.createServer(app)

const io = new SocketServer(httpServer)

app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
  console.log("nueva conexion", socket.id);

  socket.emit('server:loadNotes', notes)

  socket.on('client:newNote', (data) => {
    const {title, description} = data
    const note = {
      id: uuid(),
      title,
      description,
    }

    notes.push(note)

    socket.emit('server:newNote', note)
  })

  socket.on('client:deleteNote', (id)=> {
    const notes = notes.filter(note => note.id !== id)

    console.log({notes});
  })
})

// app.get('/', (req, res) => {
//   res.send("hello world")
// })

httpServer.listen(3000,() => {
  console.log("SErver en el puerto 3000");
})
