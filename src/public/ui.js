const d = document;

const notes = d.querySelector("#notes");

const noteUI = (note) => {
    const div = d.createElement("div");

    div.innerHTML = `
    <div class="card card-body rounded-0 mb-2">
      <div class="d-flex justify-content-between">
        <h1 class="h3 card-title">${note.title}</h1>
        <div>
          <button class="btn btn-danger delete" data-id="${note.id}" >Delete</button>
          <button class="btn btn-secondary" data-id="${note.id}">Update</button>
        </div>
      </div>
      <p>${note.description}</p>
    </div>
    `;

    const btnDelete = div.querySelector(".delete");

    btnDelete.addEventListener("click", () => {
        deleteNote(btnDelete.data.id)
    });

    return div;
};

const renderNotes = (data) => {
    data.forEach((note) => {
        appendNote(note);
    });
};

const appendNote = (note) => {
    notes.append(noteUI(note));
};
