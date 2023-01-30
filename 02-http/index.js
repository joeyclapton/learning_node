const http = require("http");

http
  .createServer((req, res) => {
    res.end("<h1>testando</h1>");
  })
  .listen(8080);

console.log("Server has been created");
