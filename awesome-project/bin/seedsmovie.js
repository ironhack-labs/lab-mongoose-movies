require("dotenv").config();

const mongoose = require("mongoose");
const Movie = require("../models/movie");
const movies = require("./movie_seed");

const dbURL = process.env.DBURL;

mongoose.connect(dbURL).then(() => {
  console.log(`Connected to db ${dbURL}`);
  //Movie.collection.drop();
  console.log(movies);
  movies.forEach(movie => {
    console.log(movie);
    let movie_new = new Movie({
      title: movie.title,
      genre: movie.genre,
      plot: movie.plot
    })
      .save()
      .then(() => console.log("Created movie"));
  });
});
