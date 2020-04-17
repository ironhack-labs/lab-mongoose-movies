require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.js");

const celebrities = [
  {
    name: "Hillary Duff",
    occupation: "Actor",
    catchphrase: "I'm Lizzie Maguire!!!",
  },
  {
    name: "Zlatan ",
    occupation: "Footballer",
    catchphrase: "Jag kom som en kung, lämnade som en legendar.",
  },
  {
    name: "Justin Trudea",
    occupation: "Prime Minister",
    catchphrase: "Don't speak moistly.",
  },
];

mongoose
  .connect(process.env.MONGODB_URI)
  .then((self) => {
    Celebrity.create(celebrities)
      .then((celebrities) => {
        console.log(celebrities);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
