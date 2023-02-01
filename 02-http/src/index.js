const express = require("express");
const handlebars = require("express-handlebars");
const database = require("./config/database");
const path = require("path");
const app = express();

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
database.connect();

app.get("/create-post", (req, res) => {
  res.render("form");
});

app.listen(8080);
