const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  year: String,
  producer: String
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
