require("dotenv").config();

const async = require("async");
const mongoose = require("mongoose");
const Movies = require("../models/Movies");
const moviesData = require("./movies_data");

dbURL = process.env.DBURL;

mongoose.connect(dbURL).then(() => {
  console.log(`Connected to ${dbURL}`);

  Movies.collection.drop();

  Movies.collection.insertMany(moviesData).then(() => {
    mongoose.disconnect();
  });
});
