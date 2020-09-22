require("dotenv").config();
const Movie = require("../models/Movie");
const mongoose = require("mongoose");

const movies = [
  {
    title: "Inception",
    genre: "Action",
    plot: "A film about dreams.",
  },
  {
    title: "The Prestige",
    genre: "Action/Thriller",
    plot: "A film about magician rivalry.",
  },
  {
    title: "Tenet",
    genre: "Action",
    plot: "A film about time.",
  },
];

mongoose
  .connect("mongodb://localhost/movies", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    Movie.create(movies)
      .then((dbResult) => {
        console.log(dbResult);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
