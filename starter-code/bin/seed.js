require("dotenv").config();

const mongoose = require("mongoose");

const Celebrity = require("../models/celebrity-model.js");

mongoose
  .connect("mongodb://localhost/celebrities", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const ourCelebrities = [
  { name: "Nizar", occupation: "Web Dev Teacher", catchPhrase: "I love pizza" },
  {
    name: "Modjo",
    occupation: "Dog celebrity",
    catchPhrase: "Woof"
  },
  {
    name: "Anoop",
    occupation: "Indian dancer",
    catchPhrase: "Yeah yeah"
  }
];

Celebrity.insertMany(ourCelebrities)
  .then(celebrityResults => {
    console.log(`Inserted ${celebrityResults.length} CELEBRITIES`);
  })
  .catch(err => {
    console.log("Failure to insert celebrities", err);
  });
