const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//generamos un modelo mongoose para crear en la base de datos.
const moviesSchema = new Schema({
  title: String,
  genre: String,
  plot: String
});

const Movies = mongoose.model("movies", moviesSchema);

module.exports = Movies;
