const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  genre: String,
  celebrity: { type: Schema.Types.ObjectId, ref: "Celebrity" },
  plot: String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
