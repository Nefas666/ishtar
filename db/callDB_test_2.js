const express = require("express");
const { connect } = require("http2");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "sql.selenemme.com",
  user: "selenemm95905",
  password: "sele27784",
  database: "selenemm95905",
});

connection.connect(function (error) {
  if (!!error) {
    console.log("Nope");
  } else {
    console.log("Yup");
  }
});


app.listen(3333);
