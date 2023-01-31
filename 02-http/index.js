const express = require("express");
const mysql = require("mysql");
const app = express();

app.get("/", (req, res) => {
  const { name } = req.query;
  const showName = name ? ", " + name : "";

  console.log(mysql);

  res.send(`Good morning${showName}`);
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/templates/greetings.html");
});

app.listen(8080);
