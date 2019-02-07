// Seed File (run this to insert more data in your database)
// connect seed.js to the .env file
require("dotenv").config();

const mongoose = require("mongoose");

// get the Book  model to do our database query
const Celebrity = require("../models/celebrity-model.js");

// connect to the MongoDB serve with the database name equal to the project name
// 'also has console.log for successful and failed connections)
mongoose
  .connect("mongodb://localhost/celebrity", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const celeData = [
  {
    name: "The Hunger Games",
    occupation: "Lorem ipsum dolor sit ad minim veniam, quis ",
    catchPrase: "J.K. Rowling "
  },
  {
    name: "Harry Potter",
    occupation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    catchPrase: "J.K. Rowling "
  },
  {
    name: "To Kill a Mockingbird ",
    occupation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    catchPrase: "Harper Lee"
  }
];

Celebrity.insertMany(celeData)
  .then(celebritiesResult => {
    console.log(`Inserted ${celebritiesResult.length} CELEBRITY`);
  })
  .catch(err => {
    console.log("Insert FAILLURE!!!", err);
  });

module.exports = celeData;
