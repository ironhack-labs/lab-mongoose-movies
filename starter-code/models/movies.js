const mongoose = require ("mongoose");
const schema = mongoose.Schema;

const moviesSchema = new schema ({
  title: String,
  genre: String,
  plot : String
});

const moviesModel = mongoose.model("movies", moviesSchema);

module.exports = moviesModel;