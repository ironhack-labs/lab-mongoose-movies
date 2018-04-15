require("dotenv").config();

const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const movieData = require("./movie_data");

const dbURL = process.env.DBURL;

mongoose.connect(dbURL).then( () => {

  Movie.collection.drop();

  Movie.create(movieData)
  .then( () => {
    console.log("Movies added to database");
    mongoose.disconnect();
  })

})