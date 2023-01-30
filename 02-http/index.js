const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("testando");
});

app.get("/about", (req, res) => {
  res.send("<pre>About me</pre>");
});

app.listen(8080);
