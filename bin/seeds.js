const celebrityData = [
  {
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: "I'm the Queenbee in da house!"
  },
  {
    name: "Jay-Z",
    occupation: "Producer",
    catchPhrase: "I'm Queenbee's husband in da house!"
  },
  {
    name: "Blue Ivy",
    occupation: "Famous child",
    catchPhrase: "My life is so much better than yours!"
  }
];

// Seed File (run this to insert more books into the database)
// ----------------------------------------------------------------------------------------

// connects seed.js to the .env file
require("dotenv").config();

const mongoose = require("mongoose");

// get the model to do our database query
const Celebrity = require("../models/celebrity.js");

// 🚨🚨🚨 CONNECT TO THE SAME DATABASE AS app.js 🚨🚨🚨
// connect to the MongoDB server with the database name equal to the project name
// (also has console.logs for successful and failed connections)
mongoose
  .connect("mongodb://localhost/lab-mongoose-movies", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Celebrity.insertMany(celebrityData)
  .then(celebrityResults => {
    console.log(`Inserted ${celebrityResults.length} CELEBRITIES 🤩`);
  })
  .catch(err => {
    console.log("Insert FAILURE! 💩", err);
  });
