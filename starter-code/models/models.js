const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const celebSchema = new Schema({
//   name: String,
//   occupation: String,
//   catchPhrase: String
// });
// const Celebs = mongoose.model("Celebs", celebSchema);
// module.exports = Celebs;

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String
});
const Movies = mongoose.model("Movies", movieSchema);
module.exports = Movies;
