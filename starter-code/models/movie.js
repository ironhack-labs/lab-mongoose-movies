const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title: {type: String, unique: true, required: true},
  genre : {type: String, required: true},
  plot : {type: String, required: true}
});

const Movie = mongoose.model("Movies", movieSchema);

module.exports = Movie;