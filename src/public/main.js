// io('http://localhost:3000')

const form = d.querySelector('#form')
const title= d.querySelector('#title')
const description= d.querySelector('#description')

form.addEventListener("submit", e => {
  e.preventDefault()

  saveNote(title.value, description.value)

})





// socket.on('ping', () => {
//   console.log("Escuchando");

//   socket.emit('pong')
// })