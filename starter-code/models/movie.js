const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  titre: String,
  genre: String,
  plot: String,
});

const MovieModel = mongoose.model("movie", MovieSchema);

module.exports = MovieModel;
