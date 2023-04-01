const express = require("express");
const app = express();
const morgan = require("morgan");

let data = require("./mockup");

morgan("tiny");

function log(req, res, next) {
  morgan(":method :url :status :res[content-length] - :response-time ms");
  next();
}

app.use(express.json());
app.use(log);

const getNextId = () => {
  const id = Math.max(...data.map((p) => p.id));

  return id + 1;
};

app.get("/api/persons", (req, res) => {
  res.status(200).json(data);
});

app.get("/info", (req, res) => {
  const dateTime = new Date();
  const size = data.length;
  const info = `Phonebook has info for ${size} people`;

  res.json({
    content: info,
    dateTime,
  });
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);

  idNotFound(id, res);
  const person = data.find((p) => p.id === id);

  res.status(200).json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const hasId = data.find((p) => p.id === id);

  if (!hasId) {
    return res.status(400).json({
      error: `id: ${id} not found`,
    });
  }
  const personsUpdated = data.filter((p) => p.id !== id);

  data = personsUpdated;
  console.log(data);

  res.status(200).json(personsUpdated);
});

app.post("/api/persons", (req, res) => {
  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).json({
      error: "Invalid fields values",
    });
  }
  const hasPeopleOnList = data.some((p) => p.name === name);

  if (hasPeopleOnList) {
    return res.status(400).json({
      error: "name must be unique",
    });
  }

  const newPeople = {
    name,
    number,
    id: getNextId(),
  };

  data.push(newPeople);
  return res.status(200).json(data);
});

app.listen(3001);
console.log("server listening or port 3001");
