require("dotenv").config();
require("./../app");

const Movie = require("./../models/movie");

const movies = [
  {
    title: "Developers hell",
    genre: "SF",
    plot: "When you don't know what to expect!",
  },
  {
    title: "Javascript SOS",
    genre: "Drama",
    plot: "A modern maze..",
  },
  {
    title: "Promises, promises",
    genre: "Thriller",
    plot: "When a promise turns to a nightmare",
  },
];

Movie.create(movies)
  .then((dbRes) => console.log(dbRes))
  .catch((dbErr) => console.error(dbErr));
