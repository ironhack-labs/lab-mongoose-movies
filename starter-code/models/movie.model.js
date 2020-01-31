const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  genre: String,
  plot: String
});

const movieModel = mongoose.model("Movie", movieSchema);

module.exports = movieModel;
