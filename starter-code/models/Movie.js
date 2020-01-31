const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String]
});

const Movie = mongoose.model("Movie", schema);
module.exports = Movie;
