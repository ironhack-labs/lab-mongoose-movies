require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const movie_data = require("./movie_data");
const dbURL = "mongodb://localhost/lab-mongoose-movies";
console.log(dbURL);

mongoose.connect(dbURL).then (() => {
  Movie.collection.drop();
  
  Movie.create(movie_data)
  .then((movie) => {
    console.log(`All the movies inserted`, `Movie list: ${movie}`);
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log(err)
  })
})
