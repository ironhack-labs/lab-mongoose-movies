const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");
const dbName = "lab-movies";
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [{
    name: "Arnold Schwarzenegger",
    occupation: "Actor",
    catchPhrase: "I'll be back",
  },
  {
    name: "Carrie Fisher",
    occupation: "Actress",
    catchPhrase: "you're my only hope",
  },
  {
    name: "Leonard Nimoy",
    occupation: "Actor",
    catchPhrase: "live long and prosper",
  },
];


const movies = [{
  title: "The Terminator",
  genre: "Sci-Fi",
  plot: "A seemingly indestructible android is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all costs.",
}, {
  title: "Star Wars",
  genre: "Sci-Fi",
  plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
}, {
  title: "Star Trek: Beyond",
  genre: "Sci-Fi",
  plot: "The crew of the USS Enterprise explores the furthest reaches of uncharted space, where they encounter a new ruthless enemy, who puts them, and everything the Federation stands for, to the test.",
},


];

Celebrity.collection.drop();
Movie.collection.drop();


Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
 
});

Movie.create(movies, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});