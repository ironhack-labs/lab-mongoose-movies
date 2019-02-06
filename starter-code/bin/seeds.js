// connect seed.js to the env file
require("dotenv").config();

// seed file (run this to insert more books into the database)

const mongoose = require("mongoose");

const Celebrity = require("../models/celebrity-model.js");

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

celebrities = [
  { name: "Mickey", occupation: "Star", catchPhrase: "Pluto, viens ici!" },
  {
    name: "Tom Cruise",
    occupation: "Pilot",
    catchPhrase: "Prends ton parachute!!"
  },
  {
    name: "John Mclane",
    occupation: "Policeman",
    catchPhrase: "Yipee Ky Yeah!"
  }
];

Celebrity.insertMany(celebrities)
  .then(celebrityResults => {
    console.log(`inserted ${celebrityResults.length}celebrities`);
  })
  .catch(err => {
    console.log("Insert FAILURE!!", err);
  });
