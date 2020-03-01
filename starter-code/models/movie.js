const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {type: String, unique: true},
  genre: String,
  plot: String,
  actors: [ {type: Schema.Types.ObjectId, ref: 'Celebrity' } ]
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;