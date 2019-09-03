const mongoose = require("mongoose");
const schema = mongoose.Schema;
const movieSchema = new schema({
  title: String,
  genre: String,
  plot: String
});
const movieModel = mongoose.model("Movie", movieSchema);

module.exports = movieModel;
