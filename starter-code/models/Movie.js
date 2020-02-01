const mongoose = require("mongoose");

const schemaMovie = new mongoose.Schema(
  {
    title: String,
    genre: String,
    plot: String
  },
  {
    timestamps:true
  }
);

module.exports = mongoose.model("movie",schemaMovie);