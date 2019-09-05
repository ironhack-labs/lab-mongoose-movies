const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: { type: String },
  genre: String,
  plot: String
});

const moviesModel = mongoose.model("movies", moviesSchema);
module.exports = moviesModel;
