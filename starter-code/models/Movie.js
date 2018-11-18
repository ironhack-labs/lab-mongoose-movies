const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchemas = new Schema({
  title: { type: String, unique: true, required: true },
  genre: String,
  plot: String
})

const Movie = mongoose.model("Movie", movieSchemas)
module.exports = Movie;