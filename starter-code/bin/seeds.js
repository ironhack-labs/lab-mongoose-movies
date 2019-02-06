require("dotenv").config();

const mongoose = require("mongoose");

const Celebrity = require("../models/celebrity-model.js");

const myInitialData = [
  {
    name: "Samuel L Jackson",
    occupation: "Actor",
    catchPhrase: "Cheeseburger is the quarter pounder with cheese?!"
  },
  {
    name: "Bolo Yeung",
    occupation: "Kungfu fighter",
    catchPhrase: "You're NEXT!!!"
  },
  {
    name: "Kim Jong Un",
    occupation: "Actor",
    catchPhrase: "I LOVE DENNIS RODMAN"
  }
];

mongoose
  .connect("mongodb://localhost/express-tmz", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Celebrity.insertMany(myInitialData)
  .then(result => {
    console.log(`Inserted ${result.length} CELEBRITY 🦄`);
  })
  .catch(err => {
    console.log("Insert FAILURE!! 💩", err);
  });
