// Seed File (run this to insert more Celebs into the database)
// -----------------------------------
// connects seed.js to the .env file
require("dotenv").config();

const mongoose = require("mongoose");

// Get the Celebrity model to do our databse query
const Celebrity = require("../models/celebrity-model.js");

const celebrityData = require("./celebrities.json");

// !!! CONNECT TO THE SAME DATABASE AS app.js !!!
// connects to MongoDB server with the DB name equal to the project name
// (also has console.logs for successful and failed connections)
mongoose
  .connect("mongodb://localhost/mongoose-movies", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Celebrity.create(celebrityData)
  .then(celebrityResults => {
    console.log(`Inserted ${celebrityResults.length} CELEBRITIES!`);
  })
  .catch(err => {
    console.log("Insert FAILURE!!", err);
  });
