// Seed file (run this to insert more books into the database)
// ------------------------------------------------------------------------------------------------------

// connect app.js to the .env file
require("dotenv").config();

const mongoose = require("mongoose");

// get the Book model to do our database query
const Celebrity = require("../models/celebrity.js");

const celeb = [
  { name: "Beyoncé Knowles", occupation: "Singer", catchPhrase: "I'm Sasha" },
  {
    name: "Sandra Bullock",
    occupation: "Actress",
    catchPhrase: "Don't drive below 50mph !"
  },
  { name: "Jason Momoa", occupation: "Actor", catchPhrase: "Moon of my Life" }
];

// CONNECT TO THE SAME DATABASE AS app.js
// connect to the MongoDB server with the database name equal to the project name
// (also has console.logs for successful and failed connections)
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

Celebrity.insertMany(celeb)
  .then(celebResults => {
    console.log(`Inserted ${celebResults.length} CELEBRITIES `);
  })
  .catch(err => {
    console.log("Insert FAILURE !", err);
  });
