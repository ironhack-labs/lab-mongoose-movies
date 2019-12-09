const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: String,
  genre: String,
  plot: String
});

module.exports = mongoose.model("Movie", movieSchema);
