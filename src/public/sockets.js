const socket = io()

const saveNote = (title, description) => {
    socket.emit("client:newNote", {
        title,
        description,
    });
};

const deleteNote = id => {
  socket.emit('cliente:deleteNote', id)
}

socket.on("server:newNote", (data) => {
  appendNote(data)
});

socket.on("server:loadNotes", renderNotes);
