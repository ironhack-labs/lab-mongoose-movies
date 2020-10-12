// Importing Mongoose.
const mongoose = require("mongoose");

// Creating schema.
const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
});
// Creating model.
const MovieModel = mongoose.model("movie", MovieSchema);

// Exporting module.
module.exports = MovieModel;
