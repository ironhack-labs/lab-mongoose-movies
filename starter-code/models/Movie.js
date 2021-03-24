const mongoose = require("mongoose");

const { Schema } = mongoose;

const moviesSchema = new Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    plot: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("movue", moviesSchema);

module.exports = Celebrity;
