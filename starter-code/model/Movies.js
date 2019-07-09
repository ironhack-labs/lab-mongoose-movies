const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const MoviesSchema = new Schema({
  title: String,
  aStar: {type: Schema.Types.ObjectId, ref: 'celebSchema'},
  genre: String,
  plot: String
});

const MoviesMod = mongoose.model("MoviesSchema", MoviesSchema);

module.exports = MoviesMod;
