const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.js");
const Movie = require("../models/Movie.js");

mongoose.connect(
  `mongodb://localhost/celebdb`,
  { useNewUrlParser: true }
);
mongoose.connect(
  `mongodb://localhost/moviedb`,
  { useNewUrlParser: true }
);

const celebrities = [
  {
    name: "Mel Gibson",
    occupation: "Actor",
    catchPhrase: "They may take our lives, but they'll never take our freedom!"
  },
  {
    name: "Mr.Miyagi",
    occupation: "Wise asian man",
    catchPhrase: "Wax on, wax off."
  },
  {
    name: "Arnold",
    occupation: "Actor",
    catchPhrase: "Hasta la vista, baby."
  }
];
const movies = [
  {
    title: "BraveHeart",
    genre: "Action",
    plot: "Angry Scottish"
  },
  {
    title: "Karate Kid",
    genre: "Action",
    plot: "Kids beating up each other"
  },
  {
    title: "Terminator",
    genre: "Action",
    plot: "a robot comes from the future to kill a kid"
  }
];

Celebrity.collection.drop();
Celebrity.create(celebrities)
  .then(() => console.log("Celeb database OK"))
  .then(() => mongoose.disconnect());
Movie.collection.drop();
Movie.create(movies)
  .then(() => console.log("Movies database OK"))
  .then(() => mongoose.disconnect());
