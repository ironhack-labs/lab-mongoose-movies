const mongoose = require("mongoose");

const movie = new mongoose.Schema({
  title: String,
  genre: String,
  plot: String
}, {
  timestamps: true
});

module.exports = mongoose.model("movie", movie);