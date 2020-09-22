require("dotenv").config();
require("../config/mongodb");

const MovieModel = require("../models/movie-model");

const movies = [{
  title: "Cloud Atlas",
  genre: "Sci-fi",
  plot: "timeline interaction",
},
{
  title: "Prometheus",
  genre: "Sci-fi",
  plot: "Origin of humanity",
},
{
  title: "A walk to remember",
  genre: "romance-drama",
  plot: "Love stiry with sad ending",
},
{
  title: "Hot Fuzz",
  genre: "comedy",
  plot: "Funny british cops in action",
},
{
  title: "Annabelle",
  genre: "horror",
  plot: "prologue of the first movie",
}];

MovieModel.insertMany(movies)
  .then((dbRes) => console.log(dbRes))
  .catch((dbErr) => console.log(dbErr));
