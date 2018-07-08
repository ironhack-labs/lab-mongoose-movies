const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: String,
    genre:String,
    plot: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
