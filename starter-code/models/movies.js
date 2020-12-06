const mongoose = require("mongoose");

const Movie = new mongoose.Schema({
  title: String,
  genre: String,
  plot: String,
})

module.exports = mongoose.model("Movies", Movie)