const mongoose = require("mongoose");

const Celebrity = require("../models/celebrity-model");

mongoose.Promise = Promise;
mongoose
  .connect("mongodb://localhost/lab-celebrity", { useMongoClient: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const celebrities = [
  {
    name: "Gerard Depardieu",
    occupation: "Actor",
    catchPhrase: "Bring me more food"
  },
  {
    name: "Robert Downey Jr",
    occupation: "Actor",
    catchPhrase: "Don't do what I do but Don't do what I wouldn't do "
  },
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Just Smile"
  }
];

Celebrity.create(celebrities)
  .then(() => {
    console.log(`Created ${celebrities.length} celebrities`);
  })
  .catch(err => {
    console.log("Creation error", err);
  });
