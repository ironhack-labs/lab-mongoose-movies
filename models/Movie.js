const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: { type : Schema.Types.ObjectId, ref: 'Director' },
  starring: [ { type : Schema.Types.ObjectId, ref: 'Actor' } ],
  genre: String,
  plot: String,
  image: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
