const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const { name } = req.query;
  const showName = name ? ", " + name : "";

  //res.send(`Good morning${showName}`);
  res.send(req.query);
});

app.get("/about", (req, res) => {
  res.send("<pre>About me</pre>");
});

app.listen(8080);
