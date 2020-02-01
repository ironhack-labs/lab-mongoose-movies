//Iteration #7
const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    plot: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const moviesModel = mongoose.model("movies", moviesSchema);

module.exports = moviesModel;