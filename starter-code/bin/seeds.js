require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.js");
const Movie = require("../models/Movie.js");

// const celebrities = [
//   {
//     name: "Hillary Duff",
//     occupation: "Actor",
//     catchphrase: "I'm Lizzie Maguire!!!",
//   },
//   {
//     name: "Zlatan ",
//     occupation: "Footballer",
//     catchphrase: "Jag kom som en kung, lämnade som en legendar.",
//   },
//   {
//     name: "Justin Trudeau",
//     occupation: "Prime Minister",
//     catchphrase: "Don't speak moistly.",
//   },
// ];

const movies = [
  {
    title: "Titanic",
    genre: "Drama",
    plot: "I've got a sinking feeling.",
  },
  {
    title: "The Matrix",
    genre: "Sci-fi",
    plot: "A rom-com about old friends.",
  },
  {
    title: "Contagion",
    genre: "Medical Thriller",
    plot: "There's a virus.",
  },
];

mongoose
  .connect(process.env.MONGODB_URI)
  .then((self) => {
    Movie.create(movies)
      .then((movies) => {
        console.log(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
