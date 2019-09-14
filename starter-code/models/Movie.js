const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: String,
    imageUrl: String,
    genre: [String],
    plot: String
  },
  { timestamps: true }
);

const Movies = mongoose.model("Movies", movieSchema);
module.exports = Movies;
