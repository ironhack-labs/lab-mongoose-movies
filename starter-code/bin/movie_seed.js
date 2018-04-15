require("dotenv").config();

const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const movie_data = require("./movie_data");

mongoose
  .connect(process.env.DBURL, { useMongoClient: true })
  .then(() => {
    console.log("Connected to Mongo!");
    Movie.collection.drop();
    Movie.insertMany(movie_data, (err, obj) => {
    }).then(() => mongoose.disconnect())
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });