const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const hasNote = notes.find((note) => note.id === id);

  if (hasNote) {
    const updatedNotes = notes.filter((note) => note.id !== id);
    notes = updatedNotes;
    response.json(notes);
  } else {
    response.status(204).end();
  }
});

app.post("/api/notes", (request, response) => {
  const note = request.body;

  notes.push(note);

  response.status(200).json(notes);
});

app.listen(PORT);

console.log("Server running on PORT " + PORT);
