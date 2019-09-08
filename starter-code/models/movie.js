const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  rating: Number
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;

