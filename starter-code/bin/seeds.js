const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");
const dbName = "lab-mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbName}`);

const movie = [
  {
    title: "Hungover",
    genre: "Fake",
    plot: "dont know..."
  },

  {
    title: "Die Hard",
    genre: "Action",
    plot: "who works here"
  },

  {
    title: "Another fake movie",
    genre: "headache",
    plot: "nothing to put here"
  },
];

const celebrity = [
  {
    name: "Tom Cruise",
    occupation: "actor",
    catchPhrase: "mission is never impossible"
  },

  {
    name: "Arnold",
    occupation: "actor",
    catchPhrase: "I'll be back"
  },

  {
    name: "Eminem",
    occupation: "singer",
    catchPhrase: "I'm Slamshady"
  }
];

Celebrity.collection.drop();
Movie.collection.drop();

Celebrity.create(celebrity, err => {
  if (err) {
    throw err;
  }
  console.log("Created");
});

Movie.create(movie, err => {
  if (err) {
    throw err;
  }
  console.log("Created");
  mongoose.connection.close();
});
