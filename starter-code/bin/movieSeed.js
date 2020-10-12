const mongoose = require("mongoose");
const MovieModel = require("../models/movie.model");

require("../app");

const movies = [
  {
    title: "Boy and Girl",
    genre: "Drama",
    plot: "A boy and a girl meet and fall in love.",
  },
  {
    title: "Boy and Girl 2",
    genre: "Drama",
    plot: "A boy and a girl meet and fall in love again.",
  },
  {
    title: "Boy and Girl 3",
    genre: "Drama",
    plot: "A boy and a girl meet and fall in love, again, again.",
  },
];

MovieModel.create(movies)
  .then((res) => {
    console.log("Data was added.");
    console.log(res);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
