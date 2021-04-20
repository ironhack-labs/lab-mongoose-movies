// Data to insert in the database
const celebrities = [
  {
    name: "Barney Stinson",
    occupation: "Unknown",
    catchPhrase: "Wait for it..."
  },
  {
    name: "Defred",
    occupation: "Handmaid",
    catchPhrase: "Nolite te bastardes carborundorum!"
  },
  {
    name: "Lito Rodríguez",
    occupation: "Actor",
    catchPhrase: "Please call me back. I lost a flip-flop."
  }
];

// Packages
const Celebrity = require("../models/Celebrity.js");
const mongoose = require("mongoose");

// Database Connection
mongoose.connect("mongodb://localhost/celebrityDB", {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
})
.then ( () => {
  console.log("Connected to Mongo!")
})
.catch ( (error) => {
  console.error("Error connecting to mongo", error)
});

// Database
Celebrity.insertMany(celebrities)
.then( (celebritiesAdded) => {
  console.log("Celebrities added!")
  console.log(celebritiesAdded);
  // Close the connection with the database
  mongoose.connection.close();
})
.catch( (error) => {
  console.log(error);
});