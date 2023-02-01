require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

const createDatabase = () => {
  connection.query("CREATE DATABASE blog", (err, result) => {
    if (err) throw err;

    console.log("Database created ✅");
  });
};

const createPostTable = () => {
  const sql = "CREATE TABLE post (name VARCHAR(255), content VARCHAR(255))";

  connection.query(sql, (err, result) => {
    if (err) throw err;

    console.log("Post Table created ✅");
  });
};

connection.connect((err) => {
  if (err) throw err;

  console.log("Database connected ✅");

  createPostTable();
});
