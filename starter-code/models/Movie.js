// this is the model-schema to build the database, it establishes all the information each document will have.



const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String

});

const Movie = mongoose.model("Movie", movieSchema);
// const ^^^^Celeb is also mentioned in the seeds file
module.exports = Movie;